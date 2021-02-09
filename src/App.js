// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Home from "./Home";
import Data from "./Data";
import Todo from "./Todo";
import Navbar from './components/Navbar'
import Preferences from './components/Preferences'
import Dashboard from './components/Dashboard'
import Container from '@material-ui/core/Container';
import Login from './components/Login';
import useToken from './components/useToken';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

const App = () => {

  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Router>
    <Navbar />
    <Container>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Login">Se connecter</Link>
            </li>
            <li>
              <Link to="/Data">Mes données</Link>
            </li>
            <li>
              <Link to="/Todo">Tâches</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/preferences">
            <Preferences />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/data">
            <Data />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Container>
    </Router>
  );
}

export default App;
