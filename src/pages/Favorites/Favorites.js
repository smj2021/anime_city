import { token } from 'morgan';
import React, { Component } from 'react';

class Favorites extends Component {
    state = {
        profile: {}
    }

    componentDidMount() {
        // it's port 3001 because that's the port our server is listening to
        fetch('http://localhost:3001/api/favorites', {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    profile: json
                })
                console.log('state profile is: ', this.state.profile);
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