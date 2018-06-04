import React, { Component } from 'react';

export default class Pokemon extends Compondent {
    render() {
        const { id, name, sprites, types } = this.props.pokemon;

        return (
            <li>
                <h2>number {id}, {name}</h2>
                <img src={sprites} />
                <h3>type {types}</h3>
            </li>
        );
    }
}