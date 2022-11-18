import { validateCpfDep } from '../../deps.ts';

export default class CpfValidator {
  validateDep = validateCpfDep;

  validate(input: string): string | null {
    if (this.validateDep(input)) {
      return null;
    }

    return 'Invalid CPF';
  }
}
