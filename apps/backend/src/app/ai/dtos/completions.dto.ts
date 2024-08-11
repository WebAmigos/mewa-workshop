import { IsString } from 'class-validator';

export class CompletionsDto {
  @IsString()
  message: string;
}
