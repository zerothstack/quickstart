import { UserStore } from '../../common/stores/user.store';
import { identifier } from '@ubiquits/core/common';
import { DatabaseStore, Database } from '@ubiquits/core/server';
import { Injectable } from '@angular/core';
import { User } from '../../common/models/user.model';
import { Logger } from '@ubiquits/core/common';

@Injectable()
export class UserDatabaseStore extends DatabaseStore<User> implements UserStore {

  constructor(database: Database, loggerBase: Logger){
    super(User, database, loggerBase);
  }

}