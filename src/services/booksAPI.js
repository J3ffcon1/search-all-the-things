const BASE_URL = 'https://www.googleapis.com/books/v1/';
const BOOKVOLUMES_URL = `${BASE_URL}/volumes?`;
const SORT_QUERY = 'sortBy=publishedAt';
const maxResults = 10;

const throwJson = json => { throw json; };
const get = url => fetch(url)
    .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function search({ topic, sources = ['bad'] }, { page = 1, pageSize = 10}) {
    
    const search = `&q=${topic}&sources=${sources.join()}`;
    const paging = `&page=${page}&pageSize=${pageSize}`;
    const sort = `&${SORT_QUERY}`;
    const bookIndex = (page * pageSize) -pageSize;
    const startIndex = `&startIndex=${bookIndex}`;

    return get(`${BOOKVOLUMES_URL}${search}${paging}${sort}${startIndex}`);
}

export function getSources() {
    return get(SOURCES_URL).then(r => r.sources);
  }