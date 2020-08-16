import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route path="/Signup" component={SignUp} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
