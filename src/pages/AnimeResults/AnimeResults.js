import React, { Component } from 'react'

class AnimeResults extends Component {
    render() {
        console.log(this.props.animes)
        return (
            <>
                {this.props.animes.map(anime => (
                    <div>
                        <img src={anime.image_url} alt="" />
                    </div>
                ))}
            </>
        )
    }
}

export default AnimeResults;