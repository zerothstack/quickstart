import { BaseModel, primary, maxLength, uuid, castDate } from '@ubiquits/core/common';

export class User extends BaseModel {

  @primary
  public userId: uuid;

  @maxLength(10)
  public username: string;

  @castDate
  public birthday: Date;
}