import React from "react";

import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";

import Integrations from "./components/route/Integrations";
import Orders from "./components/route/Orders";
import Reports from "./components/route/Reports";
import Customer from "./components/route/Customer";
import Blog from "./components/route/Blog";

import SignUp from "./components/Signup";
import Signin from "./components/Signin";
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>

      <div className="App">

      <div>
        <Switch>
          <Route path="/" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/Uploads" component={Blog} />
          <Route path="/Reports" component={Blog} />
          <Route path="/Student" component={Blog} />
        </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
