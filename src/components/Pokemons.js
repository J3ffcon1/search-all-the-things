import React, { Component } from 'react';
import Pokemon from './Pokemon';
// import Styles from './Pokemons.css';

export default class Pokemons extends Component {

  render() {
    //eslint-disable-next-line
    const { pokemons } = this.props;

    return (
      <ul>
        {/* TODO: create unordered list of individual pokemon */}
        {pokemons.map((pokemon, i) => {
          <Pokemon key = {i} pokemon={pokemon}/>; //how many results it finds.
        })}
      </ul>
    );
  }

}
