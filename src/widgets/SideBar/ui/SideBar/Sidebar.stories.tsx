import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/themeProvider'
import { SideBar } from './SideBar'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta: Meta<typeof SideBar> = {
    title: 'widgets/Sidebar',
    component: SideBar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as Meta<typeof SideBar>

export default meta
type Story = StoryObj<typeof SideBar>

export const Normal: Story = {
    decorators: [
        StoreDecorator({
            user: { authData: {} }
        })
    ],
    args: {}
}

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: { authData: {} }
        })
    ],
    args: {}
}

export const NoAuth: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: {}
        })
    ],
    args: {}
}
