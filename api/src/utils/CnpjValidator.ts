import { validateCnpjDep } from '../../deps.ts';

export default class CnpjValidator {
  validateDep = validateCnpjDep;

  validate(input: string): string | null {
    if (validateCnpjDep(input)) {
      return null;
    }
    return 'Invalid CNPJ';
  }
}
