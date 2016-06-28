import { UserStore } from '../../common/stores/user.store';
import { Collection } from '@ubiquits/core/common';
import { DatabaseStore, Database, NotFoundException } from '@ubiquits/core/server';
import { Injectable, Injector } from '@angular/core';
import { User } from '../../common/models/user.model';
import { Logger } from '@ubiquits/core/common';
import { UserMockStore } from '../../common/stores/user.mock.store';

@Injectable()
export class UserDatabaseStore extends DatabaseStore<User> implements UserStore {

  constructor(injector: Injector, database: Database, loggerBase: Logger, userMockStore: UserMockStore) {
    super(User, injector, database, loggerBase);
  }

}