import mongoose from 'mongoose'

const Schema = mongoose.Schema

const favoriteSchema = new Schema ({
    id: Number,
    // need to associate with user user: 
})

const Favorite = mongoose.model('Favorite', favoriteSchema)

export {
    Favorite
}