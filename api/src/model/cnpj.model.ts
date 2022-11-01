import { validateCnpj } from '../utils/validateCnpj.ts';
import ModelCpfCnpj from './modelCpfCnpj.ts';

type CnpjType = {
  id?: number;
  value: string | '';
};

class Cnpj implements ModelCpfCnpj {
  id: number | undefined;
  value: string;

  constructor({ id, value }: CnpjType) {
    this.id = id;
    this.value = value;
  }

  static instance(): Cnpj {
    return new Cnpj({ id: undefined, value: '' });
  }

  validate(): string | null {
    return validateCnpj(this.value + '');
  }

  cleaned(): string {
    if (!this.value) return '';

    return this.value.replace(/[^\d]/g, '');
  }
}

export default Cnpj;
