import { z } from 'zod';

export type Review = {
  id: string;
  content: string;
  author: string;
  created_at: string;
};

// export type CreateReviewDto = Pick<Review, 'author' | 'content'>;

export const createReviewSchema = z.object({
  content: z.string().min(1, 'Content is required'),
  author: z.string().min(1, 'Author is required'),
});

export type CreateReviewDto = z.infer<typeof createReviewSchema>;
