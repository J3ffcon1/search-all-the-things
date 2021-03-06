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
    totalResults: null,
    page: 1,
    perPage: 4,
    pokemons: []
  };

  searchPokemon = () => {
    const { topic, page, perPage } = this.state;

    this.setState({ loading: true });

    search({ topic }, { page, perPage })
      .then((body) => {
        //eslint-disable-next-line
        console.log('results are:', body);
        this.setState({ pokemons: [...this.state.pokemons, body], totalResults: body.length, error: null });
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
  };

  render() {
    const { pokemons, loading, error, totalResults, page, perPage } = this.state;

    return (
      <div className={styles.app}>
        <div className="body">
          <div id="body-container">
            <header>
              <div className="header-container">
                <img src={logo} id="logo-image" />
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
              <section id="list-container">
                <br />
                <Pokemons pokemons={pokemons} id="pokemon-container" />
                <Paging
                  totalResults={totalResults}
                  page={page}
                  perPage={perPage}
                  onPage={this.handlePage}
                />
              </section>
            </main>
          </div>
        </div>
      </div>

    );
  }

}


