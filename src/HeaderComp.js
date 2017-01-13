import React, { Component } from 'react';
import './headerComp.css';

class HeaderComp extends Component {
  render() {
    return (
      <div className="headerComp-wrapper">

      <div className="headerHero">
        <h2>{this.props.msg}</h2>
      </div>

      </div>
    );
  }
}


export default HeaderComp;
