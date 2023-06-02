import { type ReactNode, type FC } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type StateShema } from '../config/StateShema'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: StateShema
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {

    const store = createReduxStore(initialState)

    return (
        <Provider store={store} >
            {children}
        </Provider>
    )
}
