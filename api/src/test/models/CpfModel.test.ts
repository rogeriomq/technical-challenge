import {
  assertEquals,
  assertExists,
  assertInstanceOf,
  describe,
  generateCpf,
  it,
} from '../../../dev_deps.ts';
import { Cpf } from '../../models/CpfModel.ts';

describe('Model -> CPF', () => {
  describe('when a default instance: ', () => {
    const instance = Cpf.instance();
    it('id is UNDEFINED and value is an STRING EMPTY', () => {
      assertEquals(instance.id, undefined);
      assertEquals(instance.value, '');
      assertExists(instance.validate, 'Not found validate method.');
      assertInstanceOf(instance, Cpf);
    });

    it('validate function return error[Invalid CPF]', () => {
      assertEquals(instance.validate(), 'Invalid CPF');
    });
  });

  describe('when a new invalid CPF instance:', () => {
    const cpf = new Cpf({ value: '005.912.666-78' });
    it('failure validate', () => {
      const validateResult = cpf.validate();
      assertEquals(typeof validateResult, 'string');
      assertEquals(validateResult, 'Invalid CPF');
    });
  });

  describe('when a valid CPF instance:', () => {
    const str = generateCpf();
    const onlyDigits = str.replace(/[^\d]/g, '');
    const cpf = new Cpf({ value: onlyDigits });
    it('validate return null', () => {
      const validateResult = cpf.validate();
      assertEquals(typeof validateResult, 'object');
      assertEquals(validateResult, null);
    });

    it('cleaned return only numbers', () => {
      assertEquals(cpf.cleaned(), onlyDigits);
    });
  });
});
