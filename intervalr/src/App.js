import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Drawer from './drawer/Drawer.js';
class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to IntervalR</h1>
        </header>
        <Drawer></Drawer>
      </div>
    );
  }
}

export default App;
