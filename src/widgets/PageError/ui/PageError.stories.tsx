import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
  title: 'widgets/PageError',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof PageError>;

export const Normal: Story = {};

export const Dark: Story = {decorators:[ThemeDecorator(Theme.DARK)]};