import { type StateShema } from 'app/providers/StoreProvider'

export const getLoginError = (state: StateShema) => state?.LoginForm?.error
