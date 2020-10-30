import React, { Component } from "react";

// CSS
import "./Greet.css";

class Greet extends Component {
  render() {
    return <h1>{`Hola ${this.props.name}`}</h1>;
  }
}

// function Greet(props) {
//   return <h1>{`Hola ${props.name}`}</h1>;
// }

export default Greet;
