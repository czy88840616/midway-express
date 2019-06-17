import * as express from 'express';
// import {
//   CONTROLLER_KEY,
//   ControllerOption,
//   KoaMiddleware,
//   PRIORITY_KEY,
//   RouterOption,
//   WEB_ROUTER_KEY,
// } from '@midwayjs/decorator';
// import { getClassMetadata, getProviderId, listModule } from 'injection';
import { ContainerLoader, MidwayContainer } from 'midway-core';
import { join } from 'path';
import * as mixin from 'merge-descriptors';
import { Application } from './interface';

function isTypeScriptEnvironment() {
  return !!require.extensions[ '.ts' ];
}

export class MidwayApplication implements Application {
  appDir;
  baseDir;
  loader: ContainerLoader;

  constructor(options: {
    baseDir?: string;
  } = {}) {
    const expressApp = express();
    mixin(this, expressApp);

    this.appDir = options.baseDir || process.cwd();
    this.baseDir = this.getBaseDir();

    this.loader = new ContainerLoader({
      baseDir: this.baseDir,
      isTsMode: true,
    });
    this.loader.initialize();
  }

  getBaseDir() {
    if (isTypeScriptEnvironment()) {
      return join(this.appDir, 'src');
    } else {
      return join(this.appDir, 'dist');
    }
  }

  async ready() {
    this.loader.loadDirectory();
    await this.loader.refresh();
    // this.prepareContext();
  }

  // private prepareContext() {
  //   this.use(async (ctx, next) => {
  //     ctx.requestContext = this.applicationContext.get('requestContext');
  //     ctx.requestContext.updateContext(ctx);
  //     await next();
  //   });
  // }

  get applicationContext(): MidwayContainer {
    return this.loader.getApplicationContext();
  }

}
