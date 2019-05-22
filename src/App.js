import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coin from './Coin';
import Flipper from './Flipper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Let's flip a coin</h1>
        <Coin 
          heads='https://spng.pngfly.com/20180330/xce/kisspng-european-union-2-euro-coin-euro-coins-2-euro-comme-euro-5abe054308efc0.2836847115224026270366.jpg'
          tails='https://spng.pngfly.com/20180604/css/kisspng-2-euro-coin-2-euro-commemorative-coins-2-euro-comm-commemorative-coin-5b15b7b27bc726.383429111528149938507.jpg'
        />
        <Flipper />
      </div>
    )
  }
}

export default App;
