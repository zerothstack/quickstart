import { Injectable } from '@angular/core';
import { Server, ResourceController } from '@ubiquits/core/server';
import { Logger, Controller } from '@ubiquits/core/common';
import { User } from '../../common/models/user.model';
import { UserStore } from '../../common/stores/user.store';

@Injectable()
@Controller({
  routeBase: 'users',
})
export class UserController extends ResourceController<User> {

  constructor(server: Server, logger: Logger, userStore: UserStore) {
    super(server, logger, userStore);

    logger.info(`route base is ${this.getMetadata().routeBase}`);

  }

}
