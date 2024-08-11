import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AssistantDto {
  @ApiProperty()
  @IsString()
  message: string;
}
