import mongoose from 'mongoose'
import { Schema } from 'mongoose'
import type { Model } from 'mongoose'
import type { GameData } from './game.document'

const GameModel = new Schema<GameData>({
  appId: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  descriptions: {
    type: String,
    required: true
  },
  cover: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  url: {
    type: String
  }
}, { versionKey: false })

let model: Model<GameData>

try {
  model = mongoose.model('Game')
} catch {
  model = mongoose.model('Game', GameModel)
}

export { GameModel }
