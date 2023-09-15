// Button.tsx
import React from 'react';
import '../../../src/styles/tailwind.css'


interface ButtonProps {
  type: 'submit' | 'button' | 'reset';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, children }) => {
  return (
    <button className="submit-btn" type={type}>
      {children}
    </button>
  );
};

export default Button;
