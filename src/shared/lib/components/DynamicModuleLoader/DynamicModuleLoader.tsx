import { type Reducer } from '@reduxjs/toolkit'
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { type StateShemaKeys } from 'app/providers/StoreProvider/config/StateShema'
import { useEffect, type FC } from 'react'
import { useStore } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/redux'

export type ReducersList = {
    [name in StateShemaKeys]?: Reducer
}

interface DynamicModuleLoaderProps {
    reducers: ReducersList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {

    const { children, reducers, removeAfterUnmount } = props

    const store = useStore() as ReduxStoreWithManager
    const dispatch = useAppDispatch()

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateShemaKeys, reducer)
            dispatch({ type: `@INIT ${name} reducer` })
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name as StateShemaKeys)
                    dispatch({ type: `@DESTROY ${name} reducer` })
                })
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {children}
        </>
    )
}
