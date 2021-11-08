const baseURL = 'https://api.jikan.moe/v3/search/anime?';
const query = 'q=';

export function getDetails(apiUrl) {
    return fetch(`${baseURL}${query}`)
}