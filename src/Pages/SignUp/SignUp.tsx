import React from 'react';
import '../../styles/tailwind.css';
import Form from './Form';


function SignUp() {

  return (
    <div  className='componentWrappers'>
    <div className='textWrapper'>
      <div className='title'>Learn to code by watching others</div>
      <div className='subtitle'>See how experienced developers solve problems in real-time watching scripted tutorial is great, but understanding how developers think is invaluable.</div>
    </div>
    <div>
      <Form />
    </div>
    </div>
  );
}

export default SignUp;
