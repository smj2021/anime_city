import { Favorite } from '../models/favorite.js'

function create(req, res) {
    console.log('req.user is: ', req.user);
    // console.log('id', req.body.id);
    Favorite.create({id:req.body.id}, function(err, fav) {
        if(err) return res.json({ok: false});
        // console.log(fav);
        res.json({ok: true, obj: fav})
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