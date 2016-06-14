import { Injectable } from '@angular/core';
import {
  Server,
  RouteBase,
  AbstractController,
  Request,
  Database,
  RouteParamMap,
  Action
} from '@ubiquits/core/server';
import { Logger } from '@ubiquits/core/common';
import { User } from '../../common/models/user.model';
import { UserStore } from '../../common/stores/user.store';

@Injectable()
@RouteBase('users')
export class UserController extends AbstractController {

  constructor(server: Server, logger: Logger, protected userStore: UserStore, protected database: Database) {
    super(server, logger);

    logger.info(`route base is ${this.routeBase}`);

  }

  protected getOneById(request: Request, routeParams: RouteParamMap): Promise<User> {

    return this.userStore.findOne(routeParams.get('id'));
  }

}
