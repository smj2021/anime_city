import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function AnimeLists(props) {
    let lists = [];
    for (let i = 0; i < props.lists; i++) {
        lists.push(<List key={i} />)
    }

    return (
        <div>
            {lists}
        </div>
    )
}


export default AnimeLists;