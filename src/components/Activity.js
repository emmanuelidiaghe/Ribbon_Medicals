import React, { Component } from 'react';
import activity_logo from '../resources/activity.png';


class Activity extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="center tc">
                <img src={activity_logo} className="w5 h5" />
                <h1>ACTIVITY</h1>
            </div>
        )
    }
}

export default Activity;