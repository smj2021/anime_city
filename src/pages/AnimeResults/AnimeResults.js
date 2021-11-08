import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AnimeResults extends Component {
    render() {
        console.log(this.props.animes)
        return (
            <>
                {this.props.animes.map((anime, idx) => (
                    <div className='anime' key={idx} >
                        <Link to='anime' state={{ anime }}>
                            <h2>{anime.title}</h2>
                            <img src={anime.image_url} alt="" />
                        </Link>

                    </div>
                ))}
            </>
        )
    }
}

export default AnimeResults;