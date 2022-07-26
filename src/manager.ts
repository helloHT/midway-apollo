import {
  Config,
  Init,
  Inject,
  Provide,
  Scope,
  ScopeEnum,
  Logger
} from '@midwayjs/decorator';
import {
  ServiceFactory,
  delegateTargetAllPrototypeMethod,
} from '@midwayjs/core';
import { CtripApolloClient } from '@lvgithub/ctrip-apollo-client';

@Provide()
@Scope(ScopeEnum.Singleton)
export class ApolloServiceFactory extends ServiceFactory<CtripApolloClient> {
  @Config('apollo')
  apolloConfig;

  @Logger('coreLogger')
  logger;

  @Init()
  async init() {
    await this.initClients(this.apolloConfig);
    this.logger.info('[apollo]: client connect success');
  }

  protected createClient(config) {
    const client = new CtripApolloClient(config);
    return client;
  }

  getName() {
    return 'apollo';
  }

}

@Provide()
@Scope(ScopeEnum.Singleton)
export class ApolloService implements CtripApolloClient {
  @Inject()
  private serviceFactory: ApolloServiceFactory;

  // @ts-expect-error used
  private instance: CtripApolloClient;

  @Init()
  async init() {
    this.instance = this.serviceFactory.get();
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ApolloService extends CtripApolloClient {
  // empty
}

delegateTargetAllPrototypeMethod(ApolloService, CtripApolloClient);
