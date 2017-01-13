import React, { Component } from 'react';
import './App.css';
import Newcomp from './Newcomp';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">

        <div className="app-header">
          <h2>Best Web App Ever!</h2>
        </div>
        <p className="app-intro-txt">
           <code>Start here with your code and magic</code>
        </p>
          <Newcomp />
      </div>
    );
  }
}

export default App;
