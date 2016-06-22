import { UserStore } from '../../common/stores/user.store';
import { Collection } from '@ubiquits/core/common';
import { DatabaseStore, Database } from '@ubiquits/core/server';
import { Injectable, Injector } from '@angular/core';
import { User } from '../../common/models/user.model';
import { Logger } from '@ubiquits/core/common';
import { UserMockStore } from '../../common/stores/user.mock.store';

@Injectable()
export class UserDatabaseStore extends DatabaseStore<User> implements UserStore {

  constructor(injector: Injector, database: Database, loggerBase: Logger, userMockStore: UserMockStore) {
    super(User, injector, database, loggerBase);

    // this is just for demo purposes so on first init the database has a record
    this.initialized
      .then(() => this.findOne(process.env.DEMO_ID))
      .then((instance: User) => {

        this.logger.debug('Creating demo models');

        return userMockStore.findMany()
          .then((mockModels: Collection<User>) => {

            return userMockStore.findOne(process.env.DEMO_ID)
              .then((user: User) => {
                mockModels.push(user);
                return this.repository.persistMany(...mockModels);
              });

          });
      })
      .catch(() => {
        this.logger.debug('Demo model already created');
      });
  }

}