import React, { Component } from 'react';
import earn_logo from '../resources/earn.png';


class Earn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="center tc">
                <img src={earn_logo} className="w5 h5"/>
                <h1>EARN</h1>
            </div>
        )
    }
}

export default Earn;