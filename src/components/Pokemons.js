import React, { Component } from 'react';
import Pokemon from './Pokemon';
// import Styles from './Pokemons.css';

export default class Pokemons extends Component {

  render() {
    //eslint-disable-next-line
    const { pokemons } = this.props;
    //eslint-disable-next-line
    console.log('i was here', pokemons);

    return (
      <ul>
        {pokemons.map((pokemon, i) => {
          return <Pokemon key={i} pokemon={pokemon} />;
        })}
      </ul>
    );
  }

}
