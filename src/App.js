import React, { Component } from 'react';
import NavBar from './Components/Navbar'
import Home from './Components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Home />
      </div>
    );
  }
}

export default App;
