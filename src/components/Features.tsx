
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Layers, Zap, Code, Edit3, Shield, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: <Layers className="h-6 w-6" />,
    title: 'Thoughtful Design',
    description: 'Every element has a purpose, carefully positioned for optimal user experience.'
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Blazing Fast',
    description: 'Optimized performance ensures your application loads quickly on any device.'
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Clean Code',
    description: 'Built with modern technologies and best practices for maintainability.'
  },
  {
    icon: <Edit3 className="h-6 w-6" />,
    title: 'Customizable',
    description: 'Easily adapt and extend the design to match your specific requirements.'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Secure',
    description: 'Implementing the latest security standards to protect your application.'
  },
  {
    icon: <RefreshCw className="h-6 w-6" />,
    title: 'Continuous Updates',
    description: 'Regular improvements and new features to keep your project up-to-date.'
  },
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <section 
      id="features" 
      className="section-padding px-4 md:px-6 bg-secondary/50"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto text-center max-w-3xl transition-all duration-700 opacity-0 translate-y-8"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          Features
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mb-6">
          Designed with attention to every detail
        </h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
          Our minimalist approach focuses on what truly matters, creating an intuitive and elegant experience for your users.
        </p>
      </div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureRefs.current[index] = el)}
              className={cn(
                "bg-card shadow-sm border border-border/50 rounded-xl p-6 transition-all duration-700 opacity-0 translate-y-8",
                `delay-[${index * 100}ms]`
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
