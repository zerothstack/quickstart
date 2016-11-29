import { UserStore } from '../../common/stores/user.store';
import { Logger } from '@zerothstack/core/common';
import { AbstractSeeder, Seeder } from '@zerothstack/core/server';
import { Injectable } from '@angular/core';
import { User } from '../../common/models/user.model';
import { UserMockStore } from '../../common/stores/user.mock.store';
import { UserDatabaseStore } from '../stores/user.db.store';
import { NotFoundException } from '@zerothstack/core/common';

@Injectable()
@Seeder()
export class DemoSeeder extends AbstractSeeder {

  protected logger: Logger;

  constructor(loggerBase: Logger, protected userStore: UserStore, protected userMockStore: UserMockStore) {
    super(loggerBase);
  }

  public async seed(): Promise<User[] > {
    this.logger.info('Seeding db', this.userStore);

    await this.userStore.initialized();

    try {
      const user: User = await this.userStore.findOne(process.env.DEMO_ID);
      this.logger.debug('Demo model already seeded');
      return [user];
    } catch (e) {
      if (!(e instanceof NotFoundException)) {
        throw e;
      }

    }

    this.logger.debug('Creating demo models');

    const mockModel: User = await this.userMockStore.findOne();
    let mockModels = [mockModel];

    const dbUser: User = await this.userMockStore.findOne(process.env.DEMO_ID);

    mockModels.push(dbUser);

    const repo = await (this.userStore as UserDatabaseStore).getRepository();

    return repo.persist(mockModels);
  }

}