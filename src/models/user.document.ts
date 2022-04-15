import { Document } from 'mongoose'

export interface UserData extends Document {
  id: number
  first_name: string
  last_name?: string
  username?: string
  photo_url?: string
  auth_date: number
}
