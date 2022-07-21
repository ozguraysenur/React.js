import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
     //imageUrl:'https://picsum.photos/200'
  }; //state is an object that includes any data that this component needs
/*
  styles= {
    fontSize:50,
    fontWeight: 'bold'
  };
*/
  render() {
    return (
      // to add smt dynamically use {}
      //React. fragment removes extra useless divs
      <React.Fragment>
        
        <span /*style= {this.styles}*/ className="badge badge-primary m-2"> {this.formatCount()} </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
