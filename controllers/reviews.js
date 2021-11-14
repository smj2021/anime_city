import { Review } from '../models/Review.js';
import { Profile } from '../models/profile.js';

function index(req, res) {
    Review.find({})
        .then(reviews => {
            res.status(200).json(reviews)
        })
        .catch(err => {
            res.json(err)
        })
}

function create(req, res) {
    console.log('req.user is:', req.body)
    Review.create(req.body)
        .then(review => {
            res.json(review)
            console.log('req.user.profile is: ', review)
            //     Profile.findById(req.user.profile)
            //         .then(profile => {
            //             profile.reviews.push(review)
            //             profile.save(function (err, obj) {
            //                 console.log(err)
            //                 res.json(review)
            //             })
            //         })
            // })
        })
}

//creates a StarRating on the detail page and adds it to the profile in the database
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

function update(req, res) {
    console.log('this is req.params.animeId ', req.params.animeId)
    console.log('this is req.body ', req.body)
    Review.findByIdAndUpdate(req.params.animeId, req.body, { new: true })
        .then((review) => {
            console.log("review", review)
            res.json(review)
        })
        .catch(err => console.log(err))
}

function deleteReview(req, res) {
    Review.findByIdAndDelete(req.params.animeId)
        .then(review => {
            res.json(review)
        })
}

export {
    index,
    create,
    rating,
    update,
    deleteReview as delete
}