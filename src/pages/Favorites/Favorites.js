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
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>Favorites</h1>
                {/* render gets called before we fetch so we first need to check wen have the data before we map */}
                {this.state.profile.favorites && this.state.profile.favorites.map((favorite, idx) => {
                    return (
                        <div>
                            <h2 key={idx}>{favorite.title}</h2>
                            <img src={favorite.image} alt="" />
                            {/* <form action={`/favorites/?_method=DELETE`} method="post">
                                <button type="submit">Remove</button>
                            </form> */}
                            <button
                                onClick={() =>  {/* handleDeleteFavorite*/
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Favorites;