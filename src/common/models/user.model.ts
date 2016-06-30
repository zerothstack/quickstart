import {
  Model,
  BaseModel,
  Primary,
  UUID,
  StoredProperty,
  CreatedDate,
  UpdatedDate,
  HasOne,
  MaxLength
} from '@ubiquits/core/common';

@Model({
  storageKey: 'pets',
})
export class Pet extends BaseModel {

  @Primary()
  public petId: string;

  @StoredProperty()
  public name: string;

}

@Model({
  storageKey: 'users',
})
export class User extends BaseModel {

  @Primary()
  public userId: string; //UUID

  @StoredProperty({length: '6'})
  @MaxLength(6)
  public username: string;

  @StoredProperty({type: 'date'})
  public birthday: Date;

  @CreatedDate()
  public createdAt: Date;

  @UpdatedDate()
  public updatedAt: Date;

  @HasOne(Pet)
  public pet: Pet
}




