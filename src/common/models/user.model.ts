import {
  Model,
  BaseModel,
  Primary,
  UUID,
  StoredProperty,/*, CreateDate, UpdateDate*/
  HasOne
} from '@ubiquits/core/common';
import { MaxLength } from '@ubiquits/core/common';

@Model({
  storageKey: 'pets',
})
export class Pet extends BaseModel {

  @Primary()
  public petId: string;

  @StoredProperty()
  public name:string;

}

@Model({
  storageKey: 'users',
})
export class User extends BaseModel {

  @Primary()
  public userId: string; //UUID

  @StoredProperty()
  @MaxLength(6)
  public username: string;

  @StoredProperty()
  public birthday: Date;

  // @CreateDate()
  public createdAt: Date;

  // @UpdateDate()
  public updatedAt: Date;

  @HasOne(Pet)
  public pet:Pet
}




