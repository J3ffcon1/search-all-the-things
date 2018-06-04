import React, { Component } from 'react';

export default class Paging extends Component {

    handlePage(increment) {
        const { page, onPage } = this.props;
        onPage({ page: page + increment });

    }

    render() {
        const { totalResults, page, perPage, topic } = this.props;

        if (!totalResults) return <div> No books found, try another search</div>;

        const totalPage = Math.ceil(totalResults / perPage);
        return (
            <section>
            <div>
                <p>Page {page} of {totalPages}</p>
                &nbsp;
                <button onClick={() => this.handlePage(-1)} disabled={page === 1}>&lt; Prev</button>
                <button onClick={() => this.handlePage(+1)} disabled={page === totalPages}>Next &gt;</button>
            </div>
            <div>
                <h1>Results for &quot;{topic}&quot;</h1>
                </div>
                </section>
                
        );

    }
}