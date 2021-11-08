import React, { Component } from 'react';

class AnimeDetails extends Component {
    state = {
        animeDetails: this.props.location.state.anime
    }

    render() {
        console.log('this.state.animeDetails is: ', this.state.animeDetails);
        const { animeDetails } = this.state
        return (
            <div>
                <h1>{animeDetails.title}</h1>
                <img src={animeDetails.image_url} alt="" />
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
                <a href="/">Return</a>
            </div>
        )
    }
}

export default AnimeDetails;