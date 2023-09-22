import type { Meta, StoryObj } from '@storybook/react';

import { RegistrationForm } from './RegistrationForm';

const meta = {
  title: 'Components/RegistrationForm',
  component: RegistrationForm,
  // tags: ['autodocs'],
} satisfies Meta<typeof RegistrationForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
