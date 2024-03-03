'use server';

import { redirect } from 'next/navigation';
import { createReviewInAirtable } from '../services';
import { CreateReviewDto, createReviewSchema } from '../types';

export const createReview = async (formData: FormData) => {
  const rawReview: CreateReviewDto = {
    content: formData.get('content') as string,
    author: formData.get('author') as string,
  };

  const result = createReviewSchema.safeParse(rawReview);
  if (!result.success) {
    // console.log(result.error.issues);

    return {
      error: true,
    };
  } else {
    await createReviewInAirtable(rawReview);

    // revalidatePath('/reviews');
    redirect('/reviews');
  }
};
