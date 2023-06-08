import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoryFn } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { type StateShema } from 'app/providers/StoreProvider/config/StateShema'

export const StoreDecorator = (state: DeepPartial<StateShema>) => (Story: StoryFn) => {
    return (
        <StoreProvider initialState={state}>
            <Story/>
        </StoreProvider>
    )
}
