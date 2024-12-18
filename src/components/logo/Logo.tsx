import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="Affordable Access Counselling"
      className={`w-12 h-12 ${className}`}
      width={48}
      height={48}
    />
  );
}