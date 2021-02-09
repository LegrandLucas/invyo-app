import logo from './logo.svg';
import './App.css';
import React from "react";
import Home from "./Home";
import Data from "./Data";
import Todo from "./Todo";
import Login from "./Login";
import Navbar from './components/Navbar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
    <Navbar />
      <div>
        <nav>
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
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
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
    </Router>
  );
}

export default App;
