import mongoose from 'mongoose'

const Schema = mongoose.Schema

const favoriteSchema = new Schema ({
    id: {
        type: Number
    }
})

const Favorite = mongoose.model('Favorite', favoriteSchema)

export {
    Favorite
}