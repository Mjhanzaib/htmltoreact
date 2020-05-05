import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/home";
import About from "./components/About";
import Contact from "./components/contact";
import Category from "./components/categories";

function App() {
  return (
    <Router>
      <div>

        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" component={About} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/category/" component={Category} />

          {/*
        <Route path="/" exact component={Home} />
        
        <Route path="/category/politics" component={Category} />
        <Route path="/category/business" component={Category} />
         
        <Route path="/category/health" component={Category} />
        <Route path="category/design" component={Category} />
        <Route path="/category/sport" component={Category} />*/}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
