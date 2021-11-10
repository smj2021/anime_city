import React, { useState } from 'react';
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
                    onClick={() => setRating(ratingValue)}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                />
                <FaStar className="star" color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'} size={50} />
            </label>
        })}
    </div>
}

export default StarRating