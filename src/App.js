import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Parent} from './Parent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          NPC Generator
          <Parent/>
        </header>
      </div>
    );
  }
}

export default App;
