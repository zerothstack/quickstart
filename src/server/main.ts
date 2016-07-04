import {
  bootstrap,
  deferredLog,
  Database,
  DatabaseMock,
  ProviderDefinition,
  BootstrapResponse
} from '@ubiquits/core/server';
import { Logger, ConsoleLogger } from '@ubiquits/core/common';
import { UserDatabaseStore } from './stores/user.db.store';
import { UserStore } from '../common/stores/user.store';
import { UserMockStore } from '../common/stores/user.mock.store';
import { Injector } from '@angular/core';
import * as seeders from './seeders';
import * as models from '../common/models';
import * as controllers from './controllers';
import * as migrations from './migrations';
import * as services from './services';

/**
 * This is the full set of classes that need to be initialised on startup. This is like the
 * AppComponent in the frontend, only there are multiple entrypoints for a server side application,
 * so they all need to be registered at once.
 * @type {any[]}
 */
let loadClasses = [
  models, controllers, seeders, migrations, services
];

/**
 * The providers act the same as they are in Angular. This allows you to substitute implementations
 * with abstract classes, or provide a mock class for something that has not yet been implemented.
 */
let providers: ProviderDefinition[] = [
  Injector,
  UserMockStore,
  {provide: Logger, useClass: ConsoleLogger},
  // provide(Server, {useClass: HapiServer}), //override
];

/**
 * One difference from the frontend - providers can be promises, and they defer the bootstrapping
 * until they are resolved. In this example, we check if the database connection is alive, and if
 * not, substitute the UserStore with the UserMockStore. If up, we use the UserDatabaseStore.
 * This is a good technique for frontend development where you still want server interaction, but
 * just want to use mock values
 */
let storesPromise = Database.connect(deferredLog)
  .then(() => {
    deferredLog('debug', 'database is up, using database stores');
    return [
      {provide: UserStore, useClass: UserDatabaseStore},
    ];
  })
  .catch(() => {
    deferredLog('warning', 'database could not connect, using mock stores');
    return [
      {provide: Database, useClass: DatabaseMock},
      {provide: UserStore, useClass: UserMockStore},
    ]
  });

providers.push(storesPromise);

// export the type so consumers know what to hook into
export { BootstrapResponse };
// export the bootstrap promise factory so runtime bootstrap or test runner can kick the server off
export default bootstrap(loadClasses, providers);
