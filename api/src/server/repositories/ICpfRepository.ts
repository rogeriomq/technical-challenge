import { Cpf, CpfType } from '../../models/CpfModel.ts';

export type QueryType = {
  like?: string;
  sort?: 'asc' | 'desc';
};

export interface ICpfRepository {
  findAll({ like, sort }: QueryType): Promise<CpfType[]>;
  create(cpf: Cpf): Promise<void>;
  update(id: number, cpf: Cpf): Promise<number>;
  delete(id: number): Promise<number>;
}
