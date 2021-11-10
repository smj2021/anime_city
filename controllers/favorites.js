import { Favorite } from '../models/favorite.js'
import { Profile } from '../models/profile.js'

function create(req, res) {
    console.log('req.user is: ', req.user);
    console.log('req.user.profile is: ', req.user.profile);
    // console.log('req.body.id is: ', req.body.id);
    req.body.addedBy = req.user.profile
    console.log('req.body is: ', req.body);
    Favorite.create((req.body))
        .then(favorite => {
            // console.log('req.user.profile is: ', req.user.profile);
            Profile.findById(req.user.profile)
                .populate('favorites')
                .then(profile => console.log('profile is: ', profile))
        })
}

// function create(req, res) {
//     console.log('id', req.body.id);
//     Favorite.create({id:req.body.id}, function(err, fav) {
//         if(err) return res.json({ok: false});
//         console.log(fav);
//         res.json({ok: true, obj: fav})
//     })
// }

export {
    create
}