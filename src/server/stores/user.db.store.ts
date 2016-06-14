import { UserStore } from '../../common/stores/user.store';
import { identifier } from '@ubiquits/core/common';
import { User } from '../../common/models/user.model';

export class UserDBStore extends UserStore{

  constructor(){
    super();
  }

  public findOne(id: identifier): Promise<User> {
    return Promise.resolve(new this.model({
      userId: id,
      username: 'zak',
      birthday: new Date(1990, 10, 22)
    }));
  }

}