import { CnpjType } from '../../models/CnpjModel.ts';
import { Cnpj } from '../../models/models.ts';

export type QueryType = {
  like?: string;
  sort?: 'asc' | 'desc';
};

export interface ICnpjRepository {
  findAll({ like, sort }: QueryType): Promise<CnpjType[]>;
  create(cnpj: Cnpj): Promise<void>;
  update(id: number, cnpj: Cnpj): Promise<number>;
  delete(id: number): Promise<number>;
}
