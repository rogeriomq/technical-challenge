import { Router } from '../../../../deps.ts';
import Api from '../api.ts';
import CpfController from './cpf.controller.ts';

class CpfApi implements Api {
  static makeRoutes(router: Router) {
    router.get('/cpf', CpfController.list);
    router.post('/cpf', CpfController.create);
    router.put('/cpf/:id', CpfController.update);
    router.delete('/cpf/:id', CpfController.remove);
  }
}
