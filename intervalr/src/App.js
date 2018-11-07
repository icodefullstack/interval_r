import React, { Component } from 'react';
import logo from './assets/graphics/images/logo.svg';
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
        <div id="chest">

        <Drawer title="Backgrounds"></Drawer>
        <Drawer title="Notifications"></Drawer>
        <Drawer title="Numbers"></Drawer>
        <Drawer title="Commands"></Drawer>
        <select title="Intervals">
          <option name="interval" value="12">12s</option>
          <option name="interval" value="16">16s</option>
          <option name="interval" value="24">24s</option>
          <option name="interval" value="32">32s</option>
        </select>
        
        </div>
        <div id="composition">
          <div id="backgeoynd_s"></div>
          <div id="track">
          <div id="tack_start"></div>
          <div id="track_body"></div>
          <div id="track_end"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
