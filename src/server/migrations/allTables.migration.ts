import { AbstractMigration, Database } from '@ubiquits/core/server';
import { Migration, Logger } from '@ubiquits/core/common';

/**
 * Note!
 * This migration is implemented as a quick-and-dirty demo to get you up and running asap
 * @todo(zh) when full migration capabilities are implemented refactor this class
 */
@Migration()
export class AllTablesMigration extends AbstractMigration {

  constructor(logger:Logger, database:Database){
    super(logger, database);
  }

  public migrate(): Promise<void> {
    return this.database.getConnection().then((connection:any) => {
      if (!connection){ //mock
        this.logger.warning('no database connection, skipping migration');
        return;
      }
      this.logger.debug('syncing all schemas');
      return connection.syncSchema(true);
    });

  }
  
  public rollback():Promise<void> {
    return Promise.resolve();
  }

}
