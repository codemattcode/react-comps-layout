import React, { Component } from 'react';
import './App.css';

import HeaderComp from './HeaderComp';
import SectionaComp from './SectionaComp';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">

        <HeaderComp />
        <SectionaComp />

      </div>
    );
  }
}

export default App;
