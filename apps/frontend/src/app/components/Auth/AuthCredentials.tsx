import { MouseEventHandler } from 'react';
import { useAuthContext } from './AuthContext';
import { Button } from '@ems/common-ui';

export const AuthCredentials = () => {
  const context = useAuthContext();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    context.toggle();
  };

  return (
    <div>
      <h3 className="text-xl">AuthCredentials</h3>
      <p>Is user logged? {context.isLoggedIn ? 'YES' : 'NO'}</p>
      <Button onClick={handleClick} label="Toggle" />
    </div>
  );
};
