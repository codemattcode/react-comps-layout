import React, { Component } from 'react';
  import './AppWrapper.css';
  import HeaderComp from './HeaderComp';
  import SectionaComp from './SectionaComp';
  import JsonComp from './JsonComp';
let badu = {
  name: 'fred',
  age: '34',
  gender: 'male'
};
class AppWrapper extends Component {
  render() {
    return (
      <div className="app-wrapper">

        <HeaderComp wolfy="Hello World!"/>
        <SectionaComp monkey={badu}/>
        <JsonComp api="wot no API"/>

      </div>
    );
  }
}
export default AppWrapper;
