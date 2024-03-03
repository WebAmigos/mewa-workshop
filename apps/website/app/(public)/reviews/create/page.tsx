import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { Button, Header, Input } from '@ems/common-ui';

import { CreateReviewDto, Review } from '../types';
import { createReviewInAirtable } from '../services';

const createReview = async (formData: FormData) => {
  'use server';

  const review: CreateReviewDto = {
    content: formData.get('content') as string,
    author: formData.get('author') as string,
  };

  await createReviewInAirtable(review);

  // revalidatePath('/reviews');
  redirect('/reviews');
};

export default function CreateReview() {
  return (
    <div>
      <Header>Create review</Header>
      <form action={createReview}>
        <Input label="Content" name="content" />
        <Input label="Author" name="author" />
        <Button label="Submit" type="submit" />
      </form>
    </div>
  );
}
