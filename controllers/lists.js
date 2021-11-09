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

function show(req, res) {
    List.findById(req.params.id)
        .then(list => {
            res.json(list)
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

function update(req, res) {
    List.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((list) => {
            res.json(list)
        })
}

export {
    index,
    show,
    create,
    update
}