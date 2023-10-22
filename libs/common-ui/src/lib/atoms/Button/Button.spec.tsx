import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Button } from './Button';

describe('Button component', () => {
  it('should have no violations', async () => {
    const { debug, container } = render(
      <Button label="Click me!" bgColor="carrot" />
    );
    // debug();
    const result = await axe(container);

    // expect(screen.getByText('Click me', { exact: false })).toBeInTheDocument();
    expect(result).toHaveNoViolations();
  });
});
