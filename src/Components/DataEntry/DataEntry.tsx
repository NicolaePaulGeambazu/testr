import React from 'react';
import { Controller } from 'react-hook-form';

interface DataEntryProps {
  name: string;
  control: any;
  rules: any;
  type?: string;
  value?: string;
  errors: any;
  label: string;
}

const DataEntry: React.FC<DataEntryProps> = ({ name, control, rules, type = 'text', errors, label }) => {
  const hasError = errors[name];

  return (
    <div className="inputWrapper">
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={rules}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            id={name}
            placeholder={label}
            className={`input ${hasError ? 'inputErrors' : 'input'}`}
            style={{ borderRadius: '5px', padding: '5px' }}
            onChange={(e) => {
              field.onChange(e);
            }}
            value={field.value} // Display the input value
          />
        )}
      />
      {hasError && (
        <p className="errorField">{errors[name].message}</p>
      )}
    </div>
  );
};

export default DataEntry;
