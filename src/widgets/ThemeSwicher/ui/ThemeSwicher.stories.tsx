import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/themeProvider'
import { ThemeSwicher } from './ThemeSwicher'

const meta: Meta<typeof ThemeSwicher> = {
    title: 'widgets/ThemeSwicher',
    component: ThemeSwicher,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as Meta<typeof ThemeSwicher>

export default meta
type Story = StoryObj<typeof ThemeSwicher>

export const Normal: Story = {}

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] }
