export * from './dist/index';
import { Options } from '@lvgithub/ctrip-apollo-client';
declare module '@midwayjs/core/dist/interface' {
  // 将配置合并到 MidwayConfig 中
  interface MidwayConfig {
    apollo: ServiceFactoryConfigOption<
      | Options
      | ({
          cluster?: boolean;
          nodes?: ClusterNode[];
        } & ClusterOptions)
    >;
  }
}
