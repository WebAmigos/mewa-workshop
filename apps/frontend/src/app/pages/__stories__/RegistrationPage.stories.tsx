import type { Meta, StoryObj } from '@storybook/react';

import { RegistrationPage } from '../RegistrationPage';

const meta = {
  title: 'Pages/RegistrationPage',
  component: RegistrationPage,
} satisfies Meta<typeof RegistrationPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const _RegistrationPage: Story = {};
