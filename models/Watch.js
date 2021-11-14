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
    },
    image: {
        type: String
    }
})

const Watch = mongoose.model('Watch', watchSchema)

export {
    Watch
}