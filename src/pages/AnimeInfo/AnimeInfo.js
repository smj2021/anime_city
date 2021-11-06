import React, { Component } from 'react'

class AnimeInfo extends Component {
    render() {
        console.log(this.props.animes)
        return (
            <div>
                {this.props.animes.map(anime => (
                    <img src={anime.image_url} alt="" />
                ))}
            </div>
        )
    }
}

export default AnimeInfo;