import React, { Component } from 'react';
import PokeList from './PokeList';
import Search from './Search';
import { search } from '../services/pokemonAPI';
// import './App.css';

export default class App extends Component {

    state = {
        topic: '',
        loading: false,
        error: null,
        totalResults: 0,
        page: 1,
        perPage: 20,
        pokemon: []
    };



    searchPokeList = () => {
        const { topic, page, perPage } = this.state;

        this.setState({ loading: true });

        search({ topic }, { page, perPage })
            .then(({ pokemon, totalResults }) => {
                this.setState({ pokemon, totalResults, error: null });
            }, error => {
                this.setState({ error });
            }).then(() => this.setState({ loading: false }));
    };

    handleSearch = ({ search }) => {
        this.setState({ topic: search }, this.searchPokeList);
    };

    handlePage = ({ page }) => {
        this.setState({ page }, this.searchPokeList);
    };

    render() {

        const { pokemon, loading, totalResults, page, perPage, error } = this.state;
        return (
            <div>
                <header>
                    <div className="header-container">
                        <h1>Search the Pokemon API</h1>
                    </div>
                    <div className="search-container">
                        <Search onSearch={this.handleSearch}/>
                        </div>
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
        
