import { validateCpfDep } from '../../deps.ts';

export const validateCpf = (input: string): string | null => {
  if (validateCpfDep(input)) return null;

  return 'Invalid CPF';
};
