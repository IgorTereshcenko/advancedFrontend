import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/themeProvider'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof Modal>

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis similique cupiditate doloribus earum consequatur dolor voluptatem. Quidem omnis dolorum rem, neque totam praesentium voluptate, minima ipsum vitae hic, quia possimus.'
    }
}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        isOpen: true,
        children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis similique cupiditate doloribus earum consequatur dolor voluptatem. Quidem omnis dolorum rem, neque totam praesentium voluptate, minima ipsum vitae hic, quia possimus.'
    }
}
