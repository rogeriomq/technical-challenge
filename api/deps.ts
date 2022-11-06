/**
 * deps.ts
 *
 * One convention places all these dependent URLs into a local deps.ts file.
 * Functionality is then exported out of deps.ts for use by local modules.
 */

export { Status as HttpStatus } from 'https://deno.land/std@0.152.0/http/http_status.ts';
// export * as mod from 'https://deno.land/std@0.160.0/hash/mod.ts';
export { validate as validateCnpjDep } from 'https://deno.land/x/cnpj@v4.0.1/mod.ts';
export { oakCors } from 'https://deno.land/x/cors@v1.2.2/mod.ts';
export { validate as validateCpfDep } from 'https://deno.land/x/cpf@v1.0.2/mod.ts';
export { default as debug } from 'https://deno.land/x/debuglog@v1.0.0/debug.ts';
export { default as dayjs } from 'https://deno.land/x/deno_dayjs@v0.2.2/mod.ts';
export { config as dotEnvConfig } from 'https://deno.land/x/dotenv@v3.2.0/mod.ts';
export {
  Application,
  helpers as ctxHelpers,
  Router,
} from 'https://deno.land/x/oak@v11.1.0/mod.ts';
export type {
  Context,
  RouterContext,
} from 'https://deno.land/x/oak@v11.1.0/mod.ts';
export {
  Client as PostgresClient,
  ConnectionError,
  PostgresError,
} from 'https://deno.land/x/postgres@v0.17.0/mod.ts';
export { QueryObjectResult } from 'https://deno.land/x/postgres@v0.17.0/query/query.ts';
