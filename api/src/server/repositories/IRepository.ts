export type QueryType = {
  like?: string;
  sort?: 'asc' | 'desc';
};

export interface IRepository<M, T> {
  findAll({ like, sort }: QueryType): Promise<T[]>;
  create(model: M): Promise<void>;
  update(id: number, value: M): Promise<number>;
  delete(id: number): Promise<number>;
}
