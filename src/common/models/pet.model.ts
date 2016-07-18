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
import { User } from './user.model';

@Model({
  storageKey: 'pets',
})
export class Pet extends AbstractModel {

  @Primary()
  public petId: string;

  @StoredProperty()
  public name: string;

  @BelongsTo(f => User, user => user.userId)
  public user:User;

}