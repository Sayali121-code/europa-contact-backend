import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(8080);
}
bootstrap();
