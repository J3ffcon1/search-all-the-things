import React, { Component } from 'react';

export default class Pokemon extends Component {
  

  
  render() {
    //eslint-disable-next-line
    const { body, id, name, sprites, types } = this.props.pokemon;
    //eslint-disable-next-line
    console.log('this is id:', id);

    return (
      <li id = "list-container">
        <h2>Pokemon # {id} :{name.toUpperCase()} </h2>
        <img src={sprites.front_default} />
        <h3>type: {types[0].type.name.toUpperCase()} <img src="https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG" id="poke-ball" /></h3>
      </li>
    );
  }
}