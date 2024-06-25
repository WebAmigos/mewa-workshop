import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { type Review } from '@prisma/client';

// import { Review } from './entities/review.entity';
import { CreateReviewDto } from './dtos/create-review.dto';
import { UpdateReviewDto } from './dtos/update-review.dto';
import { PrismaService } from '../prisma.service';

// const reviews: Review[] = [
//   { id: 1, content: 'Lorem ipsum', rate: 4 },
//   { id: 2, content: 'sit dolor', rate: 5 },
// ];

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  async getReviews(page?: number, offset?: number): Promise<Review[]> {
    // console.log(await this.prisma.review.findMany());
    // return reviews
    return await this.prisma.review.findMany();
  }

  async getReview(id: Review['id']): Promise<Review> {
    // const review: Review = reviews.find((item) => item.id === id);
    const review: Review = await this.prisma.review.findFirst({
      where: { id },
    });
    if (!review) {
      // throw new Error('Review not found');
      // throw new HttpException('Review not found', HttpStatus.NOT_FOUND);
      throw new NotFoundException('Review not found');
    }
    return review;
  }

  createReview(createReviewDto: CreateReviewDto) {
    // TODO:
    // reviews.push(createReviewDto);
    return createReviewDto;
  }

  updateReview(id: Review['id'], updateReviewDto: UpdateReviewDto) {
    return updateReviewDto;
  }

  deleteReview(id: Review['id']) {
    return null;
  }
}
