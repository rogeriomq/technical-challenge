
/**
 * Client
**/

import * as runtime from '.././runtime/index.d.ts';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Cpf
 * 
 */
export type Cpf = {
  id: number
  value: string
}

/**
 * Model Cnpj
 * 
 */
export type Cnpj = {
  id: number
  value: string
}

/**
 * Model Stats
 * 
 */
export type Stats = {
  id: number
  method: HttpMethod
  path: string
  query: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const HttpMethod: {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  OPTIONS: 'OPTIONS',
  PATCH: 'PATCH'
};

export type HttpMethod = (typeof HttpMethod)[keyof typeof HttpMethod]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cpfs
 * const cpfs = await prisma.cpf.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cpfs
   * const cpfs = await prisma.cpf.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.cpf`: Exposes CRUD operations for the **Cpf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cpfs
    * const cpfs = await prisma.cpf.findMany()
    * ```
    */
  get cpf(): Prisma.CpfDelegate<GlobalReject>;

  /**
   * `prisma.cnpj`: Exposes CRUD operations for the **Cnpj** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cnpjs
    * const cnpjs = await prisma.cnpj.findMany()
    * ```
    */
  get cnpj(): Prisma.CnpjDelegate<GlobalReject>;

  /**
   * `prisma.stats`: Exposes CRUD operations for the **Stats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stats
    * const stats = await prisma.stats.findMany()
    * ```
    */
  get stats(): Prisma.StatsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Extensions
   */
  export type Extension = runtime.Extension 

  /**
   * Prisma Client JS version: 4.5.0
   * Query Engine version: 0362da9eebca54d94c8ef5edd3b2e90af99ba452
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Cpf: 'Cpf',
    Cnpj: 'Cnpj',
    Stats: 'Stats'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Cpf
   */


  export type AggregateCpf = {
    _count: CpfCountAggregateOutputType | null
    _avg: CpfAvgAggregateOutputType | null
    _sum: CpfSumAggregateOutputType | null
    _min: CpfMinAggregateOutputType | null
    _max: CpfMaxAggregateOutputType | null
  }

  export type CpfAvgAggregateOutputType = {
    id: number | null
  }

  export type CpfSumAggregateOutputType = {
    id: number | null
  }

  export type CpfMinAggregateOutputType = {
    id: number | null
    value: string | null
  }

  export type CpfMaxAggregateOutputType = {
    id: number | null
    value: string | null
  }

  export type CpfCountAggregateOutputType = {
    id: number
    value: number
    _all: number
  }


  export type CpfAvgAggregateInputType = {
    id?: true
  }

  export type CpfSumAggregateInputType = {
    id?: true
  }

  export type CpfMinAggregateInputType = {
    id?: true
    value?: true
  }

  export type CpfMaxAggregateInputType = {
    id?: true
    value?: true
  }

  export type CpfCountAggregateInputType = {
    id?: true
    value?: true
    _all?: true
  }

  export type CpfAggregateArgs = {
    /**
     * Filter which Cpf to aggregate.
     * 
    **/
    where?: CpfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cpfs to fetch.
     * 
    **/
    orderBy?: Enumerable<CpfOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CpfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cpfs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cpfs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cpfs
    **/
    _count?: true | CpfCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CpfAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CpfSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CpfMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CpfMaxAggregateInputType
  }

  export type GetCpfAggregateType<T extends CpfAggregateArgs> = {
        [P in keyof T & keyof AggregateCpf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCpf[P]>
      : GetScalarType<T[P], AggregateCpf[P]>
  }




  export type CpfGroupByArgs = {
    where?: CpfWhereInput
    orderBy?: Enumerable<CpfOrderByWithAggregationInput>
    by: Array<CpfScalarFieldEnum>
    having?: CpfScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CpfCountAggregateInputType | true
    _avg?: CpfAvgAggregateInputType
    _sum?: CpfSumAggregateInputType
    _min?: CpfMinAggregateInputType
    _max?: CpfMaxAggregateInputType
  }


  export type CpfGroupByOutputType = {
    id: number
    value: string
    _count: CpfCountAggregateOutputType | null
    _avg: CpfAvgAggregateOutputType | null
    _sum: CpfSumAggregateOutputType | null
    _min: CpfMinAggregateOutputType | null
    _max: CpfMaxAggregateOutputType | null
  }

  type GetCpfGroupByPayload<T extends CpfGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CpfGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CpfGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CpfGroupByOutputType[P]>
            : GetScalarType<T[P], CpfGroupByOutputType[P]>
        }
      >
    >


  export type CpfSelect = {
    id?: boolean
    value?: boolean
  }

  export type CpfGetPayload<
    S extends boolean | null | undefined | CpfArgs,
    U = keyof S
      > = S extends true
        ? Cpf
    : S extends undefined
    ? never
    : S extends CpfArgs | CpfFindManyArgs
    ?'include' extends U
    ? Cpf 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Cpf ? Cpf[P] : never
  } 
    : Cpf
  : Cpf


  type CpfCountArgs = Merge<
    Omit<CpfFindManyArgs, 'select' | 'include'> & {
      select?: CpfCountAggregateInputType | true
    }
  >

  export interface CpfDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Cpf that matches the filter.
     * @param {CpfFindUniqueArgs} args - Arguments to find a Cpf
     * @example
     * // Get one Cpf
     * const cpf = await prisma.cpf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CpfFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CpfFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Cpf'> extends True ? CheckSelect<T, Prisma__CpfClient<Cpf>, Prisma__CpfClient<CpfGetPayload<T>>> : CheckSelect<T, Prisma__CpfClient<Cpf | null, null>, Prisma__CpfClient<CpfGetPayload<T> | null, null>>

    /**
     * Find the first Cpf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CpfFindFirstArgs} args - Arguments to find a Cpf
     * @example
     * // Get one Cpf
     * const cpf = await prisma.cpf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CpfFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CpfFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Cpf'> extends True ? CheckSelect<T, Prisma__CpfClient<Cpf>, Prisma__CpfClient<CpfGetPayload<T>>> : CheckSelect<T, Prisma__CpfClient<Cpf | null, null>, Prisma__CpfClient<CpfGetPayload<T> | null, null>>

    /**
     * Find zero or more Cpfs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CpfFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cpfs
     * const cpfs = await prisma.cpf.findMany()
     * 
     * // Get first 10 Cpfs
     * const cpfs = await prisma.cpf.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cpfWithIdOnly = await prisma.cpf.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CpfFindManyArgs>(
      args?: SelectSubset<T, CpfFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Cpf>>, PrismaPromise<Array<CpfGetPayload<T>>>>

    /**
     * Create a Cpf.
     * @param {CpfCreateArgs} args - Arguments to create a Cpf.
     * @example
     * // Create one Cpf
     * const Cpf = await prisma.cpf.create({
     *   data: {
     *     // ... data to create a Cpf
     *   }
     * })
     * 
    **/
    create<T extends CpfCreateArgs>(
      args: SelectSubset<T, CpfCreateArgs>
    ): CheckSelect<T, Prisma__CpfClient<Cpf>, Prisma__CpfClient<CpfGetPayload<T>>>

    /**
     * Create many Cpfs.
     *     @param {CpfCreateManyArgs} args - Arguments to create many Cpfs.
     *     @example
     *     // Create many Cpfs
     *     const cpf = await prisma.cpf.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CpfCreateManyArgs>(
      args?: SelectSubset<T, CpfCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Cpf.
     * @param {CpfDeleteArgs} args - Arguments to delete one Cpf.
     * @example
     * // Delete one Cpf
     * const Cpf = await prisma.cpf.delete({
     *   where: {
     *     // ... filter to delete one Cpf
     *   }
     * })
     * 
    **/
    delete<T extends CpfDeleteArgs>(
      args: SelectSubset<T, CpfDeleteArgs>
    ): CheckSelect<T, Prisma__CpfClient<Cpf>, Prisma__CpfClient<CpfGetPayload<T>>>

    /**
     * Update one Cpf.
     * @param {CpfUpdateArgs} args - Arguments to update one Cpf.
     * @example
     * // Update one Cpf
     * const cpf = await prisma.cpf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CpfUpdateArgs>(
      args: SelectSubset<T, CpfUpdateArgs>
    ): CheckSelect<T, Prisma__CpfClient<Cpf>, Prisma__CpfClient<CpfGetPayload<T>>>

    /**
     * Delete zero or more Cpfs.
     * @param {CpfDeleteManyArgs} args - Arguments to filter Cpfs to delete.
     * @example
     * // Delete a few Cpfs
     * const { count } = await prisma.cpf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CpfDeleteManyArgs>(
      args?: SelectSubset<T, CpfDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cpfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CpfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cpfs
     * const cpf = await prisma.cpf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CpfUpdateManyArgs>(
      args: SelectSubset<T, CpfUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Cpf.
     * @param {CpfUpsertArgs} args - Arguments to update or create a Cpf.
     * @example
     * // Update or create a Cpf
     * const cpf = await prisma.cpf.upsert({
     *   create: {
     *     // ... data to create a Cpf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cpf we want to update
     *   }
     * })
    **/
    upsert<T extends CpfUpsertArgs>(
      args: SelectSubset<T, CpfUpsertArgs>
    ): CheckSelect<T, Prisma__CpfClient<Cpf>, Prisma__CpfClient<CpfGetPayload<T>>>

    /**
     * Find one Cpf that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {CpfFindUniqueOrThrowArgs} args - Arguments to find a Cpf
     * @example
     * // Get one Cpf
     * const cpf = await prisma.cpf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CpfFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CpfFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__CpfClient<Cpf>, Prisma__CpfClient<CpfGetPayload<T>>>

    /**
     * Find the first Cpf that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CpfFindFirstOrThrowArgs} args - Arguments to find a Cpf
     * @example
     * // Get one Cpf
     * const cpf = await prisma.cpf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CpfFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CpfFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__CpfClient<Cpf>, Prisma__CpfClient<CpfGetPayload<T>>>

    /**
     * Count the number of Cpfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CpfCountArgs} args - Arguments to filter Cpfs to count.
     * @example
     * // Count the number of Cpfs
     * const count = await prisma.cpf.count({
     *   where: {
     *     // ... the filter for the Cpfs we want to count
     *   }
     * })
    **/
    count<T extends CpfCountArgs>(
      args?: Subset<T, CpfCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CpfCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cpf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CpfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CpfAggregateArgs>(args: Subset<T, CpfAggregateArgs>): PrismaPromise<GetCpfAggregateType<T>>

    /**
     * Group by Cpf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CpfGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CpfGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CpfGroupByArgs['orderBy'] }
        : { orderBy?: CpfGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CpfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCpfGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Cpf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CpfClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Cpf base type for findUnique actions
   */
  export type CpfFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Cpf
     * 
    **/
    select?: CpfSelect | null
    /**
     * Filter, which Cpf to fetch.
     * 
    **/
    where: CpfWhereUniqueInput
  }

  /**
   * Cpf: findUnique
   */
  export interface CpfFindUniqueArgs extends CpfFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Cpf base type for findFirst actions
   */
  export type CpfFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Cpf
     * 
    **/
    select?: CpfSelect | null
    /**
     * Filter, which Cpf to fetch.
     * 
    **/
    where?: CpfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cpfs to fetch.
     * 
    **/
    orderBy?: Enumerable<CpfOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cpfs.
     * 
    **/
    cursor?: CpfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cpfs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cpfs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cpfs.
     * 
    **/
    distinct?: Enumerable<CpfScalarFieldEnum>
  }

  /**
   * Cpf: findFirst
   */
  export interface CpfFindFirstArgs extends CpfFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Cpf findMany
   */
  export type CpfFindManyArgs = {
    /**
     * Select specific fields to fetch from the Cpf
     * 
    **/
    select?: CpfSelect | null
    /**
     * Filter, which Cpfs to fetch.
     * 
    **/
    where?: CpfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cpfs to fetch.
     * 
    **/
    orderBy?: Enumerable<CpfOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cpfs.
     * 
    **/
    cursor?: CpfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cpfs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cpfs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CpfScalarFieldEnum>
  }


  /**
   * Cpf create
   */
  export type CpfCreateArgs = {
    /**
     * Select specific fields to fetch from the Cpf
     * 
    **/
    select?: CpfSelect | null
    /**
     * The data needed to create a Cpf.
     * 
    **/
    data: XOR<CpfCreateInput, CpfUncheckedCreateInput>
  }


  /**
   * Cpf createMany
   */
  export type CpfCreateManyArgs = {
    /**
     * The data used to create many Cpfs.
     * 
    **/
    data: Enumerable<CpfCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Cpf update
   */
  export type CpfUpdateArgs = {
    /**
     * Select specific fields to fetch from the Cpf
     * 
    **/
    select?: CpfSelect | null
    /**
     * The data needed to update a Cpf.
     * 
    **/
    data: XOR<CpfUpdateInput, CpfUncheckedUpdateInput>
    /**
     * Choose, which Cpf to update.
     * 
    **/
    where: CpfWhereUniqueInput
  }


  /**
   * Cpf updateMany
   */
  export type CpfUpdateManyArgs = {
    /**
     * The data used to update Cpfs.
     * 
    **/
    data: XOR<CpfUpdateManyMutationInput, CpfUncheckedUpdateManyInput>
    /**
     * Filter which Cpfs to update
     * 
    **/
    where?: CpfWhereInput
  }


  /**
   * Cpf upsert
   */
  export type CpfUpsertArgs = {
    /**
     * Select specific fields to fetch from the Cpf
     * 
    **/
    select?: CpfSelect | null
    /**
     * The filter to search for the Cpf to update in case it exists.
     * 
    **/
    where: CpfWhereUniqueInput
    /**
     * In case the Cpf found by the `where` argument doesn't exist, create a new Cpf with this data.
     * 
    **/
    create: XOR<CpfCreateInput, CpfUncheckedCreateInput>
    /**
     * In case the Cpf was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CpfUpdateInput, CpfUncheckedUpdateInput>
  }


  /**
   * Cpf delete
   */
  export type CpfDeleteArgs = {
    /**
     * Select specific fields to fetch from the Cpf
     * 
    **/
    select?: CpfSelect | null
    /**
     * Filter which Cpf to delete.
     * 
    **/
    where: CpfWhereUniqueInput
  }


  /**
   * Cpf deleteMany
   */
  export type CpfDeleteManyArgs = {
    /**
     * Filter which Cpfs to delete
     * 
    **/
    where?: CpfWhereInput
  }


  /**
   * Cpf: findUniqueOrThrow
   */
  export type CpfFindUniqueOrThrowArgs = CpfFindUniqueArgsBase
      

  /**
   * Cpf: findFirstOrThrow
   */
  export type CpfFindFirstOrThrowArgs = CpfFindFirstArgsBase
      

  /**
   * Cpf without action
   */
  export type CpfArgs = {
    /**
     * Select specific fields to fetch from the Cpf
     * 
    **/
    select?: CpfSelect | null
  }



  /**
   * Model Cnpj
   */


  export type AggregateCnpj = {
    _count: CnpjCountAggregateOutputType | null
    _avg: CnpjAvgAggregateOutputType | null
    _sum: CnpjSumAggregateOutputType | null
    _min: CnpjMinAggregateOutputType | null
    _max: CnpjMaxAggregateOutputType | null
  }

  export type CnpjAvgAggregateOutputType = {
    id: number | null
  }

  export type CnpjSumAggregateOutputType = {
    id: number | null
  }

  export type CnpjMinAggregateOutputType = {
    id: number | null
    value: string | null
  }

  export type CnpjMaxAggregateOutputType = {
    id: number | null
    value: string | null
  }

  export type CnpjCountAggregateOutputType = {
    id: number
    value: number
    _all: number
  }


  export type CnpjAvgAggregateInputType = {
    id?: true
  }

  export type CnpjSumAggregateInputType = {
    id?: true
  }

  export type CnpjMinAggregateInputType = {
    id?: true
    value?: true
  }

  export type CnpjMaxAggregateInputType = {
    id?: true
    value?: true
  }

  export type CnpjCountAggregateInputType = {
    id?: true
    value?: true
    _all?: true
  }

  export type CnpjAggregateArgs = {
    /**
     * Filter which Cnpj to aggregate.
     * 
    **/
    where?: CnpjWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cnpjs to fetch.
     * 
    **/
    orderBy?: Enumerable<CnpjOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CnpjWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cnpjs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cnpjs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cnpjs
    **/
    _count?: true | CnpjCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CnpjAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CnpjSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CnpjMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CnpjMaxAggregateInputType
  }

  export type GetCnpjAggregateType<T extends CnpjAggregateArgs> = {
        [P in keyof T & keyof AggregateCnpj]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCnpj[P]>
      : GetScalarType<T[P], AggregateCnpj[P]>
  }




  export type CnpjGroupByArgs = {
    where?: CnpjWhereInput
    orderBy?: Enumerable<CnpjOrderByWithAggregationInput>
    by: Array<CnpjScalarFieldEnum>
    having?: CnpjScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CnpjCountAggregateInputType | true
    _avg?: CnpjAvgAggregateInputType
    _sum?: CnpjSumAggregateInputType
    _min?: CnpjMinAggregateInputType
    _max?: CnpjMaxAggregateInputType
  }


  export type CnpjGroupByOutputType = {
    id: number
    value: string
    _count: CnpjCountAggregateOutputType | null
    _avg: CnpjAvgAggregateOutputType | null
    _sum: CnpjSumAggregateOutputType | null
    _min: CnpjMinAggregateOutputType | null
    _max: CnpjMaxAggregateOutputType | null
  }

  type GetCnpjGroupByPayload<T extends CnpjGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CnpjGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CnpjGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CnpjGroupByOutputType[P]>
            : GetScalarType<T[P], CnpjGroupByOutputType[P]>
        }
      >
    >


  export type CnpjSelect = {
    id?: boolean
    value?: boolean
  }

  export type CnpjGetPayload<
    S extends boolean | null | undefined | CnpjArgs,
    U = keyof S
      > = S extends true
        ? Cnpj
    : S extends undefined
    ? never
    : S extends CnpjArgs | CnpjFindManyArgs
    ?'include' extends U
    ? Cnpj 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Cnpj ? Cnpj[P] : never
  } 
    : Cnpj
  : Cnpj


  type CnpjCountArgs = Merge<
    Omit<CnpjFindManyArgs, 'select' | 'include'> & {
      select?: CnpjCountAggregateInputType | true
    }
  >

  export interface CnpjDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Cnpj that matches the filter.
     * @param {CnpjFindUniqueArgs} args - Arguments to find a Cnpj
     * @example
     * // Get one Cnpj
     * const cnpj = await prisma.cnpj.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CnpjFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CnpjFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Cnpj'> extends True ? CheckSelect<T, Prisma__CnpjClient<Cnpj>, Prisma__CnpjClient<CnpjGetPayload<T>>> : CheckSelect<T, Prisma__CnpjClient<Cnpj | null, null>, Prisma__CnpjClient<CnpjGetPayload<T> | null, null>>

    /**
     * Find the first Cnpj that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CnpjFindFirstArgs} args - Arguments to find a Cnpj
     * @example
     * // Get one Cnpj
     * const cnpj = await prisma.cnpj.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CnpjFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CnpjFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Cnpj'> extends True ? CheckSelect<T, Prisma__CnpjClient<Cnpj>, Prisma__CnpjClient<CnpjGetPayload<T>>> : CheckSelect<T, Prisma__CnpjClient<Cnpj | null, null>, Prisma__CnpjClient<CnpjGetPayload<T> | null, null>>

    /**
     * Find zero or more Cnpjs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CnpjFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cnpjs
     * const cnpjs = await prisma.cnpj.findMany()
     * 
     * // Get first 10 Cnpjs
     * const cnpjs = await prisma.cnpj.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cnpjWithIdOnly = await prisma.cnpj.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CnpjFindManyArgs>(
      args?: SelectSubset<T, CnpjFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Cnpj>>, PrismaPromise<Array<CnpjGetPayload<T>>>>

    /**
     * Create a Cnpj.
     * @param {CnpjCreateArgs} args - Arguments to create a Cnpj.
     * @example
     * // Create one Cnpj
     * const Cnpj = await prisma.cnpj.create({
     *   data: {
     *     // ... data to create a Cnpj
     *   }
     * })
     * 
    **/
    create<T extends CnpjCreateArgs>(
      args: SelectSubset<T, CnpjCreateArgs>
    ): CheckSelect<T, Prisma__CnpjClient<Cnpj>, Prisma__CnpjClient<CnpjGetPayload<T>>>

    /**
     * Create many Cnpjs.
     *     @param {CnpjCreateManyArgs} args - Arguments to create many Cnpjs.
     *     @example
     *     // Create many Cnpjs
     *     const cnpj = await prisma.cnpj.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CnpjCreateManyArgs>(
      args?: SelectSubset<T, CnpjCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Cnpj.
     * @param {CnpjDeleteArgs} args - Arguments to delete one Cnpj.
     * @example
     * // Delete one Cnpj
     * const Cnpj = await prisma.cnpj.delete({
     *   where: {
     *     // ... filter to delete one Cnpj
     *   }
     * })
     * 
    **/
    delete<T extends CnpjDeleteArgs>(
      args: SelectSubset<T, CnpjDeleteArgs>
    ): CheckSelect<T, Prisma__CnpjClient<Cnpj>, Prisma__CnpjClient<CnpjGetPayload<T>>>

    /**
     * Update one Cnpj.
     * @param {CnpjUpdateArgs} args - Arguments to update one Cnpj.
     * @example
     * // Update one Cnpj
     * const cnpj = await prisma.cnpj.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CnpjUpdateArgs>(
      args: SelectSubset<T, CnpjUpdateArgs>
    ): CheckSelect<T, Prisma__CnpjClient<Cnpj>, Prisma__CnpjClient<CnpjGetPayload<T>>>

    /**
     * Delete zero or more Cnpjs.
     * @param {CnpjDeleteManyArgs} args - Arguments to filter Cnpjs to delete.
     * @example
     * // Delete a few Cnpjs
     * const { count } = await prisma.cnpj.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CnpjDeleteManyArgs>(
      args?: SelectSubset<T, CnpjDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cnpjs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CnpjUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cnpjs
     * const cnpj = await prisma.cnpj.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CnpjUpdateManyArgs>(
      args: SelectSubset<T, CnpjUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Cnpj.
     * @param {CnpjUpsertArgs} args - Arguments to update or create a Cnpj.
     * @example
     * // Update or create a Cnpj
     * const cnpj = await prisma.cnpj.upsert({
     *   create: {
     *     // ... data to create a Cnpj
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cnpj we want to update
     *   }
     * })
    **/
    upsert<T extends CnpjUpsertArgs>(
      args: SelectSubset<T, CnpjUpsertArgs>
    ): CheckSelect<T, Prisma__CnpjClient<Cnpj>, Prisma__CnpjClient<CnpjGetPayload<T>>>

    /**
     * Find one Cnpj that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {CnpjFindUniqueOrThrowArgs} args - Arguments to find a Cnpj
     * @example
     * // Get one Cnpj
     * const cnpj = await prisma.cnpj.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CnpjFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CnpjFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__CnpjClient<Cnpj>, Prisma__CnpjClient<CnpjGetPayload<T>>>

    /**
     * Find the first Cnpj that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CnpjFindFirstOrThrowArgs} args - Arguments to find a Cnpj
     * @example
     * // Get one Cnpj
     * const cnpj = await prisma.cnpj.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CnpjFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CnpjFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__CnpjClient<Cnpj>, Prisma__CnpjClient<CnpjGetPayload<T>>>

    /**
     * Count the number of Cnpjs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CnpjCountArgs} args - Arguments to filter Cnpjs to count.
     * @example
     * // Count the number of Cnpjs
     * const count = await prisma.cnpj.count({
     *   where: {
     *     // ... the filter for the Cnpjs we want to count
     *   }
     * })
    **/
    count<T extends CnpjCountArgs>(
      args?: Subset<T, CnpjCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CnpjCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cnpj.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CnpjAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CnpjAggregateArgs>(args: Subset<T, CnpjAggregateArgs>): PrismaPromise<GetCnpjAggregateType<T>>

    /**
     * Group by Cnpj.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CnpjGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CnpjGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CnpjGroupByArgs['orderBy'] }
        : { orderBy?: CnpjGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CnpjGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCnpjGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Cnpj.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CnpjClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Cnpj base type for findUnique actions
   */
  export type CnpjFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Cnpj
     * 
    **/
    select?: CnpjSelect | null
    /**
     * Filter, which Cnpj to fetch.
     * 
    **/
    where: CnpjWhereUniqueInput
  }

  /**
   * Cnpj: findUnique
   */
  export interface CnpjFindUniqueArgs extends CnpjFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Cnpj base type for findFirst actions
   */
  export type CnpjFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Cnpj
     * 
    **/
    select?: CnpjSelect | null
    /**
     * Filter, which Cnpj to fetch.
     * 
    **/
    where?: CnpjWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cnpjs to fetch.
     * 
    **/
    orderBy?: Enumerable<CnpjOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cnpjs.
     * 
    **/
    cursor?: CnpjWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cnpjs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cnpjs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cnpjs.
     * 
    **/
    distinct?: Enumerable<CnpjScalarFieldEnum>
  }

  /**
   * Cnpj: findFirst
   */
  export interface CnpjFindFirstArgs extends CnpjFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Cnpj findMany
   */
  export type CnpjFindManyArgs = {
    /**
     * Select specific fields to fetch from the Cnpj
     * 
    **/
    select?: CnpjSelect | null
    /**
     * Filter, which Cnpjs to fetch.
     * 
    **/
    where?: CnpjWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cnpjs to fetch.
     * 
    **/
    orderBy?: Enumerable<CnpjOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cnpjs.
     * 
    **/
    cursor?: CnpjWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cnpjs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cnpjs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CnpjScalarFieldEnum>
  }


  /**
   * Cnpj create
   */
  export type CnpjCreateArgs = {
    /**
     * Select specific fields to fetch from the Cnpj
     * 
    **/
    select?: CnpjSelect | null
    /**
     * The data needed to create a Cnpj.
     * 
    **/
    data: XOR<CnpjCreateInput, CnpjUncheckedCreateInput>
  }


  /**
   * Cnpj createMany
   */
  export type CnpjCreateManyArgs = {
    /**
     * The data used to create many Cnpjs.
     * 
    **/
    data: Enumerable<CnpjCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Cnpj update
   */
  export type CnpjUpdateArgs = {
    /**
     * Select specific fields to fetch from the Cnpj
     * 
    **/
    select?: CnpjSelect | null
    /**
     * The data needed to update a Cnpj.
     * 
    **/
    data: XOR<CnpjUpdateInput, CnpjUncheckedUpdateInput>
    /**
     * Choose, which Cnpj to update.
     * 
    **/
    where: CnpjWhereUniqueInput
  }


  /**
   * Cnpj updateMany
   */
  export type CnpjUpdateManyArgs = {
    /**
     * The data used to update Cnpjs.
     * 
    **/
    data: XOR<CnpjUpdateManyMutationInput, CnpjUncheckedUpdateManyInput>
    /**
     * Filter which Cnpjs to update
     * 
    **/
    where?: CnpjWhereInput
  }


  /**
   * Cnpj upsert
   */
  export type CnpjUpsertArgs = {
    /**
     * Select specific fields to fetch from the Cnpj
     * 
    **/
    select?: CnpjSelect | null
    /**
     * The filter to search for the Cnpj to update in case it exists.
     * 
    **/
    where: CnpjWhereUniqueInput
    /**
     * In case the Cnpj found by the `where` argument doesn't exist, create a new Cnpj with this data.
     * 
    **/
    create: XOR<CnpjCreateInput, CnpjUncheckedCreateInput>
    /**
     * In case the Cnpj was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CnpjUpdateInput, CnpjUncheckedUpdateInput>
  }


  /**
   * Cnpj delete
   */
  export type CnpjDeleteArgs = {
    /**
     * Select specific fields to fetch from the Cnpj
     * 
    **/
    select?: CnpjSelect | null
    /**
     * Filter which Cnpj to delete.
     * 
    **/
    where: CnpjWhereUniqueInput
  }


  /**
   * Cnpj deleteMany
   */
  export type CnpjDeleteManyArgs = {
    /**
     * Filter which Cnpjs to delete
     * 
    **/
    where?: CnpjWhereInput
  }


  /**
   * Cnpj: findUniqueOrThrow
   */
  export type CnpjFindUniqueOrThrowArgs = CnpjFindUniqueArgsBase
      

  /**
   * Cnpj: findFirstOrThrow
   */
  export type CnpjFindFirstOrThrowArgs = CnpjFindFirstArgsBase
      

  /**
   * Cnpj without action
   */
  export type CnpjArgs = {
    /**
     * Select specific fields to fetch from the Cnpj
     * 
    **/
    select?: CnpjSelect | null
  }



  /**
   * Model Stats
   */


  export type AggregateStats = {
    _count: StatsCountAggregateOutputType | null
    _avg: StatsAvgAggregateOutputType | null
    _sum: StatsSumAggregateOutputType | null
    _min: StatsMinAggregateOutputType | null
    _max: StatsMaxAggregateOutputType | null
  }

  export type StatsAvgAggregateOutputType = {
    id: number | null
  }

  export type StatsSumAggregateOutputType = {
    id: number | null
  }

  export type StatsMinAggregateOutputType = {
    id: number | null
    method: HttpMethod | null
    path: string | null
    query: string | null
  }

  export type StatsMaxAggregateOutputType = {
    id: number | null
    method: HttpMethod | null
    path: string | null
    query: string | null
  }

  export type StatsCountAggregateOutputType = {
    id: number
    method: number
    path: number
    query: number
    _all: number
  }


  export type StatsAvgAggregateInputType = {
    id?: true
  }

  export type StatsSumAggregateInputType = {
    id?: true
  }

  export type StatsMinAggregateInputType = {
    id?: true
    method?: true
    path?: true
    query?: true
  }

  export type StatsMaxAggregateInputType = {
    id?: true
    method?: true
    path?: true
    query?: true
  }

  export type StatsCountAggregateInputType = {
    id?: true
    method?: true
    path?: true
    query?: true
    _all?: true
  }

  export type StatsAggregateArgs = {
    /**
     * Filter which Stats to aggregate.
     * 
    **/
    where?: StatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     * 
    **/
    orderBy?: Enumerable<StatsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: StatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stats
    **/
    _count?: true | StatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatsMaxAggregateInputType
  }

  export type GetStatsAggregateType<T extends StatsAggregateArgs> = {
        [P in keyof T & keyof AggregateStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStats[P]>
      : GetScalarType<T[P], AggregateStats[P]>
  }




  export type StatsGroupByArgs = {
    where?: StatsWhereInput
    orderBy?: Enumerable<StatsOrderByWithAggregationInput>
    by: Array<StatsScalarFieldEnum>
    having?: StatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatsCountAggregateInputType | true
    _avg?: StatsAvgAggregateInputType
    _sum?: StatsSumAggregateInputType
    _min?: StatsMinAggregateInputType
    _max?: StatsMaxAggregateInputType
  }


  export type StatsGroupByOutputType = {
    id: number
    method: HttpMethod
    path: string
    query: string
    _count: StatsCountAggregateOutputType | null
    _avg: StatsAvgAggregateOutputType | null
    _sum: StatsSumAggregateOutputType | null
    _min: StatsMinAggregateOutputType | null
    _max: StatsMaxAggregateOutputType | null
  }

  type GetStatsGroupByPayload<T extends StatsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<StatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatsGroupByOutputType[P]>
            : GetScalarType<T[P], StatsGroupByOutputType[P]>
        }
      >
    >


  export type StatsSelect = {
    id?: boolean
    method?: boolean
    path?: boolean
    query?: boolean
  }

  export type StatsGetPayload<
    S extends boolean | null | undefined | StatsArgs,
    U = keyof S
      > = S extends true
        ? Stats
    : S extends undefined
    ? never
    : S extends StatsArgs | StatsFindManyArgs
    ?'include' extends U
    ? Stats 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Stats ? Stats[P] : never
  } 
    : Stats
  : Stats


  type StatsCountArgs = Merge<
    Omit<StatsFindManyArgs, 'select' | 'include'> & {
      select?: StatsCountAggregateInputType | true
    }
  >

  export interface StatsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Stats that matches the filter.
     * @param {StatsFindUniqueArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StatsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StatsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Stats'> extends True ? CheckSelect<T, Prisma__StatsClient<Stats>, Prisma__StatsClient<StatsGetPayload<T>>> : CheckSelect<T, Prisma__StatsClient<Stats | null, null>, Prisma__StatsClient<StatsGetPayload<T> | null, null>>

    /**
     * Find the first Stats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsFindFirstArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StatsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StatsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Stats'> extends True ? CheckSelect<T, Prisma__StatsClient<Stats>, Prisma__StatsClient<StatsGetPayload<T>>> : CheckSelect<T, Prisma__StatsClient<Stats | null, null>, Prisma__StatsClient<StatsGetPayload<T> | null, null>>

    /**
     * Find zero or more Stats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stats
     * const stats = await prisma.stats.findMany()
     * 
     * // Get first 10 Stats
     * const stats = await prisma.stats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statsWithIdOnly = await prisma.stats.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StatsFindManyArgs>(
      args?: SelectSubset<T, StatsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Stats>>, PrismaPromise<Array<StatsGetPayload<T>>>>

    /**
     * Create a Stats.
     * @param {StatsCreateArgs} args - Arguments to create a Stats.
     * @example
     * // Create one Stats
     * const Stats = await prisma.stats.create({
     *   data: {
     *     // ... data to create a Stats
     *   }
     * })
     * 
    **/
    create<T extends StatsCreateArgs>(
      args: SelectSubset<T, StatsCreateArgs>
    ): CheckSelect<T, Prisma__StatsClient<Stats>, Prisma__StatsClient<StatsGetPayload<T>>>

    /**
     * Create many Stats.
     *     @param {StatsCreateManyArgs} args - Arguments to create many Stats.
     *     @example
     *     // Create many Stats
     *     const stats = await prisma.stats.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StatsCreateManyArgs>(
      args?: SelectSubset<T, StatsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Stats.
     * @param {StatsDeleteArgs} args - Arguments to delete one Stats.
     * @example
     * // Delete one Stats
     * const Stats = await prisma.stats.delete({
     *   where: {
     *     // ... filter to delete one Stats
     *   }
     * })
     * 
    **/
    delete<T extends StatsDeleteArgs>(
      args: SelectSubset<T, StatsDeleteArgs>
    ): CheckSelect<T, Prisma__StatsClient<Stats>, Prisma__StatsClient<StatsGetPayload<T>>>

    /**
     * Update one Stats.
     * @param {StatsUpdateArgs} args - Arguments to update one Stats.
     * @example
     * // Update one Stats
     * const stats = await prisma.stats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StatsUpdateArgs>(
      args: SelectSubset<T, StatsUpdateArgs>
    ): CheckSelect<T, Prisma__StatsClient<Stats>, Prisma__StatsClient<StatsGetPayload<T>>>

    /**
     * Delete zero or more Stats.
     * @param {StatsDeleteManyArgs} args - Arguments to filter Stats to delete.
     * @example
     * // Delete a few Stats
     * const { count } = await prisma.stats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StatsDeleteManyArgs>(
      args?: SelectSubset<T, StatsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stats
     * const stats = await prisma.stats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StatsUpdateManyArgs>(
      args: SelectSubset<T, StatsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Stats.
     * @param {StatsUpsertArgs} args - Arguments to update or create a Stats.
     * @example
     * // Update or create a Stats
     * const stats = await prisma.stats.upsert({
     *   create: {
     *     // ... data to create a Stats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stats we want to update
     *   }
     * })
    **/
    upsert<T extends StatsUpsertArgs>(
      args: SelectSubset<T, StatsUpsertArgs>
    ): CheckSelect<T, Prisma__StatsClient<Stats>, Prisma__StatsClient<StatsGetPayload<T>>>

    /**
     * Find one Stats that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {StatsFindUniqueOrThrowArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StatsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StatsFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__StatsClient<Stats>, Prisma__StatsClient<StatsGetPayload<T>>>

    /**
     * Find the first Stats that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsFindFirstOrThrowArgs} args - Arguments to find a Stats
     * @example
     * // Get one Stats
     * const stats = await prisma.stats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StatsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StatsFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__StatsClient<Stats>, Prisma__StatsClient<StatsGetPayload<T>>>

    /**
     * Count the number of Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsCountArgs} args - Arguments to filter Stats to count.
     * @example
     * // Count the number of Stats
     * const count = await prisma.stats.count({
     *   where: {
     *     // ... the filter for the Stats we want to count
     *   }
     * })
    **/
    count<T extends StatsCountArgs>(
      args?: Subset<T, StatsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatsAggregateArgs>(args: Subset<T, StatsAggregateArgs>): PrismaPromise<GetStatsAggregateType<T>>

    /**
     * Group by Stats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatsGroupByArgs['orderBy'] }
        : { orderBy?: StatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Stats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StatsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Stats base type for findUnique actions
   */
  export type StatsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Stats
     * 
    **/
    select?: StatsSelect | null
    /**
     * Filter, which Stats to fetch.
     * 
    **/
    where: StatsWhereUniqueInput
  }

  /**
   * Stats: findUnique
   */
  export interface StatsFindUniqueArgs extends StatsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Stats base type for findFirst actions
   */
  export type StatsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Stats
     * 
    **/
    select?: StatsSelect | null
    /**
     * Filter, which Stats to fetch.
     * 
    **/
    where?: StatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     * 
    **/
    orderBy?: Enumerable<StatsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stats.
     * 
    **/
    cursor?: StatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stats.
     * 
    **/
    distinct?: Enumerable<StatsScalarFieldEnum>
  }

  /**
   * Stats: findFirst
   */
  export interface StatsFindFirstArgs extends StatsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Stats findMany
   */
  export type StatsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Stats
     * 
    **/
    select?: StatsSelect | null
    /**
     * Filter, which Stats to fetch.
     * 
    **/
    where?: StatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stats to fetch.
     * 
    **/
    orderBy?: Enumerable<StatsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stats.
     * 
    **/
    cursor?: StatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stats from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stats.
     * 
    **/
    skip?: number
    distinct?: Enumerable<StatsScalarFieldEnum>
  }


  /**
   * Stats create
   */
  export type StatsCreateArgs = {
    /**
     * Select specific fields to fetch from the Stats
     * 
    **/
    select?: StatsSelect | null
    /**
     * The data needed to create a Stats.
     * 
    **/
    data: XOR<StatsCreateInput, StatsUncheckedCreateInput>
  }


  /**
   * Stats createMany
   */
  export type StatsCreateManyArgs = {
    /**
     * The data used to create many Stats.
     * 
    **/
    data: Enumerable<StatsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Stats update
   */
  export type StatsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Stats
     * 
    **/
    select?: StatsSelect | null
    /**
     * The data needed to update a Stats.
     * 
    **/
    data: XOR<StatsUpdateInput, StatsUncheckedUpdateInput>
    /**
     * Choose, which Stats to update.
     * 
    **/
    where: StatsWhereUniqueInput
  }


  /**
   * Stats updateMany
   */
  export type StatsUpdateManyArgs = {
    /**
     * The data used to update Stats.
     * 
    **/
    data: XOR<StatsUpdateManyMutationInput, StatsUncheckedUpdateManyInput>
    /**
     * Filter which Stats to update
     * 
    **/
    where?: StatsWhereInput
  }


  /**
   * Stats upsert
   */
  export type StatsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Stats
     * 
    **/
    select?: StatsSelect | null
    /**
     * The filter to search for the Stats to update in case it exists.
     * 
    **/
    where: StatsWhereUniqueInput
    /**
     * In case the Stats found by the `where` argument doesn't exist, create a new Stats with this data.
     * 
    **/
    create: XOR<StatsCreateInput, StatsUncheckedCreateInput>
    /**
     * In case the Stats was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<StatsUpdateInput, StatsUncheckedUpdateInput>
  }


  /**
   * Stats delete
   */
  export type StatsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Stats
     * 
    **/
    select?: StatsSelect | null
    /**
     * Filter which Stats to delete.
     * 
    **/
    where: StatsWhereUniqueInput
  }


  /**
   * Stats deleteMany
   */
  export type StatsDeleteManyArgs = {
    /**
     * Filter which Stats to delete
     * 
    **/
    where?: StatsWhereInput
  }


  /**
   * Stats: findUniqueOrThrow
   */
  export type StatsFindUniqueOrThrowArgs = StatsFindUniqueArgsBase
      

  /**
   * Stats: findFirstOrThrow
   */
  export type StatsFindFirstOrThrowArgs = StatsFindFirstArgsBase
      

  /**
   * Stats without action
   */
  export type StatsArgs = {
    /**
     * Select specific fields to fetch from the Stats
     * 
    **/
    select?: StatsSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CnpjScalarFieldEnum: {
    id: 'id',
    value: 'value'
  };

  export type CnpjScalarFieldEnum = (typeof CnpjScalarFieldEnum)[keyof typeof CnpjScalarFieldEnum]


  export const CpfScalarFieldEnum: {
    id: 'id',
    value: 'value'
  };

  export type CpfScalarFieldEnum = (typeof CpfScalarFieldEnum)[keyof typeof CpfScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StatsScalarFieldEnum: {
    id: 'id',
    method: 'method',
    path: 'path',
    query: 'query'
  };

  export type StatsScalarFieldEnum = (typeof StatsScalarFieldEnum)[keyof typeof StatsScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type CpfWhereInput = {
    AND?: Enumerable<CpfWhereInput>
    OR?: Enumerable<CpfWhereInput>
    NOT?: Enumerable<CpfWhereInput>
    id?: IntFilter | number
    value?: StringFilter | string
  }

  export type CpfOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type CpfWhereUniqueInput = {
    id?: number
    value?: string
  }

  export type CpfOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    _count?: CpfCountOrderByAggregateInput
    _avg?: CpfAvgOrderByAggregateInput
    _max?: CpfMaxOrderByAggregateInput
    _min?: CpfMinOrderByAggregateInput
    _sum?: CpfSumOrderByAggregateInput
  }

  export type CpfScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CpfScalarWhereWithAggregatesInput>
    OR?: Enumerable<CpfScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CpfScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    value?: StringWithAggregatesFilter | string
  }

  export type CnpjWhereInput = {
    AND?: Enumerable<CnpjWhereInput>
    OR?: Enumerable<CnpjWhereInput>
    NOT?: Enumerable<CnpjWhereInput>
    id?: IntFilter | number
    value?: StringFilter | string
  }

  export type CnpjOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type CnpjWhereUniqueInput = {
    id?: number
    value?: string
  }

  export type CnpjOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    _count?: CnpjCountOrderByAggregateInput
    _avg?: CnpjAvgOrderByAggregateInput
    _max?: CnpjMaxOrderByAggregateInput
    _min?: CnpjMinOrderByAggregateInput
    _sum?: CnpjSumOrderByAggregateInput
  }

  export type CnpjScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CnpjScalarWhereWithAggregatesInput>
    OR?: Enumerable<CnpjScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CnpjScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    value?: StringWithAggregatesFilter | string
  }

  export type StatsWhereInput = {
    AND?: Enumerable<StatsWhereInput>
    OR?: Enumerable<StatsWhereInput>
    NOT?: Enumerable<StatsWhereInput>
    id?: IntFilter | number
    method?: EnumHttpMethodFilter | HttpMethod
    path?: StringFilter | string
    query?: StringFilter | string
  }

  export type StatsOrderByWithRelationInput = {
    id?: SortOrder
    method?: SortOrder
    path?: SortOrder
    query?: SortOrder
  }

  export type StatsWhereUniqueInput = {
    id?: number
  }

  export type StatsOrderByWithAggregationInput = {
    id?: SortOrder
    method?: SortOrder
    path?: SortOrder
    query?: SortOrder
    _count?: StatsCountOrderByAggregateInput
    _avg?: StatsAvgOrderByAggregateInput
    _max?: StatsMaxOrderByAggregateInput
    _min?: StatsMinOrderByAggregateInput
    _sum?: StatsSumOrderByAggregateInput
  }

  export type StatsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StatsScalarWhereWithAggregatesInput>
    OR?: Enumerable<StatsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StatsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    method?: EnumHttpMethodWithAggregatesFilter | HttpMethod
    path?: StringWithAggregatesFilter | string
    query?: StringWithAggregatesFilter | string
  }

  export type CpfCreateInput = {
    value: string
  }

  export type CpfUncheckedCreateInput = {
    id?: number
    value: string
  }

  export type CpfUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type CpfUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type CpfCreateManyInput = {
    id?: number
    value: string
  }

  export type CpfUpdateManyMutationInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type CpfUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type CnpjCreateInput = {
    value: string
  }

  export type CnpjUncheckedCreateInput = {
    id?: number
    value: string
  }

  export type CnpjUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type CnpjUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type CnpjCreateManyInput = {
    id?: number
    value: string
  }

  export type CnpjUpdateManyMutationInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type CnpjUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type StatsCreateInput = {
    method: HttpMethod
    path: string
    query: string
  }

  export type StatsUncheckedCreateInput = {
    id?: number
    method: HttpMethod
    path: string
    query: string
  }

  export type StatsUpdateInput = {
    method?: EnumHttpMethodFieldUpdateOperationsInput | HttpMethod
    path?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
  }

  export type StatsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: EnumHttpMethodFieldUpdateOperationsInput | HttpMethod
    path?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
  }

  export type StatsCreateManyInput = {
    id?: number
    method: HttpMethod
    path: string
    query: string
  }

  export type StatsUpdateManyMutationInput = {
    method?: EnumHttpMethodFieldUpdateOperationsInput | HttpMethod
    path?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
  }

  export type StatsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: EnumHttpMethodFieldUpdateOperationsInput | HttpMethod
    path?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type CpfCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type CpfAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CpfMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type CpfMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type CpfSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type CnpjCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type CnpjAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CnpjMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type CnpjMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type CnpjSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumHttpMethodFilter = {
    equals?: HttpMethod
    in?: Enumerable<HttpMethod>
    notIn?: Enumerable<HttpMethod>
    not?: NestedEnumHttpMethodFilter | HttpMethod
  }

  export type StatsCountOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    path?: SortOrder
    query?: SortOrder
  }

  export type StatsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StatsMaxOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    path?: SortOrder
    query?: SortOrder
  }

  export type StatsMinOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    path?: SortOrder
    query?: SortOrder
  }

  export type StatsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumHttpMethodWithAggregatesFilter = {
    equals?: HttpMethod
    in?: Enumerable<HttpMethod>
    notIn?: Enumerable<HttpMethod>
    not?: NestedEnumHttpMethodWithAggregatesFilter | HttpMethod
    _count?: NestedIntFilter
    _min?: NestedEnumHttpMethodFilter
    _max?: NestedEnumHttpMethodFilter
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumHttpMethodFieldUpdateOperationsInput = {
    set?: HttpMethod
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedEnumHttpMethodFilter = {
    equals?: HttpMethod
    in?: Enumerable<HttpMethod>
    notIn?: Enumerable<HttpMethod>
    not?: NestedEnumHttpMethodFilter | HttpMethod
  }

  export type NestedEnumHttpMethodWithAggregatesFilter = {
    equals?: HttpMethod
    in?: Enumerable<HttpMethod>
    notIn?: Enumerable<HttpMethod>
    not?: NestedEnumHttpMethodWithAggregatesFilter | HttpMethod
    _count?: NestedIntFilter
    _min?: NestedEnumHttpMethodFilter
    _max?: NestedEnumHttpMethodFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}