import React, { Component } from 'react';
import tachyons from 'tachyons';
import logo from '../resources/logo.svg';
import user from '../resources/profile.jpg';
import notification from '../resources/notification.png';
import './App.css';
import Home from '../components/Home';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <div className="flex items-start">
          <div className="fl w-90">
            <img src={logo} className="w-40 mb0 self-end" alt="logo"></img>
          </div>
          <img src={user} className="w2 h2 mt2 mr2 mb0" alt="logo"></img>
          <img src={notification} className="w2 h2 mt2 mr2 mb0" alt="logo"></img>
        </div>
        <Home />
      </div>
    )
  }
}


export default App;