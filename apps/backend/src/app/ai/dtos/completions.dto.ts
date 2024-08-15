import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CompletionsDto {
  @ApiProperty()
  @IsString()
  message: string;
}
