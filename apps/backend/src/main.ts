/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { HttpExceptionFilter } from './app/filters/http-exception-filter';
import { ApiGuard } from './app/guards/api-guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api'; // http://localhost:3002/api
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalGuards(new ApiGuard());
  app.enableCors();
  const port = process.env.PORT || 3002;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
