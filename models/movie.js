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
    synopsis: {
        type: String,
        require: true,
    },
    score: {
        type: Number,
        require: true,
    },
    rated: {
        type: String,
        require: true,
    }
})

const Movie = mongoose.model('Movie', movieSchema);

export {
    Movie
}