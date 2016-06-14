import { Store } from '@ubiquits/core/common';
import { User } from '../../common/models/user.model';

export abstract class UserStore extends Store<User>{

  constructor(){
    super(User);
  }

}