const BASE_URL = 'http://localhost:3001/api/reviews';

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    })
        .then(res => res.json())
}

export function update(review) {
    return fetch(`${BASE_URL}/${review._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review)
    }).then(res => res.json());
}



