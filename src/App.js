import React, { Component } from "react";
import NavBar from "./Components/Navbar";
import Contact from "./Components/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Contact />
      </div>
    );
  }
}

export default App;
