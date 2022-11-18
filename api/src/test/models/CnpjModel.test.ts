import {
  assertEquals,
  assertExists,
  assertInstanceOf,
  describe,
  generateCnpj,
  it,
} from '../../../dev_deps.ts';
import { Cnpj } from '../../models/CnpjModel.ts';

const makeSut = () => {
  return {
    sut: Cnpj.instance(),
  };
};

describe('Model -> CNPJ', () => {
  const { sut } = makeSut();
  it('Should id UNDEFINED and value is empty when call default instance', () => {
    assertEquals(sut.id, undefined);
    assertEquals(sut.value, '');
    assertExists(sut.validate, 'Not found validate method.');
    assertInstanceOf(sut, Cnpj);
  });

  it('Should return error[CNPJ not is valid] when call validate method with default instance', () => {
    assertEquals(sut.validate(), 'Invalid CNPJ');
  });

  it('Should failure validate, return a error text with invalid CNPJ', () => {
    const { sut } = makeSut();
    sut.value = '68.326.854/7352-04';
    const validateResult = sut.validate();
    assertEquals(typeof validateResult, 'string');
    assertEquals(validateResult, 'Invalid CNPJ');
  });

  describe('when a valid CNPJ instance:', () => {
    const onlyDigits = generateCnpj().replace(/[^\d]/g, '');
    const { sut } = makeSut();
    sut.value = onlyDigits;

    it('Should validate method return null', () => {
      const validateResult = sut.validate();
      assertEquals(typeof validateResult, 'object');
      assertEquals(validateResult, null);
    });
  });

  it('Should cleaned method return only numbers', () => {
    const onlyDigits = generateCnpj().replace(/[^\d]/g, '');
    const { sut } = makeSut();
    sut.value = onlyDigits;
    assertEquals(sut.cleaned(), onlyDigits);
  });
});
