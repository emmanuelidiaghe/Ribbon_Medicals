import React, { Component } from 'react';
import tachyons from 'tachyons';
import './App.css';
import { Home, Activity, Wallet, Earn, Market, logo, user, notification, home_logo, activity_logo, wallet_logo, market_logo, earn_logo } from '../index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'home',
      clickHome: true,
      clickActivity: false,
      clickWallet: false,
      clickEarn: false,
      clickMarket: false
    }
  }

  showHome =() => {
    this.setState({ 
      show: 'home',
      clickHome: true,
      clickActivity: false,
      clickWallet: false,
      clickEarn: false,
      clickMarket: false
    });
  }

  showActivity = () => {
    this.setState({ 
      show: 'activity',
      clickActivity: true,
      clickHome: false,
      clickWallet: false,
      clickEarn: false,
      clickMarket: false
     });
  }

  showEarn = () => {
    this.setState({ 
      show: 'earn',
      clickEarn: true,
      clickActivity: false,
      clickWallet: false,
      clickHome: false,
      clickMarket: false
    });
  }

  showMarket = () => {
    this.setState({ 
      show: 'market',
      clickMarket: true,
      clickActivity: false,
      clickWallet: false,
      clickEarn: false,
      clickHome: false
    });
  }

  showWallet = () => {
    this.setState({ 
      show: 'wallet',
      clickWallet: true,
      clickActivity: false,
      clickHome: false,
      clickEarn: false,
      clickMarket: false
    });
  }

  render(){
    let click_classHome = this.state.clickHome ? "center tc" : "center tc o-20";
    let click_classActivity = this.state.clickActivity ? "center tc" : "center tc o-20";
    let click_classEarn = this.state.clickEarn ? "center tc" : "center tc o-20";
    let click_classWallet = this.state.clickWallet ? "center tc" : "center tc o-20";
    let click_classMarket = this.state.clickMarket ? "center tc" : "center tc o-20";
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
        <div className="footer">
          <div className="pa3 bg-moon-gray"></div>
            <div className="flex justify-around center mt2">
              <div className={click_classHome} onClick={this.showHome}>
                <img src={home_logo} className="w2 h2"/>
                <h4 className="mt0">Home</h4>
              </div>
              <div className={click_classActivity} onClick={this.showActivity}>
                <img src={activity_logo} className="w2 h2"/>
                <h4 className="mt0">Activity</h4>
              </div>
              <div className={click_classWallet} onClick={this.showWallet}>
                <img src={wallet_logo} className="w2 h2"/>
                <h4 className="mt0">Wallet</h4>
              </div>
              <div className={click_classMarket} onClick={this.showMarket}>
                <img src={market_logo} className="w2 h2"/>
                <h4 className="mt0">Market</h4>
              </div>
              <div className={click_classEarn} onClick={this.showEarn}>
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