import { type StoryFn } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { type StateShema } from 'app/providers/StoreProvider/config/StateShema'
import { profileReducer } from 'entities/Profile'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducer: ReducersList = {
    LoginForm: loginReducer,
    profile: profileReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateShema>,
    asyncReducers?: ReducersList
) => (Story: StoryFn) => {

    return (
        <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducer, ...asyncReducers }}>
            <Story/>
        </StoreProvider>
    )
}
