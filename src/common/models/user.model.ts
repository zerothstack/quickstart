import { Model, Primary, UUID, castDate, StoredProperty } from '@ubiquits/core/common';
import {MaxLength} from '@ubiquits/core/common';

export class User extends Model {

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