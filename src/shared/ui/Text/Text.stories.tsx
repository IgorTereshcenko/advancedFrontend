import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/themeProvider'

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as Meta<typeof Text>

export default meta
type Story = StoryObj<typeof Text>

export const Primary: Story = {
    args: {
        title: 'title sdasdsadasdsa',
        text: 'text dsadasd'
    }
}

export const Error: Story = {
    args: {
        title: 'title sdasdsadasdsa',
        text: 'text dsadasd',
        thema: 'error'
    }
}

export const OnlyTitle: Story = {
    args: {
        title: 'title sdasdsadasdsa'
    }
}

export const OnlyText: Story = {
    args: {
        text: 'text dsadasd'
    }
}

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        title: 'title sdasdsadasdsa',
        text: 'text dsadasd'
    }
}

export const OnlyTitleDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        title: 'title sdasdsadasdsa'
    }
}

export const OnlyTextDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        text: 'text dsadasd'
    }
}

export const TextL: Story = {
    args: {
        title: 'title sdasdsadasdsa',
        text: 'text dsadasd',
        size: 'size-l'
    }
}

export const TextM: Story = {
    args: {
        title: 'title sdasdsadasdsa',
        text: 'text dsadasd',
        size: 'size-m'
    }
}
