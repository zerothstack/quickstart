import { Model, BaseModel, Primary, UUID, StoredProperty, CreateDate, UpdateDate } from '@ubiquits/core/common';
import {MaxLength} from '@ubiquits/core/common';

@Model('users')
export class User extends BaseModel {

  @Primary()
  public userId: string; //UUID

  @StoredProperty()
  @MaxLength(6)
  public username: string;

  @StoredProperty()
  public birthday: Date;

  @CreateDate()
  public createdAt: Date;

  @UpdateDate()
  public updatedAt: Date;
}