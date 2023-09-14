import React from 'react';
import { UserSetupContextProvider } from './Components/Context/ContextSignUp';
import SignUp from './Pages/SignUp/SignUp';
import './styles/tailwind.css';

function App() {
  return (
    <React.StrictMode>
      <UserSetupContextProvider>
        <SignUp />
      </UserSetupContextProvider>
    </React.StrictMode>
  );
}

export default App;
