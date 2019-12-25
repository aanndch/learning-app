import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Domain from "./pages/Domain";
import Course from "./pages/Course";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="inner-container">
          <Route path="/" component={Home} exact />
          <Route path="/domain/:domain" component={Domain} exact />
          <Route path="/course/:name" component={Course} exact />
        </div>
      </div>
    </Router>
  );
}

export default App;
