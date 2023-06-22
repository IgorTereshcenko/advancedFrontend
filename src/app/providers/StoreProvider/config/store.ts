import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type StateShema } from './StateShema'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reduxManager'
import { $api } from 'shared/api/api'

export function createReduxStore (
    initialState?: StateShema,
    asyncReducers?: ReducersMapObject<StateShema>
) {
    const rootReducers: ReducersMapObject<StateShema> = {
        user: userReducer
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore({
        ...asyncReducers,
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api
                }
            }
        })
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reducerManager

    return store
}

export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']
