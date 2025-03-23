
import React, { useEffect, useRef } from 'react';
import Button from './Button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 md:px-6">
      <div 
        ref={heroRef}
        className="container mx-auto text-center max-w-3xl transition-all duration-700 opacity-0 translate-y-8"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          Beautifully Simple
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight mb-6 text-balance">
          Design with purpose. <br />
          <span className="text-gradient">Create with precision.</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto text-balance">
          Elevating digital experiences through minimalist design principles and
          thoughtful interactions that inspire and delight.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
        
        <div className="mt-16 md:mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 h-20 bottom-0 top-auto"></div>
          <div className="relative h-[340px] md:h-[400px] mx-auto max-w-5xl rounded-xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5"></div>
            <div className="absolute inset-0 glass border border-border/50 rounded-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-card/90 backdrop-blur-sm rounded-lg shadow-sm border border-border/50 animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
