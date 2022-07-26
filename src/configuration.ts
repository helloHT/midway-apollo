import { Configuration } from '@midwayjs/decorator';
import { ApolloServiceFactory } from './manager';

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
  async onReady(container) {
    await container.getAsync(ApolloServiceFactory);
  }
}
