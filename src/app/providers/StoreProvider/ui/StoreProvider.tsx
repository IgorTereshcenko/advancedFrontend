import { type ReactNode, type FC } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type StateShema } from '../config/StateShema'
import { type ReducersMapObject } from '@reduxjs/toolkit'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateShema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateShema>>
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState, asyncReducers }) => {

    const store = createReduxStore(
        initialState as StateShema,
        asyncReducers as ReducersMapObject<StateShema>
    )

    return (
        <Provider store={store} >
            {children}
        </Provider>
    )
}
