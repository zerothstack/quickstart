import { AbstractMigration, Database, Migration } from '@zerothstack/core/server';
import { Logger } from '@zerothstack/core/common';

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

  public async migrate(): Promise<void> {

   const connection = await this.database.getConnection();

   if (!connection){ //mock
     this.logger.warning('no database connection, skipping migration');
     return;
   }

   return connection.syncSchema(true);
  }
  
  public rollback():Promise<void> {
    return Promise.resolve();
  }

}
