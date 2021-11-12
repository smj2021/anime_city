import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AnimeResults extends Component {
    render() {
        return (
            <>
                {console.log('this.props.animes in Anime results is: ', this.props.animes)}
                {this.props.animes.map((anime, idx) => (
                    <div className='anime' key={idx} >
                        <Link 
                            to={{
                                pathname: `/anime`,
                                state: { anime }
                            }}
                        >
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