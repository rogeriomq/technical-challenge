import { dotEnvConfig, PostgresClient } from '../../../../deps.ts';
const env = dotEnvConfig({ path: '.env' });

const database = new PostgresClient({
  hostname: env['DB_HOST'] || 'host.docker.internal',
  user: env['DB_USER'],
  password: env['DB_PASS'],
  database: env['DB_NAME'],
  port: parseInt(env['DB_PORT'] || '5432', 10),
});

await database.connect();
console.log('database connected.');

export { database as db };
