import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type StateShema } from './StateShema'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'

export function createReduxStore (initialState: StateShema) {
    const rootReducers: ReducersMapObject<StateShema> = {
        user: userReducer,
        LoginForm: loginReducer
    }
    return configureStore<StateShema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}

export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']
