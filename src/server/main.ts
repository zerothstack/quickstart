import * as _ from 'lodash';
import { ReflectiveInjector, ResolvedReflectiveProvider, provide } from '@angular/core';
import * as Controllers from './controllers';
import * as dotenv from 'dotenv';
import { Database, Logger, ConsoleLogger, coreInjector, Server } from '@ubiquits/core/server';
import { UserStore } from './stores/user.store';

/**
 * Load .env variables into process.env.*
 */
dotenv.config({
  path: './env/.local.env'
});

// resolve all controllers
let resolvedControllerProviders = ReflectiveInjector.resolve(_.values(Controllers));

// resolve all other user classes
let resolvedProviders = ReflectiveInjector.resolve([
  UserStore,
  provide(Logger, {useClass: ConsoleLogger}),
]).concat(resolvedControllerProviders);

// get an injector from the resolutions, using the core injector as parent
let injector = ReflectiveInjector.fromResolvedProviders(resolvedProviders, coreInjector);

// export vars for the bootstrapper
export const server: Server = injector.get(Server);
export const logger: Logger = injector.get(Logger);

// iterate over the controller providers, instantiating them to register their routes
resolvedControllerProviders.forEach((resolvedControllerProvider: ResolvedReflectiveProvider) => {
  logger.info(`initializing ${resolvedControllerProvider.key.displayName}`);
  injector.instantiateResolved(resolvedControllerProvider);
});