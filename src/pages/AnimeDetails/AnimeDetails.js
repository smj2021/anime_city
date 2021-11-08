import React, { Component } from 'react';

class AnimeDetails extends Component {
    state = {
        animeDetails: {},
        // url: 
    }

    async componentDidMount() {
        const animeDetails = await 
    }

    render() {
        return (
            <div>
                <h1>{this.props.animes.results.title}</h1>
                <img src={this.props.animes.results.image_url} alt="" />
                <p><b>Type:</b>{this.props.animes.results.type}</p>
                {this.props.animes.results.type === "TV"
                    ? <p><b>Episodes: </b>{this.props.animes.results.episodes}</p>
                    : ''}
                {this.props.animes.results.airing
                    ? <p><b>Airing: </b>{this.props.animes.results.start_date} - present</p>
                    : <p><b>Aired: </b>{this.props.animes.results.start_date} to {this.props.animes.results.end_date}</p>
                }
                <p><b>Rated: </b>{this.props.animes.results.rated}</p>
                <p><b>Synopsis: </b>{this.props.animes.results.synopsis}</p>
                <a href={this.props.animes.results.url}>More Info</a>
            </div>
        )
    }
}

export default AnimeDetails;