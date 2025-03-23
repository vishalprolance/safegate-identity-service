
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button = ({
  className,
  variant = 'default',
  size = 'md',
  children,
  fullWidth = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        {
          'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm': variant === 'default',
          'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground': variant === 'outline',
          'bg-transparent hover:bg-secondary hover:text-secondary-foreground': variant === 'ghost',
          'bg-transparent text-primary underline-offset-4 hover:underline': variant === 'link',
          'h-9 px-3 text-sm': size === 'sm',
          'h-10 px-4 text-sm': size === 'md',
          'h-11 px-6 text-base': size === 'lg',
          'w-full': fullWidth,
        },
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
