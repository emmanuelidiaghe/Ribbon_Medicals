import React, { Component } from 'react';
import market_logo from '../resources/market.png';


class Market extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="center tc">
                <img src={market_logo} className="w5 h5"/>
                <h1>MARKET</h1>
            </div>
        )
    }
}

export default Market;