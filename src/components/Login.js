import React from 'react';
import styles from '../styles.scss';

export default function Login() {
  return (
    <div className="loginContainer">
      <form>
        <label className="loginEmailContainer" id="loginEmailContainer">
          <div id="loginEmailUsername"></div>
          <input
          placeholder='email address'
           type="email" id="email" />
        </label>
        <label className="passwordContainer" id="passwordContainer">
          <div id="loginPassword"></div>
          <input
          placeholder='password'
           type="password" id="password" />
        </label>
      </form>
      <button id="loginButton">
        <div>Log In</div>
      </button>
    </div>
  );
}
