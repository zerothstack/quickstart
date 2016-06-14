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
@RouteBase('test')
export class TestController extends AbstractController {

  constructor(server: Server, logger: Logger, protected userStore: UserStore, protected database: Database) {
    super(server, logger);

    logger.info(`route base is ${this.routeBase}`);

  }

  @Action('GET', '/test-route')
  public test() {
    return 'hello world';
  }

  protected getOneById(request: Request, routeParams: RouteParamMap): Promise<User> {

    let userPromise = this.userStore.findOne(routeParams.get('id'));
    userPromise.then((user) => {
      this.logger.debug(user, user.getIdentifier());  
    });
    

    return userPromise;

  }

  @Action('GET', '/db')
  public databaseTest() {

    return this.database.query('SELECT * FROM users', {}).then((res:any[]) => {
      let [rows, metadata] = res;
      this.logger.debug(rows, metadata);
      return rows.map((row:Object) => new User(row));
    });

  }

}
