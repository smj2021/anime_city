import { Review } from '../models/Review.js';
import { Profile } from '../models/profile.js';

function create(req, res) {
    console.log('req.user is:', req.user)
    Review.create(req.body)
        .then(review => {
            console.log('req.user.profile is: ', req.user.profile)
            Profile.findById(req.user.profile)
                .then(profile => {
                    profile.reviews.push(review)
                    profile.save(function (err) {
                        console.log(err)
                    })
                })
        })
}

export {
    create
}