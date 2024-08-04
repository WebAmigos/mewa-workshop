import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Input } from '@ems/common-ui';

import { createOfferSchema, CreateReviewDto } from './types';

export const CreateOffer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<CreateReviewDto>({
    resolver: zodResolver(createOfferSchema),
  });

  const submitHandler: SubmitHandler<CreateReviewDto> = async (data) => {
    console.log({ data });
  };

  return (
    <div>
      <h3>Create offer</h3>
      {isSubmitting && <p>Submitting...</p>}
      <form onSubmit={handleSubmit(submitHandler)}>
        <Input {...register('role')} label="Role" error={errors.role} />
        <Input
          {...register('description')}
          label="Description"
          error={errors.description}
        />
        <Input
          {...register('salary', { valueAsNumber: true })}
          label="Salary"
          type="number"
          error={errors.salary}
        />
        <Button label="Submit" type="submit" />
      </form>
    </div>
  );
};
