import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

type ReviewDto = { id: number; content: string; rate: number };

@Controller('reviews') // http://localhost:3002/api/reviews
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get()
  getReviews() {
    return this.reviewsService.getReviews();
  }

  @Get(':id')
  getReview(@Param(':id') id: number) {
    return this.reviewsService.getReview(id);
  }

  @Delete(':id')
  deleteReview(@Param(':id') id: number) {
    return this.reviewsService.deleteReview(id);
  }

  @Post()
  createReview(@Body() data: ReviewDto) {
    return this.reviewsService.createReview(data);
  }
}
