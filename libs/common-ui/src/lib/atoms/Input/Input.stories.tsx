import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta = {
  title: 'UI/Atoms/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    name:'default',
    placeholder: 'Add text',
    className:"rounded-md"
  },
};

export const Radio: Story = {
  args: {
    type: 'radio',
    name:'radio',
  },
};

