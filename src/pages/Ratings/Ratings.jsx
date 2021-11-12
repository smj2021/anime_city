import React, { useState, useEffect, Component } from 'react';
import { FaStar } from 'react-icons/fa'


const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return <div>
        {[...Array(5)].map((star, idx) => {
            const ratingValue = idx + 1
            return <label>
                <input
                    hidden
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={(e) => saveRating(e, setRating)}
                />
                <FaStar className="star"
                    color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'} size={40}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                />
            </label>
        })}
    </div>
}

const saveRating = (e, setRating) => {
    const rating = e.target.value
    setRating(rating)
    fetch('http://localhost:3001/api/reviews/animeId', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({ rating: e.target.value })

    })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err))
}

export default StarRating;