import { validateCpf } from '../utils/validateCpf.ts';
import { ICpfCnpjModel } from './ICpfCnpjModel.ts';

type CpfType = {
  id?: number;
  value: string | '';
};

export class Cpf implements ICpfCnpjModel {
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
