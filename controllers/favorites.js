import { Favorite } from '../models/Favorite.js'

function create(req, res) {
    console.log('id', req.body.id);
    Favorite.create({id:req.body.id}, function(err, fav) {
        if(err) return res.json({ok: false});
        console.log(fav);
        res.json({ok: true, obj: fav})
    })
}



export {
    create
}