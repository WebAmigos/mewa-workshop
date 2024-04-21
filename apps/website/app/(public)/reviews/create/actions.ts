'use server';

import { revalidatePath } from 'next/cache';
// import { type Review } from '@prisma/client'
import db from '@ems/prisma-client';
import { createReviewInAirtable } from '../services';
import { CreateReviewDto, createReviewSchema } from '../types';

// export const createReview = async (formData: FormData) => {
export const createReview = async (review: CreateReviewDto) => {
  'use server';

  // const review: CreateReviewDto = {
  //   content: formData.get('content') as string,
  //   author: formData.get('author') as string,
  // };

  const result = createReviewSchema.safeParse(review);
  if (!result.success) {
    console.log(result.error.issues);

    return {
      status: 'error',
    };
  } else {
    // await createReviewInAirtable(review);
    await db.review.create({
      data: review,
    });
    revalidatePath('/reviews');

    return {
      status: 'success',
      payload: review,
    };
  }
};
