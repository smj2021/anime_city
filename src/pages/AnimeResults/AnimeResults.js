import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AnimeItem from '../../components/AnimeItem/AnimeItem';

class AnimeResults extends Component {
    render() {
        return (
            <>
                {this.props.animes.map((anime, idx) => (
                    <AnimeItem anime={anime} key={idx} />
                ))}
            </>
        )
    }
}

export default AnimeResults;