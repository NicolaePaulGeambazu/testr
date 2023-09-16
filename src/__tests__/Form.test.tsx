import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from '../Pages/SignUp/Form';

describe('Form component', () => {
  it('renders without errors', () => {
    render(<Form />);

    // Assert that the form exists in the DOM
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('submits the form successfully', async () => {
    const mockSubmit = jest.fn();
    const { getByLabelText, getByRole } = render(<Form />);

    // Mock the context value
    jest.spyOn(React, 'useContext').mockReturnValue({
      onSubmit: mockSubmit,
    });

    // Fill in the form fields
    fireEvent.change(getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(getByLabelText('Email Address'), { target: { value: 'john@example.com' } });
    fireEvent.change(getByLabelText('Password'), { target: { value: 'password123' } });

    // Submit the form
    fireEvent.click(getByRole('button', { name: 'Claim your free trial' }));

    // Ensure that the submit function was called with the correct values
    expect(mockSubmit).toHaveBeenCalledWith({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      password: 'password123',
    });

    // You can add more specific assertions here as needed
  });
});
