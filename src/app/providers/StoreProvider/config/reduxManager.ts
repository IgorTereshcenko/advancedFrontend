import { type ReducersMapObject, combineReducers, type AnyAction, type Reducer } from '@reduxjs/toolkit'
import { type StateShemaKeys, type StateShema, type ReducerManager } from './StateShema'

export function createReducerManager (initialReducers: ReducersMapObject<StateShema>): ReducerManager {

    const reducers = { ...initialReducers }

    let combinedReducer = combineReducers(reducers)

    let keysToRemove: StateShemaKeys[] = []

    return {
        getReducerMap: () => reducers,

        reduce: (state: StateShema, action: AnyAction) => {

            if (keysToRemove.length > 0) {
                state = { ...state }
                keysToRemove.forEach((key) => {
                    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                    delete state[key]
                })

                keysToRemove = []
            }

            return combinedReducer(state, action)
        },

        add: (key: StateShemaKeys, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return
            }
            reducers[key] = reducer
            combinedReducer = combineReducers(reducers)
        },

        remove: (key: StateShemaKeys) => {
            if (!key || !reducers[key]) {
                return
            }
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete reducers[key]
            keysToRemove.push(key)
            combinedReducer = combineReducers(reducers)
        }
    }
}
