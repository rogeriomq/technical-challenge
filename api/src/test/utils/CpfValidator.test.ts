import { assertEquals, describe, generateCpf, it } from '../../../dev_deps.ts';
import CpfValidator from '../../utils/CpfValidator.ts';

const makeValidateCpfDepSpy = () => () => true;

const makeSut = () => {
  const sut = new CpfValidator();
  sut.validateDep = makeValidateCpfDepSpy();
  return {
    sut,
  };
};

describe('Utils -> CpfValidator', () => {
  it('Should return null when input a valid cpf', () => {
    const validCpf = generateCpf();
    const { sut } = makeSut();
    const result = sut.validate(validCpf);
    assertEquals(typeof result, 'object');
    assertEquals(result, null);
  });
  it('Should return string of error when invalid cpf', () => {
    const invalidCpf = '00591288412';
    const { sut } = makeSut();
    sut.validateDep = () => false;
    const result = sut.validate(invalidCpf);
    assertEquals(typeof result, 'string');
    assertEquals(result, 'Invalid CPF');
  });
  it('Should return string of error when empty text', () => {
    const invalidCpf = '';
    const { sut } = makeSut();
    sut.validateDep = () => false;
    const result = sut.validate(invalidCpf);
    assertEquals(typeof result, 'string');
    assertEquals(result, 'Invalid CPF');
  });
});
