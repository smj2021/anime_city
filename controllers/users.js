import { User } from "../models/user.js"

export {
  index,
}

function index(req, res) {
  console.log(req.user)
  User.find({}).then((users) => res.json(users))
}