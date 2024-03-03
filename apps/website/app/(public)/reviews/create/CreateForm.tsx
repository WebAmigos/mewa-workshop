'use client';

import { useState } from 'react';

import { Button, Input } from '@ems/common-ui';
import { createReview } from './actions';

export const CreateForm = () => {
  const [isError, setIsError] = useState(false);

  const clientAction = async (formData: FormData) => {
    const serverResult = await createReview(formData);
    // console.log({ serverResult });
    setIsError(serverResult.error);
  };

  return (
    <>
      {isError && <p>Oh no server error!</p>}
      <form action={clientAction}>
        <Input label="Content" name="content" />
        <Input label="Author" name="author" />
        <Button label="Submit" type="submit" />
      </form>
    </>
  );
};
