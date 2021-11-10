import { Favorite } from '../models/favorite.js'
import { Profile } from '../models/profile.js'

function create(req, res) {
    // console.log('req.user is: ', req.user);
    // console.log('req.user.profile is: ', req.user.profile);
    // console.log('req.body.id is: ', req.body.id);
    req.body.addedBy = req.user.profile
    console.log('req.body is: ', req.body);
    Favorite.create(req.body)
        .then(favorite => {
            // console.log('req.user.profile is: ', req.user.profile);
            Profile.findById(req.user.profile)
                .populate('favorites')
                .then(profile => {
                    profile.favorites.push(favorite)
                    profile.save(function(err) {
                        // console.log(err);
                    })
                    console.log('profile is: ', profile);
                })
        })
}

export {
    create
}