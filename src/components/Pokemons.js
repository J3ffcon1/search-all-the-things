import React, { Component } from 'react';
import Pokemon from './Pokemon';
// import Styles from './Pokemons.css';

export default class Pokemons extends Component {

  render() {
    //eslint-disable-next-line
    const { pokemons } = this.props;
    console.log('i was here', pokemons);
    
    return (
      <ul>
        {pokemons.map((pokemon, i) => {
          <Pokemon key={i} pokemon={pokemon}/>; 
        })}
      </ul>
    );
  }

}
