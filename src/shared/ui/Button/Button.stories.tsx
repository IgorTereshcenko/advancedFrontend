import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/themeProvider'

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        children: 'Text'
    }
}

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: 'clear'
    }
}

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: 'outline'
    }
}

export const OutlineDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        children: 'Text',
        theme: 'outline'
    }
}
