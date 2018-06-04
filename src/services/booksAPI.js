const BASE_URL = 'https://www.googleapis.com/books/v1';
const BOOKVOLUMES_URL = `${BASE_URL}/volumes?`;
const SORT_QUERY = 'orderBy=relevance';

const throwJson = json => { throw json; };
const get = url => fetch(url)
    .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function search({ topic, sources = ['bad'] }, { page = 1, pageSize = 10 }) {
    
    const maxResults = `&maxResults=${pageSize}`;
    const bookIndex = (page * pageSize) - pageSize;
    const startIndex = `&startIndex=${bookIndex}`;
    const search = `&q=${topic}&sources=${sources.join()}`;
    const paging = `&maxResults=${maxResults}&startIndex=${startIndex}`;
    const sort = `&${SORT_QUERY}`;

    return get(`${BOOKVOLUMES_URL}${search}${maxResults}${sort}${startIndex}`);
}

export function getSources() {
    return get(SOURCES_URL).then(r => r.sources);
  }