import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from './Search.css';

export default class Search extends Component {

    static propTypes = {
        onSearch: PropTypes.func.isRequired
    };

    state = {
        title: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSearch({...this.state });
    };

    handleTitle = ({ target }) => {
        this.setState({ title: target.value });
    };

    render() {
        const { title } = this.state;

        return (
            <form className="styles.search" onSubmit={this.handleSubmit}>
            <label>
                Search For:&nbsp;
                <input value = {title} 
                onChange={this.handleTitle}/>  
                </label>
                <button>Search Books</button>
                </form>
        );
    }

}