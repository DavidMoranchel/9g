import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isActive: !this.state.isActive, // !false -> true || !true -> false
    });
  }

  render() {
    const { isActive } = this.state;

    return (
      <div>
        {isActive ? <h1>Texto Activo</h1> : <h1>Texto inactivo</h1>}
        <button onClick={this.handleClick}>
          {isActive ? "Desactivar texto" : "Activar texto"}
        </button>
      </div>
    );
  }
}

export default ConditionalRendering;

/*

1. Crear la funcionalidad del menu activo ( como slack ) SOLO PUEDE ESTAR UN ELEMENTO DEL "MENU"
ACTIVO A LA VEZ

<ul>
  <li>Channel 1</li>
  <li>Channel 2</li>
  <li>Channel 3</li>
</ul>

2. Dado un JSON, renderizar todos los elementos en la UI (como el componente Koders) volviendo
dinamico el menu

[ 
  {
    name: "Channel 1"
  },
  {
    name: "Channel 2"
  }
]

Happy hacking!

*/
