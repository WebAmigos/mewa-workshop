import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthCredentials } from './AuthCredentials';
import { AuthContextProvider } from './AuthContext';

describe('AuthCredentials components', () => {
  it('should toggle value', () => {
    render(
      <AuthContextProvider>
        <AuthCredentials />
      </AuthContextProvider>
    );
    // expect(screen.getByText('NO', { exact: false })).toBeInTheDocument();
    expect(screen.getByText(/no/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
    // await userEvent.click(screen.getByRole('button'));

    // fireEvent.change(screen.getByLabelText('e-mail'), {
    //   target: { value: 'moja wartość' },
    // });
    // await userEvent.type(screen.getByLabelText('e-mail'), 'moja wartość');

    expect(screen.getByText(/yes/i)).toBeInTheDocument();
  });
});
