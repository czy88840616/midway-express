import * as express from 'express';

export interface WebMiddleware {
  resolve(): (context: any, next: () => Promise<any>) => any;
}

export interface Application extends Partial<express.Application> {
  ready();
}
