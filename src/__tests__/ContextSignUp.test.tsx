import React from 'react';
import { render } from '@testing-library/react';
import { UserSetupContext, UserSetupContextProvider } from '../Components/Context/ContextSignUp';

describe('UserSetupContextProvider', () => {
  it('provides onSubmit function through context', () => {
    const onSubmitMock = jest.fn();
    
    render(
      <UserSetupContextProvider>
        <UserSetupContext.Consumer>
          {(context) => {
            context.onSubmit = onSubmitMock;
            return <div>Test Component</div>;
          }}
        </UserSetupContext.Consumer>
      </UserSetupContextProvider>
    );

    // Access the context value and invoke the onSubmit function
    const { container } = render(
      <UserSetupContext.Consumer>
        {(context) => (
          <div>
            <button onClick={() => context.onSubmit({ data: 'example' })}>Submit</button>
          </div>
        )}
      </UserSetupContext.Consumer>
    );

    // Click the button to trigger onSubmit
    const button = container.querySelector('button');
    button?.click();

    // Check if onSubmitMock was called with the expected data
    expect(onSubmitMock).toHaveBeenCalledWith({ data: 'example' });
  });
});
