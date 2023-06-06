import { type ReactNode, type FC } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type StateShema } from '../config/StateShema'
import { type DeepPartial } from '@reduxjs/toolkit'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateShema>
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {

    const store = createReduxStore(initialState as StateShema)

    return (
        <Provider store={store} >
            {children}
        </Provider>
    )
}
