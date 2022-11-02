
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.5.0
 * Query Engine version: 0362da9eebca54d94c8ef5edd3b2e90af99ba452
 */
Prisma.prismaVersion = {
  client: "4.5.0",
  engine: "0362da9eebca54d94c8ef5edd3b2e90af99ba452"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "generated/client",
    "client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.CnpjScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value'
});

exports.Prisma.CpfScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.StatsScalarFieldEnum = makeEnum({
  id: 'id',
  method: 'method',
  path: 'path',
  query: 'query'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});
exports.HttpMethod = makeEnum({
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  OPTIONS: 'OPTIONS',
  PATCH: 'PATCH'
});

exports.Prisma.ModelName = makeEnum({
  Cpf: 'Cpf',
  Cnpj: 'Cnpj',
  Stats: 'Stats'
});

const compressedDMMF = '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'
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/destroyer/Projects/RMQ/neoway/technical-challenge/api/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "4.5.0",
  "engineVersion": "0362da9eebca54d94c8ef5edd3b2e90af99ba452",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": true
}
config.document = dmmf
config.dirname = dirname

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KICBvdXRwdXQgICAgICAgICAgPSAiLi4vZ2VuZXJhdGVkL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKbW9kZWwgQ3BmIHsKICBpZCAgICBJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICB2YWx1ZSBTdHJpbmcgQHVuaXF1ZQp9Cgptb2RlbCBDbnBqIHsKICBpZCAgICBJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICB2YWx1ZSBTdHJpbmcgQHVuaXF1ZQp9Cgptb2RlbCBTdGF0cyB7CiAgaWQgICAgIEludCAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBtZXRob2QgSHR0cE1ldGhvZAogIHBhdGggICBTdHJpbmcKICBxdWVyeSAgU3RyaW5nCn0KCmVudW0gSHR0cE1ldGhvZCB7CiAgR0VUCiAgUE9TVAogIFBVVAogIERFTEVURQogIE9QVElPTlMKICBQQVRDSAp9Cg=='
config.inlineSchemaHash = 'd7dc52786ccf624474b8e3510a49e54b07b9caf28fcee3262e65dcd562bdcd5a'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}


const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

