import React, { Component } from 'react';
import './Flipper.css';

class Flipper extends Component {
    static defaultProps = {
        heads: 'heads'
    }
    constructor(props){
        super(props);
        this.state = {
            numHeads: 0,
            numTails: 0,
            numFlips: 0
        }
        this.flipCoin = this.flipCoin.bind(this);
    }
    
    flipCoin(){
        alert('hi');
    }

    render() {
        return (
            <div>
                <button className="Flipper" onClick={this.flipCoin}>Flip me!</button>
                <p>Out of {this.state.numFlips} flips, there have been {this.state.numHeads} heads and {this.state.numTails} tails.</p>
            </div>
        )
    }
}

export default Flipper;