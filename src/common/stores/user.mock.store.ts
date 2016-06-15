import { UserStore } from '../../common/stores/user.store';
import { User } from '../models/user.model';
import { identifier } from '@ubiquits/core/common';
import { Collection } from '@ubiquits/core/common';

export class UserMockStore extends UserStore {

  constructor() {
    super();
  }
  
  private getMock(id:identifier):User {
    return new this.modelStatic({
      userId: id,
      username: 'zak',
      birthday: new Date(1990, 10, 22)
    });
  }

  public findOne(id: identifier): Promise<User> {
    return Promise.resolve(this.getMock(id));
  }

  public findMany(query?:any): Promise<Collection<User>> {
    return Promise.resolve(new Collection(Array(2).map((value, key) => this.getMock(key))));
  }

}