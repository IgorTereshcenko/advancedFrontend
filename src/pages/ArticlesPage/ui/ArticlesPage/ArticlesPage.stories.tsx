import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/themeProvider'
import ArticlesPage from './ArticlesPage'

const meta: Meta<typeof ArticlesPage> = {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as Meta<typeof ArticlesPage>

export default meta
type Story = StoryObj<typeof ArticlesPage>

export const Normal: Story = {}

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] }
