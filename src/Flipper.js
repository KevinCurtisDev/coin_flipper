import React, { Component } from 'react';
import './Flipper.css';

class Flipper extends Component {
    static defaultProps = {
        heads: 'heads'
    }
    constructor(props){
        super(props);

        this.flipCoin = this.flipCoin.bind(this);
    }
    
    flipCoin(){
        alert('hi');
    }

    render() {
        return (
            <button className="Flipper" onClick={this.flipCoin}>Flip me!</button>
        )
    }
}

export default Flipper;