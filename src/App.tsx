// App.tsx
import React from 'react';
import { UserSetupContextProvider } from './Components/Context/ContextSignUp';
import Form from './Pages/SignUp/Form';

const App: React.FC = () => {

  return (
    <UserSetupContextProvider>
      <div className='page-wrapper'>
        <div className="main-text">
          <h1 className="main-text__title">Learn to code by watching others</h1>
          <p className="main-text__desc">
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but
            understanding how developers think is invaluable.
          </p>
        </div>
        <div className="form-container">
          <p className="promotion-banner">
            <strong className="promotion-banner__strong">Try it free 7 days</strong> then $20/mo. thereafter
          </p>
          <Form />
        </div>
      </div>
    </UserSetupContextProvider>
  );
};

export default App;
