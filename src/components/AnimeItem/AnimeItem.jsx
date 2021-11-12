import React from 'react';
import { Link } from 'react-router-dom';

function AnimeItem(props) {
    const anime = props.anime
    return (
        <div className='anime' >
            <Link
                to={{
                    pathname: `/anime`,
                    state: {anime}
                }}
            >
                <h2>{props.anime.title}</h2>
                <img src={props.anime.image_url} alt="" />
            </Link>
        </div>
    );
}

export default AnimeItem;