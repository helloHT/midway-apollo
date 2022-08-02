import { Configuration, Inject, Init } from '@midwayjs/decorator';
import { MidwayDecoratorService } from '@midwayjs/core';

import { ApolloServiceFactory, ApolloService } from './manager';
import { APOLLO } from './decorator';

@Configuration({
  namespace: 'apollo',
  importConfigs: [
    {
      default: {
        apollo: {},
      },
    },
  ],
})
export class ApolloConfiguration {
  @Inject()
  decoratorService: MidwayDecoratorService;

  @Inject()
  apolloService: ApolloService;

  @Init()
  async init() {
    // 实现装饰器
    this.decoratorService.registerPropertyHandler(
      APOLLO,
      (propertyName, meta) => {
        return this.apolloService.getValue(meta.key);
      }
    );
  }

  async onReady(container) {
    await container.getAsync(ApolloServiceFactory);
  }

  async onStop(container): Promise<void> {
    const factory = await container.getAsync(ApolloServiceFactory);
    factory.stop();
  }
}
