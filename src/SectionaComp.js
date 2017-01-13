import React, { Component } from 'react';
import './sectionaComp.css';
class SectionaComp extends Component {
  render() {
    return (
      <div className="sectionaComp-wrapper">

        <div>
         <code className="sectionaComp-txt">
         <p>{this.props.prop.name}</p>
         <p>{this.props.prop.age}</p>
         <p>{this.props.prop.gender}</p>
         </code>
        </div>

      </div>
    );
  }
}
export default SectionaComp;
