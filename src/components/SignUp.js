import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  enterUsernameActionCreator,
  enterPasswordActionCreator,
  enterEmailActionCreator,
} from '../actions/actions';

export default function SignUp() {
  // const [user, SetUser] = useState(null);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Sign Up</h2>
      <form className="signUpContainer">
        <label className="loginContainer" id="loginContainer">
          <div id="loginUsername">Username</div>
          <input
            onChange={(e) =>
              dispatch(enterUsernameActionCreator(e.target.value))
            }
            type="text"
            id="username"
          />
        </label>
        <label className="loginEmailContainer" id="loginEmailContainer">
          <div id="loginEmailUsername">Email</div>
          <input
            onChange={(e) => dispatch(enterEmailActionCreator(e.target.value))}
            type="email"
            id="email"
          />
        </label>
        <label className="passwordContainer" id="passwordContainer">
          <div id="loginPassword"> Password</div>
          <input
            onChange={(e) =>
              dispatch(enterPasswordActionCreator(e.target.value))
            }
            type="password"
            id="password"
          />
        </label>
      </form>
      <button id="signUpButton" onClick={() => {}}>
        <div>Sign Up</div>
      </button>
    </div>
  );
}
