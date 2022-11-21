import { Router } from '../../../../deps.ts';
import { CnpjRepository } from '../../repositories/impl/CnpjRepository.ts';
import { Api } from '../IApi.ts';
import { CnpjController } from './CnpjController.ts';

export class CnpjApi implements Api {
  #basePath: string;
  #controller: CnpjController;
  constructor(basePath = '/api/cnpj') {
    this.#basePath = basePath;
    const repo = new CnpjRepository();
    this.#controller = new CnpjController(repo);
  }

  populate(router: Router) {
    router.get(this.#basePath, this.#controller.list);
    router.post(this.#basePath, this.#controller.create);
    router.put(`${this.#basePath}/:id`, this.#controller.update);
    router.delete(`${this.#basePath}/:id`, this.#controller.delete);
  }
}
