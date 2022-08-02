// src/decorator/memoryCache.decorator.ts
import { createCustomPropertyDecorator } from '@midwayjs/decorator';

// 装饰器内部的唯一 id
export const APOLLO = 'decorator:apollo';

export function Apollo(key?: string): PropertyDecorator {
  return createCustomPropertyDecorator(APOLLO, {
    key,
  });
}
