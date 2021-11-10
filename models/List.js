import mongoose from 'mongoose'

const Schema = mongoose.Schema

const listSchema = new Schema ({
    name: String,
    profile:{
        ref: 'Profile'
    },
    shows: [{
        ref: 'Show'
    }]
},{
    timestamps: true,
})

const List = mongoose.model('List', listSchema)

export {
    List
}