import { Body, Controller, Post } from '@nestjs/common';

import { AIService } from './ai.service';
import { CompletionsDto } from './dtos/completions.dto';

@Controller('ai') // http://localhost:3002/api/ai
export class AIController {
  constructor(private readonly aiService: AIService) {}

  @Post('completions')
  askChat(@Body() completionsDto: CompletionsDto) {
    return this.aiService.askChat(completionsDto);
  }
}
