import { AbstractModel } from '@ubiquits/core/common';
export class Cat extends AbstractModel {

  public name:string = undefined;

  constructor(name:string) {
    super();
    this.name = name;
  }

  public greet(): string {
    return `${this.name}: meow`;
  }

}
