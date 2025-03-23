
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Button from "@/components/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="text-center max-w-md mx-auto">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-display font-medium text-primary">404</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-medium tracking-tight mb-4">
          Page not found
        </h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button 
          onClick={() => window.location.href = '/'} 
          size="lg"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
