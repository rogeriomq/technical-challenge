import { dotEnvConfig, PostgresClient } from '../../../../deps.ts';
const env = dotEnvConfig({ path: '.env' });

const database = new PostgresClient({
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

let connected = false;

while (!connected) {
  console.log('starting database connection...');
  await database.connect()
    .then(() => {
      connected = true;
    })
    .catch(() => {
      console.log('Database connection failure. Try again');
    });
}

console.log('Database connection [OK].');

export { database as db };
