import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'
import avatarImg from './storybook.jpg'

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }

} as Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
    args: {
        size: 150,
        src: avatarImg
    }
}

export const Small: Story = {
    args: {
        size: 50,
        src: avatarImg
    }
}
