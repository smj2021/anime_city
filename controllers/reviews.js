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

function rating(req, res) {
    console.log(req.body)
    Review.create(req.body)
        .then(review => {
            Profile.findById(req.user.profile)
                .then(profile => {
                    profile.reviews.push(review)
                    profile.save(function (err) {

                    })
                })
        })
    res.json({ ok: 'success' })
}

function updateReview(req, res) {
    Review.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((review) => {
            res.json(review)
        })
}

function deleteReview(req, res) {
    Review.findByIdAndDelete(req.params.id)
        .then(review => {
            res.json(review)
        })
}

export {
    create,
    rating,
    updateReview,
    deleteReview as delete
}