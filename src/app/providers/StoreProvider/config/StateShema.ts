import { type UserSchema } from 'entities/User'
import { type LoginShema } from 'features/AuthByUsername'

export interface StateShema {
    user: UserSchema
    LoginForm?: LoginShema
}
