import React from 'react';

const Input = ({ className = '', ...props }) => {
  return (
    <input
      className={`w-full h-full text-base focus:outline-none ${className}`}
      {...props}
    />
  );
};

export default Input;