import React, { Component } from "react";
import NavBar from "./components/Navbar";
import { Route, withRouter, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
      <div>
       <Switch>    
        <Route path = '/' exact component = {Home} />
        <Route path = '/about' exact component = {About} />  
        <Route path = '/contact' exact component = {Contact} />
      </Switch>
      </div>  
      </div>
    );
  }
}

export default withRouter(App);
