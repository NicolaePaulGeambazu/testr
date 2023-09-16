import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../Components/Button/Button';

describe('Button component', () => {
  it('renders with the correct type and children', () => {
    const buttonText = 'Submit';
    const buttonType = 'submit';

    render(<Button type={buttonType}>{buttonText}</Button>);

    const buttonElement = screen.getByText(buttonText) as HTMLButtonElement;

    // Assert the button type
    expect(buttonElement.type).toBe(buttonType);

    // Assert the button text content
    expect(buttonElement.textContent).toBe(buttonText);
  });

  it('has the correct class name', () => {
    const { container } = render(<Button type="button">Test Button</Button>);

    const buttonElement = container.querySelector('.submit-btn');

    expect(buttonElement).toBeInTheDocument();
  });
});
