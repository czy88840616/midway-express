'use strict';

import { provide } from 'injection';
import { controller, get } from '@midwayjs/decorator';

@provide()
@controller('/api')
export class BaseApi {

  @get('/')
  async index(ctx) {
    ctx.body = 'index';
  }
}

@provide()
@controller('/components/')
export class Api {

  @get('/')
  async index(ctx) {
    ctx.body = 'hello';
  }
}
