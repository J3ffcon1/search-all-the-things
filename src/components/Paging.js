import React, { Component } from 'react';
import styles from '../styles/Paging.css';
// import logo from '../../assets/empty-pokeball.png';
// import closed from '../../assets/closed-pokeball.png';


export default class Paging extends Component {

  handlePage(increment) {
    //eslint-disable-next-line
    const { page, onPage } = this.props; //inherited 
    onPage({ page: page + increment });
  }

  render() {
    //props false-positive.
    //eslint-disable-next-line
    const { totalResults, page, perPage } = this.props;
    const totalPages = Math.ceil(totalResults / perPage);
    
    if(!totalResults) return (<div id="results"></div>);

    return (
      <div className={styles.paging}>

      
        <span id = "page-count">Page {page} of {totalPages}</span>
        &nbsp;
        <button id = "paging-button" onClick={() => this.handlePage(-1)} disabled={page === 1}>&lt; Prev </button>
        <button id = "paging-button" onClick={() => this.handlePage(+1)} disabled={page === totalPages}>Next &gt;</button>
        <br />
      </div>
    );
  }

}