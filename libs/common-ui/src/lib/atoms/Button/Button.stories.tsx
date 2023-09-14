import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'UI/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Hello',
  },
};

export const _Button = () => <Button label="Click me" />;

export const Primary: Story = {
  args: {
    label: 'Hello',
    bgColor: 'amethyst',
    color: 'emerald',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Hello',
    bgColor: 'peter-river',
    color: 'amethyst',
  },
};
