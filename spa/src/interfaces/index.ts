
interface IData {
  id: number;
  value: string;
}

export type ICpf = IData;

export type ICnpj = IData;

export interface IStatusServer {
  uptime: number
  totalRequests: number
}
