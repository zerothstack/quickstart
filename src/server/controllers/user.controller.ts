import { Injectable } from '@angular/core';
import { ResourceController } from '@ubiquits/core/server';
import { Logger, Controller } from '@ubiquits/core/common';
import { User } from '../../common/models/user.model';
import { UserStore } from '../../common/stores/user.store';

@Injectable()
@Controller({
  routeBase: 'users',
})
export class UserController extends ResourceController<User> {

  constructor(logger: Logger, userStore: UserStore) {
    super(logger, userStore);

    logger.info(`route base is ${this.getMetadata().routeBase}`);

  }

}
