import React, { Component } from 'react';
import './Flipper.css';
import { choice } from './helpers';
import Coin from './Coin';

class Flipper extends Component {
    static defaultProps = {
        coins: [
            { side: "heads", src: 'https://spng.pngfly.com/20180330/xce/kisspng-european-union-2-euro-coin-euro-coins-2-euro-comme-euro-5abe054308efc0.2836847115224026270366.jpg' },
            { side: "tails", src: 'https://spng.pngfly.com/20180604/css/kisspng-2-euro-coin-2-euro-commemorative-coins-2-euro-comm-commemorative-coin-5b15b7b27bc726.383429111528149938507.jpg' }
        ]
    };
    constructor(props){
        super(props);
        this.state = {
            currentCoin: null,
            numHeads: 0,
            numTails: 0,
            numFlips: 0
        }
        this.flipCoin = this.flipCoin.bind(this);
    }
    
    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            let newState = {
                ...st,
                currentCoin: newCoin,
                numFlips: st.numFlips + 1
            }
            if(newCoin.side === "heads") {
                newState.numHeads += 1;
            } else {
                newState.numTails += 1;
            }
            return newState;
        })
    }

    render() {
        return (
            <div>
                <h1>Let's flip a coin</h1>
                {this.state.currentCoin && <Coin info={this.state.currentCoin}/>}
                <button className="Flipper" onClick={this.flipCoin}>Flip me!</button>
                <p>Out of {this.state.numFlips} flips, there have been {this.state.numHeads} heads and {this.state.numTails} tails.</p>
            </div>
        )
    }
}

export default Flipper;