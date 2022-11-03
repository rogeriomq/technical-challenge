import {
  assertEquals,
  assertExists,
  assertInstanceOf,
  describe,
  generateCnpj,
  it,
} from '../../../dev_deps.ts';
import { Cnpj } from '../../models/CnpjModel.ts';

describe('Model -> CNPJ', () => {
  describe('when a default instance: ', () => {
    const cnpj = Cnpj.instance();
    it('id is UNDEFINED and value is an STRING EMPTY', () => {
      assertEquals(cnpj.id, undefined);
      assertEquals(cnpj.value, '');
      assertExists(cnpj.validate, 'Not found validate method.');
      assertInstanceOf(cnpj, Cnpj);
    });

    it('validate function return error[CNPJ not is valid]', () => {
      assertEquals(cnpj.validate(), 'Invalid CNPJ');
    });
  });

  describe('when a new invalid CNPJ instance:', () => {
    const cnpj = new Cnpj({ value: '68.326.854/7352-04' });
    it('failure validate', () => {
      const validateResult = cnpj.validate();
      assertEquals(typeof validateResult, 'string');
      assertEquals(validateResult, 'Invalid CNPJ');
    });
  });

  describe('when a valid CNPJ instance:', () => {
    const strCnpj = generateCnpj();
    const onlyDigits = strCnpj.replace(/[^\d]/g, '');
    const cnpj = new Cnpj({ value: onlyDigits });
    it('validate return null', () => {
      const validateResult = cnpj.validate();
      assertEquals(typeof validateResult, 'object');
      assertEquals(validateResult, null);
    });

    it('cleaned return only numbers', () => {
      assertEquals(cnpj.cleaned(), onlyDigits);
    });
  });
});
