import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReviewsModule } from './reviews/reviews.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './filters/http-exception-filter';
import { OffersModule } from './offers/offers.module';
import { AIModule } from './ai/ai.module';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ReviewsModule, OffersModule, AIModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
