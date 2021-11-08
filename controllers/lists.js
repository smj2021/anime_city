import { List } from '../models/List.js'


function index(req, res) {
    List.find({})
        .then(lists => {
            res.status(200).json(lists)
        })
        .catch(err => {
            res.json(err)
        })
}

function create(req, res) {
    List.create(req.body)
        .then(list => {
            res.json(list)
        })
        .catch(err => {
            res.json(err)
        })
}


export {
    index
}