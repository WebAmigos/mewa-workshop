'use client';

import { useState, useTransition } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { Button, Input } from '@ems/common-ui';
import { createReview } from './actions';
import { type CreateReviewDto, createReviewSchema } from '../types';

export const CreateForm = () => {
  const [isError, setIsError] = useState(false);
  const [isPending, setTransition] = useTransition();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateReviewDto>({
    resolver: zodResolver(createReviewSchema),
  });

  const clientAction: SubmitHandler<CreateReviewDto> = async (data) => {
    const serverResult = await createReview(data);
    // console.log({ serverResult });
    if (serverResult?.error) {
      setIsError(serverResult.error);
    } else {
      setTransition(() => router.push('/reviews'));
      setTransition(() => router.refresh());
    }
  };

  return (
    <>
      {isError && <p>Oh no server error!</p>}
      {isPending && <p>Something is going on...</p>}
      <form onSubmit={handleSubmit(clientAction)}>
        <Input
          label="Content"
          {...register('content')}
          error={errors.content}
        />
        <Input label="Author" {...register('author')} error={errors.author} />
        <Button label="Submit" type="submit" />
      </form>
    </>
  );
};
