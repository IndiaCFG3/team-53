import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Integrations from "./components/route/Integrations";
import Orders from "./components/route/Orders";
import Reports from "./components/route/Reports";
import Customer from "./components/route/Customer";
import Blog from "./components/route/Blog";
// import SignUp from "./components/Signup";
import Signin from "./components/Signin";
import Dashboard2 from "./components/Dashboard2";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Switch>
            {/* <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/> */}
            <Route exact path="/" component={Signin} />
            {/* <Route path="/Signup" component={SignUp} /> */}
            <Route path="/dashboard2" component={Dashboard2} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/Uploads" component={Blog} />
            {/* <Route path="/Orders" component={Blog} /> */}
            <Route path="/Table" component={Blog} />
            <Route path="/Reports" component={Blog} />
            <Route path="/Student" component={Blog} />

            {/* <Route component={Error} /> */}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
