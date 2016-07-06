import { Injectable } from '@angular/core';
import { AbstractController, Request, Response, Route } from '@ubiquits/core/server';
import { Logger, Controller } from '@ubiquits/core/common';
import { ExampleService } from '../services/example.service';

@Injectable()
@Controller({
  routeBase: 'example' 
})
export class TestController extends AbstractController {

  constructor(logger: Logger, protected exampleService: ExampleService) {
    super(logger);

  }

  @Route('GET', '/test')
  public test(request: Request, response: Response): Response {
    this.exampleService.logTest('Calling service from controller');
    return response.data('hello world');
  }

}
