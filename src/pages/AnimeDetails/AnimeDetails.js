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
                <p>{animeDetails.synopsis}</p>
                <a href="/">Return</a>
                <p><b>Type:</b>{animeDetails.type}</p>
                {animeDetails.type === "TV"
                    ? <p><b>Episodes: </b>{animeDetails.episodes}</p>
                    : ''}



{/* 
                {this.props.animes.results.airing
                    ? <p><b>Airing: </b>{this.props.animes.results.start_date} - present</p>
                    : <p><b>Aired: </b>{this.props.animes.results.start_date} to {this.props.animes.results.end_date}</p>
                }
                <p><b>Rated: </b>{this.props.animes.results.rated}</p>
                <p><b>Synopsis: </b>{this.props.animes.results.synopsis}</p>
                <a href={this.props.animes.results.url}>More Info</a> */}
            </div>
        )
    }
}

export default AnimeDetails;