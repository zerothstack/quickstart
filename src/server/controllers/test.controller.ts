import { Injectable } from '@angular/core';
import { Cat } from '../../common/models/cat.model';
import {
  Server,
  RouteBase,
  AbstractController,
  LoggerService,
  Request,
  RouteParam
} from '@ubiquits/core/server';
import { AbstractModel } from '@ubiquits/core/common';


@Injectable()
@RouteBase('test')
export class TestController extends AbstractController {


  constructor(server: Server, logger: LoggerService) {
    super(server, logger);

    logger.info('route base is %s', this.routeBase);

  }

  protected getOneById(request: Request, routeParams: RouteParam[]): AbstractModel {
    return new Cat('louise');
  }

}
