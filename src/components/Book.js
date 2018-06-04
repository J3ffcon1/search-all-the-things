import React, { Component } from 'react';

export default class Book extends Component {

    render() {
        const { title, author, description, publishedOn, url, urlToImage } = this.props.book;

        return (
            <li>
                <h2>{title} by {author} </h2>
                <a href={url} target="_blank">view book</a>
                <p>{description}</p>
                <img src={urlToImage} />
            </li>
        )
    }
}