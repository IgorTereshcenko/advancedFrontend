import { type StateShema } from 'app/providers/StoreProvider'

export const getLoginState = (state: StateShema) => state?.LoginForm
