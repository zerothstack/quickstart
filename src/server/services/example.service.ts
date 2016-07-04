import { Logger, Service, AbstractService } from '@ubiquits/core/common';
import { Injectable } from '@angular/core';

@Service()
@Injectable()
export class ExampleService extends AbstractService {

  protected logger: Logger;

  constructor(loggerBase: Logger) {
    super();
    this.logger = loggerBase.source('Example Service');
  }

  initialize(): Promise<this> {
    this.logger.info('Initializing Example Service');
    return Promise.resolve(this);
  }

  public logTest(message: string): void {
    this.logger.debug(message);
  }

}