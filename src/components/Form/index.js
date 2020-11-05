import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MXNQuantity: 0,
      USDQuantity: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // event
  // value = event.target.value
  // { target } = event -> target.value
  // { target: { value }, target } = event

  handleChange({ target: { value } }) {
    this.setState({
      MXNCuantity: value,
      USDQuantity: value / 21.6,
    });
  }

  render() {
    const { MXNCuantity, USDQuantity } = this.state;
    return (
      <div>
        <form>
          <input
            type="number"
            value={MXNCuantity}
            onChange={this.handleChange}
          />
        </form>
        <p>USD: ${USDQuantity}</p>
      </div>
    );
  }
}

export default Form;
