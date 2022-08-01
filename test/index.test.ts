import { join } from 'path';

import { close, createLightApp } from '@midwayjs/mock';

import { ApolloService } from '../src';

describe('/test/index.test.ts', () => {
  let app;

  afterAll(async () => {
    await close(app);
  });

  it('test single client', async () => {
    app = await createLightApp(join(__dirname, './base-app-single-client'));
    const apolloService = await app
      .getApplicationContext()
      .getAsync(ApolloService);

    expect(apolloService.getValue('mysql.port:3306')).toBe('3306');
    expect(apolloService.getValue('mysql.host:127.0.0.1')).toBe('127.0.0.1');
  });
});
