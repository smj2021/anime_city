const BASE_URL = 'http://localhost:3001/api/favorites'

function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    })
    .then(res => res.json())
}

export {
    deleteOne
}