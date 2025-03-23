
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'Minimalist - Beautifully Simple Design';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        
        <section id="about" className="section-padding px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  About
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight">
                  Crafted with precision
                </h2>
                <p className="text-muted-foreground">
                  We believe in the power of simplicity. By eliminating the unnecessary, 
                  we bring focus to what truly matters in your digital experience.
                </p>
                <p className="text-muted-foreground">
                  Our design philosophy is inspired by the work of visionaries who understood 
                  that great design is not just about how things look, but how they work.
                </p>
                <p className="text-muted-foreground">
                  Every pixel, every interaction, and every animation is carefully 
                  considered to create a seamless and intuitive experience.
                </p>
              </div>
              
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden order-1 md:order-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5"></div>
                <div className="absolute inset-0 glass border border-border/50 rounded-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-card rounded-lg shadow-sm border border-border/50 flex items-center justify-center">
                    <span className="text-2xl font-display font-medium text-gradient">Minimalist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section-padding px-4 md:px-6 bg-secondary/50">
          <div className="container mx-auto text-center max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Ready to start?
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mb-6">
              Begin your journey with Minimalist today
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Elevate your digital presence with a design that speaks volumes through simplicity.
            </p>
            <a 
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Get Started
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
