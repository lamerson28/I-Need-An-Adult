import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSignupActionCreator } from '../actions/actions';
import styles from '../styles.scss';

export default function NavBar() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  return authState.loginClicked === true ? (
    <div className="signUpNavBar">
      <button onClick={() => dispatch(toggleSignupActionCreator())}>
        Sign up
      </button>
    </div>
  ) : (
    <div className="loginNavBar">
      <button onClick={() => dispatch(toggleSignupActionCreator())}>
        Log in
      </button>
    </div>
  );
}
