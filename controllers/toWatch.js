import { Watch } from '../models/watch.js'
import { Profile } from '../models/profile.js'

function index(req, res) {
    Profile.findById(req.user.profile)
        .populate('toWatch')
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
                    profile.toWatch.push(watch)
                    profile.save()
                })
        })
}

function deleteWatch(req, res) {
    Watch.findByIdAndDelete(req.params.id)
        .then(watch => res.json(watch))
}

export {
    index,
    create,
    deleteWatch as delete
}