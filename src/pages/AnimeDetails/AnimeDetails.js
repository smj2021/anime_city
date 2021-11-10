import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../../components/Reviews/Reviews'

class AnimeDetails extends Component {
    state = {
        // passed from <Link to={{pathname: `/anime`, state: { anime }}}>
        animeDetails: this.props.location.state.anime
    }

    addToFavorites = (e) => {
        e.preventDefault()
        const data = { id: e.target.firstChild.value };
        // the path is /api/favorites because our server.js has app.use('/api/favorites', favoritesRouter)
        fetch('http://localhost:3001/api/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            // turns js object to json string
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => console.log(json));
    }

    render() {
        console.log('this.state.animeDetails is: ', this.state.animeDetails);
        const { animeDetails } = this.state
        return (
            <div>
                <h1>{animeDetails.title}</h1>
                <img src={animeDetails.image_url} alt="" />
                <StarRating />
                <p><b>Synopsis: </b>{animeDetails.synopsis}</p>
                <p><b>Type:</b>{animeDetails.type}</p>
                {animeDetails.type === "TV"
                    ? <p><b>Episodes: </b>{animeDetails.episodes}</p>
                    : ''}
                {animeDetails.airing
                    ? <p><b>Airing: </b>{animeDetails.start_date} - present</p>
                    : <p><b>Aired: </b>{animeDetails.start_date} to {animeDetails.end_date}</p>
                }
                <p><b>Rated: </b>{animeDetails.rated}</p>
                <a href={animeDetails.url}>More Info</a>
                <br /><br />
                <form onSubmit={this.addToFavorites}>
                    <input type="hidden" name="id" value={animeDetails.mal_id} />
                    <button type="submit">Add to Favorites</button>
                </form>
                <Link to="/">Return</Link>
            </div>
        )
    }
}

export default AnimeDetails;