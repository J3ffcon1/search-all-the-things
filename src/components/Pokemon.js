import React, { Component } from 'react';

export default class Pokemon extends Component {
  

  
  render() {
    //eslint-disable-next-line
    const { body, id, name, sprites, types } = this.props;
    //eslint-disable-next-line
    console.log('this is id: ', id);

    return (
      <li>
        <h2>number {body.id}, {name}</h2>
        <img src={sprites.front_default} />
        <h3>type {types[0].type.name}</h3>
      </li>
    );
  }
}