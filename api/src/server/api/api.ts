import { Router } from '../../../deps.ts';

export default interface Api {
  makeRoutes(route: Router): void;
}
