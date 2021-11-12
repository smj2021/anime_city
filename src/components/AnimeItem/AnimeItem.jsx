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
                <h3>{props.anime.title}</h3>
                <img src={props.anime.image_url} alt="" />
            </Link>
        </div>
    );
}

export default AnimeItem;