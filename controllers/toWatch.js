import { Watch } from '../models/watch.js'
import { Profile } from '../models/profile.js'

function index(req, res) {
    Profile.findById(req.user.profile)
        .populate('favorites')
        .then(profile => {
            res.json(profile)
        })
}

function create(req, res) {
    req.body.addedBy = req.user.profile
    Watch.create(req.body)
        .then(watch => {
            Profile.findById(req.user.profile)
                .then(profile => {
                    profile.favorites.push(favorite)
                    profile.save()
                })
        })
}

function deleteFavorite(req, res) {
    Watch.findByIdAndDelete(req.params.id)
        .then(favorite => res.json(favorite))
}

export {
    index,
    create,
    deleteFavorite as delete
}