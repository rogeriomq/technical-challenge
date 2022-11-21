import { ModelError } from '../../../exceptions/errors.ts';
import { Cnpj, CnpjType } from '../../../models/CnpjModel.ts';
import { onlyDigits } from '../../../utils/onlyDigits.ts';
import { db } from '../database/db.ts';
// import IDb from '../database/IDb.ts';
import type { QueryType } from '../ICnpjRepository.ts';
import { IRepository } from '../IRepository.ts';

export class CnpjRepository implements IRepository<Cnpj, CnpjType> {
  // #db;
  // constructor(db: IDb) {
  //   this.#db = db;
  // }
  async findAll({ like, sort }: QueryType): Promise<CnpjType[]> {
    try {
      // const connection = await this.#db.connection();
      const exp = like && `WHERE c."value" LIKE \'%${onlyDigits(like)}%\'`;
      const order = sort || 'asc';
      const where = exp || '';
      const { rows } = await db.queryObject<CnpjType>({
        text:
          'SELECT c.id, c."value" FROM "Cnpj" as c $where ORDER BY "value" $order',
        args: {
          where,
          order,
        },
      });

      return rows;
    } catch (error) {
      throw error;
    }
  }

  async create(model: Cnpj): Promise<void> {
    const isInvalid = model.validate();
    if (isInvalid) {
      throw new ModelError(isInvalid);
    }

    try {
      const result = await db.queryObject({
        text: 'INSERT INTO "Cnpj"("value") VALUES ($cnpj)',
        args: { cnpj: model.cleaned() },
      });
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
