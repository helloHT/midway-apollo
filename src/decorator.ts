import { createCustomPropertyDecorator } from '@midwayjs/decorator';

// 装饰器内部的唯一 id
export const HOT_VALUE = 'apollo:hotValue';
export const GET_VALUE = 'apollo:getValue';

export function HotValue(key?: string): PropertyDecorator {
  return createCustomPropertyDecorator(HOT_VALUE, {
    key,
  });
}

export function GetValue(key?: string): PropertyDecorator {
  return createCustomPropertyDecorator(GET_VALUE, {
    key,
  });
}
