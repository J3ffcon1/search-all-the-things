import React, { Component } from 'react';
import Pokemons from './Pokemons';
import Search from './Search';
import { search } from '../services/pokemonAPI';
import Paging from './Paging';
import logo from '../../assets/Pokeball.png';
import styles from '../styles/App.css';

export default class App extends Component {

    state = {
        topic: '',
        loading: false,
        error: null,
        totalResults: 0,
        page: 1,
        perPage: 4,
        pokemon: []
    };

    searchPokemon = () => {
        const { topic, page, perPage } = this.state;

        this.setState({ loading: true });

        search({ topic })
            .then((body) => {
                this.setState({ pokemon, totalResults, error: null });
            }, error => {
                this.setState({ error });
            })
            .then(() => this.setState({ loading: false }));

    };

    handleSearch = ({ search }) => {
        this.setState({ topic: search }, this.searchPokemon);
    };

    handlePage = ({ page }) => {
        this.setState({ page }, this.searchPokemon);
    }

    render() {
        const { pokemon, loading, totalResults, page, perPage, error } = this.state;

        return (
            <div id="body">
                <div id= "body-container">
                <header>
                    <div className="header-container">
                        <img src={logo} />
                        <h1>Search Pokemon API</h1>
                    </div>
                    <div className="search-container">
                        <Search onSearch={this.handleSearch} />
                    </div>
                </header>
                <main>
                    <section className="notifications">
                        {loading && <div>Loading...</div>}
                        {error && <div>{error.message}</div>}
                    </section>
                    <section>
                        <br />
                        <Paging
                            totalResults={totalResults}
                            page={page}
                            perPage={perPage}
                            onPage={this.handlePage}
                        />
                        <Pokemons pokemon={pokemon} />
                    </section>
                </main>
                </div>
            </div>

        );
    }

}


