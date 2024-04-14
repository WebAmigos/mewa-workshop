import { Injectable } from '@nestjs/common';

type Review = { id: number; content: string; rate: number };

const reviews: Review[] = [
  { id: 1, content: 'Lorem ipsum', rate: 4 },
  { id: 2, content: 'sit dolor', rate: 5 },
];

@Injectable()
export class ReviewsService {
  getReviews(): Review[] {
    return reviews;
  }

  getReview(id: Review['id']): Review {
    return reviews[0];
  }

  createReview(data: Review) {
    reviews.push(data);
    return data;
  }

  deleteReview(id: Review['id']) {
    return null;
  }
}
