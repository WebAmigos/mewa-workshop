import type { Meta } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { Menu } from '../Menu';
import { ROUTE } from '../../../routes';
import { AboutPage } from '../../../pages/AboutPage';

const meta = {
  title: 'Components/Menu',
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;

export const _Menu = () => (
  <MemoryRouter initialEntries={['/']}>
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path={ROUTE.ABOUT} element={<AboutPage />} />
    </Routes>
  </MemoryRouter>
);
