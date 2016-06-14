import * as _ from 'lodash';
import { ReflectiveInjector, ResolvedReflectiveProvider, provide } from '@angular/core';
import * as controllers from './controllers';
import * as dotenv from 'dotenv';
import { Database, coreInjector, Server } from '@ubiquits/core/server';
import { Logger, ConsoleLogger } from '@ubiquits/core/common';
import { UserDBStore } from './stores/user.db.store';
import { UserStore } from '../common/stores/user.store';

/**
 * Load .env variables into process.env.*
 */
dotenv.config({
  path: './env/.local.env'
});

// resolve all controllers
let resolvedControllerProviders = ReflectiveInjector.resolve(Object.keys(controllers).map(key => controllers[key]));

// resolve all other user classes
let resolvedProviders = ReflectiveInjector.resolve([
  provide(Logger, {useClass: ConsoleLogger}),
  provide(UserStore, {useClass: UserDBStore}),
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