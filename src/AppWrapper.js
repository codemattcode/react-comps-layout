import React, { Component } from 'react';
import './AppWrapper.css';

import HeaderComp from './HeaderComp';
import SectionaComp from './SectionaComp';
import JsonComp from './JsonComp';

class AppWrapper extends Component {
  render() {
    return (
      <div className="app-wrapper">

        <HeaderComp />
        <SectionaComp />
        <JsonComp />
      
      </div>
    );
  }
}

export default AppWrapper;
