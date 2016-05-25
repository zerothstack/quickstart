import { AbstractModel } from '@ubiquits/core';
export class Cat extends AbstractModel {

  public greet(): string {
    return 'meow';
  }

}
