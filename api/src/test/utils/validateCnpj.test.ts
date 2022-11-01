import { assertEquals, describe, generateCnpj, it } from '../../../dev_deps.ts';
import { validateCnpj } from '../../utils/validateCnpj.ts';

describe('Fn -> validateCnpj', () => {
  it('return null when input a valid CNPJ', () => {
    const valid = generateCnpj();
    const result = validateCnpj(valid);
    assertEquals(typeof result, 'object');
    assertEquals(result, null);
  });
  it('return String of the error when invalid CNPJ', () => {
    const invalid = '00591288412';
    const result = validateCnpj(invalid);
    assertEquals(typeof result, 'string');
    assertEquals(result, 'Invalid CNPJ');
  });
  it('return String of error when empty text', () => {
    const invalid = '';
    const result = validateCnpj(invalid);
    assertEquals(typeof result, 'string');
    assertEquals(result, 'Invalid CNPJ');
  });
});
