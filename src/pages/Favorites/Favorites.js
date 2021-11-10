import React, { Component } from 'react';

class Favorites extends Component {
    state = {

    }

    componentDidMount() {
        fetch('http://localhost:3001/api/favorites', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => {
                // setState here
                console.log(json);
            })
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