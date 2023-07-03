import type { Meta, StoryObj } from '@storybook/react'
/* import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/themeProvider' */
import { ProfileCard } from './ProfileCard'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import avatar from 'shared/assets/storybook.jpg'

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof ProfileCard>

export const Primary: Story = {
    args: {
        data: {
            first: 'dsada',
            lastname: 'dsada',
            username: 'sdasd',
            age: 123,
            country: Country.Armenia,
            city: 'dsad',
            currency: Currency.EUR,
            avatar
        }
    }
}

export const WithError: Story = {
    args: {
        error: 'true'
    }
}

export const Loading: Story = {
    args: {
        isLoading: true
    }
}
