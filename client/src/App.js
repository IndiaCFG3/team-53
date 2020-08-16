import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Integrations from "./components/route/Integrations";
import Orders from "./components/route/Orders";
import Reports from "./components/route/Reports";
import Customer from "./components/route/Customer";
import Blog from "./components/route/Blog";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Switch>
            {/* <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/> */}
            <Route path="/" component={Dashboard} exact />
            <Route path="/Integrations" component={Blog} />
            <Route path="/Orders" component={Blog} />
            <Route path="/Reports" component={Blog} />
            <Route path="/Customer" component={Blog} />

            {/* <Route component={Error} /> */}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
