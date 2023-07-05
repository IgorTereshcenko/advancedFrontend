import { type StateShema } from 'app/providers/StoreProvider/config/StateShema'

export const getUserInited = (state: StateShema) => state.user._inited
