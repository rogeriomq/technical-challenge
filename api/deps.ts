/**
 * deps.ts
 *
 * One convention places all these dependent URLs into a local deps.ts file.
 * Functionality is then exported out of deps.ts for use by local modules.
 */

export { Status as HttpStatus } from 'https://deno.land/std@0.152.0/http/http_status.ts';
export { validate as validateCnpjDep } from 'https://deno.land/x/cnpj@v4.0.1/mod.ts';
export { validate as validateCpfDep } from 'https://deno.land/x/cpf@v1.0.2/mod.ts';
export { default as dayjs } from 'https://deno.land/x/deno_dayjs@v0.2.2/mod.ts';
export {
  Application,
  helpers,
  Router,
} from 'https://deno.land/x/oak@v11.1.0/mod.ts';
export type {
  Context,
  RouterContext,
} from 'https://deno.land/x/oak@v11.1.0/mod.ts';
export { PrismaClient } from './generated/client/deno/edge.ts';
export type { Prisma } from './generated/client/deno/edge.ts';
