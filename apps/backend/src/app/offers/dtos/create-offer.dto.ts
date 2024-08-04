import { IsString, IsNumber, IsPositive } from 'class-validator';

export class CreateOfferDto {
  @IsString()
  role: string;

  @IsString()
  description: string;

  @IsNumber()
  @IsPositive()
  salary: number;
}
