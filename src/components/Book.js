import React, { Component } from 'react';

export default class Book extends Component {

    render() {
        const { title, authors, description, } = this.props.book;

        return (
            <li>
                <h2>{title} by {authors} </h2>
                {/* <a href={url} target="_blank">view book</a> */}
                <p>{description}</p>
                {/* <img src={urlToImage} /> */}
            </li>
        );
    }
}