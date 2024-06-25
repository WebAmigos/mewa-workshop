import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';

type ReviewDto = { id: number; content: string; rate: number };

@Controller('reviews') // http://localhost:3002/api/reviews
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get()
  getReviews(@Query() query) {
    const { page, offset } = query;
    return this.reviewsService.getReviews(page, offset);
    // return this.reviewsService.getReviews();
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
