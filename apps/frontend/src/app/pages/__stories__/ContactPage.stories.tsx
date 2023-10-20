import type { Meta, StoryObj } from '@storybook/react';

import { ContactPage } from '../ContactPage';

const meta = {
  title: 'Pages/ContactPage',
  component: ContactPage,
} satisfies Meta<typeof ContactPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const _ContactPage: Story = {};
