import { Store } from '@ubiquits/core/common';
import { User } from '../../common/models/user.model';
import { Injectable, Injector } from '@angular/core';

@Injectable()
export abstract class UserStore extends Store<User> {

  constructor(injector: Injector) {
    super(User, injector);
  }

}