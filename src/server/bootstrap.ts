import 'reflect-metadata';
import bootstrap from './main';

export default bootstrap().then(({server, logger}) => {
  return server.start().then(() => {
    logger.source('server').info('Server running at:', server.getHost());
  });

});
