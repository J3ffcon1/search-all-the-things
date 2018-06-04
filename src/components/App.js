import React, { Component } from 'react';
import PokeList from './PokeList';
// import './App.css';

export default class App extends Component {

    state = {

    }

    searchList = () => {
        const { topic, page, perPage } = this.state;
    }
    render() {
        return (
            <div>
                <header>
                    <h1>Search the Pokemon API</h1>
                    {/* Insert search funtion here/ */}
                </header>

                <div className="Paging">
                    {/* Insert paging buttons and functionality */}
                </div>

                <div className="App">
                    {/* Our pokemonList! Plus our pokemon! (Pokemonlist relies on Pokemon to populate it) */}
                    <PokeList />
                </div>
            </div>

        );
    }
}

