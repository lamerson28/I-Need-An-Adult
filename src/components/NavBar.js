import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {toggleSignupActionCreator} from '../actions/actions';



export default function NavBar(){
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);

  // return (
  //   <nav>
  //     {/* <Link to='/dashboard'>View All Tasks</Link>
  //     <Link to='/logout'>"Log out</Link>
  //     <Link to='/add'>Create a Task</Link> */}
  //     {authState.loggedInClicked === false && <button onClick={() => dispatch(toggleSignupActionCreator())}>Log in</button>}
  //     {authState.loggedInClicked === true && <button onClick={() => dispatch(toggleSignupActionCreator())}>Sign up</button>}
  //   </nav>
  // );

  return (authState.loginClicked === true ? ( 
    <button onClick={() => dispatch(toggleSignupActionCreator())}>Sign up</button>
  ) : (
    <button onClick={() => dispatch(toggleSignupActionCreator())}>Log in</button>
  ))

}
  //if l
  
    



//go over the routes later and go over the state for the log out button
