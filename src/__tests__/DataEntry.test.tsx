import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DataEntry from '../Components/DataEntry/DataEntry';

describe('DataEntry component', () => {
  it('renders with the correct props', () => {
    const id = 'firstName';
    const type = 'text';
    const placeholder = 'First Name';
    const name = 'firstName';
    const required = true;
    const error = undefined;
    const onChange = jest.fn(); // Mock the onChange function
    const value = ''; // Set an initial value

    render(
      <DataEntry
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        error={error}
        onChange={onChange}
        value={value}
      />
    );

    const inputElement = screen.getByRole('textbox', { name: placeholder });

    // Assert that the input element has the correct attributes and props
    expect(inputElement).toHaveAttribute('type', type);
    expect(inputElement).toHaveAttribute('id', id);
    expect(inputElement).toHaveAttribute('name', name);
    expect(inputElement).toHaveAttribute('required');
    expect(inputElement).toHaveValue(value);

    // Check that the error text is not displayed
    const errorText = screen.queryByText(`${placeholder} cannot be empty`);
    expect(errorText).not.toBeInTheDocument();
  });

  it('displays an error when there is an error prop', () => {
    const id = 'email';
    const type = 'email';
    const placeholder = 'Email Address';
    const name = 'email';
    const required = true;
    const error = { message: 'Email is required' }; // Set an error message
    const onChange = jest.fn();
    const value = ''; // Set an initial value

    render(
      <DataEntry
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        error={error}
        onChange={onChange}
        value={value}
      />
    );

    const inputElement = screen.getByRole('textbox', { name: placeholder });

    // Assert that the input element has the error class
    expect(inputElement).toHaveClass('form-group__input--error');

    // Check that the error message is displayed
    const errorText = screen.getByText(error.message);
    expect(errorText).toBeInTheDocument();
  });

  it('calls the onChange function when the input value changes', () => {
    const id = 'password';
    const type = 'password';
    const placeholder = 'Password';
    const name = 'password';
    const required = true;
    const error = undefined;
    const onChange = jest.fn(); // Mock the onChange function
    const value = ''; // Set an initial value

    render(
      <DataEntry
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        error={error}
        onChange={onChange}
        value={value}
      />
    );

    const inputElement = screen.getByRole('textbox', { name: placeholder });

    // Simulate a change in the input value
    fireEvent.change(inputElement, { target: { value: 'newpassword' } });

    // Assert that the onChange function was called with the new value
    expect(onChange).toHaveBeenCalledWith(expect.objectContaining({ target: { value: 'newpassword' } }));
  });
});
