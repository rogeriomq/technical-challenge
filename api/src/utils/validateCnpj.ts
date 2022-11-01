import { validateCnpjDep } from '../../deps.ts';

export const validateCnpj = (input: string): string | null => {
  if (validateCnpjDep(input)) return null;

  return 'Invalid CNPJ';
};
