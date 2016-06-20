import * as path from 'path';
import * as dotenv from 'dotenv';
import {
  bootstrap,
  deferredLog,
  Server,
  HapiServer,
  Database,
  BootstrapResponse,
  ProviderDefinition
} from '@ubiquits/core/server';
import { Logger, ConsoleLogger } from '@ubiquits/core/common';
import { UserDatabaseStore } from './stores/user.db.store';
import * as controllers from './controllers';
import { UserStore } from '../common/stores/user.store';
import { UserMockStore } from '../common/stores/user.mock.store';

let storesPromise = Database.checkDatabase().then(() => {
  
  deferredLog('debug', 'database is up, using database stores');
  
  return [
    {provide: UserStore, useClass: UserDatabaseStore},
  ];
}).catch(() => {
  deferredLog('warning', 'database could not connect, using mock stores');
  return [
    {provide: UserStore, useClass: UserMockStore},
  ]
});

let providers:ProviderDefinition[] = [
  UserMockStore,
  {provide: Logger, useClass: ConsoleLogger},
  // provide(Server, {useClass: HapiServer}), //override
];

providers.push(storesPromise);

// export const bootstrapped:Promise<BootstrapResponse> = bootstrap(controllers, providers);
// export default /*<Promise<BootstrapResponse>>BootstrapResponse*/bootstrap(controllers, providers);
export default bootstrap(controllers, providers);