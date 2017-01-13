import React, { Component } from 'react';
import './AppWrapper.css';

import HeaderComp from './HeaderComp';
import SectionaComp from './SectionaComp';

class AppWrapper extends Component {
  render() {
    return (
      <div className="app-wrapper">

        <HeaderComp />
        <SectionaComp />

      </div>
    );
  }
}

export default AppWrapper;
