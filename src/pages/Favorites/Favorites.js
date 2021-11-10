import { token } from 'morgan';
import React, { Component } from 'react';

class Favorites extends Component {
    state = {
        profile: {}
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/favorites', {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(json => {
                // setState here
                console.log('profile json client got back from server is: ');
            })
            .catch(err => console.log(`error from Favorites fetch is `, err))
    }

    render() {
        return (
            <div>
                <h1>This is the Favorites Page</h1>
            </div>
        );
    }
}

export default Favorites;