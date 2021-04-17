import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Home from './components/Home';
import Activity from './components/Activity';
import Wallet from './components/Wallet';
import Earn from './components/Earn';
import Market from './components/Market';
import logo from './resources/logo.svg';
import user from './resources/profile.jpg';
import home_logo from './resources/home.png';
import activity_logo from './resources/activity.png';
import wallet_logo from './resources/wallet.png';
import market_logo from './resources/market.png';
import earn_logo from './resources/earn.png';
import notification from './resources/notification.png';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export { 
  Home, Activity, Wallet, Earn, Market,
  logo, user, home_logo, activity_logo, wallet_logo, market_logo, earn_logo, notification
};