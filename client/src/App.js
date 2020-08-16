import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={SignIn} />
          <Route path="/Signup" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
