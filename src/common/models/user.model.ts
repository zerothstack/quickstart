import {
  Model,
  AbstractModel,
  Primary,
  UUID,
  StoredProperty,
  CreatedDate,
  UpdatedDate,
  HasOne,
  BelongsTo,
  MaxLength
} from '@ubiquits/core/common';
import { Pet } from './pet.model';

@Model({
  storageKey: 'users',
})
export class User extends AbstractModel {

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

  @HasOne(f => Pet)
  public pet: Pet
}




