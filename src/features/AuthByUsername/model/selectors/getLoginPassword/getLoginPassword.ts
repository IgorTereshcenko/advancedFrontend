import { type StateShema } from 'app/providers/StoreProvider'

export const getLoginPassword = (state: StateShema) => state?.LoginForm?.password || ''
