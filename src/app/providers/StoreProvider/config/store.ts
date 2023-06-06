import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type StateShema } from './StateShema'
import { userReducer } from 'entities/User'

export function createReduxStore (initialState: StateShema) {
    const rootReducers: ReducersMapObject<StateShema> = {
        user: userReducer
    }
    return configureStore<StateShema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}
