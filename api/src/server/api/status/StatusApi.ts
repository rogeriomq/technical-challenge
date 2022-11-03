import { dayjs, Router, RouterContext } from '../../../../deps.ts';
import { CountRequests } from '../../CountRequests.ts';
import { Api } from '../api.ts';

type StatusApiProps = {
  path?: string;
  startTime: number;
};
export class StatusApi implements Api {
  private path: string;
  private startTime: number;

  constructor(
    { path = '/api/status', startTime }: StatusApiProps,
  ) {
    this.path = path;
    this.startTime = startTime;
  }

  private uptimeInMilliseconds = () => dayjs().diff(this.startTime);

  populate(router: Router) {
    router.get(this.path, (ctx: RouterContext<string>) => {
      const data = {
        uptime: this.uptimeInMilliseconds(),
        totalRequests: CountRequests.instance.getRequests(),
      };
      ctx.response.body = {
        data,
      };
    });
  }
}
