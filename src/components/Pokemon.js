import React, { Component } from 'react';

export default class Pokemon extends Component {
  render() {
    const { id, name, sprites, types } = this.props.pokemon;

    return (
      <li>
        <h2>number {id}, {name}</h2>
        <img src={sprites.front_default} />
        <h3>type {types.type.name}</h3>
      </li>
    );
  }
}