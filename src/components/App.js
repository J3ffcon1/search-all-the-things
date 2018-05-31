import React, { Component } from 'react';
import  Search  from './search';

export default class App extends Component {

    // searchBooks = () => {
    //     const{ title } = this.state;
    // }

    render() {

        const { title } = this.state;

        return (
            <div className={styles.app}>
            <header>
                <Search onSearch={this.handleSearch}/>
            </header>
            </div>
        )
    }

}