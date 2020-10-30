import React, { Component } from "react";

// CSS
import "./ToggleColor.css";

class ToggleColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  handleClick() {
    let { isActive } = this.state;
    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;
    return (
      <div>
        <h1 className={isActive ? "active" : null}>Texto</h1>
        <button onClick={() => this.handleClick()}>
          {isActive ? "On" : "Off"}
        </button>
      </div>
    );
  }
}

export default ToggleColor;
