import { UserStore } from '../../common/stores/user.store';
import { User } from '../models/user.model';
import { identifier } from '@ubiquits/core/common';

export class UserMockStore extends UserStore {

  constructor() {
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