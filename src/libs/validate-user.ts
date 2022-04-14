import { object, string, number } from 'yup'
import { UserModel } from "~/models/user.model"
import type { SchemaOf } from 'yup'
import type { UserResponse } from "~/types/user"
import type { TelegramUserData } from '~/types/user'

export const validateUser = (userData: TelegramUserData) => {
  const userSchema: SchemaOf<TelegramUserData> = object({
    id: number().required(),
    first_name: string().required(),
    last_name: string().optional(),
    username: string().optional(),
    photo_url: string().optional(),
    auth_date: number().required(),
    hash: string().required()
  }).defined()

  return userSchema.validateSync(userData)
}

const USERS = [
  216972324, // crashmax
  337800633  // le_xot
]

export async function validateUserId(session: UserResponse) {
  if (!USERS.includes(session.id)) {
    throw new Error('Вы не имеете доступа в админ панель!')
  }

  return UserModel
    .findOne({ id: session.id })
    .select('-_id')
    .lean()
}
