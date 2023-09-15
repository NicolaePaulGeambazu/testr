import React from 'react';
import { FieldValues, UseFormRegister, FieldError } from 'react-hook-form';
import '../../../src/styles/tailwind.css';

interface DataEntryProps {
  id: string;
  type: string;
  placeholder: string;
  name: string;
  required: boolean;
  error: FieldError | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add onChange prop
  value: string; // Add value prop
}

const DataEntry: React.FC<DataEntryProps> = ({
  id,
  type,
  placeholder,
  name,
  required,
  error,
  onChange,
  value, // Add value prop
}) => {
  console.log(error);
  return (
    <div className={`form-group${error ? ' form-group--invalid' : ''}`}>
      <label className="visually-hidden" htmlFor={id}>
        {placeholder}
      </label>
      <input
        type={type}
        id={id} // Add id prop
        name={name} // Add name prop
        value={value} // Add value prop
        autoFocus={false} // Remove autoFocus, it's controlled by the parent
        min="" // Add any specific min value if needed
        placeholder={placeholder}
        onChange={onChange} // Add onChange prop
        disabled={false} // Remove isDisabled, it's controlled by the parent
        className={`form-group__input${error ? ' form-group__input--error' : ''}`}
      />
      <p className="form-group__error-text" id={`${name}Error`}>
        {error ? error.message : `${placeholder} cannot be empty`}
      </p>
    </div>
  );
};

export default DataEntry;
