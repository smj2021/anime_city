import mongoose from 'mongoose'

const Schema = mongoose.Schema

const watchSchema = new Schema ({
    id: {
        type: String
    },
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
    title: {
        type: String
    }
})

const Watch = mongoose.model('Favorite', watchSchema)

export {
    Watch
}