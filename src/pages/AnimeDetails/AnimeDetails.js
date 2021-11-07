import React, { Component } from 'react'

class AnimeDetails extends Component {
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
            </div>
        )
    }
}

export default AnimeDetails;