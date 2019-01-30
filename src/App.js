import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Parent} from './Parent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span className="my-header">NPC Generator</span>
          <Parent/>
        </header>
      </div>
    );
  }
}

export default App;
