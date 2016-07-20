import { UserStore } from '../../common/stores/user.store';
import { Logger, Seeder } from '@ubiquits/core/common';
import { AbstractSeeder } from '@ubiquits/core/server';
import { Injectable } from '@angular/core';
import { User } from '../../common/models/user.model';
import { UserMockStore } from '../../common/stores/user.mock.store';
import { UserDatabaseStore } from '../stores/user.db.store';
import { NotFoundException } from '@ubiquits/core/common';

@Injectable()
@Seeder()
export class DemoSeeder extends AbstractSeeder {

  protected logger: Logger;

  constructor(loggerBase: Logger, protected userStore: UserStore, protected userMockStore: UserMockStore) {
    super(loggerBase);
  }

  public seed(): Promise<void> {
    this.logger.info('Seeding database');
    return this.userStore.initialized()
      .then(() => this.userStore.findOne(process.env.DEMO_ID))
      .then((instance: User) => {

        this.logger.debug('Demo model already seeded');
      })
      .catch((e) => {

        if (!(e instanceof NotFoundException)) {
          throw e;
        }
        
        this.logger.debug('Creating demo models');

        return this.userMockStore.findOne()
          .then((mockModel: User) => {

            let mockModels = [mockModel];

            return this.userMockStore.findOne(process.env.DEMO_ID)
              .then((user: User) => {
                mockModels.push(user);
                return (this.userStore as UserDatabaseStore).getRepository()
                  .then((repo: any) => repo.persistMany(...mockModels));
              });

          });
        
      }).then(() => {
        this.logger.info('Seeding Completed');
      });
  }

}