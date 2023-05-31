import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/themeProvider'
import { AppLink } from './AppLink'

const meta: Meta<typeof AppLink> = {
    title: 'shared/Applink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof AppLink>

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: 'primary'
    }
}

export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: 'secondary'
    }
}

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        children: 'Text',
        theme: 'primary'
    }
}

export const SecondaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        children: 'Text',
        theme: 'secondary'
    }
}
