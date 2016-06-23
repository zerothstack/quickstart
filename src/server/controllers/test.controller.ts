import { Injectable } from '@angular/core';
import {
  Server,
  RouteBase,
  AbstractController,
  Request,
  Response,
  Database,
  Route
} from '@ubiquits/core/server';
import { Logger, Controller } from '@ubiquits/core/common';
import { User } from '../../common/models/user.model';

@Injectable()
@Controller()
@RouteBase('example')
export class TestController extends AbstractController {

  constructor(server: Server, logger: Logger) {
    super(server, logger);
  }

  @Route('GET', '/test')
  public test(request: Request, response: Response): Response {
    return response.data('hello world');
  }

}
