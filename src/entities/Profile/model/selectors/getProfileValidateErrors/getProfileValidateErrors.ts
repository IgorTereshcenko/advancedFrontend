import { type StateShema } from 'app/providers/StoreProvider'

export const getProfileValidateErrors = (state: StateShema) => state?.profile?.validateError
