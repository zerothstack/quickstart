import { Injectable } from '@angular/core';
import { Cat } from '../../common/models/cat.model';
import {
  Server,
  RouteBase,
  Action,
  LoggerService,
  AbstractController,
  Request,
  RouteParam
} from '@ubiquits/core/server';
import { AbstractModel } from '@ubiquits/core/common';

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
    return new Cat('gary');
  }

}
