import 'reflect-metadata';
import { server, logger } from './main';

server.start().then(() => {
  logger.source('server').info('Server running at:', server.getEngine().info.uri);
});
