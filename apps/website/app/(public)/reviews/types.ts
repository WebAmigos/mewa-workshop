export type Review = {
  id: string;
  content: string;
  author: string;
  created_at: string;
};

export type CreateReviewDto = Pick<Review, 'author' | 'content'>;
