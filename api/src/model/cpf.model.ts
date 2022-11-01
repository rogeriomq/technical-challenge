import { validateCpf } from '../utils/validateCpf.ts';
import ModelCpfCnpj from './modelCpfCnpj.ts';

type CpfType = {
  id?: number;
  value: string | '';
};

class Cpf implements ModelCpfCnpj {
  id: number | undefined;
  value: string;

  constructor({ id, value }: CpfType) {
    this.id = id;
    this.value = value;
  }

  static instance(): Cpf {
    return new Cpf({ id: undefined, value: '' });
  }

  validate(): string | null {
    return validateCpf(this.value + '');
  }

  cleaned(): string {
    if (!this.value) return '';

    return this.value.replace(/[^\d]/g, '');
  }
}

export default Cpf;
