import React from 'react';
import styles from '../styles.scss';

export default function Login() {
  return (
    <div className="loginContainer">
      <form>
        <label className="loginEmailContainer" id="loginEmailContainer">
          <div id="loginEmailUsername">Email</div>
          <input type="email" id="email" />
        </label>
        <label className="passwordContainer" id="passwordContainer">
          <div id="loginPassword"> Password</div>
          <input type="password" id="password" />
        </label>
      </form>
      <button id="loginButton">
        <div>Log In</div>
      </button>
    </div>
  );
}
