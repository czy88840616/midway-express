import { provide, inject } from 'injection';
import { controller, get } from '@midwayjs/decorator';

@provide()
@controller('/')
export class My {

  @inject()
  ctx;

  @get('/')
  async index() {
    this.ctx.body = 'root_test';
  }
}
