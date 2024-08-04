import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { type Review } from '@prisma/client';

import { CreateOfferDto } from './dtos/create-offer.dto';
import { UpdateOfferDto } from './dtos/update-offer.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class OffersService {
  constructor(private prisma: PrismaService) {}

  async getOffers(page?: number, offset?: number): Promise<Review[]> {
    return await this.prisma.review.findMany();
  }

  async getOffer(id: Review['id']): Promise<Review> {
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

  createOffer(createOfferDto: CreateOfferDto) {
    // TODO:
    // reviews.push(createReviewDto);
    return createOfferDto;
  }

  updateOffer(id: Review['id'], updateOfferDto: UpdateOfferDto) {
    return updateOfferDto;
  }
}
