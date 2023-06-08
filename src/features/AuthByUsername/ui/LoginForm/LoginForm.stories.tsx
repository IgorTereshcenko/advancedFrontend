import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './LoginForm'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/themeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof LoginForm>

export const Primary: Story = {
    decorators: [StoreDecorator({
        LoginForm: { username: 'admin', password: '123' }
    })]
}

export const WithError: Story = {
    decorators: [StoreDecorator({
        LoginForm: { username: 'admin', password: '123', error: 'ERROR' }
    })]
}

export const Loading: Story = {
    decorators: [StoreDecorator({
        LoginForm: { isLoading: true }
    })]
}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        LoginForm: { username: 'admin', password: '123' }
    })],
    args: {}
}
