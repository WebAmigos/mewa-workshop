import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { Button, Header, Input } from '@ems/common-ui';

import { CreateReviewDto, Review, createReviewSchema } from '../types';
import { createReviewInAirtable } from '../services';

const createReview = async (formData: FormData) => {
  'use server';

  const rawReview: CreateReviewDto = {
    content: formData.get('content') as string,
    author: formData.get('author') as string,
  };

  const result = createReviewSchema.safeParse(rawReview);
  if (!result.success) {
    console.log(result.error.issues);

    return {
      error: true,
    };
  } else {
    await createReviewInAirtable(rawReview);

    // revalidatePath('/reviews');
    redirect('/reviews');
  }
};

export default function CreateReview() {
  const formAction = async (formData: FormData) => {
    'use server';
    const serverResult = await createReview(formData);
    console.log({ serverResult });
  };

  return (
    <div>
      <Header>Create review</Header>
      <form action={formAction}>
        <Input label="Content" name="content" />
        <Input label="Author" name="author" />
        <Button label="Submit" type="submit" />
      </form>
    </div>
  );
}
