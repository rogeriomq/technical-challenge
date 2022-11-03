import { validateCpf } from '../utils/validateCpf.ts';
import { ICpfCnpjModel } from './ICpfCnpjModel.ts';

export type CpfType = {
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

  /**
   * Validate a Cpf value prop.
   *
   * @returns String Error or null when is valid.
   */
  validate(): string | null {
    return validateCpf(this.value + '');
  }

  cleaned(): string {
    if (!this.value) return '';

    return this.value.replace(/[^\d]/g, '');
  }
}
