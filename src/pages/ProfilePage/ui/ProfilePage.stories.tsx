import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/themeProvider'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof ProfilePage>

export const Normal: Story = {
    decorators: [StoreDecorator({
        profile: {
            form: {
                first: 'dsada',
                lastname: 'dsada',
                username: 'sdasd',
                age: 123,
                country: Country.Armenia,
                city: 'dsad',
                currency: Currency.EUR
            }
        }
    })]
}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        profile: {
            form: {
                first: 'dsada',
                lastname: 'dsada',
                username: 'sdasd',
                age: 123,
                country: Country.Armenia,
                city: 'dsad',
                currency: Currency.EUR
            }
        }
    })]
}
