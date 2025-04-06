import React from 'react';

const Button = ({ children, variant = 'default', className = '', ...props }) => {
  const baseStyle = 'px-4 py-2 rounded font-medium transition-colors hover:[#ABC0B6]';
  const variantStyles = {
    default: 'bg-charcoal text-white hover:bg-charcoal/90',
    ghost: 'bg-transparent text-charcoal hover:bg-gray-100',
    outline: 'border border-blue-gray text-charcoal hover:bg-gray-100',
  };

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;