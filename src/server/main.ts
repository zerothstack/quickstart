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
import { Injector } from '@angular/core';
import { DemoSeeder } from './seeders/demo.seeder';

let storesPromise = Database.connect(deferredLog)
  .then((connection: any) => {

    //@todo if localhost AND requested to sync/reload. Probably will just remove entirely and
    // only run with migrations use SchemaCreatorFactory
    return connection.syncSchema(false);
  })
  .then(() => {

    deferredLog('debug', 'database is up, using database stores');

    return [
      {provide: UserStore, useClass: UserDatabaseStore},
    ];
  })
  .catch(() => {
    deferredLog('warning', 'database could not connect, using mock stores');
    return [
      {provide: UserStore, useClass: UserMockStore},
    ]
  });

let providers: ProviderDefinition[] = [
  DemoSeeder,
  Injector,
  UserMockStore,
  {provide: Logger, useClass: ConsoleLogger},
  // provide(Server, {useClass: HapiServer}), //override
];

providers.push(storesPromise);

export default bootstrap(controllers, providers, (bootstrapped:BootstrapResponse) => {
  // @todo remove seeding and resolve seeders like how controllers are registered. The bootstrap should take signature
  // bootstrap({
  //   controllers: import * from './controllers',
  //   seeders: import * from './seeders',
  //   models: import * from '../common/models',
  // }, providers)
  const seeder = bootstrapped.injector.get(DemoSeeder);
  seeder.seed();
});