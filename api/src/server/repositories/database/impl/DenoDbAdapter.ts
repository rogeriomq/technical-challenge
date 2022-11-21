import {
  Database,
  dotEnvConfig,
  PostgresConnector,
} from '../../../../../deps.ts';
import IDb from '../IDb.ts';
const env = dotEnvConfig({ path: '.env' });

export class DenoDbAdapter implements IDb {
  #database: Database;

  constructor() {
    const connection = new PostgresConnector({
      host: env['DB_HOST'] || 'host.docker.internal',
      username: env['DB_USER'],
      password: env['DB_PASS'],
      database: env['DB_NAME'],
      port: parseInt(env['DB_PORT'] || '5432', 10),
    });
    this.#database = new Database(connection);
  }

  async connection(): Promise<Database> {
    let connect = false;
    while (!connect) {
      try {
        const pong = await this.#database.getConnector().ping();
        if (pong) connect = true;
        console.log('connection success');
      } catch (error) {
        connect = false;
      }
    }
    return this.#database;
  }
}
