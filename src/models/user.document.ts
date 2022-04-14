import { Document } from 'mongoose'

export interface UserData {
  id: number
  first_name: string
  last_name?: string
  username?: string
  photo_url?: string
  auth_date: number
}

export type IUserModel = UserData & Document
