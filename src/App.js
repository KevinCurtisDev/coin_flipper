import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coin from './Coin';
import Flipper from './Flipper';

class App extends Component {
  render() {
    return (
      <div>
        <Coin />
        <Flipper />
      </div>
    )
  }
}

export default App;
