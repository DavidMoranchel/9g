import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("Constructor");
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    console.log("Componente montado ComponentDidMount");
  }

  componentDidUpdate() {
    console.log("El componente se actualizo");
  }

  // clickAddHandler() {
  //   let { counter } = this.state;
  //   this.setState({
  //     counter: counter + 1,
  //   });
  // }

  // clickRestHandler() {
  //   let { counter } = this.state;
  //   this.setState({
  //     counter: counter - 1,
  //   });
  // }

  // Handler unico
  clickHandler(operator) {
    console.log(this.state);
    let { counter } = this.state;
    if (operator === "add") {
      counter++;
    } else {
      counter--;
    }
    this.setState({
      counter,
    });
  }

  render() {
    console.log("Render", this.state.counter);
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        {/* Botones con handlers diferentes */}
        {/* <button onClick={() => this.clickAddHandler()}>Add</button>
        <button onClick={() => this.clickRestHandler()}>Rest</button> */}

        {/* Botones con mismo handler */}
        <button onClick={() => this.clickHandler("add")}>Add</button>
        <button onClick={() => this.clickHandler()}>Rest</button>
      </div>
    );
  }
}

export default Counter;
