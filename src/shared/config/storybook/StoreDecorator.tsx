import { type ReducersMapObject, type DeepPartial } from '@reduxjs/toolkit'
import { type StoryFn } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { type StateShema } from 'app/providers/StoreProvider/config/StateShema'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'

const defaultAsyncReducer: DeepPartial<ReducersMapObject<StateShema>> = {
    LoginForm: loginReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateShema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateShema>>
) => (Story: StoryFn) => {

    return (
        <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducer, ...asyncReducers }}>
            <Story/>
        </StoreProvider>
    )
}
