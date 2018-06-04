import React, { Component } from 'react';
import { search } from '../services/booksAPI';
import Search from './Search';
// import logo from '../../assets/Google-books-logo.png';
// import styles from './App.css';
import Books from './Books';
import Paging from './Paging';

export default class App extends Component {

    state = {
        topic: '',
        loading: false,
        error: null,
        totalResults: 0,
        page: 1,
        perPage: 10,
        books: [],
        startIndex: 0,
        searched: false,
    };

    searchBooks = () => {
        const { topic, page, perPage } = this.state;

        this.setState({ loading: true });

        search({ topic }, { page, perPage })
            .then(({ totalResults, books }) => {
                if(!totalResults) {
                    this.setState({ error: 'No Results found!'});
                } else{
                this.setState({ books, totalResults, error: null, searched: true });
                }
            }, error => {
                this.setState({ error });
            })
            .then(() => this.setState({ loading: false }));

    };

    handleSearch = ({ search }) => {
        this.setState({ topic: search, page: 1, error: null }, this.searchBooks);
    };

    handlePage = ({ page }) => {
        this.setState({ page }, this.searchBooks);
    }

    render() {

        const { topic, loading, error, totalResults, page, perPage, books, startIndex, searched } = this.state;


        return (
            <div>
                <header>
                    <div className="header-container">
                        <h1>Google Book Search</h1>
                        {/* <img src = {logo}/> */}
                    </div>
                    <div className="search-container">
                        <Search onSearch={this.handleSearch} />
                    </div>
                </header>
                <main>
                    <section className="main-container">
                        {loading && <div>Loading ...</div>}
                        {error && <div>Error : {error.message}</div>}
                        <p>Results for: {topic}</p>
                    </section>
                    <section>
                        <Paging     
                        totalResults = {totalResults}
                        page={page}
                        perPage={perPage}
                        onPage={this.handlePage}/>
                        <Books books={books}/>
                        </section>
                </main>
            </div>
        )
    }

}