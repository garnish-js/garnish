import { GarnishApplication } from '@garnish/core';
import { AppCommand } from './app.command';

async function bootstrap() {
  const app = await GarnishApplication.create(AppCommand);
  app.run();
}
bootstrap();
