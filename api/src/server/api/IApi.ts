import { Router } from '../../../deps.ts';

export interface Api {
  populate(router: Router): void;
}
