import { Favorite } from '../models/favorite.js'
import { Profile } from '../models/profile.js'

function index(req, res) {
    Profile.findById(req.user.profile)
        .populate('favorites')
        .then(profile => {
            console.log('PROFILE IS ', profile);
            res.json(profile)
        })
}

function create(req, res) {
    req.body.addedBy = req.user.profile
    Favorite.create(req.body)
        .then(favorite => {
            Profile.findById(req.user.profile)
                .then(profile => {
                    profile.favorites.push(favorite)
                    profile.save(function(err) {
                        // console.log(err);
                    })
                    // console.log('profile is: ', profile);
                })
        })
}

export {
    index,
    create
}