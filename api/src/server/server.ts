import { Application, Context, dotEnvConfig, Router } from '../../deps.ts';
import { CnpjApi } from './api/cnpj/CnpjApi.ts';

import { CpfApi } from './api/cpf/CpfApi.ts';
import { StatusApi } from './api/status/StatusApi.ts';
import { CountRequests } from './CountRequests.ts';

dotEnvConfig({ export: true, path: '.env' });

export const app = new Application();
const router = new Router();

const startTime = Date.now();
const ignoreCountRequestPaths = ['/api/status'];

// Logger
app.use(async (ctx: Context, next) => {
  if (!ignoreCountRequestPaths.includes(ctx.request.url.pathname)) {
    CountRequests.instance.incrementRequests();
  }
  await next();
  const rt = ctx.response.headers.get('X-Response-Time');
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set('X-Response-Time', `${ms}ms`);
});

new CpfApi().populate(router);
new CnpjApi().populate(router);
new StatusApi({ startTime }).populate(router);

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', ({ port }) => {
  console.log(
    `👁️ Server started on http://localhost:${port}`,
  );
});

export const bootstrap = async () => {
  const port = parseInt(Deno.env.get('SERVER_PORT') || '4444');
  await app.listen({ port });
};
