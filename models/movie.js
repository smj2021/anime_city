import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    mal_id: {
        type: Number,
        require: true,
    },
    url: {
        type: String,
        require: true,
    },
    image_url: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true
    },
    
})