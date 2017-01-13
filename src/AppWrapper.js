import React, { Component } from 'react';
  import './AppWrapper.css';
  import HeaderComp from './HeaderComp';
  import SectionaComp from './SectionaComp';
  import JsonComp from './JsonComp';
let user = {
  name: 'prop:user.variable.name',
  age: 'prop:user.variable.age',
  gender: 'prop:user.variable.gender'
};
class AppWrapper extends Component {
  render() {
    return (
      <div className="app-wrapper">

        <HeaderComp msg="this.props.msg"/>
        <SectionaComp prop={user}/>
        <JsonComp subreddit="reactjs"/>

      </div>
    );
  }
}
export default AppWrapper;
