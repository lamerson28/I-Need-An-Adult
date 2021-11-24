import React from "react"



export default function Login(){
  return(
    <div>
      <form>
          <label className='loginContainer' id='loginContainer'>
            <div id='loginUsername'>Username</div>
            <input type='text' id='username' />
          </label>
          <label className="passwordContainer" id="passwordContainer">
            <div id="loginPassword"> Password</div>
            <input type="password" id="password"/>
          </label>
          </form>
          <button id="loginButton">
            <div>Log In</div>
          </button>
    </div>
  )
}

