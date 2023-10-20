import type { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';

import { EmployeesPage } from '../EmployeesPage';
import { employeesMockData, API_URL } from '../../mocks/handlers';

const meta = {
  title: 'Pages/EmployeesPage',
  component: EmployeesPage,
} satisfies Meta<typeof EmployeesPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const _EmployeesPage: Story = {};

_EmployeesPage.parameters = {
  msw: {
    handlers: [
      rest.get(API_URL, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(employeesMockData));
      }),
    ],
  },
};

export const _EmployeesPageWith200ButBadResponse: Story = {};

_EmployeesPageWith200ButBadResponse.parameters = {
  msw: {
    handlers: [
      rest.get(API_URL, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([{ results: {} }]));
      }),
    ],
  },
};

export const _EmployeesPageWith500ButBadResponse: Story = {};

_EmployeesPageWith500ButBadResponse.parameters = {
  msw: {
    handlers: [
      rest.get(API_URL, (req, res, ctx) => {
        return res(ctx.status(500), ctx.json([{ results: {} }]));
      }),
    ],
  },
};
