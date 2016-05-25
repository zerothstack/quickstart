import { Injectable } from '@angular/core';
import { Cat } from '../../common/models/cat.model';
import {
  Server,
  RouteBase,
  AbstractController,
  AbstractModel,
  Action,
  LoggerService,
  Request,
  RouteParam
} from '@ubiquits/core';

@Injectable()
@RouteBase('simple')
export class SimpleController extends AbstractController {

  constructor(server: Server, logger: LoggerService) {
    super(server, logger);
  }

  @Action('GET', '/test-route')
  public test() {
    return 'hello world';
  }

  protected getOneById(request: Request, routeParams: RouteParam[]): AbstractModel {
    return new Cat();
  }

}
