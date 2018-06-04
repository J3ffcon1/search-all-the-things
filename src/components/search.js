import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import styles from './Search.css';

export default class Search extends Component {

    // static propTypes = {
    //     onSearch: PropTypes.func.isRequired
    // };

    state = {
        search: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSearch(this.state);
    };

    handleSearch = ({ target }) => {
        this.setState({ search: target.value });
    };

    render() {
        const { search } = this.state;

        return (
            <form className="search-form" onSubmit={event => this.handleSubmit(event)}>
                   <input placeholder="Search" value={search} onChange={this.handleSearch} required/>
                    <button>Search</button>
              </form>
        );
    }

}