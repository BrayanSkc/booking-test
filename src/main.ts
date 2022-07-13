import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import environments from './config/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(environments.PORT);
  console.log('listening in port', environments.PORT);
}
bootstrap();
