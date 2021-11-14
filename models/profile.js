import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    favorites: [{
      type: Schema.Types.ObjectId,
      ref: 'Favorite'
    }],
    toWatch: [{
      type: Schema.Types.ObjectId,
      ref: 'Favorite'
    }],
    // reviews: [{
    //   type: Schema.Types.ObjectId,
    //   ref: 'Review'
    // }]
  },
  {
    timestamps: true,
  }
)

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}