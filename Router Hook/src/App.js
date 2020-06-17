import React from "react";
import "./App.css";
import Home from "./Home";
import User from "./User";
import About from "./About";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user/firstname/lastname">User</Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/about",
                state: {
                  from: "root",
                },
              }}
            >
              About
            </Link>
          </li>
        </ul>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user/:firstname/:lastname" component={User} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
