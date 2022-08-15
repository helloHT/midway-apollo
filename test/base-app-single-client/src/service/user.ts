import { Provide } from '@midwayjs/decorator';
import { HotValue, GetValue } from '../../../../src/decorator';

@Provide()
export class UserService {
  @HotValue('name')
  private name: string;

  @HotValue('className:三年二班')
  private className: string;

  @GetValue('age')
  private age: string;

  getName() {
    return this.name;
  }

  getClassName() {
    return this.className;
  }

  getAge() {
    return this.age;
  }
}
