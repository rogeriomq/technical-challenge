export interface ICpfCnpjModel {
  validate(): string | null;
  cleaned(): string;
}
