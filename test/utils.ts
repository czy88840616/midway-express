import * as path from 'path';
import { MidwayApplication } from '../src';

process.setMaxListeners(0);

export function createApp(name) {
  const app: any = new MidwayApplication({
    baseDir: path.join(__dirname, './fixtures', name),
  });
  return app;
}
