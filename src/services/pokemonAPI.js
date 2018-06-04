const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
const PIKA_URL = `${BASE_URL}/pikachu`;
const SORT_QUERY = `sortBy=id`;

const throwJson = json => { throw json; };
const get = url => fetch(url)
    .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function search({ name }, {page = 1, pageSize = 10 }) {
    const search = `?q=${name}`;
    const paging = `&page=${page}&pageSize=${pageSize}`;
    const sort = `${SORT_QUERY}`

    return get(`${BASE_URL}${search}${paging}${sort}`);
}


// const SORT_QUERY = 'orderBy=relevance';


// export function search({ topic, sources = ['bad'] }, { page = 1, pageSize = 10 }) {
    
//     const bookIndex = (page * pageSize) - pageSize;
//     const search = `&q=${topic}&sources=${sources.join()}`;
//     const maxResults = `&maxResults=${pageSize}`;
//     const sort = `&${SORT_QUERY}`;
//     const startIndex = `&startIndex=${bookIndex}`;

//     return get(`${BOOKVOLUMES_URL}${search}${maxResults}${sort}${startIndex}`);
// }