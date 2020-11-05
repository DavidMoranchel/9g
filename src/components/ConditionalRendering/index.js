import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveState: false,
    };
  }

  render() {
    const {
      props: { isActive },
      state: { isActiveState },
    } = this;

    return (
      <div>
        {isActive ? <h1>Prop activo</h1> : <h1>Prop inactivo</h1>}
        {isActiveState ? <h1>State Activo</h1> : <h1>State inactivo</h1>}
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
