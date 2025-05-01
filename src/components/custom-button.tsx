
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'subtle' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'xl';
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
}

const CustomButton = ({
  variant = 'default',
  size = 'default',
  className,
  children,
  loading = false,
  ...props
}: CustomButtonProps) => {
  const sizeClasses = {
    default: '',
    sm: 'h-9 px-3',
    lg: 'h-12 px-8',
    xl: 'h-14 px-10 text-lg',
  };

  const variantClasses = {
    default: 'bg-presence-600 hover:bg-presence-700 text-white shadow-md hover:shadow-lg',
    outline: 'border-2 border-presence-600 text-presence-600 hover:bg-presence-100',
    subtle: 'bg-presence-100 text-presence-700 hover:bg-presence-200',
    ghost: 'text-presence-700 hover:bg-presence-100 hover:text-presence-800',
    link: 'text-presence-600 underline-offset-4 hover:underline p-0 h-auto',
  };

  return (
    <Button
      className={cn(
        'font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md',
        variantClasses[variant],
        sizeClasses[size],
        loading && 'opacity-80 cursor-wait',
        className
      )}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </div>
      ) : children}
    </Button>
  );
};

export default CustomButton;
