import { ModelError } from '../../../exceptions/errors.ts';
import { CpfType } from '../../../models/CpfModel.ts';
import { Cnpj } from '../../../models/models.ts';
import { onlyDigits } from '../../../utils/onlyDigits.ts';
import { db } from '../database/db.ts';
import type { filterType } from '../ICnpjRepository.ts';
import { ICnpjRepository } from '../ICnpjRepository.ts';

export class CnpjRepository implements ICnpjRepository {
  async findAll({ like }: filterType) {
    try {
      let exp;

      if (like) {
        exp = `WHERE c."value" LIKE \'%${onlyDigits(like)}%\'`;
      }
      const where = exp || '';
      const { rows } = await db.queryObject<CpfType>({
        text:
          `SELECT c.id, c."value" FROM "Cnpj" as c ${where} ORDER BY "value"`,
      });

      return rows;
    } catch (error) {
      throw error;
    }
  }

  async create(cnpj: Cnpj): Promise<void> {
    const isInvalid = cnpj.validate();
    if (isInvalid) {
      throw new ModelError(isInvalid);
    }

    try {
      const result = await db.queryObject({
        text: 'INSERT INTO "Cnpj"("value") VALUES ($cnpj)',
        args: { cnpj: cnpj.cleaned() },
      });
      console.log({ result });
    } catch (e) {
      throw e;
    }
  }

  async update(id: number, cnpj: Cnpj): Promise<number> {
    const isInvalid = cnpj.validate();
    if (isInvalid) {
      throw new ModelError(isInvalid);
    }
    try {
      const result = await db.queryObject({
        text: `UPDATE "Cnpj" SET "value" = $cnpj WHERE "id"=$id `,
        args: { cnpj: cnpj.cleaned(), id: id },
      });
      console.log({ result });

      return result.rowCount || 0;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<number> {
    try {
      const result = await db.queryObject({
        text: `DELETE FROM "Cnpj" WHERE "id" = $id`,
        args: { id },
      });

      return result.rowCount || 0;
    } catch (error) {
      throw error;
    }
  }
}
