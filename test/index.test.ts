import { clearAllModule } from 'injection';
const request = require('supertest');
import { createApp } from './utils';

describe('/test/enhance.test.ts', () => {

  afterEach(clearAllModule);

  describe('load ts file', () => {
    let app;
    before(() => {
      app = createApp('base-app-controller');
      return app.ready();
    });

    it('should load ts directory', (done) => {
      request(app.callback())
        .get('/api')
        .expect(200)
        .expect('index', done);
    });

    it('should get componets', (done) => {
      request(app.callback())
        .get('/components')
        .expect(200)
        .expect('hello', done);
    });

    it('should get my home', (done) => {
      request(app.callback())
        .get('/')
        .expect(200)
        .expect('root_test', done);
    });
  });
});
