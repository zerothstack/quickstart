import { Injectable } from '@angular/core';
import {
  AbstractController,
  Route,
  Before,
  After,
  BeforeAll,
  AfterAll,
  debugLog,
  Request,
  Response,
  IsolatedMiddlewareFactory
} from '@ubiquits/core/server';
import { Logger, Controller } from '@ubiquits/core/common';

function forwardHeader(headerName: string):IsolatedMiddlewareFactory {
  //use a named function here so the call stack can easily be debugged to show the called middleware
  return () => function forwardHeader(request: Request, response: Response): Response {
    response.header(headerName, request.headers().get(headerName.toLowerCase()));
    return response;
  }
}

@Injectable()
@Controller({
  routeBase: 'middleware'
})
@BeforeAll(debugLog('one'), debugLog('two'), forwardHeader('User-Agent'))
@AfterAll(debugLog('six'))
export class MiddlewareController extends AbstractController {

  constructor(logger: Logger) {
    super(logger);
  }

  @Route('GET', '/example')
  @Before(debugLog('three'))
  @After(debugLog('five'))
  public exampleMethod(request: Request, response: Response):Response {
    this.logger.debug('four');
    return response.data('Hello World');
  }

}
