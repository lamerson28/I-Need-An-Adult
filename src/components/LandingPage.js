import React from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import {useSelector} from 'react-redux';



export default function LandingPage () {
    const auth = useSelector(state => state.auth);
    // console.log(auth);
    //we are able to read the state and render accordingly

  return auth.loginClicked === true ?  (
  <div>
    <h1>Welcome to login</h1>
    <Login />
  </div>
  ) : (
  <div>
    <h1>Sign up to start adulting</h1>
    <SignUp />
  </div>
  )
}
