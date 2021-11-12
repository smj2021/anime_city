import React, { Component } from 'react';
import * as favoritesService from '../../services/favorites'

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
            })
            .catch(err => console.log(err))
    }

    handleDeleteFavorite = id => {
        favoritesService.deleteOne(id)
        .then(this.render())
    }

    render() {
        return (
            <div>
                <h1>Favorites</h1>
                {/* render gets called before we fetch so we first need to check we have the data before we map */}
                {
                this.state.profile.favorites && this.state.profile.favorites.map((favorite, idx) => (
                    // console.log('favorite._id is: ', favorite._id)
                        <div key={idx}>
                            <h2>{favorite.title}</h2>
                            <img src={favorite.image} alt="" />
                            <br />
                            <button onClick={() =>  {this.handleDeleteFavorite(favorite._id)}}>
                                Remove
                            </button>
                        </div>
                ))
                }
            </div>
        );
    }
}

export default Favorites;