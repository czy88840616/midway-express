# Midway-koa

这是一个 midway 直接应用在 koa 场景的代码框架，未经过实践，请不要直接应用在线上环境。

支持 @controller/@get/@post 等装饰器。

示例请看测试用例。

## Usage

和 koa 基本相同，方法一致。只是增加了 midway 的 ioc 用法，可以自动加载任意目录的 controller 文件。

默认自带了 koa-router，可以沿用 koa 的所有方法和属性。

支持大部分 midway 的装饰器能力。

不支持 @config/@plugin/@logger 这三个 for egg 的装饰器。

入口文件写法如下。

```ts
// app.ts
import { MidwayApplication } from 'midway-express';

(async () => {
  // 创建一个 app
  const app = new MidwayApplication();
  // 全局中间件
  app.use(require('koa-static')(root, opts));
  // ready
  await app.ready();
  // 绑定端口
  app.listen(3000);
})();

```