import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  size?: 'default' | 'small' | 'large';
}

export function Container({
  children,
  className = '',
  as: Component = 'div',
  size = 'default',
}: ContainerProps) {
  const sizeClasses = {
    small: 'max-w-3xl',
    default: 'max-w-6xl',
    large: 'max-w-7xl',
  };
  
  return (
    <Component 
      className={`mx-auto w-full px-4 sm:px-6 md:px-8 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </Component>
  );
} 