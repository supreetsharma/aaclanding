import { ButtonHTMLAttributes } from 'react';
import { Calendar } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  icon = false,
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[#015C3B] hover:bg-[#014C31] text-white focus:ring-[#015C3B]", // WCAG AAA compliant contrast
    secondary: "bg-white hover:bg-[#F4EFE6] text-[#015C3B] border-2 border-[#015C3B] focus:ring-[#015C3B]"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && <Calendar className="h-5 w-5" aria-hidden="true" />}
      {children}
    </button>
  );
}