import mongoose, { Schema } from 'mongoose'
import type { Model } from 'mongoose'
import type { UserData } from './user.document'

const UserSchema = new Schema<UserData>(
  {
    id: {
      type: Number,
      unique: true,
      required: true
    },
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String
    },
    username: {
      type: String
    },
    photo_url: {
      type: String
    },
    auth_date: {
      type: Number
    }
  },
  {
    versionKey: false
  }
)

let UserModel: Model<UserData>

try {
  UserModel = mongoose.model('User')
} catch (_) {
  UserModel = mongoose.model('User', UserSchema)
}

export { UserModel }
