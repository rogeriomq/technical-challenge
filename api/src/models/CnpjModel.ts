import CnpjValidator from '../utils/CnpjValidator.ts';
import { ICpfCnpjModel } from './ICpfCnpjModel.ts';

export type CnpjType = {
  id?: number;
  value: string | '';
};

export class Cnpj implements ICpfCnpjModel {
  id: number | undefined;
  value: string;
  cnpjValidator: CnpjValidator;

  constructor({ id, value }: CnpjType) {
    this.id = id;
    this.value = value;
    this.cnpjValidator = new CnpjValidator();
  }

  static instance(): Cnpj {
    return new Cnpj({ id: undefined, value: '' });
  }

  validate(): string | null {
    return this.cnpjValidator.validate(this.value + '');
  }

  cleaned(): string {
    if (!this.value) return '';

    return this.value.replace(/[^\d]/g, '');
  }
}
