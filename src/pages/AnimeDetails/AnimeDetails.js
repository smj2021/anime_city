import React, { Component } from 'react'

class AnimeDetails extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.animes.results.title}</h1>
                <img src={this.props.animes.results.image_url} alt="" />
            </div>
        )
    }
}

export default AnimeDetails;