import type { Meta, StoryObj } from '@storybook/react';

import { EmployeesPage } from '../EmployeesPage';

const meta = {
  title: 'Pages/EmployeesPage',
  component: EmployeesPage,
} satisfies Meta<typeof EmployeesPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const _EmployeesPage: Story = {};
