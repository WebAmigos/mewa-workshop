import type { Meta } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { Footer } from '../Footer';

const meta = {
  title: 'Components/Footer',
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;

export const _Footer = () => (
  <MemoryRouter initialEntries={['/']}>
    <Routes>
      <Route path="/" element={<Footer />} />
    </Routes>
  </MemoryRouter>
);
