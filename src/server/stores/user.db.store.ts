import { UserStore } from '../../common/stores/user.store';
import { identifier } from '@ubiquits/core/common';
import { DatabaseStore, Database } from '@ubiquits/core/server';
import { Injectable } from '@angular/core';
import { User } from '../../common/models/user.model';
import { Logger } from '@ubiquits/core/common';
import { UserMockStore } from '../../common/stores/user.mock.store';

@Injectable()
export class UserDatabaseStore extends DatabaseStore<User> implements UserStore {

  constructor(database: Database, loggerBase: Logger, userMockStore: UserMockStore) {
    super(User, database, loggerBase);

    // this is just for demo purposes so on first init the database has a record
    this.initialized
      .then(() => this.orm.findByPrimary(process.env.DEMO_ID))
      .then((instance: any) => {
        if (instance) { //model already created
          this.logger.debug('Demo model already created');
          return;
        }
        this.logger.debug('Creating demo models');

        return userMockStore.findMany();
      })
      .then((mockModels: any[]) => {

        mockModels.push({
          userId: process.env.DEMO_ID,
          username: 'janedoe',
          birthday: new Date(1980, 6, 20)
        });

        return this.orm.bulkCreate(mockModels);
      });
  }

}