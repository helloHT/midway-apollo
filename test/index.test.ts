import { join } from 'path';
import { close, createLightApp } from '@midwayjs/mock';

import { UserService } from './base-app-single-client/src/service/user';

describe('/test/index.test.ts', () => {
  let app;

  beforeAll(async () => {
    app = await createLightApp(join(__dirname, './base-app-single-client'));
  });

  afterAll(async () => {
    await close(app);
  });

  it('test hot value', async () => {
    const userService: UserService = await app
      .getApplicationContext()
      .getAsync(UserService);

    const name = userService.getName();

    expect(name).toEqual('张飞');
  });

  it('test hot value default Value', async () => {
    const userService: UserService = await app
      .getApplicationContext()
      .getAsync(UserService);

    const className = userService.getClassName();

    expect(className).toEqual('三年二班');
  });

  it('test get value', async () => {
    const userService: UserService = await app
      .getApplicationContext()
      .getAsync(UserService);

    const age = userService.getAge();

    expect(age).toEqual('13');
  });
});
