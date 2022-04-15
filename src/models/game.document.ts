import { Document } from 'mongoose'

export const ratings = [
  'шедевр',
  'советую',
  'так себе',
  'плохо',
  'под пиво'
] as const

export type Rating = typeof ratings[number]

export interface GameData extends Document {
  appId: number
  title: string
  descriptions: string
  cover: string
  rating: number
  url?: string
}
