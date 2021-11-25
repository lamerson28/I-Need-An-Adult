import './styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import CreateTask from './components/CreateTask';
import {
  Routes as Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import styles from './styles.scss';
// import { useState } from "react";
// import MainContainer from "./components/MainContainer.jsx";

export default function App() {
  return (
    <Router>
      <div className="appContainer">
        <h1>
          <center>I am an adult!</center>
        </h1>

        <NavBar />
        <Switch>
          {/* if user is not logged in  (get log in state from redux, pass into landing page) */}
          <Route path="/" element={<LandingPage />} />
          {/* user must be logged in to see these routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createTask" element={<CreateTask />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
