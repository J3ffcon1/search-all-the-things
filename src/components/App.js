import React, { Component } from 'react';
import  Search  from './Search';
import logo from '../../assets/Google-books-logo.png';
import styles from './App.css';

export default class App extends Component {

    state = { 
        topic: '',
        loading: false,
        error: null,
        totalResults: 0,
        page: 1,
        perPage: 20,
        books: [],
        startIndex:0,
        searched: false,
    };

    searchBooks = () => {
        const { topic, page, perPage } = this.state;
    
        this.setState({ loading: true });
        
        search({ topic }, { page, perPage })
          .then(({ books, totalResults }) => {
            this.setState({ books, totalResults, error: null });
          }, error => {
            this.setState({ error });
          })
          .then(() => this.setState({ loading: false }));
    
      };
    
    handleSearch = ({ search }) => {
        this.setState({ topic: search}, this.searchBooks);
    };

    handlePage = ({ page }) => {
        this.setState({ page }, this.searchBooks);
    }

    render() {

    const { books, loading, totalResults, page, perPage, error } = this.state;


        return (
            <div>
            <header>
                <div className="header-container">
                <h1>Google Book Search</h1>
                {/* <img src = {logo}/> */}
                </div>
                <div clasName="search-container">
                <Search onSearch={this.handleSearch}/>
                </div>
            </header>
            <main>
                <section className= "main-container">
                    {loading && <div>Loading ...</div>}
                    {error && <div>Error : {error.message}</div> }
                    </section>
                    {/* <section>
                        <Paging     
                        totalResults = {totalResults}
                        page={page}
                        perPage={perPage}
                        onPage={this.handlePage}/>
                        <Books books={books}/>
                        </section> */}
                        </main>
            </div>
        )
    }

}