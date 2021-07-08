import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const TIMER_LABEL = 'startup';

async function bootstrap() {
  console.time(TIMER_LABEL);
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const PORT = configService.get<number>('PORT', 3000);

  //Support setting a Global Prefix via environment variables
  const GLOBAL_PREFIX = configService.get('GLOBAL_PREFIX');
  if (GLOBAL_PREFIX) {
    app.setGlobalPrefix(GLOBAL_PREFIX);
  }
  await app.listen(PORT);
  console.timeEnd(TIMER_LABEL);
  console.info(`Application listening on Port ${PORT}.`);
}
bootstrap();
