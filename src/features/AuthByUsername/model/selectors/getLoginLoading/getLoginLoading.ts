import { type StateShema } from 'app/providers/StoreProvider'

export const getLoginLoading = (state: StateShema) => state?.LoginForm?.isLoading || false
