import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    mal_id: {
        type: Number,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
        required: true,
    },
    
})