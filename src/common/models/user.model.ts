import { BaseModel, primary, maxLength, UUID, castDate } from '@ubiquits/core/common';

export class User extends BaseModel {

  static modelName:string = 'user';
  
  @primary
  public userId: UUID;

  @maxLength(10)
  public username: string;

  @castDate
  public birthday: Date;

  @castDate
  public createdAt: Date;
  @castDate
  public updatedAt: Date;
}