import { IsString, IsNumber, IsPositive, IsOptional } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewDto } from './create-review.dto';

export class UpdateReviewDto extends PartialType(CreateReviewDto) {}
