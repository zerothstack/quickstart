import { Model, primary, maxLength, UUID, castDate, StoredProperty } from '@ubiquits/core/common';

export class User extends Model {

  static modelName:string = 'user';
  
  @primary
  public userId: UUID;

  @StoredProperty
  @maxLength(10)
  public username: string;

  @StoredProperty
  @castDate
  public birthday: Date;

  @StoredProperty
  @castDate
  public createdAt: Date;

  @StoredProperty
  @castDate
  public updatedAt: Date;
}