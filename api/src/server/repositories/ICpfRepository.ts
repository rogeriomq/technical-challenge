import { Cpf } from '../../models/CpfModel.ts';

export type filterType = {
  like?: string;
};

export interface ICpfRepository {
  findAll({ like }: filterType): Promise<unknown>;
  create(cpf: Cpf): Promise<void>;
  update(id: number, cpf: Cpf): Promise<void>;
  delete(id: number): Promise<unknown>;
}
