import { type ReducersMapObject, type EnhancedStore, type AnyAction, type Reducer, type CombinedState } from '@reduxjs/toolkit'
import { type UserSchema } from 'entities/User'
import { type LoginShema } from 'features/AuthByUsername'

export interface StateShema {
    user: UserSchema
    // Асинхронные редюсеры
    LoginForm?: LoginShema
}

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateShema>
    reduce: (state: StateShema, action: AnyAction) => CombinedState<StateShema>
    add: (key: StateShemaKeys, reducer: Reducer) => void
    remove: (key: StateShemaKeys) => void
}

export type StateShemaKeys = keyof StateShema

export interface ReduxStoreWithManager extends EnhancedStore<StateShema> {
    reducerManager: ReducerManager
}
