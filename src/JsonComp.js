import React, { Component } from 'react';
  import Superagent from 'superagent';
  import './jsonComp.css';
class JsonComp extends Component {

  constructor(props) {
    super();

    this.state = {

    };
  }

  componentWillMount() {
    var url = "http://www.omdbapi.com?s=star@y=&r=json&plot=short";
    Superagent.get(url).then((response) => {
      this.setState({
        movies: response
      });
    });

  }

componentDidMount(){

}
componentReceiveProps(nextProps){

}

componentWillUpdate(nextProps, nextState){
  
}
componentWillUnmount(){

}


  render() {
    return (
      <div className="jsonComp-wrapper">

        <div className="jsonHero">
        <h1>{this.props.api}</h1>

        <ul>

        </ul>

        </div>

      </div>
    );
  }
}

export default JsonComp;
