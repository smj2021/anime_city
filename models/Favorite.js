import mongoose from 'mongoose'

const Schema = mongoose.Schema

const favoriteSchema = new Schema ({
    id: {
        type: String
    },
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }
})

const Favorite = mongoose.model('Favorite', favoriteSchema)

export {
    Favorite
}