import React, { Component } from 'react';
import * as favoritesService from '../../services/favorites'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Favorites extends Component {
    state = {
        profile: {}
    }

    componentDidMount() {
        this.fetchProfile();
    }

    handleDeleteFavorite = id => {
        favoritesService.deleteOne(id)
        .then(this.fetchProfile())
    }

    fetchProfile() {
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
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>Favorites</h1>
                {/* render gets called before we fetch so we first need to check we have the data before we map */}
                {
                this.state.profile.favorites && this.state.profile.favorites.map((favorite, idx) => (
                    <div key={idx}>
                        <h2>{favorite.title}</h2>
                        <img src={favorite.image} alt="" />
                        <br />
                        <Button onClick={() => {this.handleDeleteFavorite(favorite._id)}}>
                            Remove
                        </Button>
                    </div>
                ))
                }
            </div>
        );
    }
}

export default Favorites;