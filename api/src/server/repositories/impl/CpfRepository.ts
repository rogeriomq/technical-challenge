import { ModelError } from '../../../exceptions/errors.ts';
import { Cpf, CpfType } from '../../../models/CpfModel.ts';
import { onlyDigits } from '../../../utils/onlyDigits.ts';
import { db } from '../database/db.ts';
import type { QueryType } from '../ICpfRepository.ts';
import { ICpfRepository } from '../ICpfRepository.ts';
export class CpfRepository implements ICpfRepository {
  async findAll({ like, sort }: QueryType): Promise<CpfType[]> {
    try {
      const exp = like && `WHERE c."value" LIKE \'%${onlyDigits(like)}%\'`;
      const order = sort || 'asc';
      const where = exp || '';
      const { rows } = await db.queryObject<CpfType>({
        text:
          `SELECT c.id, c."value" FROM "Cpf" as c ${where} ORDER BY "value" ${order}`,
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

  async update(id: number, cpf: Cpf): Promise<number> {
    const isInvalid = cpf.validate();
    if (isInvalid) {
      throw new ModelError(isInvalid);
    }
    try {
      const result = await db.queryObject({
        text: `UPDATE "Cpf" SET "value" = $cpf WHERE "id"=$id `,
        args: { cpf: cpf.cleaned(), id },
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
        text: `DELETE FROM "Cpf" WHERE "id" = $id`,
        args: { id },
      });

      return result.rowCount || 0;
    } catch (error) {
      throw error;
    }
  }
}
