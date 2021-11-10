import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    favorites: [{
      type: Schema.Types.ObjectId,
      ref: 'Favorite'
    }]
  },
  {
    timestamps: true,
  }
  )
  
  const Profile = mongoose.model('Profile', profileSchema)
  
  export {
    Profile
  }