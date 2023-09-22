import { MouseEventHandler, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '../../atoms/Button';

export const Generator = () => {
  const [id, setId] = useState(uuidv4());

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setId(uuidv4());
  };

  return (
    <>
      <p>{id}</p>
      <Button label="Regenerate" onClick={handleClick} />
    </>
  );
};
