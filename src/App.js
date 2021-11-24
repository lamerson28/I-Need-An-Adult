import "./styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar"
import {Routes as Switch, BrowserRouter as Router, Route} from 'react-router-dom';
// import { useState } from "react";
// import MainContainer from "./components/MainContainer.jsx";

export default function App() {
  return(
    
    <Router>
    <div>
      <h1><center>I Need An Adult!</center></h1>
    </div>
      <NavBar/>
        <Switch>
          {/* if user is not logged in  (get log in state from redux, pass into landing page) */}
          <Route path="/" element={<LandingPage />} />
          {/* user must be logged in to see these routes */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Switch>
    
    </Router>
  )
}