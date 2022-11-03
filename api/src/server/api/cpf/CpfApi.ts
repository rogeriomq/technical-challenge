import { Router } from '../../../../deps.ts';
import { CpfRepository } from '../../repositories/impl/CpfRepository.ts';
import { Api } from '../api.ts';
import { CpfController } from './CpfController.ts';

export class CpfApi implements Api {
  #basePath: string;
  #controller: CpfController;
  constructor(basePath = '/api/cpf') {
    this.#basePath = basePath;
    const repo = new CpfRepository();
    this.#controller = new CpfController(repo);
  }

  populate(router: Router) {
    router.get(this.#basePath, this.#controller.list);
    router.post(this.#basePath, this.#controller.create);
    router.put(`${this.#basePath}/:id`, this.#controller.update);
    router.delete(`${this.#basePath}/:id`, this.#controller.delete);
  }
}
