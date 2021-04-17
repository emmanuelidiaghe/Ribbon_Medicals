import React, { Component } from 'react';
import tachyons from 'tachyons';
import logo from '../resources/logo.svg';
import user from '../resources/profile.jpg';
import home_logo from '../resources/home.png';
import activity_logo from '../resources/activity.png';
import wallet_logo from '../resources/wallet.png';
import market_logo from '../resources/market.png';
import earn_logo from '../resources/earn.png';
import notification from '../resources/notification.png';
import './App.css';
import Home from '../components/Home';
import Activity from '../components/Activity';
import Wallet from '../components/Wallet';
import Earn from '../components/Earn';
import Market from '../components/Market';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'home'
    }
  }

  showHome =() => {
    this.setState({ show: 'home' });
  }

  showActivity = () => {
    this.setState({ show: 'activity' });
  }

  showEarn = () => {
    this.setState({ show: 'earn' });
  }

  showMarket = () => {
    this.setState({ show: 'market' });
  }

  showWallet = () => {
    this.setState({ show: 'wallet' });
  }

  render(){
    return(
      <div className="">
        <div className="flex items-start">
          <div className="fl w-90">
            <img src={logo} className="w-40 mb0 self-end" alt="logo"></img>
          </div>
          <img src={user} className="w2 h2 mt2 mr2 mb0" alt="logo"></img>
          <img src={notification} className="w2 h2 mt2 mr2 mb0" alt="logo"></img>
        </div>
        { this.state.show == "activity" && <Activity /> }
        { this.state.show == "earn" && <Earn /> }
        { this.state.show == "home" && <Home /> }
        { this.state.show == "market" && <Market /> }
        { this.state.show == "wallet" && <Wallet /> }
        <div className="">
          <div className="pa3 bg-moon-gray"></div>
            <div className="flex justify-around center mt2">
              <div className="" onClick={this.showHome}>
                <img src={home_logo} className="w2 h2"/>
                <h4 className="mt0">Home</h4>
              </div>
              <div className="" onClick={this.showActivity}>
                <img src={activity_logo} className="w2 h2"/>
                <h4 className="mt0">Activity</h4>
              </div>
              <div className="" onClick={this.showWallet}>
                <img src={wallet_logo} className="w2 h2"/>
                <h4 className="mt0">Wallet</h4>
              </div>
              <div className="" onClick={this.showMarket}>
                <img src={market_logo} className="w2 h2"/>
                <h4 className="mt0">Market</h4>
              </div>
              <div className="" onClick={this.showEarn}>
                <img src={earn_logo} className="w2 h2"/>
                <h4 className="mt0">Earn</h4>
              </div>
            </div>
          </div>
        </div>
    )
  }
}


export default App;