import React from 'react';
import { FaStar } from 'react-icons/fa'

const StarRating = () => {
    return <div>
        {[...Array(5)].map((star, idx) => {
            return <label>
                <input hidden type="radio" name="rating" />
                <FaStar className="star" size={50} />
            </label>
        })}
    </div>
}

export default StarRating