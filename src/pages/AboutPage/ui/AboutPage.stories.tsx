import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/themeProvider'
import AboutPage from './AboutPage'

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as Meta<typeof AboutPage>

export default meta
type Story = StoryObj<typeof AboutPage>

export const Normal: Story = {}

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] }
