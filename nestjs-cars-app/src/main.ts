import { ValidationPipe } from '@nestjs/common';
import { BaseExceptionFilter, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors(); // only for development

  await app.listen(process.env.PORT || 9000);
}
bootstrap();
