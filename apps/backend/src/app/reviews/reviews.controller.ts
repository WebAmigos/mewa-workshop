import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dtos/create-review.dto';
import { UpdateReviewDto } from './dtos/update-review.dto';

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
  getReview(@Param('id') id: string) {
    return this.reviewsService.getReview(id);
  }

  @Delete(':id')
  deleteReview(@Param('id') id: string) {
    return this.reviewsService.deleteReview(id);
  }

  @Post()
  createReview(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.createReview(createReviewDto);
  }

  @Patch(':id')
  updateReview(
    @Param('id') id: string,
    @Body() updateReviewDto: UpdateReviewDto
  ) {
    return this.reviewsService.updateReview(id, updateReviewDto);
  }
}
