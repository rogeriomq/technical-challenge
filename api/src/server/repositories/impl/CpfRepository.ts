import { ModelError } from '../../../exceptions/errors.ts';
import { Cpf, CpfType } from '../../../models/CpfModel.ts';
import { onlyDigits } from '../../../utils/onlyDigits.ts';
import { db } from '../database/db.ts';
import { filterType, ICpfRepository } from '../ICpfRepository.ts';

export class CpfRepository implements ICpfRepository {
  async findAll({ like }: filterType) {
    try {
      let exp;

      if (like) {
        exp = `WHERE c."value" LIKE \'%${onlyDigits(like)}%\'`;
      }
      const where = exp || '';
      const { rows } = await db.queryObject<CpfType>({
        text:
          `SELECT c.id, c."value" FROM "Cpf" as c ${where} ORDER BY "value" limit 100`,
      });

      return rows;
    } catch (error) {
      throw error;
    }
  }

  async create(cpf: Cpf): Promise<void> {
    const isInvalid = cpf.validate();
    if (isInvalid) {
      throw new ModelError(isInvalid);
    }

    try {
      const result = await db.queryObject({
        text: 'INSERT INTO "Cpf"("value") VALUES ($cpf)',
        args: { cpf: cpf.cleaned() },
      });
      console.log({ result });
    } catch (e) {
      throw e;
    }
  }

  async update(id: number, cpf: Cpf): Promise<void> {
    const isInvalid = cpf.validate();
    if (isInvalid) {
      throw new ModelError(isInvalid);
    }
    try {
      const result = await db.queryObject({
        text: `UPDATE "Cpf" SET "value" = $cpf WHERE "id"=$id `,
        args: { cpf: cpf.cleaned(), id: id },
      });
      console.log({ result });
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<number> {
    try {
      const result = await db.queryObject({
        text: `DELETE FROM "Cpf" WHERE "id" = $id`,
        args: { id },
      });

      return result.rowCount || 0;
    } catch (error) {
      throw error;
    }
  }
}
