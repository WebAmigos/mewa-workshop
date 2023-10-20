import type { Meta, StoryObj } from '@storybook/react';

import { ViewPort } from './ViewPort';

const meta = {
  title: 'Molecules/ViewPort',
  component: ViewPort,
  tags: ['autodocs'],
} satisfies Meta<typeof ViewPort>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _ViewPort: Story = {};
