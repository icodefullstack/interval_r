import React, { Component } from 'react';
import './App.css';
import Selector from './drawer/Selector.js';

class App extends Component {
  render() {
    return(
      <div id="App">
<button onClick={()=>{alert('test')}}>test</button>
        <div id="chest">
        <Selector></Selector>
        </div>
        
      </div>
    )
  }
}

export default App;
