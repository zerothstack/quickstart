import { UserStore } from '../../common/stores/user.store';
import { User } from '../models/user.model';
import { identifier, MockStore } from '@ubiquits/core/common';
import { Injector, Injectable } from '@angular/core';

@Injectable()
export class UserMockStore extends MockStore<User> implements UserStore {

  constructor(injector:Injector) {
    super(User, injector);
  }
  
  protected getMock(id?:identifier):User {
    return new this.modelStatic({
      userId: id || this.chance().guid(),
      username: this.chance().first(),
      birthday: this.chance().date({
        year: this.chance().integer({min: 1900, max: 2000})
      })
    });
  }

  

}