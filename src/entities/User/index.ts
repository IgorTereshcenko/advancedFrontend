import { userReducer, userActions } from './model/slice/userSlice'
import { getUserAuthData } from './model/selectors/getUserAuthData'
import { getUserInited } from './model/selectors/getUserInited'
export type { User, UserSchema } from './model/types/user'

export { userReducer, userActions, getUserAuthData, getUserInited }
