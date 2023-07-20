import { type ReducersMapObject, type EnhancedStore, type AnyAction, type Reducer, type CombinedState } from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type ArticleDetailsShema } from 'entities/Article'
import { type ProfileShema } from 'entities/Profile'
import { type UserSchema } from 'entities/User'
import { type LoginShema } from 'features/AuthByUsername'
import { type ArticleDetailseCommentShema } from 'pages/ArticleDetailsPage'

export interface StateShema {
    user: UserSchema
    // Асинхронные редюсеры
    LoginForm?: LoginShema
    profile?: ProfileShema
    articleDetailse?: ArticleDetailsShema
    articleDetailseComments?: ArticleDetailseCommentShema
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

export interface thunkExtraAgr {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: thunkExtraAgr
    state: StateShema
}
