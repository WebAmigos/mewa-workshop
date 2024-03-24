import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { Header } from '@ems/common-ui';

import { createReviewInAirtable } from '../services';
import { createReview } from './actions';
import { CreateForm } from './CreateForm';

export default function CreateReview() {
  const formAction = async (formData: FormData) => {
    'use server';
    const serverResult = await createReview(formData);
    console.log({ serverResult });
    if (serverResult.status === 'success') {
      await createReviewInAirtable(serverResult.payload!);
      revalidatePath('/reviews');
      redirect('/reviews');
    }
  };

  return (
    <div>
      <Header>Create review</Header>
      <CreateForm />
    </div>
  );
}
