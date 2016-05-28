import { AbstractModel, ModelStore } from '@ubiquits/core/common';
import { User } from '../../common/models/user.model';

export class UserStore extends ModelStore<User>{

  constructor(){
    super(User);
  }

}