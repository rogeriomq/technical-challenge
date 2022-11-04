import { Cnpj } from '../../models/models.ts';

export type filterType = {
  like?: string;
};

export interface ICnpjRepository {
  findAll({ like }: filterType): Promise<unknown>;
  create(cnpj: Cnpj): Promise<unknown>;
  update(id: number, cnpj: Cnpj): Promise<unknown>;
  delete(id: number): Promise<unknown>;
}
