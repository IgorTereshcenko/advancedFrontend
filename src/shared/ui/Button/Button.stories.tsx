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

export const ClearInverted: Story = {
    args: {
        children: 'Text',
        theme: 'clear_inverted'
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

export const Background: Story = {
    args: {
        children: '<',
        theme: 'background'
    }
}

export const BackgroundInverted: Story = {
    args: {
        children: '<',
        theme: 'background_inverted'
    }
}

export const Square: Story = {
    args: {
        children: '<',
        theme: 'background',
        square: true
    }
}

export const SquareSizeL: Story = {
    args: {
        children: '<',
        theme: 'background_inverted',
        square: true,
        size: 'size_l'
    }
}

export const SquareSizeM: Story = {
    args: {
        children: '<',
        theme: 'background_inverted',
        square: true,
        size: 'size_m'
    }
}

export const SquareSizeXL: Story = {
    args: {
        children: '<',
        theme: 'background_inverted',
        square: true,
        size: 'size_xl'
    }
}

export const OutlineSizeL: Story = {
    args: {
        children: '<',
        theme: 'outline',
        size: 'size_l'
    }
}

export const OutlineSizeM: Story = {
    args: {
        children: '<',
        theme: 'outline',
        size: 'size_m'
    }
}

export const OutlineSizeXL: Story = {
    args: {
        children: '<',
        theme: 'outline',
        size: 'size_xl'
    }
}

export const Disabled: Story = {
    args: {
        children: '<',
        theme: 'outline',
        disabled: true
    }
}
