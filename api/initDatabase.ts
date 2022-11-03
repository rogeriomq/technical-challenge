import { db } from "./src/server/repositories/database/db.ts";

console.log('>>> Initialize Database...');
// Table CNPJ
await db.queryObject(`
  DROP TABLE IF EXISTS "public"."Cnpj";
  DROP SEQUENCE IF EXISTS "Cnpj_id_seq";
`);

await db.queryObject(`
  CREATE SEQUENCE IF NOT EXISTS "Cnpj_id_seq";
`);

await db.queryObject(`
  CREATE TABLE "public"."Cnpj" (
    "id" int4 NOT NULL DEFAULT nextval('"Cnpj_id_seq"'),
    "value" text NOT NULL,
    PRIMARY KEY ("id"),
    CONSTRAINT cnpj_value_unique UNIQUE(value)
  );
`);

// Table CPF
await db.queryObject(`
  DROP TABLE IF EXISTS "public"."Cpf";
  DROP SEQUENCE IF EXISTS "Cpf_id_seq";
`);

await db.queryObject(`
  CREATE SEQUENCE IF NOT EXISTS "Cpf_id_seq";
`);

await db.queryObject(`
  CREATE TABLE "public"."Cpf" (
    "id" int4 NOT NULL DEFAULT nextval('"Cpf_id_seq"'),
    "value" text NOT NULL,
    PRIMARY KEY ("id"),
    CONSTRAINT cpf_value_unique UNIQUE(value)
  );
`);

await db.end();

console.log('>>> Initialize Database - [ OK ]');
