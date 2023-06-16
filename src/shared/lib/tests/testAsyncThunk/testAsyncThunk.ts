import { type AsyncThunkAction } from '@reduxjs/toolkit'
import { type StateShema } from 'app/providers/StoreProvider'
import { type Dispatch } from 'react'

type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) =>
AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

export function testAsyncThunk<Return, Arg, RejectedValue>
(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    const dispatch: Dispatch<any> = jest.fn()
    const getState: () => StateShema = jest.fn()

    const callChunk = async (arg: Arg) => {
        const action = actionCreator(arg)
        const result = await action(dispatch, getState, undefined)

        return result
    }

    return { dispatch, getState, callChunk, actionCreator }
}
