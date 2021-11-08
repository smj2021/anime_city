import { Favorite } from '../models/Favorite.js'

function create(req, res) {
    console.log('id', req.body.id);
    res.json({ok: true})
    Favorite.create({id:req.body.id}, function(err, fav) {
        if(err) return console.log(err);
        console.log(fav);
    })
}

export {
    create
}