import React, { Component } from 'react';
  import './jsonComp.css';
class JsonComp extends Component {


    render() {
      return (
        <div className="jsonComp-wrapper">

          <div className="jsonHero">
          <h1>{this.props.api}</h1>


          </div>

        </div>
      )
    }
}




export default JsonComp;
