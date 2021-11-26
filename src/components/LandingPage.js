import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
import { useSelector } from 'react-redux';
import styles from '../styles.scss';

export default function LandingPage() {
  const auth = useSelector((state) => state.auth);
  // console.log(auth);
  //we are able to read the state and render accordingly

  return auth.loginClicked === true ? (
    <div className="landingPage">
      <div className='welcomeToLoginCSS'>
      <h2>Welcome Back!</h2>
      <Login />
    </div>
    </div>
  ) : (
    <div className="landingPage">
      <SignUp />
    </div>
  );
}
