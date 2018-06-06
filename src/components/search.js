import React, { Component } from 'react';
import styles from '../styles/Search.css';

export default class Search extends Component {

    state = {
      search: ''
    };

    handleChange = ({ target }) => {
      this.setState({ search: target.value });
    };

    handleSubmit = event => {
      event.preventDefault();
      //eslint-disable-next-line
      this.props.onSearch(this.state);
      // this.totalResults = true;
    };

    refreshPage = event => {
      window.location.reload();
    };

    render() {
      const { search } = this.state;

      return (
        <form className = {styles.search} onSubmit={event => this.handleSubmit(event)}>
          <label>
            Search by name: &nbsp;
            <input value={search} onChange={this.handleChange}/>
          </label>
          <button className="search-button">Find</button><button className="refresh-button" onClick={this.refreshPage}>Refresh</button>
        </form>
      );
    
    }
  

}