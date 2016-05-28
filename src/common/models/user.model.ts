import { AbstractModel, primary, maxLength, uuid } from '@ubiquits/core/common';

export class User extends AbstractModel {

  @primary
  public userId: uuid;
  @maxLength(10)
  public username: string;
  public birthday: Date;
}