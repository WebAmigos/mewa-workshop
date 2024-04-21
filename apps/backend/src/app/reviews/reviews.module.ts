import { Module } from '@nestjs/common';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';

@Module({
  imports: [],
  controllers: [ReviewsController],
  providers: [ReviewsService],
})
export class ReviewsModule {}
