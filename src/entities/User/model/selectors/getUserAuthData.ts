import { type StateShema } from 'app/providers/StoreProvider/config/StateShema'

export const getUserAuthData = (state: StateShema) => state.user.authData
