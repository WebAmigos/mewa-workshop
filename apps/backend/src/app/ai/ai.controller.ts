import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

import { AIService } from './ai.service';
import { CompletionsDto } from './dtos/completions.dto';

@ApiTags('ai')
@Controller('ai') // http://localhost:3002/api/ai
export class AIController {
  constructor(private readonly aiService: AIService) {}

  // @ApiBody({ type: [CreateUserDto] })
  @Post('completions')
  askChat(@Body() completionsDto: CompletionsDto) {
    return this.aiService.askChat(completionsDto);
  }
}
