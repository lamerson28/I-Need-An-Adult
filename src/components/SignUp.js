import React from "react"



export default function SignUp(){
  return(
    <div>
      <h2>Sign Up</h2>
        <form className='signUpContainer'>
          <label className='signUpContainer' id='signUpContainer'>
            <div id='name'>Name</div>
            <input type='text' id='name' />
          </label>
          <label className='loginContainer' id='loginContainer'>
            <div id='loginUsername'>Username</div>
            <input type='text' id='username' />
          </label>
          <label className="passwordContainer" id="passwordContainer">
            <div id="loginPassword"> Password</div>
            <input type="password" id="password"/>
          </label>
          </form>
          <button id="signUpButton" onClick={()=>{}}>
            <div>Sign Up</div>
          </button>
    </div>
  )
}
