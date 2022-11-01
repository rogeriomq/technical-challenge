export default interface ModelCpfCnpj {
  validate(): string | null;
  cleaned(): string;
}
