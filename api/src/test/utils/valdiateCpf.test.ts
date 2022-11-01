import { assertEquals, describe, generateCpf, it } from '../../../dev_deps.ts';
import { validateCpf } from '../../utils/validateCpf.ts';

describe('Fn -> validateCpf', () => {
  it('return null when input a valid cpf', () => {
    const validCpf = generateCpf();
    const result = validateCpf(validCpf);
    assertEquals(typeof result, 'object');
    assertEquals(result, null);
  });
  it('return String of error when invalid cpf', () => {
    const invalidCpf = '00591288412';
    const result = validateCpf(invalidCpf);
    assertEquals(typeof result, 'string');
    assertEquals(result, 'Invalid CPF');
  });
  it('return String of error when empty text', () => {
    const invalidCpf = '';
    const result = validateCpf('');
    assertEquals(typeof result, 'string');
    assertEquals(result, 'Invalid CPF');
  });
});
