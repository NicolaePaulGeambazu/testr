import React from 'react';
import '../../styles/tailwind.css';
interface ButtonProps {
  color: string; // Color of the button (e.g., "blue", "red", "green")
  size?: 'small' | 'large'; // Size of the button (optional)
  onSubmit?: () => void; // Function to be executed when clicked (optional)
}

const Button: React.FC<ButtonProps> = ({ color, children }) => {

  return (
    <button
      className='button'
      type='submit'
    >
      {children}
    </button>
  );
};

export default Button;
