import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './LoginForm'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/themeProvider'

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof LoginForm>

export const Primary: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {}
}
