import React, { Component } from 'react';
import wallet_logo from '../resources/wallet.png';


class Wallet extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="center tc">
                <img src={wallet_logo} className="w5 h5"/>
                <h1>WALLET</h1>
            </div>
        )
    }
}

export default Wallet;