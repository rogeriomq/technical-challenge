import { assertEquals, describe, generateCnpj, it } from '../../../dev_deps.ts';
import CnpjValidator from '../../utils/CnpjValidator.ts';

const makeValidateCnpjDepSpy = () => () => true;

const makeSut = () => {
  const sut = new CnpjValidator();
  sut.validateDep = makeValidateCnpjDepSpy();
  return {
    sut,
  };
};

describe('Utils -> CnpjValidator', () => {
  it('Should return null when input a valid CNPJ', () => {
    const valid = generateCnpj();
    const { sut } = makeSut();
    const result = sut.validate(valid);
    assertEquals(typeof result, 'object');
    assertEquals(result, null);
  });
  it('Should return String of the error when invalid CNPJ', () => {
    const invalid = '00591288412';
    const { sut } = makeSut();
    sut.validateDep = () => false;
    const result = sut.validate(invalid);
    assertEquals(typeof result, 'string');
    assertEquals(result, 'Invalid CNPJ');
  });
  it('Should return String of error when empty text', () => {
    const invalid = '';
    const { sut } = makeSut();
    sut.validateDep = () => false;
    const result = sut.validate(invalid);
    assertEquals(typeof result, 'string');
    assertEquals(result, 'Invalid CNPJ');
  });
});
