import Cpf from '../../model/cpf.model.ts';
import Service from './service.ts';

type runProps = {
  filter: string;
};

export default class ListCpf implements Service<runProps, Cpf[]> {
  run(): Cpf[] {
    return [
      Cpf.instance(),
      new Cpf({ value: '00591266121' }),
    ];
  }
}
