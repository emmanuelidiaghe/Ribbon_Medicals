import React, { Component } from 'react';
import hiv_logo from '../resources/hiv_logo.png';
import lungs_logo from '../resources/lungs.png';
import pressure_logo from '../resources/pressure.jpg';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="bg-dark-pink tc br4 flex justify-around">
                    <div>
                        <div className="bg-white br-100 ba h3 w3 dib mt2">
                            <h3 className="dark-pink">AFYA</h3>
                        </div>
                        <h3 className="white mt1">143.00</h3>
                        <h5 className="white mt0">Balance</h5>
                    </div>
                    {/* <div className="bg-moon-gray w1"></div> */}
                    <div>
                        <div className="bg-white br-100 ba h3 w3 dib mt2">
                            <h3 className="dark-blue">ZAR</h3>
                        </div>
                        <h3 className="white mt1">R21.00</h3>
                        <h5 className="white mt0">Equivalent</h5>
                    </div>
                </div>
                <div className="">
                    <div className="center mt3 pa2 bg-moon-gray flex items-end">
                        <h4 className="blue mb0 ml2 mt0">Select Currency:</h4>
                    </div>
                    <div className="mt2 mb2 ml2">
                        <select name="currency"
                            id="currencyID"
                            value="currency"
                            onChange=""
                            className=""
                            >
                                <option value="AFYA">AFYA</option>
                                <option value="AFYA">AFYA</option>
                                <option value="AFYA">AFYA</option>
                                <option value="AFYA">AFYA</option>
                                <option value="AFYA">AFYA</option>
                                <option value="AFYA">AFYA</option>
                        </select>
                        <input className="w5 ml2" placeholder="0.000000001"/>
                        <div className="mt3 flex justify-around">
                            <button className="w4 tc pa2 dib white bg-blue br3">SEND</button>
                            <button className="w4 tc pa2 dib white bg-blue br3">RECEIVE</button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="center pa2 bg-moon-gray flex items-end">
                        <h4 className="white mb0 ml2 mt0">Recent Activity</h4>
                    </div>
                    <div>
                        <div className="center pa2 flex justify-between outline">
                            <img src={hiv_logo} className="mt0 w2 h2" />
                            <h4 className="mt1 mb0">HIV Blood Draw Test</h4>
                            <h4 className="mt1 mb0">A100</h4>
                        </div>
                        <div className="center pa2 flex justify-between outline">
                            <img src={lungs_logo} className="mt0 w2 h2" />
                            <h4 className="mt1 mb0">TB Radiology XRay</h4>
                            <h4 className="mt1 mb0">A30</h4>
                        </div>
                        <div className="center pa2 flex justify-between outline">
                            <img src={pressure_logo} className="mt0 w2 h2" />
                            <h4 className="mt1 mb0">Blood Pressure Check</h4>
                            <h4 className="mt1 mb0">A10</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;