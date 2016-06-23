import { Model, BaseModel, Primary, UUID, castDate, StoredProperty, StoredModel } from '@ubiquits/core/common';
import {MaxLength} from '@ubiquits/core/common';

@StoredModel('users')
@Model()
export class User extends BaseModel {

  static modelName:string = 'user';
  
  @Primary()
  public userId: string; //UUID

  @StoredProperty()
  @MaxLength(6)
  public username: string;

  @StoredProperty()
  @castDate
  public birthday: Date;

  @StoredProperty()
  @castDate
  public createdAt: Date;

  @StoredProperty()
  @castDate
  public updatedAt: Date;
}