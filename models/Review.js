import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
    content:{
        type: String,
    },
    id:{
        type: String,
    },
    
})