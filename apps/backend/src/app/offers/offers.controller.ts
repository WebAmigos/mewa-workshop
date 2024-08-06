import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseFilters,
} from '@nestjs/common';
import { OffersService } from './offers.service';
import { CreateOfferDto } from './dtos/create-offer.dto';
import { UpdateOfferDto } from './dtos/update-offer.dto';
import { HttpExceptionFilter } from '../filters/http-exception-filter';

@Controller('offers') // http://localhost:3002/api/offers
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Get()
  async getOffers(@Query() query) {
    const { page, offset } = query;
    return await this.offersService.getOffers(page, offset);
  }

  @Get(':id')
  async getOffer(@Param('id') id: number) {
    return await this.offersService.getOffer(id);
  }

  @Post()
  createOffer(@Body() createOfferDto: CreateOfferDto) {
    return this.offersService.createOffer(createOfferDto);
  }

  @Patch(':id')
  updateOffer(@Param('id') id: number, @Body() updateOfferDto: UpdateOfferDto) {
    return this.offersService.updateOffer(id, updateOfferDto);
  }
}
