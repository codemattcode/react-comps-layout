import React, { Component } from 'react';
import './sectionaComp.css';
class SectionaComp extends Component {
  render() {
    return (
      <div className="sectionaComp-wrapper">

        <div>
         <code className="sectionaComp-txt">
         <p>{this.props.monkey.name}</p>
         <p>{this.props.monkey.age}</p>
         <p>{this.props.monkey.gender}</p>
         </code>
        </div>

      </div>
    );
  }
}
export default SectionaComp;
