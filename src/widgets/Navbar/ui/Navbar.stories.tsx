import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/themeProvider'
import { Navbar } from './Navbar'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof Navbar>

export const Normal: Story = {
    decorators: [StoreDecorator({})]
}

export const AuthNavbar: Story = {
    decorators: [StoreDecorator({
        user: { authData: {} }
    })]
}

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})] }
