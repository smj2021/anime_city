import React, { Component } from 'react'

class AnimeInfo extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.animes.results[0].title}</h1>
                <img src={this.props.animes.results[0].image_url} alt="" />
                <p><b>Type: </b>{this.props.animes.results[0].type}</p>
                {this.props.animes.results[0].type === 'TV'
                    ? <p><b>Episodes: </b>{this.props.animes.results[0].episodes}</p>
                    : ''
                }
                {this.props.animes.results[0].airing
                    ? <p><b>Airing: </b>{this.props.animes.results[0].start_date} - present</p>
                    : <p><b>Aired: </b>{this.props.animes.results[0].start_date} to {this.props.animes.results[0].end_date}</p>
                }
                <p><b>Rated: </b>{this.props.animes.results[0].rated}</p>
                <p><b>Synopsis: </b>{this.props.animes.results[0].synopsis}</p>
                <a href={this.props.animes.results[0].url}>More info</a>
            </div>
        )
    }
}

export default AnimeInfo;