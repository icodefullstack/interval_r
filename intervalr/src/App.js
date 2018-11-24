import React, { Component } from 'react';
import logo from './assets/graphics/images/logo.svg';
import './App.css';
import Drawer from './drawer/Drawer.js';
import Selector from './drawer/Selector.js';

class App extends Component {
  render() {
    return(
      <div id="App">
        {/*
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Welcome to IntervalR</h1>
          </header>
        */}

        <div id="chest">
        <Selector></Selector>
  {/*
        <Drawer title="Backgrounds"></Drawer>
        <Drawer title="Notifications"></Drawer>
        <Drawer title="Numbers"></Drawer>
        <Drawer title="Commands"></Drawer>
  //*/}

        </div>
        <div id="composition">
          <div id="background_s"></div>
          <div id="track">
          <div id="tack_start"></div>
          <div id="track_body"></div>
          <div id="track_end"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
