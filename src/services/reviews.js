const BASE_URL = '/api/reviews';

const create = async newReviewData => {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newReviewData)
    }).then(res => res.json());
}

const getAll() {
    return fetch(BASE_URL)
        .then(res => res.json());
}

