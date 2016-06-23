import { Injectable } from '@angular/core';
import {
  Server,
  RouteBase,
  ResourceController,
  Request,
  Database
} from '@ubiquits/core/server';
import { Logger, Controller } from '@ubiquits/core/common';
import { User } from '../../common/models/user.model';
import { UserStore } from '../../common/stores/user.store';

@Injectable()
@RouteBase('users')
@Controller()
export class UserController extends ResourceController<User> {

  constructor(server: Server, logger: Logger, userStore: UserStore) {
    super(server, logger, userStore);

    logger.info(`route base is ${this.routeBase}`);

  }

}
