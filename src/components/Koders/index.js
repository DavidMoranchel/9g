import React, { Component } from "react";

const KODERS_JSON = [
  {
    name: "Axel",
    age: 31,
    hobbies: ["Videogames", "Drink every day"],
  },
  {
    name: "Ivan",
    age: 29,
    hobbies: ["Basketball", "Chess", "Videojuegos"],
  },
  {
    name: "Luis",
    age: 34,
    hobbies: ["Money money", "Pets", "Social media"],
  },
];

class Koders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      koders: [],
    };
    console.log("Constructor");
  }

  componentDidMount() {
    // -> Request
    // <- Response
    console.log("Component Mount");
    console.log("Server Request");
    setTimeout(() => {
      console.log("Server Response");
      this.setState({
        koders: KODERS_JSON,
      });
    }, 5000);
  }

  renderKoders() {
    return this.state.koders.map(({ name, age, hobbies }) => {
      return (
        <li>
          {name}, {age} años
          <ul>
            {hobbies.map((hobbie) => {
              return <li>{hobbie}</li>;
            })}
          </ul>
        </li>
      );
    });
  }

  render() {
    console.log("Render", this.state.koders);
    const { koders } = this.state;
    let codeBlock;
    if (koders.length) {
      codeBlock = <ul>{this.renderKoders()}</ul>;
    } else {
      codeBlock = <h1>No hay koders</h1>;
    }

    return (
      <div>
        {codeBlock}
        {/* {koders.length ? (
          <ul>{this.renderKoders()}</ul>
        ) : (
          <h1>No hay Koders</h1>
        )} */}
      </div>
    );
  }
}

export default Koders;

/*

- Koder 1, edad
  - hobbie 1
  - hobbie 2
  - hobbie 3
- Koder 2, edad
  - hobbie 1

*/
