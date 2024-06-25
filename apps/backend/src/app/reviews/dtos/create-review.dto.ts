import { IsString, IsNumber, IsPositive } from 'class-validator';

export class CreateReviewDto {
  // id: number;

  @IsString()
  content: string;

  @IsNumber()
  @IsPositive()
  rate: number;
}
