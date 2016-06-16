import * as controllers from './controllers';
import * as dotenv from 'dotenv';
import { bootstrap, provide, Server, HapiServer} from '@ubiquits/core/server';
import { Logger, ConsoleLogger } from '@ubiquits/core/common';
import { UserDatabaseStore } from './stores/user.db.store';
import { UserStore } from '../common/stores/user.store';

/**
 * Load .env variables into process.env.*
 */
dotenv.config({
  path: './env/.local.env'
});

const {server, logger} = bootstrap(controllers, [
  provide(Logger, {useClass: ConsoleLogger}),
  provide(UserStore, {useClass: UserDatabaseStore}),
  // provide(Server, {useClass: HapiServer}), //override
]);

export {server, logger};