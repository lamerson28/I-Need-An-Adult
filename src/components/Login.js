import React from 'react';
import styles from '../styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  enterPasswordActionCreator,
  enterEmailActionCreator,
  loginSubmitActionCreator,
} from '../actions/actions';

export default function Login() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    console.log('clicked');
    const user = {
      email: auth.email,
      password: auth.password,
    };
    e.preventDefault();
    dispatch(loginSubmitActionCreator(user));
    navigate('/dashboard');
  };
  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit}>
        <label className="loginEmailContainer" id="loginEmailContainer">
          <div id="loginEmailUsername">Email</div>
          <input
            onChange={(e) => dispatch(enterEmailActionCreator(e.target.value))}
            type="email"
            id="email"
            placeholder="email address"
          />
        </label>
        <label className="passwordContainer" id="passwordContainer">
          <div id="loginPassword"> Password</div>
          <input
            onChange={(e) =>
              dispatch(enterPasswordActionCreator(e.target.value))
            }
            placeholder="password"
            type="password"
            id="password"
          />
        </label>
        <button id="loginButton" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}
