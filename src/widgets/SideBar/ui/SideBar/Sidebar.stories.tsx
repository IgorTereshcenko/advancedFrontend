import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { SideBar } from './SideBar';

const meta: Meta<typeof SideBar> = {
  title: 'widgets/Sidebar',
  component: SideBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Normal: Story = {};

export const Dark: Story = {decorators:[ThemeDecorator(Theme.DARK)]};


