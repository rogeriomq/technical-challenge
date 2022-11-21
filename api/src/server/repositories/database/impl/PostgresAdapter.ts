import { dotEnvConfig, PostgresClient } from '../../../../../deps.ts';
import IDb from '../IDb.ts';
const env = dotEnvConfig({ path: '.env' });

export class PostgresAdapter implements IDb {
  #database: PostgresClient;

  constructor() {
    this.#database = new PostgresClient({
      hostname: env['DB_HOST'] || 'host.docker.internal',
      user: env['DB_USER'],
      password: env['DB_PASS'],
      database: env['DB_NAME'],
      port: parseInt(env['DB_PORT'] || '5432', 10),
      connection: {
        attempts: 10,
        interval: 1000,
      },
    });
  }

  async connection(): Promise<PostgresClient> {
    let connected = false;
    while (!connected) {
      console.log('starting database connection...');
      await this.#database.connect()
        .then(() => {
          connected = true;
        })
        .catch(() => {
          console.log('Database connection failure. Try again');
        });
    }

    return this.#database;
  }
}
