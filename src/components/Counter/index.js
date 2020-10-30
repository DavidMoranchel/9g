import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Componente montado ComponentDidMount");
    this.setState({
      counter: 1,
    });
  }

  render() {
    console.log("Render", this.state.counter);
    return <h1>Counter: {this.state.counter}</h1>;
  }
}

export default Counter;
