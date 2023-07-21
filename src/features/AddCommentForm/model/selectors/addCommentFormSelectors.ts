import { type StateShema } from 'app/providers/StoreProvider'

export const addCommentFormText = (state: StateShema) => state.addCommemtForm?.text
export const addCommentFormError = (state: StateShema) => state.addCommemtForm?.error
