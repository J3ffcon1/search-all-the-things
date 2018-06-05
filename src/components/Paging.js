import React, { Component } from 'react';
import styles from '../styles/Paging.css'
import logo from '../../assets/empty-pokeball.png';


export default class Paging extends Component {

    handlePage(increment) {
        const { page, onPage } = this.props; //inherited 
        onPage({ page: page + increment });
    }

    render() {
        const { totalResults, page, perPage } = this.props;

        if (!totalResults) return <div id = "results"> no pokemon found!<img id ="empty" src= {logo}/></div>;

        const totalPages = Math.ceil(totalResults / perPage);
        return (
            <div>
                <span>Page {page} of {totalPages}</span>
                &nbsp;
                <button onClick={() => this.handlePage(-1)} disabled={page === 1}>&lt; Prev </button>
                <button onClick={() => this.handlePage(+1)} disabled={page === totalPages}>Next &gt;</button>
            </div>
        )
    }

}