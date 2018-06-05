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
    };

    render() {
      const { search } = this.state;

      return (
        <div className = {styles.search}>
          <form className = "search-form" onSubmit={event => this.handleSubmit(event)}>
            <label>
                    Search by name: &nbsp;
              <input value={search} onChange={this.handleChange}/>
            </label>
            <button className = "search-button">Find</button>

          </form>
        </div>
      );
    }

}