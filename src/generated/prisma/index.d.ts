
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model concorrentes
 * 
 */
export type concorrentes = $Result.DefaultSelection<Prisma.$concorrentesPayload>
/**
 * Model missao_produto
 * 
 */
export type missao_produto = $Result.DefaultSelection<Prisma.$missao_produtoPayload>
/**
 * Model missoes
 * 
 */
export type missoes = $Result.DefaultSelection<Prisma.$missoesPayload>
/**
 * Model produtos
 * 
 */
export type produtos = $Result.DefaultSelection<Prisma.$produtosPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>
/**
 * Model niveis
 * 
 */
export type niveis = $Result.DefaultSelection<Prisma.$niveisPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Concorrentes
 * const concorrentes = await prisma.concorrentes.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Concorrentes
   * const concorrentes = await prisma.concorrentes.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.concorrentes`: Exposes CRUD operations for the **concorrentes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Concorrentes
    * const concorrentes = await prisma.concorrentes.findMany()
    * ```
    */
  get concorrentes(): Prisma.concorrentesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.missao_produto`: Exposes CRUD operations for the **missao_produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Missao_produtos
    * const missao_produtos = await prisma.missao_produto.findMany()
    * ```
    */
  get missao_produto(): Prisma.missao_produtoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.missoes`: Exposes CRUD operations for the **missoes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Missoes
    * const missoes = await prisma.missoes.findMany()
    * ```
    */
  get missoes(): Prisma.missoesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produtos`: Exposes CRUD operations for the **produtos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produtos.findMany()
    * ```
    */
  get produtos(): Prisma.produtosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.niveis`: Exposes CRUD operations for the **niveis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Niveis
    * const niveis = await prisma.niveis.findMany()
    * ```
    */
  get niveis(): Prisma.niveisDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    concorrentes: 'concorrentes',
    missao_produto: 'missao_produto',
    missoes: 'missoes',
    produtos: 'produtos',
    usuarios: 'usuarios',
    niveis: 'niveis'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "concorrentes" | "missao_produto" | "missoes" | "produtos" | "usuarios" | "niveis"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      concorrentes: {
        payload: Prisma.$concorrentesPayload<ExtArgs>
        fields: Prisma.concorrentesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.concorrentesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$concorrentesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.concorrentesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$concorrentesPayload>
          }
          findFirst: {
            args: Prisma.concorrentesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$concorrentesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.concorrentesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$concorrentesPayload>
          }
          findMany: {
            args: Prisma.concorrentesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$concorrentesPayload>[]
          }
          create: {
            args: Prisma.concorrentesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$concorrentesPayload>
          }
          createMany: {
            args: Prisma.concorrentesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.concorrentesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$concorrentesPayload>[]
          }
          delete: {
            args: Prisma.concorrentesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$concorrentesPayload>
          }
          update: {
            args: Prisma.concorrentesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$concorrentesPayload>
          }
          deleteMany: {
            args: Prisma.concorrentesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.concorrentesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.concorrentesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$concorrentesPayload>[]
          }
          upsert: {
            args: Prisma.concorrentesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$concorrentesPayload>
          }
          aggregate: {
            args: Prisma.ConcorrentesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConcorrentes>
          }
          groupBy: {
            args: Prisma.concorrentesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConcorrentesGroupByOutputType>[]
          }
          count: {
            args: Prisma.concorrentesCountArgs<ExtArgs>
            result: $Utils.Optional<ConcorrentesCountAggregateOutputType> | number
          }
        }
      }
      missao_produto: {
        payload: Prisma.$missao_produtoPayload<ExtArgs>
        fields: Prisma.missao_produtoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.missao_produtoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missao_produtoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.missao_produtoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missao_produtoPayload>
          }
          findFirst: {
            args: Prisma.missao_produtoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missao_produtoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.missao_produtoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missao_produtoPayload>
          }
          findMany: {
            args: Prisma.missao_produtoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missao_produtoPayload>[]
          }
          create: {
            args: Prisma.missao_produtoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missao_produtoPayload>
          }
          createMany: {
            args: Prisma.missao_produtoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.missao_produtoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missao_produtoPayload>[]
          }
          delete: {
            args: Prisma.missao_produtoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missao_produtoPayload>
          }
          update: {
            args: Prisma.missao_produtoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missao_produtoPayload>
          }
          deleteMany: {
            args: Prisma.missao_produtoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.missao_produtoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.missao_produtoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missao_produtoPayload>[]
          }
          upsert: {
            args: Prisma.missao_produtoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missao_produtoPayload>
          }
          aggregate: {
            args: Prisma.Missao_produtoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMissao_produto>
          }
          groupBy: {
            args: Prisma.missao_produtoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Missao_produtoGroupByOutputType>[]
          }
          count: {
            args: Prisma.missao_produtoCountArgs<ExtArgs>
            result: $Utils.Optional<Missao_produtoCountAggregateOutputType> | number
          }
        }
      }
      missoes: {
        payload: Prisma.$missoesPayload<ExtArgs>
        fields: Prisma.missoesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.missoesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missoesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.missoesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missoesPayload>
          }
          findFirst: {
            args: Prisma.missoesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missoesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.missoesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missoesPayload>
          }
          findMany: {
            args: Prisma.missoesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missoesPayload>[]
          }
          create: {
            args: Prisma.missoesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missoesPayload>
          }
          createMany: {
            args: Prisma.missoesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.missoesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missoesPayload>[]
          }
          delete: {
            args: Prisma.missoesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missoesPayload>
          }
          update: {
            args: Prisma.missoesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missoesPayload>
          }
          deleteMany: {
            args: Prisma.missoesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.missoesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.missoesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missoesPayload>[]
          }
          upsert: {
            args: Prisma.missoesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missoesPayload>
          }
          aggregate: {
            args: Prisma.MissoesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMissoes>
          }
          groupBy: {
            args: Prisma.missoesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissoesGroupByOutputType>[]
          }
          count: {
            args: Prisma.missoesCountArgs<ExtArgs>
            result: $Utils.Optional<MissoesCountAggregateOutputType> | number
          }
        }
      }
      produtos: {
        payload: Prisma.$produtosPayload<ExtArgs>
        fields: Prisma.produtosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produtosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produtosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>
          }
          findFirst: {
            args: Prisma.produtosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produtosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>
          }
          findMany: {
            args: Prisma.produtosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>[]
          }
          create: {
            args: Prisma.produtosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>
          }
          createMany: {
            args: Prisma.produtosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.produtosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>[]
          }
          delete: {
            args: Prisma.produtosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>
          }
          update: {
            args: Prisma.produtosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>
          }
          deleteMany: {
            args: Prisma.produtosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.produtosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.produtosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>[]
          }
          upsert: {
            args: Prisma.produtosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>
          }
          aggregate: {
            args: Prisma.ProdutosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProdutos>
          }
          groupBy: {
            args: Prisma.produtosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutosGroupByOutputType>[]
          }
          count: {
            args: Prisma.produtosCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutosCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      niveis: {
        payload: Prisma.$niveisPayload<ExtArgs>
        fields: Prisma.niveisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.niveisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.niveisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>
          }
          findFirst: {
            args: Prisma.niveisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.niveisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>
          }
          findMany: {
            args: Prisma.niveisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>[]
          }
          create: {
            args: Prisma.niveisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>
          }
          createMany: {
            args: Prisma.niveisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.niveisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>[]
          }
          delete: {
            args: Prisma.niveisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>
          }
          update: {
            args: Prisma.niveisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>
          }
          deleteMany: {
            args: Prisma.niveisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.niveisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.niveisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>[]
          }
          upsert: {
            args: Prisma.niveisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>
          }
          aggregate: {
            args: Prisma.NiveisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNiveis>
          }
          groupBy: {
            args: Prisma.niveisGroupByArgs<ExtArgs>
            result: $Utils.Optional<NiveisGroupByOutputType>[]
          }
          count: {
            args: Prisma.niveisCountArgs<ExtArgs>
            result: $Utils.Optional<NiveisCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    concorrentes?: concorrentesOmit
    missao_produto?: missao_produtoOmit
    missoes?: missoesOmit
    produtos?: produtosOmit
    usuarios?: usuariosOmit
    niveis?: niveisOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ConcorrentesCountOutputType
   */

  export type ConcorrentesCountOutputType = {
    missoes: number
  }

  export type ConcorrentesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missoes?: boolean | ConcorrentesCountOutputTypeCountMissoesArgs
  }

  // Custom InputTypes
  /**
   * ConcorrentesCountOutputType without action
   */
  export type ConcorrentesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConcorrentesCountOutputType
     */
    select?: ConcorrentesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConcorrentesCountOutputType without action
   */
  export type ConcorrentesCountOutputTypeCountMissoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: missoesWhereInput
  }


  /**
   * Count Type MissoesCountOutputType
   */

  export type MissoesCountOutputType = {
    missao_produto: number
  }

  export type MissoesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missao_produto?: boolean | MissoesCountOutputTypeCountMissao_produtoArgs
  }

  // Custom InputTypes
  /**
   * MissoesCountOutputType without action
   */
  export type MissoesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissoesCountOutputType
     */
    select?: MissoesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MissoesCountOutputType without action
   */
  export type MissoesCountOutputTypeCountMissao_produtoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: missao_produtoWhereInput
  }


  /**
   * Count Type ProdutosCountOutputType
   */

  export type ProdutosCountOutputType = {
    missao_produto: number
  }

  export type ProdutosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missao_produto?: boolean | ProdutosCountOutputTypeCountMissao_produtoArgs
  }

  // Custom InputTypes
  /**
   * ProdutosCountOutputType without action
   */
  export type ProdutosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutosCountOutputType
     */
    select?: ProdutosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutosCountOutputType without action
   */
  export type ProdutosCountOutputTypeCountMissao_produtoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: missao_produtoWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    missoes: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missoes?: boolean | UsuariosCountOutputTypeCountMissoesArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountMissoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: missoesWhereInput
  }


  /**
   * Count Type NiveisCountOutputType
   */

  export type NiveisCountOutputType = {
    usuario: number
  }

  export type NiveisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | NiveisCountOutputTypeCountUsuarioArgs
  }

  // Custom InputTypes
  /**
   * NiveisCountOutputType without action
   */
  export type NiveisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NiveisCountOutputType
     */
    select?: NiveisCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NiveisCountOutputType without action
   */
  export type NiveisCountOutputTypeCountUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model concorrentes
   */

  export type AggregateConcorrentes = {
    _count: ConcorrentesCountAggregateOutputType | null
    _avg: ConcorrentesAvgAggregateOutputType | null
    _sum: ConcorrentesSumAggregateOutputType | null
    _min: ConcorrentesMinAggregateOutputType | null
    _max: ConcorrentesMaxAggregateOutputType | null
  }

  export type ConcorrentesAvgAggregateOutputType = {
    id: number | null
  }

  export type ConcorrentesSumAggregateOutputType = {
    id: number | null
  }

  export type ConcorrentesMinAggregateOutputType = {
    id: number | null
    nome: string | null
    tipo: string | null
    endereco: string | null
    foto: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConcorrentesMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    tipo: string | null
    endereco: string | null
    foto: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConcorrentesCountAggregateOutputType = {
    id: number
    nome: number
    tipo: number
    endereco: number
    foto: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConcorrentesAvgAggregateInputType = {
    id?: true
  }

  export type ConcorrentesSumAggregateInputType = {
    id?: true
  }

  export type ConcorrentesMinAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    endereco?: true
    foto?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConcorrentesMaxAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    endereco?: true
    foto?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConcorrentesCountAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    endereco?: true
    foto?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConcorrentesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which concorrentes to aggregate.
     */
    where?: concorrentesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of concorrentes to fetch.
     */
    orderBy?: concorrentesOrderByWithRelationInput | concorrentesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: concorrentesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` concorrentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` concorrentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned concorrentes
    **/
    _count?: true | ConcorrentesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConcorrentesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConcorrentesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConcorrentesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConcorrentesMaxAggregateInputType
  }

  export type GetConcorrentesAggregateType<T extends ConcorrentesAggregateArgs> = {
        [P in keyof T & keyof AggregateConcorrentes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConcorrentes[P]>
      : GetScalarType<T[P], AggregateConcorrentes[P]>
  }




  export type concorrentesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: concorrentesWhereInput
    orderBy?: concorrentesOrderByWithAggregationInput | concorrentesOrderByWithAggregationInput[]
    by: ConcorrentesScalarFieldEnum[] | ConcorrentesScalarFieldEnum
    having?: concorrentesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConcorrentesCountAggregateInputType | true
    _avg?: ConcorrentesAvgAggregateInputType
    _sum?: ConcorrentesSumAggregateInputType
    _min?: ConcorrentesMinAggregateInputType
    _max?: ConcorrentesMaxAggregateInputType
  }

  export type ConcorrentesGroupByOutputType = {
    id: number
    nome: string
    tipo: string
    endereco: string
    foto: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: ConcorrentesCountAggregateOutputType | null
    _avg: ConcorrentesAvgAggregateOutputType | null
    _sum: ConcorrentesSumAggregateOutputType | null
    _min: ConcorrentesMinAggregateOutputType | null
    _max: ConcorrentesMaxAggregateOutputType | null
  }

  type GetConcorrentesGroupByPayload<T extends concorrentesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConcorrentesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConcorrentesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConcorrentesGroupByOutputType[P]>
            : GetScalarType<T[P], ConcorrentesGroupByOutputType[P]>
        }
      >
    >


  export type concorrentesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    endereco?: boolean
    foto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    missoes?: boolean | concorrentes$missoesArgs<ExtArgs>
    _count?: boolean | ConcorrentesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["concorrentes"]>

  export type concorrentesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    endereco?: boolean
    foto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["concorrentes"]>

  export type concorrentesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    endereco?: boolean
    foto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["concorrentes"]>

  export type concorrentesSelectScalar = {
    id?: boolean
    nome?: boolean
    tipo?: boolean
    endereco?: boolean
    foto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type concorrentesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "tipo" | "endereco" | "foto" | "createdAt" | "updatedAt", ExtArgs["result"]["concorrentes"]>
  export type concorrentesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missoes?: boolean | concorrentes$missoesArgs<ExtArgs>
    _count?: boolean | ConcorrentesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type concorrentesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type concorrentesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $concorrentesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "concorrentes"
    objects: {
      missoes: Prisma.$missoesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      tipo: string
      endereco: string
      foto: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["concorrentes"]>
    composites: {}
  }

  type concorrentesGetPayload<S extends boolean | null | undefined | concorrentesDefaultArgs> = $Result.GetResult<Prisma.$concorrentesPayload, S>

  type concorrentesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<concorrentesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConcorrentesCountAggregateInputType | true
    }

  export interface concorrentesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['concorrentes'], meta: { name: 'concorrentes' } }
    /**
     * Find zero or one Concorrentes that matches the filter.
     * @param {concorrentesFindUniqueArgs} args - Arguments to find a Concorrentes
     * @example
     * // Get one Concorrentes
     * const concorrentes = await prisma.concorrentes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends concorrentesFindUniqueArgs>(args: SelectSubset<T, concorrentesFindUniqueArgs<ExtArgs>>): Prisma__concorrentesClient<$Result.GetResult<Prisma.$concorrentesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Concorrentes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {concorrentesFindUniqueOrThrowArgs} args - Arguments to find a Concorrentes
     * @example
     * // Get one Concorrentes
     * const concorrentes = await prisma.concorrentes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends concorrentesFindUniqueOrThrowArgs>(args: SelectSubset<T, concorrentesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__concorrentesClient<$Result.GetResult<Prisma.$concorrentesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Concorrentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {concorrentesFindFirstArgs} args - Arguments to find a Concorrentes
     * @example
     * // Get one Concorrentes
     * const concorrentes = await prisma.concorrentes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends concorrentesFindFirstArgs>(args?: SelectSubset<T, concorrentesFindFirstArgs<ExtArgs>>): Prisma__concorrentesClient<$Result.GetResult<Prisma.$concorrentesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Concorrentes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {concorrentesFindFirstOrThrowArgs} args - Arguments to find a Concorrentes
     * @example
     * // Get one Concorrentes
     * const concorrentes = await prisma.concorrentes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends concorrentesFindFirstOrThrowArgs>(args?: SelectSubset<T, concorrentesFindFirstOrThrowArgs<ExtArgs>>): Prisma__concorrentesClient<$Result.GetResult<Prisma.$concorrentesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Concorrentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {concorrentesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Concorrentes
     * const concorrentes = await prisma.concorrentes.findMany()
     * 
     * // Get first 10 Concorrentes
     * const concorrentes = await prisma.concorrentes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const concorrentesWithIdOnly = await prisma.concorrentes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends concorrentesFindManyArgs>(args?: SelectSubset<T, concorrentesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$concorrentesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Concorrentes.
     * @param {concorrentesCreateArgs} args - Arguments to create a Concorrentes.
     * @example
     * // Create one Concorrentes
     * const Concorrentes = await prisma.concorrentes.create({
     *   data: {
     *     // ... data to create a Concorrentes
     *   }
     * })
     * 
     */
    create<T extends concorrentesCreateArgs>(args: SelectSubset<T, concorrentesCreateArgs<ExtArgs>>): Prisma__concorrentesClient<$Result.GetResult<Prisma.$concorrentesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Concorrentes.
     * @param {concorrentesCreateManyArgs} args - Arguments to create many Concorrentes.
     * @example
     * // Create many Concorrentes
     * const concorrentes = await prisma.concorrentes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends concorrentesCreateManyArgs>(args?: SelectSubset<T, concorrentesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Concorrentes and returns the data saved in the database.
     * @param {concorrentesCreateManyAndReturnArgs} args - Arguments to create many Concorrentes.
     * @example
     * // Create many Concorrentes
     * const concorrentes = await prisma.concorrentes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Concorrentes and only return the `id`
     * const concorrentesWithIdOnly = await prisma.concorrentes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends concorrentesCreateManyAndReturnArgs>(args?: SelectSubset<T, concorrentesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$concorrentesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Concorrentes.
     * @param {concorrentesDeleteArgs} args - Arguments to delete one Concorrentes.
     * @example
     * // Delete one Concorrentes
     * const Concorrentes = await prisma.concorrentes.delete({
     *   where: {
     *     // ... filter to delete one Concorrentes
     *   }
     * })
     * 
     */
    delete<T extends concorrentesDeleteArgs>(args: SelectSubset<T, concorrentesDeleteArgs<ExtArgs>>): Prisma__concorrentesClient<$Result.GetResult<Prisma.$concorrentesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Concorrentes.
     * @param {concorrentesUpdateArgs} args - Arguments to update one Concorrentes.
     * @example
     * // Update one Concorrentes
     * const concorrentes = await prisma.concorrentes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends concorrentesUpdateArgs>(args: SelectSubset<T, concorrentesUpdateArgs<ExtArgs>>): Prisma__concorrentesClient<$Result.GetResult<Prisma.$concorrentesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Concorrentes.
     * @param {concorrentesDeleteManyArgs} args - Arguments to filter Concorrentes to delete.
     * @example
     * // Delete a few Concorrentes
     * const { count } = await prisma.concorrentes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends concorrentesDeleteManyArgs>(args?: SelectSubset<T, concorrentesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Concorrentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {concorrentesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Concorrentes
     * const concorrentes = await prisma.concorrentes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends concorrentesUpdateManyArgs>(args: SelectSubset<T, concorrentesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Concorrentes and returns the data updated in the database.
     * @param {concorrentesUpdateManyAndReturnArgs} args - Arguments to update many Concorrentes.
     * @example
     * // Update many Concorrentes
     * const concorrentes = await prisma.concorrentes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Concorrentes and only return the `id`
     * const concorrentesWithIdOnly = await prisma.concorrentes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends concorrentesUpdateManyAndReturnArgs>(args: SelectSubset<T, concorrentesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$concorrentesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Concorrentes.
     * @param {concorrentesUpsertArgs} args - Arguments to update or create a Concorrentes.
     * @example
     * // Update or create a Concorrentes
     * const concorrentes = await prisma.concorrentes.upsert({
     *   create: {
     *     // ... data to create a Concorrentes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Concorrentes we want to update
     *   }
     * })
     */
    upsert<T extends concorrentesUpsertArgs>(args: SelectSubset<T, concorrentesUpsertArgs<ExtArgs>>): Prisma__concorrentesClient<$Result.GetResult<Prisma.$concorrentesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Concorrentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {concorrentesCountArgs} args - Arguments to filter Concorrentes to count.
     * @example
     * // Count the number of Concorrentes
     * const count = await prisma.concorrentes.count({
     *   where: {
     *     // ... the filter for the Concorrentes we want to count
     *   }
     * })
    **/
    count<T extends concorrentesCountArgs>(
      args?: Subset<T, concorrentesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConcorrentesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Concorrentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConcorrentesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConcorrentesAggregateArgs>(args: Subset<T, ConcorrentesAggregateArgs>): Prisma.PrismaPromise<GetConcorrentesAggregateType<T>>

    /**
     * Group by Concorrentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {concorrentesGroupByArgs} args - Group by arguments.
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
      T extends concorrentesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: concorrentesGroupByArgs['orderBy'] }
        : { orderBy?: concorrentesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, concorrentesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConcorrentesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the concorrentes model
   */
  readonly fields: concorrentesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for concorrentes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__concorrentesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    missoes<T extends concorrentes$missoesArgs<ExtArgs> = {}>(args?: Subset<T, concorrentes$missoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$missoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the concorrentes model
   */
  interface concorrentesFieldRefs {
    readonly id: FieldRef<"concorrentes", 'Int'>
    readonly nome: FieldRef<"concorrentes", 'String'>
    readonly tipo: FieldRef<"concorrentes", 'String'>
    readonly endereco: FieldRef<"concorrentes", 'String'>
    readonly foto: FieldRef<"concorrentes", 'String'>
    readonly createdAt: FieldRef<"concorrentes", 'DateTime'>
    readonly updatedAt: FieldRef<"concorrentes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * concorrentes findUnique
   */
  export type concorrentesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the concorrentes
     */
    select?: concorrentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the concorrentes
     */
    omit?: concorrentesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: concorrentesInclude<ExtArgs> | null
    /**
     * Filter, which concorrentes to fetch.
     */
    where: concorrentesWhereUniqueInput
  }

  /**
   * concorrentes findUniqueOrThrow
   */
  export type concorrentesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the concorrentes
     */
    select?: concorrentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the concorrentes
     */
    omit?: concorrentesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: concorrentesInclude<ExtArgs> | null
    /**
     * Filter, which concorrentes to fetch.
     */
    where: concorrentesWhereUniqueInput
  }

  /**
   * concorrentes findFirst
   */
  export type concorrentesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the concorrentes
     */
    select?: concorrentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the concorrentes
     */
    omit?: concorrentesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: concorrentesInclude<ExtArgs> | null
    /**
     * Filter, which concorrentes to fetch.
     */
    where?: concorrentesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of concorrentes to fetch.
     */
    orderBy?: concorrentesOrderByWithRelationInput | concorrentesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for concorrentes.
     */
    cursor?: concorrentesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` concorrentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` concorrentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of concorrentes.
     */
    distinct?: ConcorrentesScalarFieldEnum | ConcorrentesScalarFieldEnum[]
  }

  /**
   * concorrentes findFirstOrThrow
   */
  export type concorrentesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the concorrentes
     */
    select?: concorrentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the concorrentes
     */
    omit?: concorrentesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: concorrentesInclude<ExtArgs> | null
    /**
     * Filter, which concorrentes to fetch.
     */
    where?: concorrentesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of concorrentes to fetch.
     */
    orderBy?: concorrentesOrderByWithRelationInput | concorrentesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for concorrentes.
     */
    cursor?: concorrentesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` concorrentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` concorrentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of concorrentes.
     */
    distinct?: ConcorrentesScalarFieldEnum | ConcorrentesScalarFieldEnum[]
  }

  /**
   * concorrentes findMany
   */
  export type concorrentesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the concorrentes
     */
    select?: concorrentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the concorrentes
     */
    omit?: concorrentesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: concorrentesInclude<ExtArgs> | null
    /**
     * Filter, which concorrentes to fetch.
     */
    where?: concorrentesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of concorrentes to fetch.
     */
    orderBy?: concorrentesOrderByWithRelationInput | concorrentesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing concorrentes.
     */
    cursor?: concorrentesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` concorrentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` concorrentes.
     */
    skip?: number
    distinct?: ConcorrentesScalarFieldEnum | ConcorrentesScalarFieldEnum[]
  }

  /**
   * concorrentes create
   */
  export type concorrentesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the concorrentes
     */
    select?: concorrentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the concorrentes
     */
    omit?: concorrentesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: concorrentesInclude<ExtArgs> | null
    /**
     * The data needed to create a concorrentes.
     */
    data: XOR<concorrentesCreateInput, concorrentesUncheckedCreateInput>
  }

  /**
   * concorrentes createMany
   */
  export type concorrentesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many concorrentes.
     */
    data: concorrentesCreateManyInput | concorrentesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * concorrentes createManyAndReturn
   */
  export type concorrentesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the concorrentes
     */
    select?: concorrentesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the concorrentes
     */
    omit?: concorrentesOmit<ExtArgs> | null
    /**
     * The data used to create many concorrentes.
     */
    data: concorrentesCreateManyInput | concorrentesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * concorrentes update
   */
  export type concorrentesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the concorrentes
     */
    select?: concorrentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the concorrentes
     */
    omit?: concorrentesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: concorrentesInclude<ExtArgs> | null
    /**
     * The data needed to update a concorrentes.
     */
    data: XOR<concorrentesUpdateInput, concorrentesUncheckedUpdateInput>
    /**
     * Choose, which concorrentes to update.
     */
    where: concorrentesWhereUniqueInput
  }

  /**
   * concorrentes updateMany
   */
  export type concorrentesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update concorrentes.
     */
    data: XOR<concorrentesUpdateManyMutationInput, concorrentesUncheckedUpdateManyInput>
    /**
     * Filter which concorrentes to update
     */
    where?: concorrentesWhereInput
    /**
     * Limit how many concorrentes to update.
     */
    limit?: number
  }

  /**
   * concorrentes updateManyAndReturn
   */
  export type concorrentesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the concorrentes
     */
    select?: concorrentesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the concorrentes
     */
    omit?: concorrentesOmit<ExtArgs> | null
    /**
     * The data used to update concorrentes.
     */
    data: XOR<concorrentesUpdateManyMutationInput, concorrentesUncheckedUpdateManyInput>
    /**
     * Filter which concorrentes to update
     */
    where?: concorrentesWhereInput
    /**
     * Limit how many concorrentes to update.
     */
    limit?: number
  }

  /**
   * concorrentes upsert
   */
  export type concorrentesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the concorrentes
     */
    select?: concorrentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the concorrentes
     */
    omit?: concorrentesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: concorrentesInclude<ExtArgs> | null
    /**
     * The filter to search for the concorrentes to update in case it exists.
     */
    where: concorrentesWhereUniqueInput
    /**
     * In case the concorrentes found by the `where` argument doesn't exist, create a new concorrentes with this data.
     */
    create: XOR<concorrentesCreateInput, concorrentesUncheckedCreateInput>
    /**
     * In case the concorrentes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<concorrentesUpdateInput, concorrentesUncheckedUpdateInput>
  }

  /**
   * concorrentes delete
   */
  export type concorrentesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the concorrentes
     */
    select?: concorrentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the concorrentes
     */
    omit?: concorrentesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: concorrentesInclude<ExtArgs> | null
    /**
     * Filter which concorrentes to delete.
     */
    where: concorrentesWhereUniqueInput
  }

  /**
   * concorrentes deleteMany
   */
  export type concorrentesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which concorrentes to delete
     */
    where?: concorrentesWhereInput
    /**
     * Limit how many concorrentes to delete.
     */
    limit?: number
  }

  /**
   * concorrentes.missoes
   */
  export type concorrentes$missoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missoes
     */
    select?: missoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missoes
     */
    omit?: missoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missoesInclude<ExtArgs> | null
    where?: missoesWhereInput
    orderBy?: missoesOrderByWithRelationInput | missoesOrderByWithRelationInput[]
    cursor?: missoesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissoesScalarFieldEnum | MissoesScalarFieldEnum[]
  }

  /**
   * concorrentes without action
   */
  export type concorrentesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the concorrentes
     */
    select?: concorrentesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the concorrentes
     */
    omit?: concorrentesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: concorrentesInclude<ExtArgs> | null
  }


  /**
   * Model missao_produto
   */

  export type AggregateMissao_produto = {
    _count: Missao_produtoCountAggregateOutputType | null
    _avg: Missao_produtoAvgAggregateOutputType | null
    _sum: Missao_produtoSumAggregateOutputType | null
    _min: Missao_produtoMinAggregateOutputType | null
    _max: Missao_produtoMaxAggregateOutputType | null
  }

  export type Missao_produtoAvgAggregateOutputType = {
    id: number | null
    missao_id: number | null
    produto_id: number | null
    preco: number | null
    preco_desconto: number | null
  }

  export type Missao_produtoSumAggregateOutputType = {
    id: number | null
    missao_id: number | null
    produto_id: number | null
    preco: number | null
    preco_desconto: number | null
  }

  export type Missao_produtoMinAggregateOutputType = {
    id: number | null
    missao_id: number | null
    produto_id: number | null
    preco: number | null
    preco_desconto: number | null
    observacoes: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Missao_produtoMaxAggregateOutputType = {
    id: number | null
    missao_id: number | null
    produto_id: number | null
    preco: number | null
    preco_desconto: number | null
    observacoes: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Missao_produtoCountAggregateOutputType = {
    id: number
    missao_id: number
    produto_id: number
    preco: number
    preco_desconto: number
    observacoes: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Missao_produtoAvgAggregateInputType = {
    id?: true
    missao_id?: true
    produto_id?: true
    preco?: true
    preco_desconto?: true
  }

  export type Missao_produtoSumAggregateInputType = {
    id?: true
    missao_id?: true
    produto_id?: true
    preco?: true
    preco_desconto?: true
  }

  export type Missao_produtoMinAggregateInputType = {
    id?: true
    missao_id?: true
    produto_id?: true
    preco?: true
    preco_desconto?: true
    observacoes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Missao_produtoMaxAggregateInputType = {
    id?: true
    missao_id?: true
    produto_id?: true
    preco?: true
    preco_desconto?: true
    observacoes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Missao_produtoCountAggregateInputType = {
    id?: true
    missao_id?: true
    produto_id?: true
    preco?: true
    preco_desconto?: true
    observacoes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Missao_produtoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which missao_produto to aggregate.
     */
    where?: missao_produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of missao_produtos to fetch.
     */
    orderBy?: missao_produtoOrderByWithRelationInput | missao_produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: missao_produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` missao_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` missao_produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned missao_produtos
    **/
    _count?: true | Missao_produtoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Missao_produtoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Missao_produtoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Missao_produtoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Missao_produtoMaxAggregateInputType
  }

  export type GetMissao_produtoAggregateType<T extends Missao_produtoAggregateArgs> = {
        [P in keyof T & keyof AggregateMissao_produto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMissao_produto[P]>
      : GetScalarType<T[P], AggregateMissao_produto[P]>
  }




  export type missao_produtoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: missao_produtoWhereInput
    orderBy?: missao_produtoOrderByWithAggregationInput | missao_produtoOrderByWithAggregationInput[]
    by: Missao_produtoScalarFieldEnum[] | Missao_produtoScalarFieldEnum
    having?: missao_produtoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Missao_produtoCountAggregateInputType | true
    _avg?: Missao_produtoAvgAggregateInputType
    _sum?: Missao_produtoSumAggregateInputType
    _min?: Missao_produtoMinAggregateInputType
    _max?: Missao_produtoMaxAggregateInputType
  }

  export type Missao_produtoGroupByOutputType = {
    id: number
    missao_id: number
    produto_id: number
    preco: number | null
    preco_desconto: number | null
    observacoes: string | null
    status: string
    createdAt: Date | null
    updatedAt: Date | null
    _count: Missao_produtoCountAggregateOutputType | null
    _avg: Missao_produtoAvgAggregateOutputType | null
    _sum: Missao_produtoSumAggregateOutputType | null
    _min: Missao_produtoMinAggregateOutputType | null
    _max: Missao_produtoMaxAggregateOutputType | null
  }

  type GetMissao_produtoGroupByPayload<T extends missao_produtoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Missao_produtoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Missao_produtoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Missao_produtoGroupByOutputType[P]>
            : GetScalarType<T[P], Missao_produtoGroupByOutputType[P]>
        }
      >
    >


  export type missao_produtoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missao_id?: boolean
    produto_id?: boolean
    preco?: boolean
    preco_desconto?: boolean
    observacoes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    missoes?: boolean | missoesDefaultArgs<ExtArgs>
    produtos?: boolean | produtosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missao_produto"]>

  export type missao_produtoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missao_id?: boolean
    produto_id?: boolean
    preco?: boolean
    preco_desconto?: boolean
    observacoes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    missoes?: boolean | missoesDefaultArgs<ExtArgs>
    produtos?: boolean | produtosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missao_produto"]>

  export type missao_produtoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missao_id?: boolean
    produto_id?: boolean
    preco?: boolean
    preco_desconto?: boolean
    observacoes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    missoes?: boolean | missoesDefaultArgs<ExtArgs>
    produtos?: boolean | produtosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missao_produto"]>

  export type missao_produtoSelectScalar = {
    id?: boolean
    missao_id?: boolean
    produto_id?: boolean
    preco?: boolean
    preco_desconto?: boolean
    observacoes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type missao_produtoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "missao_id" | "produto_id" | "preco" | "preco_desconto" | "observacoes" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["missao_produto"]>
  export type missao_produtoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missoes?: boolean | missoesDefaultArgs<ExtArgs>
    produtos?: boolean | produtosDefaultArgs<ExtArgs>
  }
  export type missao_produtoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missoes?: boolean | missoesDefaultArgs<ExtArgs>
    produtos?: boolean | produtosDefaultArgs<ExtArgs>
  }
  export type missao_produtoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missoes?: boolean | missoesDefaultArgs<ExtArgs>
    produtos?: boolean | produtosDefaultArgs<ExtArgs>
  }

  export type $missao_produtoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "missao_produto"
    objects: {
      missoes: Prisma.$missoesPayload<ExtArgs>
      produtos: Prisma.$produtosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      missao_id: number
      produto_id: number
      preco: number | null
      preco_desconto: number | null
      observacoes: string | null
      status: string
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["missao_produto"]>
    composites: {}
  }

  type missao_produtoGetPayload<S extends boolean | null | undefined | missao_produtoDefaultArgs> = $Result.GetResult<Prisma.$missao_produtoPayload, S>

  type missao_produtoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<missao_produtoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Missao_produtoCountAggregateInputType | true
    }

  export interface missao_produtoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['missao_produto'], meta: { name: 'missao_produto' } }
    /**
     * Find zero or one Missao_produto that matches the filter.
     * @param {missao_produtoFindUniqueArgs} args - Arguments to find a Missao_produto
     * @example
     * // Get one Missao_produto
     * const missao_produto = await prisma.missao_produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends missao_produtoFindUniqueArgs>(args: SelectSubset<T, missao_produtoFindUniqueArgs<ExtArgs>>): Prisma__missao_produtoClient<$Result.GetResult<Prisma.$missao_produtoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Missao_produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {missao_produtoFindUniqueOrThrowArgs} args - Arguments to find a Missao_produto
     * @example
     * // Get one Missao_produto
     * const missao_produto = await prisma.missao_produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends missao_produtoFindUniqueOrThrowArgs>(args: SelectSubset<T, missao_produtoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__missao_produtoClient<$Result.GetResult<Prisma.$missao_produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Missao_produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missao_produtoFindFirstArgs} args - Arguments to find a Missao_produto
     * @example
     * // Get one Missao_produto
     * const missao_produto = await prisma.missao_produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends missao_produtoFindFirstArgs>(args?: SelectSubset<T, missao_produtoFindFirstArgs<ExtArgs>>): Prisma__missao_produtoClient<$Result.GetResult<Prisma.$missao_produtoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Missao_produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missao_produtoFindFirstOrThrowArgs} args - Arguments to find a Missao_produto
     * @example
     * // Get one Missao_produto
     * const missao_produto = await prisma.missao_produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends missao_produtoFindFirstOrThrowArgs>(args?: SelectSubset<T, missao_produtoFindFirstOrThrowArgs<ExtArgs>>): Prisma__missao_produtoClient<$Result.GetResult<Prisma.$missao_produtoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Missao_produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missao_produtoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Missao_produtos
     * const missao_produtos = await prisma.missao_produto.findMany()
     * 
     * // Get first 10 Missao_produtos
     * const missao_produtos = await prisma.missao_produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missao_produtoWithIdOnly = await prisma.missao_produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends missao_produtoFindManyArgs>(args?: SelectSubset<T, missao_produtoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$missao_produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Missao_produto.
     * @param {missao_produtoCreateArgs} args - Arguments to create a Missao_produto.
     * @example
     * // Create one Missao_produto
     * const Missao_produto = await prisma.missao_produto.create({
     *   data: {
     *     // ... data to create a Missao_produto
     *   }
     * })
     * 
     */
    create<T extends missao_produtoCreateArgs>(args: SelectSubset<T, missao_produtoCreateArgs<ExtArgs>>): Prisma__missao_produtoClient<$Result.GetResult<Prisma.$missao_produtoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Missao_produtos.
     * @param {missao_produtoCreateManyArgs} args - Arguments to create many Missao_produtos.
     * @example
     * // Create many Missao_produtos
     * const missao_produto = await prisma.missao_produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends missao_produtoCreateManyArgs>(args?: SelectSubset<T, missao_produtoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Missao_produtos and returns the data saved in the database.
     * @param {missao_produtoCreateManyAndReturnArgs} args - Arguments to create many Missao_produtos.
     * @example
     * // Create many Missao_produtos
     * const missao_produto = await prisma.missao_produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Missao_produtos and only return the `id`
     * const missao_produtoWithIdOnly = await prisma.missao_produto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends missao_produtoCreateManyAndReturnArgs>(args?: SelectSubset<T, missao_produtoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$missao_produtoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Missao_produto.
     * @param {missao_produtoDeleteArgs} args - Arguments to delete one Missao_produto.
     * @example
     * // Delete one Missao_produto
     * const Missao_produto = await prisma.missao_produto.delete({
     *   where: {
     *     // ... filter to delete one Missao_produto
     *   }
     * })
     * 
     */
    delete<T extends missao_produtoDeleteArgs>(args: SelectSubset<T, missao_produtoDeleteArgs<ExtArgs>>): Prisma__missao_produtoClient<$Result.GetResult<Prisma.$missao_produtoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Missao_produto.
     * @param {missao_produtoUpdateArgs} args - Arguments to update one Missao_produto.
     * @example
     * // Update one Missao_produto
     * const missao_produto = await prisma.missao_produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends missao_produtoUpdateArgs>(args: SelectSubset<T, missao_produtoUpdateArgs<ExtArgs>>): Prisma__missao_produtoClient<$Result.GetResult<Prisma.$missao_produtoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Missao_produtos.
     * @param {missao_produtoDeleteManyArgs} args - Arguments to filter Missao_produtos to delete.
     * @example
     * // Delete a few Missao_produtos
     * const { count } = await prisma.missao_produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends missao_produtoDeleteManyArgs>(args?: SelectSubset<T, missao_produtoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missao_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missao_produtoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Missao_produtos
     * const missao_produto = await prisma.missao_produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends missao_produtoUpdateManyArgs>(args: SelectSubset<T, missao_produtoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missao_produtos and returns the data updated in the database.
     * @param {missao_produtoUpdateManyAndReturnArgs} args - Arguments to update many Missao_produtos.
     * @example
     * // Update many Missao_produtos
     * const missao_produto = await prisma.missao_produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Missao_produtos and only return the `id`
     * const missao_produtoWithIdOnly = await prisma.missao_produto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends missao_produtoUpdateManyAndReturnArgs>(args: SelectSubset<T, missao_produtoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$missao_produtoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Missao_produto.
     * @param {missao_produtoUpsertArgs} args - Arguments to update or create a Missao_produto.
     * @example
     * // Update or create a Missao_produto
     * const missao_produto = await prisma.missao_produto.upsert({
     *   create: {
     *     // ... data to create a Missao_produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Missao_produto we want to update
     *   }
     * })
     */
    upsert<T extends missao_produtoUpsertArgs>(args: SelectSubset<T, missao_produtoUpsertArgs<ExtArgs>>): Prisma__missao_produtoClient<$Result.GetResult<Prisma.$missao_produtoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Missao_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missao_produtoCountArgs} args - Arguments to filter Missao_produtos to count.
     * @example
     * // Count the number of Missao_produtos
     * const count = await prisma.missao_produto.count({
     *   where: {
     *     // ... the filter for the Missao_produtos we want to count
     *   }
     * })
    **/
    count<T extends missao_produtoCountArgs>(
      args?: Subset<T, missao_produtoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Missao_produtoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Missao_produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Missao_produtoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Missao_produtoAggregateArgs>(args: Subset<T, Missao_produtoAggregateArgs>): Prisma.PrismaPromise<GetMissao_produtoAggregateType<T>>

    /**
     * Group by Missao_produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missao_produtoGroupByArgs} args - Group by arguments.
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
      T extends missao_produtoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: missao_produtoGroupByArgs['orderBy'] }
        : { orderBy?: missao_produtoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, missao_produtoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissao_produtoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the missao_produto model
   */
  readonly fields: missao_produtoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for missao_produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__missao_produtoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    missoes<T extends missoesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, missoesDefaultArgs<ExtArgs>>): Prisma__missoesClient<$Result.GetResult<Prisma.$missoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produtos<T extends produtosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, produtosDefaultArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the missao_produto model
   */
  interface missao_produtoFieldRefs {
    readonly id: FieldRef<"missao_produto", 'Int'>
    readonly missao_id: FieldRef<"missao_produto", 'Int'>
    readonly produto_id: FieldRef<"missao_produto", 'Int'>
    readonly preco: FieldRef<"missao_produto", 'Float'>
    readonly preco_desconto: FieldRef<"missao_produto", 'Float'>
    readonly observacoes: FieldRef<"missao_produto", 'String'>
    readonly status: FieldRef<"missao_produto", 'String'>
    readonly createdAt: FieldRef<"missao_produto", 'DateTime'>
    readonly updatedAt: FieldRef<"missao_produto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * missao_produto findUnique
   */
  export type missao_produtoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missao_produto
     */
    select?: missao_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missao_produto
     */
    omit?: missao_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missao_produtoInclude<ExtArgs> | null
    /**
     * Filter, which missao_produto to fetch.
     */
    where: missao_produtoWhereUniqueInput
  }

  /**
   * missao_produto findUniqueOrThrow
   */
  export type missao_produtoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missao_produto
     */
    select?: missao_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missao_produto
     */
    omit?: missao_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missao_produtoInclude<ExtArgs> | null
    /**
     * Filter, which missao_produto to fetch.
     */
    where: missao_produtoWhereUniqueInput
  }

  /**
   * missao_produto findFirst
   */
  export type missao_produtoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missao_produto
     */
    select?: missao_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missao_produto
     */
    omit?: missao_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missao_produtoInclude<ExtArgs> | null
    /**
     * Filter, which missao_produto to fetch.
     */
    where?: missao_produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of missao_produtos to fetch.
     */
    orderBy?: missao_produtoOrderByWithRelationInput | missao_produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for missao_produtos.
     */
    cursor?: missao_produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` missao_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` missao_produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of missao_produtos.
     */
    distinct?: Missao_produtoScalarFieldEnum | Missao_produtoScalarFieldEnum[]
  }

  /**
   * missao_produto findFirstOrThrow
   */
  export type missao_produtoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missao_produto
     */
    select?: missao_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missao_produto
     */
    omit?: missao_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missao_produtoInclude<ExtArgs> | null
    /**
     * Filter, which missao_produto to fetch.
     */
    where?: missao_produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of missao_produtos to fetch.
     */
    orderBy?: missao_produtoOrderByWithRelationInput | missao_produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for missao_produtos.
     */
    cursor?: missao_produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` missao_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` missao_produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of missao_produtos.
     */
    distinct?: Missao_produtoScalarFieldEnum | Missao_produtoScalarFieldEnum[]
  }

  /**
   * missao_produto findMany
   */
  export type missao_produtoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missao_produto
     */
    select?: missao_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missao_produto
     */
    omit?: missao_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missao_produtoInclude<ExtArgs> | null
    /**
     * Filter, which missao_produtos to fetch.
     */
    where?: missao_produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of missao_produtos to fetch.
     */
    orderBy?: missao_produtoOrderByWithRelationInput | missao_produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing missao_produtos.
     */
    cursor?: missao_produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` missao_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` missao_produtos.
     */
    skip?: number
    distinct?: Missao_produtoScalarFieldEnum | Missao_produtoScalarFieldEnum[]
  }

  /**
   * missao_produto create
   */
  export type missao_produtoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missao_produto
     */
    select?: missao_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missao_produto
     */
    omit?: missao_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missao_produtoInclude<ExtArgs> | null
    /**
     * The data needed to create a missao_produto.
     */
    data: XOR<missao_produtoCreateInput, missao_produtoUncheckedCreateInput>
  }

  /**
   * missao_produto createMany
   */
  export type missao_produtoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many missao_produtos.
     */
    data: missao_produtoCreateManyInput | missao_produtoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * missao_produto createManyAndReturn
   */
  export type missao_produtoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missao_produto
     */
    select?: missao_produtoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the missao_produto
     */
    omit?: missao_produtoOmit<ExtArgs> | null
    /**
     * The data used to create many missao_produtos.
     */
    data: missao_produtoCreateManyInput | missao_produtoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missao_produtoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * missao_produto update
   */
  export type missao_produtoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missao_produto
     */
    select?: missao_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missao_produto
     */
    omit?: missao_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missao_produtoInclude<ExtArgs> | null
    /**
     * The data needed to update a missao_produto.
     */
    data: XOR<missao_produtoUpdateInput, missao_produtoUncheckedUpdateInput>
    /**
     * Choose, which missao_produto to update.
     */
    where: missao_produtoWhereUniqueInput
  }

  /**
   * missao_produto updateMany
   */
  export type missao_produtoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update missao_produtos.
     */
    data: XOR<missao_produtoUpdateManyMutationInput, missao_produtoUncheckedUpdateManyInput>
    /**
     * Filter which missao_produtos to update
     */
    where?: missao_produtoWhereInput
    /**
     * Limit how many missao_produtos to update.
     */
    limit?: number
  }

  /**
   * missao_produto updateManyAndReturn
   */
  export type missao_produtoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missao_produto
     */
    select?: missao_produtoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the missao_produto
     */
    omit?: missao_produtoOmit<ExtArgs> | null
    /**
     * The data used to update missao_produtos.
     */
    data: XOR<missao_produtoUpdateManyMutationInput, missao_produtoUncheckedUpdateManyInput>
    /**
     * Filter which missao_produtos to update
     */
    where?: missao_produtoWhereInput
    /**
     * Limit how many missao_produtos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missao_produtoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * missao_produto upsert
   */
  export type missao_produtoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missao_produto
     */
    select?: missao_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missao_produto
     */
    omit?: missao_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missao_produtoInclude<ExtArgs> | null
    /**
     * The filter to search for the missao_produto to update in case it exists.
     */
    where: missao_produtoWhereUniqueInput
    /**
     * In case the missao_produto found by the `where` argument doesn't exist, create a new missao_produto with this data.
     */
    create: XOR<missao_produtoCreateInput, missao_produtoUncheckedCreateInput>
    /**
     * In case the missao_produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<missao_produtoUpdateInput, missao_produtoUncheckedUpdateInput>
  }

  /**
   * missao_produto delete
   */
  export type missao_produtoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missao_produto
     */
    select?: missao_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missao_produto
     */
    omit?: missao_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missao_produtoInclude<ExtArgs> | null
    /**
     * Filter which missao_produto to delete.
     */
    where: missao_produtoWhereUniqueInput
  }

  /**
   * missao_produto deleteMany
   */
  export type missao_produtoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which missao_produtos to delete
     */
    where?: missao_produtoWhereInput
    /**
     * Limit how many missao_produtos to delete.
     */
    limit?: number
  }

  /**
   * missao_produto without action
   */
  export type missao_produtoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missao_produto
     */
    select?: missao_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missao_produto
     */
    omit?: missao_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missao_produtoInclude<ExtArgs> | null
  }


  /**
   * Model missoes
   */

  export type AggregateMissoes = {
    _count: MissoesCountAggregateOutputType | null
    _avg: MissoesAvgAggregateOutputType | null
    _sum: MissoesSumAggregateOutputType | null
    _min: MissoesMinAggregateOutputType | null
    _max: MissoesMaxAggregateOutputType | null
  }

  export type MissoesAvgAggregateOutputType = {
    id: number | null
    concorrente_id: number | null
    usuario_id: number | null
  }

  export type MissoesSumAggregateOutputType = {
    id: number | null
    concorrente_id: number | null
    usuario_id: number | null
  }

  export type MissoesMinAggregateOutputType = {
    id: number | null
    concorrente_id: number | null
    status: string | null
    usuario_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MissoesMaxAggregateOutputType = {
    id: number | null
    concorrente_id: number | null
    status: string | null
    usuario_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MissoesCountAggregateOutputType = {
    id: number
    concorrente_id: number
    status: number
    usuario_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MissoesAvgAggregateInputType = {
    id?: true
    concorrente_id?: true
    usuario_id?: true
  }

  export type MissoesSumAggregateInputType = {
    id?: true
    concorrente_id?: true
    usuario_id?: true
  }

  export type MissoesMinAggregateInputType = {
    id?: true
    concorrente_id?: true
    status?: true
    usuario_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MissoesMaxAggregateInputType = {
    id?: true
    concorrente_id?: true
    status?: true
    usuario_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MissoesCountAggregateInputType = {
    id?: true
    concorrente_id?: true
    status?: true
    usuario_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MissoesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which missoes to aggregate.
     */
    where?: missoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of missoes to fetch.
     */
    orderBy?: missoesOrderByWithRelationInput | missoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: missoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` missoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` missoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned missoes
    **/
    _count?: true | MissoesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissoesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissoesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissoesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissoesMaxAggregateInputType
  }

  export type GetMissoesAggregateType<T extends MissoesAggregateArgs> = {
        [P in keyof T & keyof AggregateMissoes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMissoes[P]>
      : GetScalarType<T[P], AggregateMissoes[P]>
  }




  export type missoesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: missoesWhereInput
    orderBy?: missoesOrderByWithAggregationInput | missoesOrderByWithAggregationInput[]
    by: MissoesScalarFieldEnum[] | MissoesScalarFieldEnum
    having?: missoesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissoesCountAggregateInputType | true
    _avg?: MissoesAvgAggregateInputType
    _sum?: MissoesSumAggregateInputType
    _min?: MissoesMinAggregateInputType
    _max?: MissoesMaxAggregateInputType
  }

  export type MissoesGroupByOutputType = {
    id: number
    concorrente_id: number
    status: string
    usuario_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: MissoesCountAggregateOutputType | null
    _avg: MissoesAvgAggregateOutputType | null
    _sum: MissoesSumAggregateOutputType | null
    _min: MissoesMinAggregateOutputType | null
    _max: MissoesMaxAggregateOutputType | null
  }

  type GetMissoesGroupByPayload<T extends missoesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissoesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissoesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissoesGroupByOutputType[P]>
            : GetScalarType<T[P], MissoesGroupByOutputType[P]>
        }
      >
    >


  export type missoesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    concorrente_id?: boolean
    status?: boolean
    usuario_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    missao_produto?: boolean | missoes$missao_produtoArgs<ExtArgs>
    concorrentes?: boolean | concorrentesDefaultArgs<ExtArgs>
    usuarios?: boolean | missoes$usuariosArgs<ExtArgs>
    _count?: boolean | MissoesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missoes"]>

  export type missoesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    concorrente_id?: boolean
    status?: boolean
    usuario_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    concorrentes?: boolean | concorrentesDefaultArgs<ExtArgs>
    usuarios?: boolean | missoes$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["missoes"]>

  export type missoesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    concorrente_id?: boolean
    status?: boolean
    usuario_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    concorrentes?: boolean | concorrentesDefaultArgs<ExtArgs>
    usuarios?: boolean | missoes$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["missoes"]>

  export type missoesSelectScalar = {
    id?: boolean
    concorrente_id?: boolean
    status?: boolean
    usuario_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type missoesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "concorrente_id" | "status" | "usuario_id" | "createdAt" | "updatedAt", ExtArgs["result"]["missoes"]>
  export type missoesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missao_produto?: boolean | missoes$missao_produtoArgs<ExtArgs>
    concorrentes?: boolean | concorrentesDefaultArgs<ExtArgs>
    usuarios?: boolean | missoes$usuariosArgs<ExtArgs>
    _count?: boolean | MissoesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type missoesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    concorrentes?: boolean | concorrentesDefaultArgs<ExtArgs>
    usuarios?: boolean | missoes$usuariosArgs<ExtArgs>
  }
  export type missoesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    concorrentes?: boolean | concorrentesDefaultArgs<ExtArgs>
    usuarios?: boolean | missoes$usuariosArgs<ExtArgs>
  }

  export type $missoesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "missoes"
    objects: {
      missao_produto: Prisma.$missao_produtoPayload<ExtArgs>[]
      concorrentes: Prisma.$concorrentesPayload<ExtArgs>
      usuarios: Prisma.$usuariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      concorrente_id: number
      status: string
      usuario_id: number | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["missoes"]>
    composites: {}
  }

  type missoesGetPayload<S extends boolean | null | undefined | missoesDefaultArgs> = $Result.GetResult<Prisma.$missoesPayload, S>

  type missoesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<missoesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissoesCountAggregateInputType | true
    }

  export interface missoesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['missoes'], meta: { name: 'missoes' } }
    /**
     * Find zero or one Missoes that matches the filter.
     * @param {missoesFindUniqueArgs} args - Arguments to find a Missoes
     * @example
     * // Get one Missoes
     * const missoes = await prisma.missoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends missoesFindUniqueArgs>(args: SelectSubset<T, missoesFindUniqueArgs<ExtArgs>>): Prisma__missoesClient<$Result.GetResult<Prisma.$missoesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Missoes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {missoesFindUniqueOrThrowArgs} args - Arguments to find a Missoes
     * @example
     * // Get one Missoes
     * const missoes = await prisma.missoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends missoesFindUniqueOrThrowArgs>(args: SelectSubset<T, missoesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__missoesClient<$Result.GetResult<Prisma.$missoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Missoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missoesFindFirstArgs} args - Arguments to find a Missoes
     * @example
     * // Get one Missoes
     * const missoes = await prisma.missoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends missoesFindFirstArgs>(args?: SelectSubset<T, missoesFindFirstArgs<ExtArgs>>): Prisma__missoesClient<$Result.GetResult<Prisma.$missoesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Missoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missoesFindFirstOrThrowArgs} args - Arguments to find a Missoes
     * @example
     * // Get one Missoes
     * const missoes = await prisma.missoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends missoesFindFirstOrThrowArgs>(args?: SelectSubset<T, missoesFindFirstOrThrowArgs<ExtArgs>>): Prisma__missoesClient<$Result.GetResult<Prisma.$missoesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Missoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missoesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Missoes
     * const missoes = await prisma.missoes.findMany()
     * 
     * // Get first 10 Missoes
     * const missoes = await prisma.missoes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missoesWithIdOnly = await prisma.missoes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends missoesFindManyArgs>(args?: SelectSubset<T, missoesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$missoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Missoes.
     * @param {missoesCreateArgs} args - Arguments to create a Missoes.
     * @example
     * // Create one Missoes
     * const Missoes = await prisma.missoes.create({
     *   data: {
     *     // ... data to create a Missoes
     *   }
     * })
     * 
     */
    create<T extends missoesCreateArgs>(args: SelectSubset<T, missoesCreateArgs<ExtArgs>>): Prisma__missoesClient<$Result.GetResult<Prisma.$missoesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Missoes.
     * @param {missoesCreateManyArgs} args - Arguments to create many Missoes.
     * @example
     * // Create many Missoes
     * const missoes = await prisma.missoes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends missoesCreateManyArgs>(args?: SelectSubset<T, missoesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Missoes and returns the data saved in the database.
     * @param {missoesCreateManyAndReturnArgs} args - Arguments to create many Missoes.
     * @example
     * // Create many Missoes
     * const missoes = await prisma.missoes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Missoes and only return the `id`
     * const missoesWithIdOnly = await prisma.missoes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends missoesCreateManyAndReturnArgs>(args?: SelectSubset<T, missoesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$missoesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Missoes.
     * @param {missoesDeleteArgs} args - Arguments to delete one Missoes.
     * @example
     * // Delete one Missoes
     * const Missoes = await prisma.missoes.delete({
     *   where: {
     *     // ... filter to delete one Missoes
     *   }
     * })
     * 
     */
    delete<T extends missoesDeleteArgs>(args: SelectSubset<T, missoesDeleteArgs<ExtArgs>>): Prisma__missoesClient<$Result.GetResult<Prisma.$missoesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Missoes.
     * @param {missoesUpdateArgs} args - Arguments to update one Missoes.
     * @example
     * // Update one Missoes
     * const missoes = await prisma.missoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends missoesUpdateArgs>(args: SelectSubset<T, missoesUpdateArgs<ExtArgs>>): Prisma__missoesClient<$Result.GetResult<Prisma.$missoesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Missoes.
     * @param {missoesDeleteManyArgs} args - Arguments to filter Missoes to delete.
     * @example
     * // Delete a few Missoes
     * const { count } = await prisma.missoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends missoesDeleteManyArgs>(args?: SelectSubset<T, missoesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Missoes
     * const missoes = await prisma.missoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends missoesUpdateManyArgs>(args: SelectSubset<T, missoesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missoes and returns the data updated in the database.
     * @param {missoesUpdateManyAndReturnArgs} args - Arguments to update many Missoes.
     * @example
     * // Update many Missoes
     * const missoes = await prisma.missoes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Missoes and only return the `id`
     * const missoesWithIdOnly = await prisma.missoes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends missoesUpdateManyAndReturnArgs>(args: SelectSubset<T, missoesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$missoesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Missoes.
     * @param {missoesUpsertArgs} args - Arguments to update or create a Missoes.
     * @example
     * // Update or create a Missoes
     * const missoes = await prisma.missoes.upsert({
     *   create: {
     *     // ... data to create a Missoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Missoes we want to update
     *   }
     * })
     */
    upsert<T extends missoesUpsertArgs>(args: SelectSubset<T, missoesUpsertArgs<ExtArgs>>): Prisma__missoesClient<$Result.GetResult<Prisma.$missoesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Missoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missoesCountArgs} args - Arguments to filter Missoes to count.
     * @example
     * // Count the number of Missoes
     * const count = await prisma.missoes.count({
     *   where: {
     *     // ... the filter for the Missoes we want to count
     *   }
     * })
    **/
    count<T extends missoesCountArgs>(
      args?: Subset<T, missoesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissoesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Missoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MissoesAggregateArgs>(args: Subset<T, MissoesAggregateArgs>): Prisma.PrismaPromise<GetMissoesAggregateType<T>>

    /**
     * Group by Missoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missoesGroupByArgs} args - Group by arguments.
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
      T extends missoesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: missoesGroupByArgs['orderBy'] }
        : { orderBy?: missoesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, missoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the missoes model
   */
  readonly fields: missoesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for missoes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__missoesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    missao_produto<T extends missoes$missao_produtoArgs<ExtArgs> = {}>(args?: Subset<T, missoes$missao_produtoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$missao_produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    concorrentes<T extends concorrentesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, concorrentesDefaultArgs<ExtArgs>>): Prisma__concorrentesClient<$Result.GetResult<Prisma.$concorrentesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuarios<T extends missoes$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, missoes$usuariosArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the missoes model
   */
  interface missoesFieldRefs {
    readonly id: FieldRef<"missoes", 'Int'>
    readonly concorrente_id: FieldRef<"missoes", 'Int'>
    readonly status: FieldRef<"missoes", 'String'>
    readonly usuario_id: FieldRef<"missoes", 'Int'>
    readonly createdAt: FieldRef<"missoes", 'DateTime'>
    readonly updatedAt: FieldRef<"missoes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * missoes findUnique
   */
  export type missoesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missoes
     */
    select?: missoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missoes
     */
    omit?: missoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missoesInclude<ExtArgs> | null
    /**
     * Filter, which missoes to fetch.
     */
    where: missoesWhereUniqueInput
  }

  /**
   * missoes findUniqueOrThrow
   */
  export type missoesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missoes
     */
    select?: missoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missoes
     */
    omit?: missoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missoesInclude<ExtArgs> | null
    /**
     * Filter, which missoes to fetch.
     */
    where: missoesWhereUniqueInput
  }

  /**
   * missoes findFirst
   */
  export type missoesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missoes
     */
    select?: missoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missoes
     */
    omit?: missoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missoesInclude<ExtArgs> | null
    /**
     * Filter, which missoes to fetch.
     */
    where?: missoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of missoes to fetch.
     */
    orderBy?: missoesOrderByWithRelationInput | missoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for missoes.
     */
    cursor?: missoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` missoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` missoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of missoes.
     */
    distinct?: MissoesScalarFieldEnum | MissoesScalarFieldEnum[]
  }

  /**
   * missoes findFirstOrThrow
   */
  export type missoesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missoes
     */
    select?: missoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missoes
     */
    omit?: missoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missoesInclude<ExtArgs> | null
    /**
     * Filter, which missoes to fetch.
     */
    where?: missoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of missoes to fetch.
     */
    orderBy?: missoesOrderByWithRelationInput | missoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for missoes.
     */
    cursor?: missoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` missoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` missoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of missoes.
     */
    distinct?: MissoesScalarFieldEnum | MissoesScalarFieldEnum[]
  }

  /**
   * missoes findMany
   */
  export type missoesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missoes
     */
    select?: missoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missoes
     */
    omit?: missoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missoesInclude<ExtArgs> | null
    /**
     * Filter, which missoes to fetch.
     */
    where?: missoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of missoes to fetch.
     */
    orderBy?: missoesOrderByWithRelationInput | missoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing missoes.
     */
    cursor?: missoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` missoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` missoes.
     */
    skip?: number
    distinct?: MissoesScalarFieldEnum | MissoesScalarFieldEnum[]
  }

  /**
   * missoes create
   */
  export type missoesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missoes
     */
    select?: missoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missoes
     */
    omit?: missoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missoesInclude<ExtArgs> | null
    /**
     * The data needed to create a missoes.
     */
    data: XOR<missoesCreateInput, missoesUncheckedCreateInput>
  }

  /**
   * missoes createMany
   */
  export type missoesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many missoes.
     */
    data: missoesCreateManyInput | missoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * missoes createManyAndReturn
   */
  export type missoesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missoes
     */
    select?: missoesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the missoes
     */
    omit?: missoesOmit<ExtArgs> | null
    /**
     * The data used to create many missoes.
     */
    data: missoesCreateManyInput | missoesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missoesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * missoes update
   */
  export type missoesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missoes
     */
    select?: missoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missoes
     */
    omit?: missoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missoesInclude<ExtArgs> | null
    /**
     * The data needed to update a missoes.
     */
    data: XOR<missoesUpdateInput, missoesUncheckedUpdateInput>
    /**
     * Choose, which missoes to update.
     */
    where: missoesWhereUniqueInput
  }

  /**
   * missoes updateMany
   */
  export type missoesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update missoes.
     */
    data: XOR<missoesUpdateManyMutationInput, missoesUncheckedUpdateManyInput>
    /**
     * Filter which missoes to update
     */
    where?: missoesWhereInput
    /**
     * Limit how many missoes to update.
     */
    limit?: number
  }

  /**
   * missoes updateManyAndReturn
   */
  export type missoesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missoes
     */
    select?: missoesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the missoes
     */
    omit?: missoesOmit<ExtArgs> | null
    /**
     * The data used to update missoes.
     */
    data: XOR<missoesUpdateManyMutationInput, missoesUncheckedUpdateManyInput>
    /**
     * Filter which missoes to update
     */
    where?: missoesWhereInput
    /**
     * Limit how many missoes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missoesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * missoes upsert
   */
  export type missoesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missoes
     */
    select?: missoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missoes
     */
    omit?: missoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missoesInclude<ExtArgs> | null
    /**
     * The filter to search for the missoes to update in case it exists.
     */
    where: missoesWhereUniqueInput
    /**
     * In case the missoes found by the `where` argument doesn't exist, create a new missoes with this data.
     */
    create: XOR<missoesCreateInput, missoesUncheckedCreateInput>
    /**
     * In case the missoes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<missoesUpdateInput, missoesUncheckedUpdateInput>
  }

  /**
   * missoes delete
   */
  export type missoesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missoes
     */
    select?: missoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missoes
     */
    omit?: missoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missoesInclude<ExtArgs> | null
    /**
     * Filter which missoes to delete.
     */
    where: missoesWhereUniqueInput
  }

  /**
   * missoes deleteMany
   */
  export type missoesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which missoes to delete
     */
    where?: missoesWhereInput
    /**
     * Limit how many missoes to delete.
     */
    limit?: number
  }

  /**
   * missoes.missao_produto
   */
  export type missoes$missao_produtoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missao_produto
     */
    select?: missao_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missao_produto
     */
    omit?: missao_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missao_produtoInclude<ExtArgs> | null
    where?: missao_produtoWhereInput
    orderBy?: missao_produtoOrderByWithRelationInput | missao_produtoOrderByWithRelationInput[]
    cursor?: missao_produtoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Missao_produtoScalarFieldEnum | Missao_produtoScalarFieldEnum[]
  }

  /**
   * missoes.usuarios
   */
  export type missoes$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
  }

  /**
   * missoes without action
   */
  export type missoesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missoes
     */
    select?: missoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missoes
     */
    omit?: missoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missoesInclude<ExtArgs> | null
  }


  /**
   * Model produtos
   */

  export type AggregateProdutos = {
    _count: ProdutosCountAggregateOutputType | null
    _avg: ProdutosAvgAggregateOutputType | null
    _sum: ProdutosSumAggregateOutputType | null
    _min: ProdutosMinAggregateOutputType | null
    _max: ProdutosMaxAggregateOutputType | null
  }

  export type ProdutosAvgAggregateOutputType = {
    id: number | null
    preco: number | null
  }

  export type ProdutosSumAggregateOutputType = {
    id: number | null
    preco: number | null
  }

  export type ProdutosMinAggregateOutputType = {
    id: number | null
    nome: string | null
    preco: number | null
    codigo: string | null
    foto: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProdutosMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    preco: number | null
    codigo: string | null
    foto: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProdutosCountAggregateOutputType = {
    id: number
    nome: number
    preco: number
    codigo: number
    foto: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProdutosAvgAggregateInputType = {
    id?: true
    preco?: true
  }

  export type ProdutosSumAggregateInputType = {
    id?: true
    preco?: true
  }

  export type ProdutosMinAggregateInputType = {
    id?: true
    nome?: true
    preco?: true
    codigo?: true
    foto?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProdutosMaxAggregateInputType = {
    id?: true
    nome?: true
    preco?: true
    codigo?: true
    foto?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProdutosCountAggregateInputType = {
    id?: true
    nome?: true
    preco?: true
    codigo?: true
    foto?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProdutosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produtos to aggregate.
     */
    where?: produtosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtosOrderByWithRelationInput | produtosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produtosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produtos
    **/
    _count?: true | ProdutosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutosMaxAggregateInputType
  }

  export type GetProdutosAggregateType<T extends ProdutosAggregateArgs> = {
        [P in keyof T & keyof AggregateProdutos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProdutos[P]>
      : GetScalarType<T[P], AggregateProdutos[P]>
  }




  export type produtosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produtosWhereInput
    orderBy?: produtosOrderByWithAggregationInput | produtosOrderByWithAggregationInput[]
    by: ProdutosScalarFieldEnum[] | ProdutosScalarFieldEnum
    having?: produtosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutosCountAggregateInputType | true
    _avg?: ProdutosAvgAggregateInputType
    _sum?: ProdutosSumAggregateInputType
    _min?: ProdutosMinAggregateInputType
    _max?: ProdutosMaxAggregateInputType
  }

  export type ProdutosGroupByOutputType = {
    id: number
    nome: string
    preco: number
    codigo: string | null
    foto: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: ProdutosCountAggregateOutputType | null
    _avg: ProdutosAvgAggregateOutputType | null
    _sum: ProdutosSumAggregateOutputType | null
    _min: ProdutosMinAggregateOutputType | null
    _max: ProdutosMaxAggregateOutputType | null
  }

  type GetProdutosGroupByPayload<T extends produtosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutosGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutosGroupByOutputType[P]>
        }
      >
    >


  export type produtosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    preco?: boolean
    codigo?: boolean
    foto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    missao_produto?: boolean | produtos$missao_produtoArgs<ExtArgs>
    _count?: boolean | ProdutosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produtos"]>

  export type produtosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    preco?: boolean
    codigo?: boolean
    foto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["produtos"]>

  export type produtosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    preco?: boolean
    codigo?: boolean
    foto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["produtos"]>

  export type produtosSelectScalar = {
    id?: boolean
    nome?: boolean
    preco?: boolean
    codigo?: boolean
    foto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type produtosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "preco" | "codigo" | "foto" | "createdAt" | "updatedAt", ExtArgs["result"]["produtos"]>
  export type produtosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missao_produto?: boolean | produtos$missao_produtoArgs<ExtArgs>
    _count?: boolean | ProdutosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type produtosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type produtosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $produtosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produtos"
    objects: {
      missao_produto: Prisma.$missao_produtoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      preco: number
      codigo: string | null
      foto: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["produtos"]>
    composites: {}
  }

  type produtosGetPayload<S extends boolean | null | undefined | produtosDefaultArgs> = $Result.GetResult<Prisma.$produtosPayload, S>

  type produtosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<produtosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutosCountAggregateInputType | true
    }

  export interface produtosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produtos'], meta: { name: 'produtos' } }
    /**
     * Find zero or one Produtos that matches the filter.
     * @param {produtosFindUniqueArgs} args - Arguments to find a Produtos
     * @example
     * // Get one Produtos
     * const produtos = await prisma.produtos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends produtosFindUniqueArgs>(args: SelectSubset<T, produtosFindUniqueArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produtos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {produtosFindUniqueOrThrowArgs} args - Arguments to find a Produtos
     * @example
     * // Get one Produtos
     * const produtos = await prisma.produtos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends produtosFindUniqueOrThrowArgs>(args: SelectSubset<T, produtosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtosFindFirstArgs} args - Arguments to find a Produtos
     * @example
     * // Get one Produtos
     * const produtos = await prisma.produtos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends produtosFindFirstArgs>(args?: SelectSubset<T, produtosFindFirstArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produtos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtosFindFirstOrThrowArgs} args - Arguments to find a Produtos
     * @example
     * // Get one Produtos
     * const produtos = await prisma.produtos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends produtosFindFirstOrThrowArgs>(args?: SelectSubset<T, produtosFindFirstOrThrowArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produtos.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produtos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtosWithIdOnly = await prisma.produtos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends produtosFindManyArgs>(args?: SelectSubset<T, produtosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produtos.
     * @param {produtosCreateArgs} args - Arguments to create a Produtos.
     * @example
     * // Create one Produtos
     * const Produtos = await prisma.produtos.create({
     *   data: {
     *     // ... data to create a Produtos
     *   }
     * })
     * 
     */
    create<T extends produtosCreateArgs>(args: SelectSubset<T, produtosCreateArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {produtosCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produtos = await prisma.produtos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends produtosCreateManyArgs>(args?: SelectSubset<T, produtosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produtos and returns the data saved in the database.
     * @param {produtosCreateManyAndReturnArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produtos = await prisma.produtos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produtos and only return the `id`
     * const produtosWithIdOnly = await prisma.produtos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends produtosCreateManyAndReturnArgs>(args?: SelectSubset<T, produtosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produtos.
     * @param {produtosDeleteArgs} args - Arguments to delete one Produtos.
     * @example
     * // Delete one Produtos
     * const Produtos = await prisma.produtos.delete({
     *   where: {
     *     // ... filter to delete one Produtos
     *   }
     * })
     * 
     */
    delete<T extends produtosDeleteArgs>(args: SelectSubset<T, produtosDeleteArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produtos.
     * @param {produtosUpdateArgs} args - Arguments to update one Produtos.
     * @example
     * // Update one Produtos
     * const produtos = await prisma.produtos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends produtosUpdateArgs>(args: SelectSubset<T, produtosUpdateArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {produtosDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produtos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends produtosDeleteManyArgs>(args?: SelectSubset<T, produtosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produtos = await prisma.produtos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends produtosUpdateManyArgs>(args: SelectSubset<T, produtosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos and returns the data updated in the database.
     * @param {produtosUpdateManyAndReturnArgs} args - Arguments to update many Produtos.
     * @example
     * // Update many Produtos
     * const produtos = await prisma.produtos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produtos and only return the `id`
     * const produtosWithIdOnly = await prisma.produtos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends produtosUpdateManyAndReturnArgs>(args: SelectSubset<T, produtosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produtos.
     * @param {produtosUpsertArgs} args - Arguments to update or create a Produtos.
     * @example
     * // Update or create a Produtos
     * const produtos = await prisma.produtos.upsert({
     *   create: {
     *     // ... data to create a Produtos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produtos we want to update
     *   }
     * })
     */
    upsert<T extends produtosUpsertArgs>(args: SelectSubset<T, produtosUpsertArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtosCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produtos.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends produtosCountArgs>(
      args?: Subset<T, produtosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutosAggregateArgs>(args: Subset<T, ProdutosAggregateArgs>): Prisma.PrismaPromise<GetProdutosAggregateType<T>>

    /**
     * Group by Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtosGroupByArgs} args - Group by arguments.
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
      T extends produtosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produtosGroupByArgs['orderBy'] }
        : { orderBy?: produtosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, produtosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produtos model
   */
  readonly fields: produtosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produtos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produtosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    missao_produto<T extends produtos$missao_produtoArgs<ExtArgs> = {}>(args?: Subset<T, produtos$missao_produtoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$missao_produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the produtos model
   */
  interface produtosFieldRefs {
    readonly id: FieldRef<"produtos", 'Int'>
    readonly nome: FieldRef<"produtos", 'String'>
    readonly preco: FieldRef<"produtos", 'Float'>
    readonly codigo: FieldRef<"produtos", 'String'>
    readonly foto: FieldRef<"produtos", 'String'>
    readonly createdAt: FieldRef<"produtos", 'DateTime'>
    readonly updatedAt: FieldRef<"produtos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * produtos findUnique
   */
  export type produtosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where: produtosWhereUniqueInput
  }

  /**
   * produtos findUniqueOrThrow
   */
  export type produtosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where: produtosWhereUniqueInput
  }

  /**
   * produtos findFirst
   */
  export type produtosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where?: produtosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtosOrderByWithRelationInput | produtosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produtos.
     */
    cursor?: produtosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produtos.
     */
    distinct?: ProdutosScalarFieldEnum | ProdutosScalarFieldEnum[]
  }

  /**
   * produtos findFirstOrThrow
   */
  export type produtosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where?: produtosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtosOrderByWithRelationInput | produtosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produtos.
     */
    cursor?: produtosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produtos.
     */
    distinct?: ProdutosScalarFieldEnum | ProdutosScalarFieldEnum[]
  }

  /**
   * produtos findMany
   */
  export type produtosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where?: produtosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtosOrderByWithRelationInput | produtosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produtos.
     */
    cursor?: produtosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    distinct?: ProdutosScalarFieldEnum | ProdutosScalarFieldEnum[]
  }

  /**
   * produtos create
   */
  export type produtosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * The data needed to create a produtos.
     */
    data: XOR<produtosCreateInput, produtosUncheckedCreateInput>
  }

  /**
   * produtos createMany
   */
  export type produtosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produtos.
     */
    data: produtosCreateManyInput | produtosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produtos createManyAndReturn
   */
  export type produtosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * The data used to create many produtos.
     */
    data: produtosCreateManyInput | produtosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produtos update
   */
  export type produtosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * The data needed to update a produtos.
     */
    data: XOR<produtosUpdateInput, produtosUncheckedUpdateInput>
    /**
     * Choose, which produtos to update.
     */
    where: produtosWhereUniqueInput
  }

  /**
   * produtos updateMany
   */
  export type produtosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produtos.
     */
    data: XOR<produtosUpdateManyMutationInput, produtosUncheckedUpdateManyInput>
    /**
     * Filter which produtos to update
     */
    where?: produtosWhereInput
    /**
     * Limit how many produtos to update.
     */
    limit?: number
  }

  /**
   * produtos updateManyAndReturn
   */
  export type produtosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * The data used to update produtos.
     */
    data: XOR<produtosUpdateManyMutationInput, produtosUncheckedUpdateManyInput>
    /**
     * Filter which produtos to update
     */
    where?: produtosWhereInput
    /**
     * Limit how many produtos to update.
     */
    limit?: number
  }

  /**
   * produtos upsert
   */
  export type produtosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * The filter to search for the produtos to update in case it exists.
     */
    where: produtosWhereUniqueInput
    /**
     * In case the produtos found by the `where` argument doesn't exist, create a new produtos with this data.
     */
    create: XOR<produtosCreateInput, produtosUncheckedCreateInput>
    /**
     * In case the produtos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produtosUpdateInput, produtosUncheckedUpdateInput>
  }

  /**
   * produtos delete
   */
  export type produtosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * Filter which produtos to delete.
     */
    where: produtosWhereUniqueInput
  }

  /**
   * produtos deleteMany
   */
  export type produtosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produtos to delete
     */
    where?: produtosWhereInput
    /**
     * Limit how many produtos to delete.
     */
    limit?: number
  }

  /**
   * produtos.missao_produto
   */
  export type produtos$missao_produtoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missao_produto
     */
    select?: missao_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missao_produto
     */
    omit?: missao_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missao_produtoInclude<ExtArgs> | null
    where?: missao_produtoWhereInput
    orderBy?: missao_produtoOrderByWithRelationInput | missao_produtoOrderByWithRelationInput[]
    cursor?: missao_produtoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Missao_produtoScalarFieldEnum | Missao_produtoScalarFieldEnum[]
  }

  /**
   * produtos without action
   */
  export type produtosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id: number | null
    nivel_id: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id: number | null
    nivel_id: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    foto: string | null
    nivel_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    foto: string | null
    nivel_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    foto: number
    nivel_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id?: true
    nivel_id?: true
  }

  export type UsuariosSumAggregateInputType = {
    id?: true
    nivel_id?: true
  }

  export type UsuariosMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    foto?: true
    nivel_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    foto?: true
    nivel_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    foto?: true
    nivel_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    foto: string | null
    nivel_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    foto?: boolean
    nivel_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    missoes?: boolean | usuarios$missoesArgs<ExtArgs>
    nivel?: boolean | usuarios$nivelArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    foto?: boolean
    nivel_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nivel?: boolean | usuarios$nivelArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    foto?: boolean
    nivel_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nivel?: boolean | usuarios$nivelArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    foto?: boolean
    nivel_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "foto" | "nivel_id" | "createdAt" | "updatedAt", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missoes?: boolean | usuarios$missoesArgs<ExtArgs>
    nivel?: boolean | usuarios$nivelArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nivel?: boolean | usuarios$nivelArgs<ExtArgs>
  }
  export type usuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nivel?: boolean | usuarios$nivelArgs<ExtArgs>
  }

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      missoes: Prisma.$missoesPayload<ExtArgs>[]
      nivel: Prisma.$niveisPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      foto: string | null
      nivel_id: number | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
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
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    missoes<T extends usuarios$missoesArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$missoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$missoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nivel<T extends usuarios$nivelArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$nivelArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id: FieldRef<"usuarios", 'Int'>
    readonly nome: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly senha: FieldRef<"usuarios", 'String'>
    readonly foto: FieldRef<"usuarios", 'String'>
    readonly nivel_id: FieldRef<"usuarios", 'Int'>
    readonly createdAt: FieldRef<"usuarios", 'DateTime'>
    readonly updatedAt: FieldRef<"usuarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios updateManyAndReturn
   */
  export type usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.missoes
   */
  export type usuarios$missoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missoes
     */
    select?: missoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missoes
     */
    omit?: missoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missoesInclude<ExtArgs> | null
    where?: missoesWhereInput
    orderBy?: missoesOrderByWithRelationInput | missoesOrderByWithRelationInput[]
    cursor?: missoesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissoesScalarFieldEnum | MissoesScalarFieldEnum[]
  }

  /**
   * usuarios.nivel
   */
  export type usuarios$nivelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    where?: niveisWhereInput
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
  }


  /**
   * Model niveis
   */

  export type AggregateNiveis = {
    _count: NiveisCountAggregateOutputType | null
    _avg: NiveisAvgAggregateOutputType | null
    _sum: NiveisSumAggregateOutputType | null
    _min: NiveisMinAggregateOutputType | null
    _max: NiveisMaxAggregateOutputType | null
  }

  export type NiveisAvgAggregateOutputType = {
    id: number | null
  }

  export type NiveisSumAggregateOutputType = {
    id: number | null
  }

  export type NiveisMinAggregateOutputType = {
    id: number | null
    nome: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NiveisMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NiveisCountAggregateOutputType = {
    id: number
    nome: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NiveisAvgAggregateInputType = {
    id?: true
  }

  export type NiveisSumAggregateInputType = {
    id?: true
  }

  export type NiveisMinAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NiveisMaxAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NiveisCountAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NiveisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which niveis to aggregate.
     */
    where?: niveisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of niveis to fetch.
     */
    orderBy?: niveisOrderByWithRelationInput | niveisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: niveisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` niveis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` niveis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned niveis
    **/
    _count?: true | NiveisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NiveisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NiveisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NiveisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NiveisMaxAggregateInputType
  }

  export type GetNiveisAggregateType<T extends NiveisAggregateArgs> = {
        [P in keyof T & keyof AggregateNiveis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNiveis[P]>
      : GetScalarType<T[P], AggregateNiveis[P]>
  }




  export type niveisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: niveisWhereInput
    orderBy?: niveisOrderByWithAggregationInput | niveisOrderByWithAggregationInput[]
    by: NiveisScalarFieldEnum[] | NiveisScalarFieldEnum
    having?: niveisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NiveisCountAggregateInputType | true
    _avg?: NiveisAvgAggregateInputType
    _sum?: NiveisSumAggregateInputType
    _min?: NiveisMinAggregateInputType
    _max?: NiveisMaxAggregateInputType
  }

  export type NiveisGroupByOutputType = {
    id: number
    nome: string
    createdAt: Date | null
    updatedAt: Date | null
    _count: NiveisCountAggregateOutputType | null
    _avg: NiveisAvgAggregateOutputType | null
    _sum: NiveisSumAggregateOutputType | null
    _min: NiveisMinAggregateOutputType | null
    _max: NiveisMaxAggregateOutputType | null
  }

  type GetNiveisGroupByPayload<T extends niveisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NiveisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NiveisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NiveisGroupByOutputType[P]>
            : GetScalarType<T[P], NiveisGroupByOutputType[P]>
        }
      >
    >


  export type niveisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | niveis$usuarioArgs<ExtArgs>
    _count?: boolean | NiveisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["niveis"]>

  export type niveisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["niveis"]>

  export type niveisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["niveis"]>

  export type niveisSelectScalar = {
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type niveisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "createdAt" | "updatedAt", ExtArgs["result"]["niveis"]>
  export type niveisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | niveis$usuarioArgs<ExtArgs>
    _count?: boolean | NiveisCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type niveisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type niveisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $niveisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "niveis"
    objects: {
      usuario: Prisma.$usuariosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["niveis"]>
    composites: {}
  }

  type niveisGetPayload<S extends boolean | null | undefined | niveisDefaultArgs> = $Result.GetResult<Prisma.$niveisPayload, S>

  type niveisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<niveisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NiveisCountAggregateInputType | true
    }

  export interface niveisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['niveis'], meta: { name: 'niveis' } }
    /**
     * Find zero or one Niveis that matches the filter.
     * @param {niveisFindUniqueArgs} args - Arguments to find a Niveis
     * @example
     * // Get one Niveis
     * const niveis = await prisma.niveis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends niveisFindUniqueArgs>(args: SelectSubset<T, niveisFindUniqueArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Niveis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {niveisFindUniqueOrThrowArgs} args - Arguments to find a Niveis
     * @example
     * // Get one Niveis
     * const niveis = await prisma.niveis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends niveisFindUniqueOrThrowArgs>(args: SelectSubset<T, niveisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Niveis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {niveisFindFirstArgs} args - Arguments to find a Niveis
     * @example
     * // Get one Niveis
     * const niveis = await prisma.niveis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends niveisFindFirstArgs>(args?: SelectSubset<T, niveisFindFirstArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Niveis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {niveisFindFirstOrThrowArgs} args - Arguments to find a Niveis
     * @example
     * // Get one Niveis
     * const niveis = await prisma.niveis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends niveisFindFirstOrThrowArgs>(args?: SelectSubset<T, niveisFindFirstOrThrowArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Niveis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {niveisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Niveis
     * const niveis = await prisma.niveis.findMany()
     * 
     * // Get first 10 Niveis
     * const niveis = await prisma.niveis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const niveisWithIdOnly = await prisma.niveis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends niveisFindManyArgs>(args?: SelectSubset<T, niveisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Niveis.
     * @param {niveisCreateArgs} args - Arguments to create a Niveis.
     * @example
     * // Create one Niveis
     * const Niveis = await prisma.niveis.create({
     *   data: {
     *     // ... data to create a Niveis
     *   }
     * })
     * 
     */
    create<T extends niveisCreateArgs>(args: SelectSubset<T, niveisCreateArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Niveis.
     * @param {niveisCreateManyArgs} args - Arguments to create many Niveis.
     * @example
     * // Create many Niveis
     * const niveis = await prisma.niveis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends niveisCreateManyArgs>(args?: SelectSubset<T, niveisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Niveis and returns the data saved in the database.
     * @param {niveisCreateManyAndReturnArgs} args - Arguments to create many Niveis.
     * @example
     * // Create many Niveis
     * const niveis = await prisma.niveis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Niveis and only return the `id`
     * const niveisWithIdOnly = await prisma.niveis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends niveisCreateManyAndReturnArgs>(args?: SelectSubset<T, niveisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Niveis.
     * @param {niveisDeleteArgs} args - Arguments to delete one Niveis.
     * @example
     * // Delete one Niveis
     * const Niveis = await prisma.niveis.delete({
     *   where: {
     *     // ... filter to delete one Niveis
     *   }
     * })
     * 
     */
    delete<T extends niveisDeleteArgs>(args: SelectSubset<T, niveisDeleteArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Niveis.
     * @param {niveisUpdateArgs} args - Arguments to update one Niveis.
     * @example
     * // Update one Niveis
     * const niveis = await prisma.niveis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends niveisUpdateArgs>(args: SelectSubset<T, niveisUpdateArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Niveis.
     * @param {niveisDeleteManyArgs} args - Arguments to filter Niveis to delete.
     * @example
     * // Delete a few Niveis
     * const { count } = await prisma.niveis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends niveisDeleteManyArgs>(args?: SelectSubset<T, niveisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Niveis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {niveisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Niveis
     * const niveis = await prisma.niveis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends niveisUpdateManyArgs>(args: SelectSubset<T, niveisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Niveis and returns the data updated in the database.
     * @param {niveisUpdateManyAndReturnArgs} args - Arguments to update many Niveis.
     * @example
     * // Update many Niveis
     * const niveis = await prisma.niveis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Niveis and only return the `id`
     * const niveisWithIdOnly = await prisma.niveis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends niveisUpdateManyAndReturnArgs>(args: SelectSubset<T, niveisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Niveis.
     * @param {niveisUpsertArgs} args - Arguments to update or create a Niveis.
     * @example
     * // Update or create a Niveis
     * const niveis = await prisma.niveis.upsert({
     *   create: {
     *     // ... data to create a Niveis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Niveis we want to update
     *   }
     * })
     */
    upsert<T extends niveisUpsertArgs>(args: SelectSubset<T, niveisUpsertArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Niveis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {niveisCountArgs} args - Arguments to filter Niveis to count.
     * @example
     * // Count the number of Niveis
     * const count = await prisma.niveis.count({
     *   where: {
     *     // ... the filter for the Niveis we want to count
     *   }
     * })
    **/
    count<T extends niveisCountArgs>(
      args?: Subset<T, niveisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NiveisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Niveis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NiveisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NiveisAggregateArgs>(args: Subset<T, NiveisAggregateArgs>): Prisma.PrismaPromise<GetNiveisAggregateType<T>>

    /**
     * Group by Niveis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {niveisGroupByArgs} args - Group by arguments.
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
      T extends niveisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: niveisGroupByArgs['orderBy'] }
        : { orderBy?: niveisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, niveisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNiveisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the niveis model
   */
  readonly fields: niveisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for niveis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__niveisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends niveis$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, niveis$usuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the niveis model
   */
  interface niveisFieldRefs {
    readonly id: FieldRef<"niveis", 'Int'>
    readonly nome: FieldRef<"niveis", 'String'>
    readonly createdAt: FieldRef<"niveis", 'DateTime'>
    readonly updatedAt: FieldRef<"niveis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * niveis findUnique
   */
  export type niveisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * Filter, which niveis to fetch.
     */
    where: niveisWhereUniqueInput
  }

  /**
   * niveis findUniqueOrThrow
   */
  export type niveisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * Filter, which niveis to fetch.
     */
    where: niveisWhereUniqueInput
  }

  /**
   * niveis findFirst
   */
  export type niveisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * Filter, which niveis to fetch.
     */
    where?: niveisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of niveis to fetch.
     */
    orderBy?: niveisOrderByWithRelationInput | niveisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for niveis.
     */
    cursor?: niveisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` niveis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` niveis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of niveis.
     */
    distinct?: NiveisScalarFieldEnum | NiveisScalarFieldEnum[]
  }

  /**
   * niveis findFirstOrThrow
   */
  export type niveisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * Filter, which niveis to fetch.
     */
    where?: niveisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of niveis to fetch.
     */
    orderBy?: niveisOrderByWithRelationInput | niveisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for niveis.
     */
    cursor?: niveisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` niveis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` niveis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of niveis.
     */
    distinct?: NiveisScalarFieldEnum | NiveisScalarFieldEnum[]
  }

  /**
   * niveis findMany
   */
  export type niveisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * Filter, which niveis to fetch.
     */
    where?: niveisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of niveis to fetch.
     */
    orderBy?: niveisOrderByWithRelationInput | niveisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing niveis.
     */
    cursor?: niveisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` niveis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` niveis.
     */
    skip?: number
    distinct?: NiveisScalarFieldEnum | NiveisScalarFieldEnum[]
  }

  /**
   * niveis create
   */
  export type niveisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * The data needed to create a niveis.
     */
    data: XOR<niveisCreateInput, niveisUncheckedCreateInput>
  }

  /**
   * niveis createMany
   */
  export type niveisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many niveis.
     */
    data: niveisCreateManyInput | niveisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * niveis createManyAndReturn
   */
  export type niveisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * The data used to create many niveis.
     */
    data: niveisCreateManyInput | niveisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * niveis update
   */
  export type niveisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * The data needed to update a niveis.
     */
    data: XOR<niveisUpdateInput, niveisUncheckedUpdateInput>
    /**
     * Choose, which niveis to update.
     */
    where: niveisWhereUniqueInput
  }

  /**
   * niveis updateMany
   */
  export type niveisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update niveis.
     */
    data: XOR<niveisUpdateManyMutationInput, niveisUncheckedUpdateManyInput>
    /**
     * Filter which niveis to update
     */
    where?: niveisWhereInput
    /**
     * Limit how many niveis to update.
     */
    limit?: number
  }

  /**
   * niveis updateManyAndReturn
   */
  export type niveisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * The data used to update niveis.
     */
    data: XOR<niveisUpdateManyMutationInput, niveisUncheckedUpdateManyInput>
    /**
     * Filter which niveis to update
     */
    where?: niveisWhereInput
    /**
     * Limit how many niveis to update.
     */
    limit?: number
  }

  /**
   * niveis upsert
   */
  export type niveisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * The filter to search for the niveis to update in case it exists.
     */
    where: niveisWhereUniqueInput
    /**
     * In case the niveis found by the `where` argument doesn't exist, create a new niveis with this data.
     */
    create: XOR<niveisCreateInput, niveisUncheckedCreateInput>
    /**
     * In case the niveis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<niveisUpdateInput, niveisUncheckedUpdateInput>
  }

  /**
   * niveis delete
   */
  export type niveisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * Filter which niveis to delete.
     */
    where: niveisWhereUniqueInput
  }

  /**
   * niveis deleteMany
   */
  export type niveisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which niveis to delete
     */
    where?: niveisWhereInput
    /**
     * Limit how many niveis to delete.
     */
    limit?: number
  }

  /**
   * niveis.usuario
   */
  export type niveis$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    cursor?: usuariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * niveis without action
   */
  export type niveisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ConcorrentesScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    tipo: 'tipo',
    endereco: 'endereco',
    foto: 'foto',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConcorrentesScalarFieldEnum = (typeof ConcorrentesScalarFieldEnum)[keyof typeof ConcorrentesScalarFieldEnum]


  export const Missao_produtoScalarFieldEnum: {
    id: 'id',
    missao_id: 'missao_id',
    produto_id: 'produto_id',
    preco: 'preco',
    preco_desconto: 'preco_desconto',
    observacoes: 'observacoes',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Missao_produtoScalarFieldEnum = (typeof Missao_produtoScalarFieldEnum)[keyof typeof Missao_produtoScalarFieldEnum]


  export const MissoesScalarFieldEnum: {
    id: 'id',
    concorrente_id: 'concorrente_id',
    status: 'status',
    usuario_id: 'usuario_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MissoesScalarFieldEnum = (typeof MissoesScalarFieldEnum)[keyof typeof MissoesScalarFieldEnum]


  export const ProdutosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    preco: 'preco',
    codigo: 'codigo',
    foto: 'foto',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProdutosScalarFieldEnum = (typeof ProdutosScalarFieldEnum)[keyof typeof ProdutosScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    foto: 'foto',
    nivel_id: 'nivel_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const NiveisScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NiveisScalarFieldEnum = (typeof NiveisScalarFieldEnum)[keyof typeof NiveisScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type concorrentesWhereInput = {
    AND?: concorrentesWhereInput | concorrentesWhereInput[]
    OR?: concorrentesWhereInput[]
    NOT?: concorrentesWhereInput | concorrentesWhereInput[]
    id?: IntFilter<"concorrentes"> | number
    nome?: StringFilter<"concorrentes"> | string
    tipo?: StringFilter<"concorrentes"> | string
    endereco?: StringFilter<"concorrentes"> | string
    foto?: StringNullableFilter<"concorrentes"> | string | null
    createdAt?: DateTimeNullableFilter<"concorrentes"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"concorrentes"> | Date | string | null
    missoes?: MissoesListRelationFilter
  }

  export type concorrentesOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    endereco?: SortOrder
    foto?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    missoes?: missoesOrderByRelationAggregateInput
  }

  export type concorrentesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: concorrentesWhereInput | concorrentesWhereInput[]
    OR?: concorrentesWhereInput[]
    NOT?: concorrentesWhereInput | concorrentesWhereInput[]
    nome?: StringFilter<"concorrentes"> | string
    tipo?: StringFilter<"concorrentes"> | string
    endereco?: StringFilter<"concorrentes"> | string
    foto?: StringNullableFilter<"concorrentes"> | string | null
    createdAt?: DateTimeNullableFilter<"concorrentes"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"concorrentes"> | Date | string | null
    missoes?: MissoesListRelationFilter
  }, "id">

  export type concorrentesOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    endereco?: SortOrder
    foto?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: concorrentesCountOrderByAggregateInput
    _avg?: concorrentesAvgOrderByAggregateInput
    _max?: concorrentesMaxOrderByAggregateInput
    _min?: concorrentesMinOrderByAggregateInput
    _sum?: concorrentesSumOrderByAggregateInput
  }

  export type concorrentesScalarWhereWithAggregatesInput = {
    AND?: concorrentesScalarWhereWithAggregatesInput | concorrentesScalarWhereWithAggregatesInput[]
    OR?: concorrentesScalarWhereWithAggregatesInput[]
    NOT?: concorrentesScalarWhereWithAggregatesInput | concorrentesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"concorrentes"> | number
    nome?: StringWithAggregatesFilter<"concorrentes"> | string
    tipo?: StringWithAggregatesFilter<"concorrentes"> | string
    endereco?: StringWithAggregatesFilter<"concorrentes"> | string
    foto?: StringNullableWithAggregatesFilter<"concorrentes"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"concorrentes"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"concorrentes"> | Date | string | null
  }

  export type missao_produtoWhereInput = {
    AND?: missao_produtoWhereInput | missao_produtoWhereInput[]
    OR?: missao_produtoWhereInput[]
    NOT?: missao_produtoWhereInput | missao_produtoWhereInput[]
    id?: IntFilter<"missao_produto"> | number
    missao_id?: IntFilter<"missao_produto"> | number
    produto_id?: IntFilter<"missao_produto"> | number
    preco?: FloatNullableFilter<"missao_produto"> | number | null
    preco_desconto?: FloatNullableFilter<"missao_produto"> | number | null
    observacoes?: StringNullableFilter<"missao_produto"> | string | null
    status?: StringFilter<"missao_produto"> | string
    createdAt?: DateTimeNullableFilter<"missao_produto"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"missao_produto"> | Date | string | null
    missoes?: XOR<MissoesScalarRelationFilter, missoesWhereInput>
    produtos?: XOR<ProdutosScalarRelationFilter, produtosWhereInput>
  }

  export type missao_produtoOrderByWithRelationInput = {
    id?: SortOrder
    missao_id?: SortOrder
    produto_id?: SortOrder
    preco?: SortOrderInput | SortOrder
    preco_desconto?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    missoes?: missoesOrderByWithRelationInput
    produtos?: produtosOrderByWithRelationInput
  }

  export type missao_produtoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: missao_produtoWhereInput | missao_produtoWhereInput[]
    OR?: missao_produtoWhereInput[]
    NOT?: missao_produtoWhereInput | missao_produtoWhereInput[]
    missao_id?: IntFilter<"missao_produto"> | number
    produto_id?: IntFilter<"missao_produto"> | number
    preco?: FloatNullableFilter<"missao_produto"> | number | null
    preco_desconto?: FloatNullableFilter<"missao_produto"> | number | null
    observacoes?: StringNullableFilter<"missao_produto"> | string | null
    status?: StringFilter<"missao_produto"> | string
    createdAt?: DateTimeNullableFilter<"missao_produto"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"missao_produto"> | Date | string | null
    missoes?: XOR<MissoesScalarRelationFilter, missoesWhereInput>
    produtos?: XOR<ProdutosScalarRelationFilter, produtosWhereInput>
  }, "id">

  export type missao_produtoOrderByWithAggregationInput = {
    id?: SortOrder
    missao_id?: SortOrder
    produto_id?: SortOrder
    preco?: SortOrderInput | SortOrder
    preco_desconto?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: missao_produtoCountOrderByAggregateInput
    _avg?: missao_produtoAvgOrderByAggregateInput
    _max?: missao_produtoMaxOrderByAggregateInput
    _min?: missao_produtoMinOrderByAggregateInput
    _sum?: missao_produtoSumOrderByAggregateInput
  }

  export type missao_produtoScalarWhereWithAggregatesInput = {
    AND?: missao_produtoScalarWhereWithAggregatesInput | missao_produtoScalarWhereWithAggregatesInput[]
    OR?: missao_produtoScalarWhereWithAggregatesInput[]
    NOT?: missao_produtoScalarWhereWithAggregatesInput | missao_produtoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"missao_produto"> | number
    missao_id?: IntWithAggregatesFilter<"missao_produto"> | number
    produto_id?: IntWithAggregatesFilter<"missao_produto"> | number
    preco?: FloatNullableWithAggregatesFilter<"missao_produto"> | number | null
    preco_desconto?: FloatNullableWithAggregatesFilter<"missao_produto"> | number | null
    observacoes?: StringNullableWithAggregatesFilter<"missao_produto"> | string | null
    status?: StringWithAggregatesFilter<"missao_produto"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"missao_produto"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"missao_produto"> | Date | string | null
  }

  export type missoesWhereInput = {
    AND?: missoesWhereInput | missoesWhereInput[]
    OR?: missoesWhereInput[]
    NOT?: missoesWhereInput | missoesWhereInput[]
    id?: IntFilter<"missoes"> | number
    concorrente_id?: IntFilter<"missoes"> | number
    status?: StringFilter<"missoes"> | string
    usuario_id?: IntNullableFilter<"missoes"> | number | null
    createdAt?: DateTimeNullableFilter<"missoes"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"missoes"> | Date | string | null
    missao_produto?: Missao_produtoListRelationFilter
    concorrentes?: XOR<ConcorrentesScalarRelationFilter, concorrentesWhereInput>
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }

  export type missoesOrderByWithRelationInput = {
    id?: SortOrder
    concorrente_id?: SortOrder
    status?: SortOrder
    usuario_id?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    missao_produto?: missao_produtoOrderByRelationAggregateInput
    concorrentes?: concorrentesOrderByWithRelationInput
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type missoesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: missoesWhereInput | missoesWhereInput[]
    OR?: missoesWhereInput[]
    NOT?: missoesWhereInput | missoesWhereInput[]
    concorrente_id?: IntFilter<"missoes"> | number
    status?: StringFilter<"missoes"> | string
    usuario_id?: IntNullableFilter<"missoes"> | number | null
    createdAt?: DateTimeNullableFilter<"missoes"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"missoes"> | Date | string | null
    missao_produto?: Missao_produtoListRelationFilter
    concorrentes?: XOR<ConcorrentesScalarRelationFilter, concorrentesWhereInput>
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }, "id">

  export type missoesOrderByWithAggregationInput = {
    id?: SortOrder
    concorrente_id?: SortOrder
    status?: SortOrder
    usuario_id?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: missoesCountOrderByAggregateInput
    _avg?: missoesAvgOrderByAggregateInput
    _max?: missoesMaxOrderByAggregateInput
    _min?: missoesMinOrderByAggregateInput
    _sum?: missoesSumOrderByAggregateInput
  }

  export type missoesScalarWhereWithAggregatesInput = {
    AND?: missoesScalarWhereWithAggregatesInput | missoesScalarWhereWithAggregatesInput[]
    OR?: missoesScalarWhereWithAggregatesInput[]
    NOT?: missoesScalarWhereWithAggregatesInput | missoesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"missoes"> | number
    concorrente_id?: IntWithAggregatesFilter<"missoes"> | number
    status?: StringWithAggregatesFilter<"missoes"> | string
    usuario_id?: IntNullableWithAggregatesFilter<"missoes"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"missoes"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"missoes"> | Date | string | null
  }

  export type produtosWhereInput = {
    AND?: produtosWhereInput | produtosWhereInput[]
    OR?: produtosWhereInput[]
    NOT?: produtosWhereInput | produtosWhereInput[]
    id?: IntFilter<"produtos"> | number
    nome?: StringFilter<"produtos"> | string
    preco?: FloatFilter<"produtos"> | number
    codigo?: StringNullableFilter<"produtos"> | string | null
    foto?: StringNullableFilter<"produtos"> | string | null
    createdAt?: DateTimeNullableFilter<"produtos"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"produtos"> | Date | string | null
    missao_produto?: Missao_produtoListRelationFilter
  }

  export type produtosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    codigo?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    missao_produto?: missao_produtoOrderByRelationAggregateInput
  }

  export type produtosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: produtosWhereInput | produtosWhereInput[]
    OR?: produtosWhereInput[]
    NOT?: produtosWhereInput | produtosWhereInput[]
    nome?: StringFilter<"produtos"> | string
    preco?: FloatFilter<"produtos"> | number
    codigo?: StringNullableFilter<"produtos"> | string | null
    foto?: StringNullableFilter<"produtos"> | string | null
    createdAt?: DateTimeNullableFilter<"produtos"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"produtos"> | Date | string | null
    missao_produto?: Missao_produtoListRelationFilter
  }, "id">

  export type produtosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    codigo?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: produtosCountOrderByAggregateInput
    _avg?: produtosAvgOrderByAggregateInput
    _max?: produtosMaxOrderByAggregateInput
    _min?: produtosMinOrderByAggregateInput
    _sum?: produtosSumOrderByAggregateInput
  }

  export type produtosScalarWhereWithAggregatesInput = {
    AND?: produtosScalarWhereWithAggregatesInput | produtosScalarWhereWithAggregatesInput[]
    OR?: produtosScalarWhereWithAggregatesInput[]
    NOT?: produtosScalarWhereWithAggregatesInput | produtosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"produtos"> | number
    nome?: StringWithAggregatesFilter<"produtos"> | string
    preco?: FloatWithAggregatesFilter<"produtos"> | number
    codigo?: StringNullableWithAggregatesFilter<"produtos"> | string | null
    foto?: StringNullableWithAggregatesFilter<"produtos"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"produtos"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"produtos"> | Date | string | null
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id?: IntFilter<"usuarios"> | number
    nome?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    senha?: StringFilter<"usuarios"> | string
    foto?: StringNullableFilter<"usuarios"> | string | null
    nivel_id?: IntNullableFilter<"usuarios"> | number | null
    createdAt?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    missoes?: MissoesListRelationFilter
    nivel?: XOR<NiveisNullableScalarRelationFilter, niveisWhereInput> | null
  }

  export type usuariosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    foto?: SortOrderInput | SortOrder
    nivel_id?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    missoes?: missoesOrderByRelationAggregateInput
    nivel?: niveisOrderByWithRelationInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nome?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    senha?: StringFilter<"usuarios"> | string
    foto?: StringNullableFilter<"usuarios"> | string | null
    nivel_id?: IntNullableFilter<"usuarios"> | number | null
    createdAt?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    missoes?: MissoesListRelationFilter
    nivel?: XOR<NiveisNullableScalarRelationFilter, niveisWhereInput> | null
  }, "id">

  export type usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    foto?: SortOrderInput | SortOrder
    nivel_id?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuarios"> | number
    nome?: StringWithAggregatesFilter<"usuarios"> | string
    email?: StringWithAggregatesFilter<"usuarios"> | string
    senha?: StringWithAggregatesFilter<"usuarios"> | string
    foto?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    nivel_id?: IntNullableWithAggregatesFilter<"usuarios"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"usuarios"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"usuarios"> | Date | string | null
  }

  export type niveisWhereInput = {
    AND?: niveisWhereInput | niveisWhereInput[]
    OR?: niveisWhereInput[]
    NOT?: niveisWhereInput | niveisWhereInput[]
    id?: IntFilter<"niveis"> | number
    nome?: StringFilter<"niveis"> | string
    createdAt?: DateTimeNullableFilter<"niveis"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"niveis"> | Date | string | null
    usuario?: UsuariosListRelationFilter
  }

  export type niveisOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    usuario?: usuariosOrderByRelationAggregateInput
  }

  export type niveisWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: niveisWhereInput | niveisWhereInput[]
    OR?: niveisWhereInput[]
    NOT?: niveisWhereInput | niveisWhereInput[]
    nome?: StringFilter<"niveis"> | string
    createdAt?: DateTimeNullableFilter<"niveis"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"niveis"> | Date | string | null
    usuario?: UsuariosListRelationFilter
  }, "id">

  export type niveisOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: niveisCountOrderByAggregateInput
    _avg?: niveisAvgOrderByAggregateInput
    _max?: niveisMaxOrderByAggregateInput
    _min?: niveisMinOrderByAggregateInput
    _sum?: niveisSumOrderByAggregateInput
  }

  export type niveisScalarWhereWithAggregatesInput = {
    AND?: niveisScalarWhereWithAggregatesInput | niveisScalarWhereWithAggregatesInput[]
    OR?: niveisScalarWhereWithAggregatesInput[]
    NOT?: niveisScalarWhereWithAggregatesInput | niveisScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"niveis"> | number
    nome?: StringWithAggregatesFilter<"niveis"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"niveis"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"niveis"> | Date | string | null
  }

  export type concorrentesCreateInput = {
    nome: string
    tipo: string
    endereco: string
    foto?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    missoes?: missoesCreateNestedManyWithoutConcorrentesInput
  }

  export type concorrentesUncheckedCreateInput = {
    id?: number
    nome: string
    tipo: string
    endereco: string
    foto?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    missoes?: missoesUncheckedCreateNestedManyWithoutConcorrentesInput
  }

  export type concorrentesUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missoes?: missoesUpdateManyWithoutConcorrentesNestedInput
  }

  export type concorrentesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missoes?: missoesUncheckedUpdateManyWithoutConcorrentesNestedInput
  }

  export type concorrentesCreateManyInput = {
    id?: number
    nome: string
    tipo: string
    endereco: string
    foto?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type concorrentesUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type concorrentesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type missao_produtoCreateInput = {
    preco?: number | null
    preco_desconto?: number | null
    observacoes?: string | null
    status?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    missoes: missoesCreateNestedOneWithoutMissao_produtoInput
    produtos: produtosCreateNestedOneWithoutMissao_produtoInput
  }

  export type missao_produtoUncheckedCreateInput = {
    id?: number
    missao_id: number
    produto_id: number
    preco?: number | null
    preco_desconto?: number | null
    observacoes?: string | null
    status?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type missao_produtoUpdateInput = {
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    preco_desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missoes?: missoesUpdateOneRequiredWithoutMissao_produtoNestedInput
    produtos?: produtosUpdateOneRequiredWithoutMissao_produtoNestedInput
  }

  export type missao_produtoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    missao_id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    preco_desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type missao_produtoCreateManyInput = {
    id?: number
    missao_id: number
    produto_id: number
    preco?: number | null
    preco_desconto?: number | null
    observacoes?: string | null
    status?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type missao_produtoUpdateManyMutationInput = {
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    preco_desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type missao_produtoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    missao_id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    preco_desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type missoesCreateInput = {
    status?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    missao_produto?: missao_produtoCreateNestedManyWithoutMissoesInput
    concorrentes: concorrentesCreateNestedOneWithoutMissoesInput
    usuarios?: usuariosCreateNestedOneWithoutMissoesInput
  }

  export type missoesUncheckedCreateInput = {
    id?: number
    concorrente_id: number
    status?: string
    usuario_id?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    missao_produto?: missao_produtoUncheckedCreateNestedManyWithoutMissoesInput
  }

  export type missoesUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missao_produto?: missao_produtoUpdateManyWithoutMissoesNestedInput
    concorrentes?: concorrentesUpdateOneRequiredWithoutMissoesNestedInput
    usuarios?: usuariosUpdateOneWithoutMissoesNestedInput
  }

  export type missoesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    concorrente_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missao_produto?: missao_produtoUncheckedUpdateManyWithoutMissoesNestedInput
  }

  export type missoesCreateManyInput = {
    id?: number
    concorrente_id: number
    status?: string
    usuario_id?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type missoesUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type missoesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    concorrente_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type produtosCreateInput = {
    nome: string
    preco: number
    codigo?: string | null
    foto?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    missao_produto?: missao_produtoCreateNestedManyWithoutProdutosInput
  }

  export type produtosUncheckedCreateInput = {
    id?: number
    nome: string
    preco: number
    codigo?: string | null
    foto?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    missao_produto?: missao_produtoUncheckedCreateNestedManyWithoutProdutosInput
  }

  export type produtosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missao_produto?: missao_produtoUpdateManyWithoutProdutosNestedInput
  }

  export type produtosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missao_produto?: missao_produtoUncheckedUpdateManyWithoutProdutosNestedInput
  }

  export type produtosCreateManyInput = {
    id?: number
    nome: string
    preco: number
    codigo?: string | null
    foto?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type produtosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type produtosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosCreateInput = {
    nome: string
    email: string
    senha: string
    foto?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    missoes?: missoesCreateNestedManyWithoutUsuariosInput
    nivel?: niveisCreateNestedOneWithoutUsuarioInput
  }

  export type usuariosUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    foto?: string | null
    nivel_id?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    missoes?: missoesUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missoes?: missoesUpdateManyWithoutUsuariosNestedInput
    nivel?: niveisUpdateOneWithoutUsuarioNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missoes?: missoesUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    foto?: string | null
    nivel_id?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type usuariosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type niveisCreateInput = {
    nome: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    usuario?: usuariosCreateNestedManyWithoutNivelInput
  }

  export type niveisUncheckedCreateInput = {
    id?: number
    nome: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    usuario?: usuariosUncheckedCreateNestedManyWithoutNivelInput
  }

  export type niveisUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: usuariosUpdateManyWithoutNivelNestedInput
  }

  export type niveisUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: usuariosUncheckedUpdateManyWithoutNivelNestedInput
  }

  export type niveisCreateManyInput = {
    id?: number
    nome: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type niveisUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type niveisUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MissoesListRelationFilter = {
    every?: missoesWhereInput
    some?: missoesWhereInput
    none?: missoesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type missoesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type concorrentesCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    endereco?: SortOrder
    foto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type concorrentesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type concorrentesMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    endereco?: SortOrder
    foto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type concorrentesMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    endereco?: SortOrder
    foto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type concorrentesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type MissoesScalarRelationFilter = {
    is?: missoesWhereInput
    isNot?: missoesWhereInput
  }

  export type ProdutosScalarRelationFilter = {
    is?: produtosWhereInput
    isNot?: produtosWhereInput
  }

  export type missao_produtoCountOrderByAggregateInput = {
    id?: SortOrder
    missao_id?: SortOrder
    produto_id?: SortOrder
    preco?: SortOrder
    preco_desconto?: SortOrder
    observacoes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type missao_produtoAvgOrderByAggregateInput = {
    id?: SortOrder
    missao_id?: SortOrder
    produto_id?: SortOrder
    preco?: SortOrder
    preco_desconto?: SortOrder
  }

  export type missao_produtoMaxOrderByAggregateInput = {
    id?: SortOrder
    missao_id?: SortOrder
    produto_id?: SortOrder
    preco?: SortOrder
    preco_desconto?: SortOrder
    observacoes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type missao_produtoMinOrderByAggregateInput = {
    id?: SortOrder
    missao_id?: SortOrder
    produto_id?: SortOrder
    preco?: SortOrder
    preco_desconto?: SortOrder
    observacoes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type missao_produtoSumOrderByAggregateInput = {
    id?: SortOrder
    missao_id?: SortOrder
    produto_id?: SortOrder
    preco?: SortOrder
    preco_desconto?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Missao_produtoListRelationFilter = {
    every?: missao_produtoWhereInput
    some?: missao_produtoWhereInput
    none?: missao_produtoWhereInput
  }

  export type ConcorrentesScalarRelationFilter = {
    is?: concorrentesWhereInput
    isNot?: concorrentesWhereInput
  }

  export type UsuariosNullableScalarRelationFilter = {
    is?: usuariosWhereInput | null
    isNot?: usuariosWhereInput | null
  }

  export type missao_produtoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type missoesCountOrderByAggregateInput = {
    id?: SortOrder
    concorrente_id?: SortOrder
    status?: SortOrder
    usuario_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type missoesAvgOrderByAggregateInput = {
    id?: SortOrder
    concorrente_id?: SortOrder
    usuario_id?: SortOrder
  }

  export type missoesMaxOrderByAggregateInput = {
    id?: SortOrder
    concorrente_id?: SortOrder
    status?: SortOrder
    usuario_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type missoesMinOrderByAggregateInput = {
    id?: SortOrder
    concorrente_id?: SortOrder
    status?: SortOrder
    usuario_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type missoesSumOrderByAggregateInput = {
    id?: SortOrder
    concorrente_id?: SortOrder
    usuario_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type produtosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    codigo?: SortOrder
    foto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type produtosAvgOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
  }

  export type produtosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    codigo?: SortOrder
    foto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type produtosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    codigo?: SortOrder
    foto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type produtosSumOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NiveisNullableScalarRelationFilter = {
    is?: niveisWhereInput | null
    isNot?: niveisWhereInput | null
  }

  export type usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    foto?: SortOrder
    nivel_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id?: SortOrder
    nivel_id?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    foto?: SortOrder
    nivel_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    foto?: SortOrder
    nivel_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id?: SortOrder
    nivel_id?: SortOrder
  }

  export type UsuariosListRelationFilter = {
    every?: usuariosWhereInput
    some?: usuariosWhereInput
    none?: usuariosWhereInput
  }

  export type usuariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type niveisCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type niveisAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type niveisMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type niveisMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type niveisSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type missoesCreateNestedManyWithoutConcorrentesInput = {
    create?: XOR<missoesCreateWithoutConcorrentesInput, missoesUncheckedCreateWithoutConcorrentesInput> | missoesCreateWithoutConcorrentesInput[] | missoesUncheckedCreateWithoutConcorrentesInput[]
    connectOrCreate?: missoesCreateOrConnectWithoutConcorrentesInput | missoesCreateOrConnectWithoutConcorrentesInput[]
    createMany?: missoesCreateManyConcorrentesInputEnvelope
    connect?: missoesWhereUniqueInput | missoesWhereUniqueInput[]
  }

  export type missoesUncheckedCreateNestedManyWithoutConcorrentesInput = {
    create?: XOR<missoesCreateWithoutConcorrentesInput, missoesUncheckedCreateWithoutConcorrentesInput> | missoesCreateWithoutConcorrentesInput[] | missoesUncheckedCreateWithoutConcorrentesInput[]
    connectOrCreate?: missoesCreateOrConnectWithoutConcorrentesInput | missoesCreateOrConnectWithoutConcorrentesInput[]
    createMany?: missoesCreateManyConcorrentesInputEnvelope
    connect?: missoesWhereUniqueInput | missoesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type missoesUpdateManyWithoutConcorrentesNestedInput = {
    create?: XOR<missoesCreateWithoutConcorrentesInput, missoesUncheckedCreateWithoutConcorrentesInput> | missoesCreateWithoutConcorrentesInput[] | missoesUncheckedCreateWithoutConcorrentesInput[]
    connectOrCreate?: missoesCreateOrConnectWithoutConcorrentesInput | missoesCreateOrConnectWithoutConcorrentesInput[]
    upsert?: missoesUpsertWithWhereUniqueWithoutConcorrentesInput | missoesUpsertWithWhereUniqueWithoutConcorrentesInput[]
    createMany?: missoesCreateManyConcorrentesInputEnvelope
    set?: missoesWhereUniqueInput | missoesWhereUniqueInput[]
    disconnect?: missoesWhereUniqueInput | missoesWhereUniqueInput[]
    delete?: missoesWhereUniqueInput | missoesWhereUniqueInput[]
    connect?: missoesWhereUniqueInput | missoesWhereUniqueInput[]
    update?: missoesUpdateWithWhereUniqueWithoutConcorrentesInput | missoesUpdateWithWhereUniqueWithoutConcorrentesInput[]
    updateMany?: missoesUpdateManyWithWhereWithoutConcorrentesInput | missoesUpdateManyWithWhereWithoutConcorrentesInput[]
    deleteMany?: missoesScalarWhereInput | missoesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type missoesUncheckedUpdateManyWithoutConcorrentesNestedInput = {
    create?: XOR<missoesCreateWithoutConcorrentesInput, missoesUncheckedCreateWithoutConcorrentesInput> | missoesCreateWithoutConcorrentesInput[] | missoesUncheckedCreateWithoutConcorrentesInput[]
    connectOrCreate?: missoesCreateOrConnectWithoutConcorrentesInput | missoesCreateOrConnectWithoutConcorrentesInput[]
    upsert?: missoesUpsertWithWhereUniqueWithoutConcorrentesInput | missoesUpsertWithWhereUniqueWithoutConcorrentesInput[]
    createMany?: missoesCreateManyConcorrentesInputEnvelope
    set?: missoesWhereUniqueInput | missoesWhereUniqueInput[]
    disconnect?: missoesWhereUniqueInput | missoesWhereUniqueInput[]
    delete?: missoesWhereUniqueInput | missoesWhereUniqueInput[]
    connect?: missoesWhereUniqueInput | missoesWhereUniqueInput[]
    update?: missoesUpdateWithWhereUniqueWithoutConcorrentesInput | missoesUpdateWithWhereUniqueWithoutConcorrentesInput[]
    updateMany?: missoesUpdateManyWithWhereWithoutConcorrentesInput | missoesUpdateManyWithWhereWithoutConcorrentesInput[]
    deleteMany?: missoesScalarWhereInput | missoesScalarWhereInput[]
  }

  export type missoesCreateNestedOneWithoutMissao_produtoInput = {
    create?: XOR<missoesCreateWithoutMissao_produtoInput, missoesUncheckedCreateWithoutMissao_produtoInput>
    connectOrCreate?: missoesCreateOrConnectWithoutMissao_produtoInput
    connect?: missoesWhereUniqueInput
  }

  export type produtosCreateNestedOneWithoutMissao_produtoInput = {
    create?: XOR<produtosCreateWithoutMissao_produtoInput, produtosUncheckedCreateWithoutMissao_produtoInput>
    connectOrCreate?: produtosCreateOrConnectWithoutMissao_produtoInput
    connect?: produtosWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type missoesUpdateOneRequiredWithoutMissao_produtoNestedInput = {
    create?: XOR<missoesCreateWithoutMissao_produtoInput, missoesUncheckedCreateWithoutMissao_produtoInput>
    connectOrCreate?: missoesCreateOrConnectWithoutMissao_produtoInput
    upsert?: missoesUpsertWithoutMissao_produtoInput
    connect?: missoesWhereUniqueInput
    update?: XOR<XOR<missoesUpdateToOneWithWhereWithoutMissao_produtoInput, missoesUpdateWithoutMissao_produtoInput>, missoesUncheckedUpdateWithoutMissao_produtoInput>
  }

  export type produtosUpdateOneRequiredWithoutMissao_produtoNestedInput = {
    create?: XOR<produtosCreateWithoutMissao_produtoInput, produtosUncheckedCreateWithoutMissao_produtoInput>
    connectOrCreate?: produtosCreateOrConnectWithoutMissao_produtoInput
    upsert?: produtosUpsertWithoutMissao_produtoInput
    connect?: produtosWhereUniqueInput
    update?: XOR<XOR<produtosUpdateToOneWithWhereWithoutMissao_produtoInput, produtosUpdateWithoutMissao_produtoInput>, produtosUncheckedUpdateWithoutMissao_produtoInput>
  }

  export type missao_produtoCreateNestedManyWithoutMissoesInput = {
    create?: XOR<missao_produtoCreateWithoutMissoesInput, missao_produtoUncheckedCreateWithoutMissoesInput> | missao_produtoCreateWithoutMissoesInput[] | missao_produtoUncheckedCreateWithoutMissoesInput[]
    connectOrCreate?: missao_produtoCreateOrConnectWithoutMissoesInput | missao_produtoCreateOrConnectWithoutMissoesInput[]
    createMany?: missao_produtoCreateManyMissoesInputEnvelope
    connect?: missao_produtoWhereUniqueInput | missao_produtoWhereUniqueInput[]
  }

  export type concorrentesCreateNestedOneWithoutMissoesInput = {
    create?: XOR<concorrentesCreateWithoutMissoesInput, concorrentesUncheckedCreateWithoutMissoesInput>
    connectOrCreate?: concorrentesCreateOrConnectWithoutMissoesInput
    connect?: concorrentesWhereUniqueInput
  }

  export type usuariosCreateNestedOneWithoutMissoesInput = {
    create?: XOR<usuariosCreateWithoutMissoesInput, usuariosUncheckedCreateWithoutMissoesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutMissoesInput
    connect?: usuariosWhereUniqueInput
  }

  export type missao_produtoUncheckedCreateNestedManyWithoutMissoesInput = {
    create?: XOR<missao_produtoCreateWithoutMissoesInput, missao_produtoUncheckedCreateWithoutMissoesInput> | missao_produtoCreateWithoutMissoesInput[] | missao_produtoUncheckedCreateWithoutMissoesInput[]
    connectOrCreate?: missao_produtoCreateOrConnectWithoutMissoesInput | missao_produtoCreateOrConnectWithoutMissoesInput[]
    createMany?: missao_produtoCreateManyMissoesInputEnvelope
    connect?: missao_produtoWhereUniqueInput | missao_produtoWhereUniqueInput[]
  }

  export type missao_produtoUpdateManyWithoutMissoesNestedInput = {
    create?: XOR<missao_produtoCreateWithoutMissoesInput, missao_produtoUncheckedCreateWithoutMissoesInput> | missao_produtoCreateWithoutMissoesInput[] | missao_produtoUncheckedCreateWithoutMissoesInput[]
    connectOrCreate?: missao_produtoCreateOrConnectWithoutMissoesInput | missao_produtoCreateOrConnectWithoutMissoesInput[]
    upsert?: missao_produtoUpsertWithWhereUniqueWithoutMissoesInput | missao_produtoUpsertWithWhereUniqueWithoutMissoesInput[]
    createMany?: missao_produtoCreateManyMissoesInputEnvelope
    set?: missao_produtoWhereUniqueInput | missao_produtoWhereUniqueInput[]
    disconnect?: missao_produtoWhereUniqueInput | missao_produtoWhereUniqueInput[]
    delete?: missao_produtoWhereUniqueInput | missao_produtoWhereUniqueInput[]
    connect?: missao_produtoWhereUniqueInput | missao_produtoWhereUniqueInput[]
    update?: missao_produtoUpdateWithWhereUniqueWithoutMissoesInput | missao_produtoUpdateWithWhereUniqueWithoutMissoesInput[]
    updateMany?: missao_produtoUpdateManyWithWhereWithoutMissoesInput | missao_produtoUpdateManyWithWhereWithoutMissoesInput[]
    deleteMany?: missao_produtoScalarWhereInput | missao_produtoScalarWhereInput[]
  }

  export type concorrentesUpdateOneRequiredWithoutMissoesNestedInput = {
    create?: XOR<concorrentesCreateWithoutMissoesInput, concorrentesUncheckedCreateWithoutMissoesInput>
    connectOrCreate?: concorrentesCreateOrConnectWithoutMissoesInput
    upsert?: concorrentesUpsertWithoutMissoesInput
    connect?: concorrentesWhereUniqueInput
    update?: XOR<XOR<concorrentesUpdateToOneWithWhereWithoutMissoesInput, concorrentesUpdateWithoutMissoesInput>, concorrentesUncheckedUpdateWithoutMissoesInput>
  }

  export type usuariosUpdateOneWithoutMissoesNestedInput = {
    create?: XOR<usuariosCreateWithoutMissoesInput, usuariosUncheckedCreateWithoutMissoesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutMissoesInput
    upsert?: usuariosUpsertWithoutMissoesInput
    disconnect?: usuariosWhereInput | boolean
    delete?: usuariosWhereInput | boolean
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutMissoesInput, usuariosUpdateWithoutMissoesInput>, usuariosUncheckedUpdateWithoutMissoesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type missao_produtoUncheckedUpdateManyWithoutMissoesNestedInput = {
    create?: XOR<missao_produtoCreateWithoutMissoesInput, missao_produtoUncheckedCreateWithoutMissoesInput> | missao_produtoCreateWithoutMissoesInput[] | missao_produtoUncheckedCreateWithoutMissoesInput[]
    connectOrCreate?: missao_produtoCreateOrConnectWithoutMissoesInput | missao_produtoCreateOrConnectWithoutMissoesInput[]
    upsert?: missao_produtoUpsertWithWhereUniqueWithoutMissoesInput | missao_produtoUpsertWithWhereUniqueWithoutMissoesInput[]
    createMany?: missao_produtoCreateManyMissoesInputEnvelope
    set?: missao_produtoWhereUniqueInput | missao_produtoWhereUniqueInput[]
    disconnect?: missao_produtoWhereUniqueInput | missao_produtoWhereUniqueInput[]
    delete?: missao_produtoWhereUniqueInput | missao_produtoWhereUniqueInput[]
    connect?: missao_produtoWhereUniqueInput | missao_produtoWhereUniqueInput[]
    update?: missao_produtoUpdateWithWhereUniqueWithoutMissoesInput | missao_produtoUpdateWithWhereUniqueWithoutMissoesInput[]
    updateMany?: missao_produtoUpdateManyWithWhereWithoutMissoesInput | missao_produtoUpdateManyWithWhereWithoutMissoesInput[]
    deleteMany?: missao_produtoScalarWhereInput | missao_produtoScalarWhereInput[]
  }

  export type missao_produtoCreateNestedManyWithoutProdutosInput = {
    create?: XOR<missao_produtoCreateWithoutProdutosInput, missao_produtoUncheckedCreateWithoutProdutosInput> | missao_produtoCreateWithoutProdutosInput[] | missao_produtoUncheckedCreateWithoutProdutosInput[]
    connectOrCreate?: missao_produtoCreateOrConnectWithoutProdutosInput | missao_produtoCreateOrConnectWithoutProdutosInput[]
    createMany?: missao_produtoCreateManyProdutosInputEnvelope
    connect?: missao_produtoWhereUniqueInput | missao_produtoWhereUniqueInput[]
  }

  export type missao_produtoUncheckedCreateNestedManyWithoutProdutosInput = {
    create?: XOR<missao_produtoCreateWithoutProdutosInput, missao_produtoUncheckedCreateWithoutProdutosInput> | missao_produtoCreateWithoutProdutosInput[] | missao_produtoUncheckedCreateWithoutProdutosInput[]
    connectOrCreate?: missao_produtoCreateOrConnectWithoutProdutosInput | missao_produtoCreateOrConnectWithoutProdutosInput[]
    createMany?: missao_produtoCreateManyProdutosInputEnvelope
    connect?: missao_produtoWhereUniqueInput | missao_produtoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type missao_produtoUpdateManyWithoutProdutosNestedInput = {
    create?: XOR<missao_produtoCreateWithoutProdutosInput, missao_produtoUncheckedCreateWithoutProdutosInput> | missao_produtoCreateWithoutProdutosInput[] | missao_produtoUncheckedCreateWithoutProdutosInput[]
    connectOrCreate?: missao_produtoCreateOrConnectWithoutProdutosInput | missao_produtoCreateOrConnectWithoutProdutosInput[]
    upsert?: missao_produtoUpsertWithWhereUniqueWithoutProdutosInput | missao_produtoUpsertWithWhereUniqueWithoutProdutosInput[]
    createMany?: missao_produtoCreateManyProdutosInputEnvelope
    set?: missao_produtoWhereUniqueInput | missao_produtoWhereUniqueInput[]
    disconnect?: missao_produtoWhereUniqueInput | missao_produtoWhereUniqueInput[]
    delete?: missao_produtoWhereUniqueInput | missao_produtoWhereUniqueInput[]
    connect?: missao_produtoWhereUniqueInput | missao_produtoWhereUniqueInput[]
    update?: missao_produtoUpdateWithWhereUniqueWithoutProdutosInput | missao_produtoUpdateWithWhereUniqueWithoutProdutosInput[]
    updateMany?: missao_produtoUpdateManyWithWhereWithoutProdutosInput | missao_produtoUpdateManyWithWhereWithoutProdutosInput[]
    deleteMany?: missao_produtoScalarWhereInput | missao_produtoScalarWhereInput[]
  }

  export type missao_produtoUncheckedUpdateManyWithoutProdutosNestedInput = {
    create?: XOR<missao_produtoCreateWithoutProdutosInput, missao_produtoUncheckedCreateWithoutProdutosInput> | missao_produtoCreateWithoutProdutosInput[] | missao_produtoUncheckedCreateWithoutProdutosInput[]
    connectOrCreate?: missao_produtoCreateOrConnectWithoutProdutosInput | missao_produtoCreateOrConnectWithoutProdutosInput[]
    upsert?: missao_produtoUpsertWithWhereUniqueWithoutProdutosInput | missao_produtoUpsertWithWhereUniqueWithoutProdutosInput[]
    createMany?: missao_produtoCreateManyProdutosInputEnvelope
    set?: missao_produtoWhereUniqueInput | missao_produtoWhereUniqueInput[]
    disconnect?: missao_produtoWhereUniqueInput | missao_produtoWhereUniqueInput[]
    delete?: missao_produtoWhereUniqueInput | missao_produtoWhereUniqueInput[]
    connect?: missao_produtoWhereUniqueInput | missao_produtoWhereUniqueInput[]
    update?: missao_produtoUpdateWithWhereUniqueWithoutProdutosInput | missao_produtoUpdateWithWhereUniqueWithoutProdutosInput[]
    updateMany?: missao_produtoUpdateManyWithWhereWithoutProdutosInput | missao_produtoUpdateManyWithWhereWithoutProdutosInput[]
    deleteMany?: missao_produtoScalarWhereInput | missao_produtoScalarWhereInput[]
  }

  export type missoesCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<missoesCreateWithoutUsuariosInput, missoesUncheckedCreateWithoutUsuariosInput> | missoesCreateWithoutUsuariosInput[] | missoesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: missoesCreateOrConnectWithoutUsuariosInput | missoesCreateOrConnectWithoutUsuariosInput[]
    createMany?: missoesCreateManyUsuariosInputEnvelope
    connect?: missoesWhereUniqueInput | missoesWhereUniqueInput[]
  }

  export type niveisCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<niveisCreateWithoutUsuarioInput, niveisUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: niveisCreateOrConnectWithoutUsuarioInput
    connect?: niveisWhereUniqueInput
  }

  export type missoesUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<missoesCreateWithoutUsuariosInput, missoesUncheckedCreateWithoutUsuariosInput> | missoesCreateWithoutUsuariosInput[] | missoesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: missoesCreateOrConnectWithoutUsuariosInput | missoesCreateOrConnectWithoutUsuariosInput[]
    createMany?: missoesCreateManyUsuariosInputEnvelope
    connect?: missoesWhereUniqueInput | missoesWhereUniqueInput[]
  }

  export type missoesUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<missoesCreateWithoutUsuariosInput, missoesUncheckedCreateWithoutUsuariosInput> | missoesCreateWithoutUsuariosInput[] | missoesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: missoesCreateOrConnectWithoutUsuariosInput | missoesCreateOrConnectWithoutUsuariosInput[]
    upsert?: missoesUpsertWithWhereUniqueWithoutUsuariosInput | missoesUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: missoesCreateManyUsuariosInputEnvelope
    set?: missoesWhereUniqueInput | missoesWhereUniqueInput[]
    disconnect?: missoesWhereUniqueInput | missoesWhereUniqueInput[]
    delete?: missoesWhereUniqueInput | missoesWhereUniqueInput[]
    connect?: missoesWhereUniqueInput | missoesWhereUniqueInput[]
    update?: missoesUpdateWithWhereUniqueWithoutUsuariosInput | missoesUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: missoesUpdateManyWithWhereWithoutUsuariosInput | missoesUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: missoesScalarWhereInput | missoesScalarWhereInput[]
  }

  export type niveisUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<niveisCreateWithoutUsuarioInput, niveisUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: niveisCreateOrConnectWithoutUsuarioInput
    upsert?: niveisUpsertWithoutUsuarioInput
    disconnect?: niveisWhereInput | boolean
    delete?: niveisWhereInput | boolean
    connect?: niveisWhereUniqueInput
    update?: XOR<XOR<niveisUpdateToOneWithWhereWithoutUsuarioInput, niveisUpdateWithoutUsuarioInput>, niveisUncheckedUpdateWithoutUsuarioInput>
  }

  export type missoesUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<missoesCreateWithoutUsuariosInput, missoesUncheckedCreateWithoutUsuariosInput> | missoesCreateWithoutUsuariosInput[] | missoesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: missoesCreateOrConnectWithoutUsuariosInput | missoesCreateOrConnectWithoutUsuariosInput[]
    upsert?: missoesUpsertWithWhereUniqueWithoutUsuariosInput | missoesUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: missoesCreateManyUsuariosInputEnvelope
    set?: missoesWhereUniqueInput | missoesWhereUniqueInput[]
    disconnect?: missoesWhereUniqueInput | missoesWhereUniqueInput[]
    delete?: missoesWhereUniqueInput | missoesWhereUniqueInput[]
    connect?: missoesWhereUniqueInput | missoesWhereUniqueInput[]
    update?: missoesUpdateWithWhereUniqueWithoutUsuariosInput | missoesUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: missoesUpdateManyWithWhereWithoutUsuariosInput | missoesUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: missoesScalarWhereInput | missoesScalarWhereInput[]
  }

  export type usuariosCreateNestedManyWithoutNivelInput = {
    create?: XOR<usuariosCreateWithoutNivelInput, usuariosUncheckedCreateWithoutNivelInput> | usuariosCreateWithoutNivelInput[] | usuariosUncheckedCreateWithoutNivelInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutNivelInput | usuariosCreateOrConnectWithoutNivelInput[]
    createMany?: usuariosCreateManyNivelInputEnvelope
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
  }

  export type usuariosUncheckedCreateNestedManyWithoutNivelInput = {
    create?: XOR<usuariosCreateWithoutNivelInput, usuariosUncheckedCreateWithoutNivelInput> | usuariosCreateWithoutNivelInput[] | usuariosUncheckedCreateWithoutNivelInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutNivelInput | usuariosCreateOrConnectWithoutNivelInput[]
    createMany?: usuariosCreateManyNivelInputEnvelope
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
  }

  export type usuariosUpdateManyWithoutNivelNestedInput = {
    create?: XOR<usuariosCreateWithoutNivelInput, usuariosUncheckedCreateWithoutNivelInput> | usuariosCreateWithoutNivelInput[] | usuariosUncheckedCreateWithoutNivelInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutNivelInput | usuariosCreateOrConnectWithoutNivelInput[]
    upsert?: usuariosUpsertWithWhereUniqueWithoutNivelInput | usuariosUpsertWithWhereUniqueWithoutNivelInput[]
    createMany?: usuariosCreateManyNivelInputEnvelope
    set?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    disconnect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    delete?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    update?: usuariosUpdateWithWhereUniqueWithoutNivelInput | usuariosUpdateWithWhereUniqueWithoutNivelInput[]
    updateMany?: usuariosUpdateManyWithWhereWithoutNivelInput | usuariosUpdateManyWithWhereWithoutNivelInput[]
    deleteMany?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
  }

  export type usuariosUncheckedUpdateManyWithoutNivelNestedInput = {
    create?: XOR<usuariosCreateWithoutNivelInput, usuariosUncheckedCreateWithoutNivelInput> | usuariosCreateWithoutNivelInput[] | usuariosUncheckedCreateWithoutNivelInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutNivelInput | usuariosCreateOrConnectWithoutNivelInput[]
    upsert?: usuariosUpsertWithWhereUniqueWithoutNivelInput | usuariosUpsertWithWhereUniqueWithoutNivelInput[]
    createMany?: usuariosCreateManyNivelInputEnvelope
    set?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    disconnect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    delete?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    update?: usuariosUpdateWithWhereUniqueWithoutNivelInput | usuariosUpdateWithWhereUniqueWithoutNivelInput[]
    updateMany?: usuariosUpdateManyWithWhereWithoutNivelInput | usuariosUpdateManyWithWhereWithoutNivelInput[]
    deleteMany?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type missoesCreateWithoutConcorrentesInput = {
    status?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    missao_produto?: missao_produtoCreateNestedManyWithoutMissoesInput
    usuarios?: usuariosCreateNestedOneWithoutMissoesInput
  }

  export type missoesUncheckedCreateWithoutConcorrentesInput = {
    id?: number
    status?: string
    usuario_id?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    missao_produto?: missao_produtoUncheckedCreateNestedManyWithoutMissoesInput
  }

  export type missoesCreateOrConnectWithoutConcorrentesInput = {
    where: missoesWhereUniqueInput
    create: XOR<missoesCreateWithoutConcorrentesInput, missoesUncheckedCreateWithoutConcorrentesInput>
  }

  export type missoesCreateManyConcorrentesInputEnvelope = {
    data: missoesCreateManyConcorrentesInput | missoesCreateManyConcorrentesInput[]
    skipDuplicates?: boolean
  }

  export type missoesUpsertWithWhereUniqueWithoutConcorrentesInput = {
    where: missoesWhereUniqueInput
    update: XOR<missoesUpdateWithoutConcorrentesInput, missoesUncheckedUpdateWithoutConcorrentesInput>
    create: XOR<missoesCreateWithoutConcorrentesInput, missoesUncheckedCreateWithoutConcorrentesInput>
  }

  export type missoesUpdateWithWhereUniqueWithoutConcorrentesInput = {
    where: missoesWhereUniqueInput
    data: XOR<missoesUpdateWithoutConcorrentesInput, missoesUncheckedUpdateWithoutConcorrentesInput>
  }

  export type missoesUpdateManyWithWhereWithoutConcorrentesInput = {
    where: missoesScalarWhereInput
    data: XOR<missoesUpdateManyMutationInput, missoesUncheckedUpdateManyWithoutConcorrentesInput>
  }

  export type missoesScalarWhereInput = {
    AND?: missoesScalarWhereInput | missoesScalarWhereInput[]
    OR?: missoesScalarWhereInput[]
    NOT?: missoesScalarWhereInput | missoesScalarWhereInput[]
    id?: IntFilter<"missoes"> | number
    concorrente_id?: IntFilter<"missoes"> | number
    status?: StringFilter<"missoes"> | string
    usuario_id?: IntNullableFilter<"missoes"> | number | null
    createdAt?: DateTimeNullableFilter<"missoes"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"missoes"> | Date | string | null
  }

  export type missoesCreateWithoutMissao_produtoInput = {
    status?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    concorrentes: concorrentesCreateNestedOneWithoutMissoesInput
    usuarios?: usuariosCreateNestedOneWithoutMissoesInput
  }

  export type missoesUncheckedCreateWithoutMissao_produtoInput = {
    id?: number
    concorrente_id: number
    status?: string
    usuario_id?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type missoesCreateOrConnectWithoutMissao_produtoInput = {
    where: missoesWhereUniqueInput
    create: XOR<missoesCreateWithoutMissao_produtoInput, missoesUncheckedCreateWithoutMissao_produtoInput>
  }

  export type produtosCreateWithoutMissao_produtoInput = {
    nome: string
    preco: number
    codigo?: string | null
    foto?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type produtosUncheckedCreateWithoutMissao_produtoInput = {
    id?: number
    nome: string
    preco: number
    codigo?: string | null
    foto?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type produtosCreateOrConnectWithoutMissao_produtoInput = {
    where: produtosWhereUniqueInput
    create: XOR<produtosCreateWithoutMissao_produtoInput, produtosUncheckedCreateWithoutMissao_produtoInput>
  }

  export type missoesUpsertWithoutMissao_produtoInput = {
    update: XOR<missoesUpdateWithoutMissao_produtoInput, missoesUncheckedUpdateWithoutMissao_produtoInput>
    create: XOR<missoesCreateWithoutMissao_produtoInput, missoesUncheckedCreateWithoutMissao_produtoInput>
    where?: missoesWhereInput
  }

  export type missoesUpdateToOneWithWhereWithoutMissao_produtoInput = {
    where?: missoesWhereInput
    data: XOR<missoesUpdateWithoutMissao_produtoInput, missoesUncheckedUpdateWithoutMissao_produtoInput>
  }

  export type missoesUpdateWithoutMissao_produtoInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    concorrentes?: concorrentesUpdateOneRequiredWithoutMissoesNestedInput
    usuarios?: usuariosUpdateOneWithoutMissoesNestedInput
  }

  export type missoesUncheckedUpdateWithoutMissao_produtoInput = {
    id?: IntFieldUpdateOperationsInput | number
    concorrente_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type produtosUpsertWithoutMissao_produtoInput = {
    update: XOR<produtosUpdateWithoutMissao_produtoInput, produtosUncheckedUpdateWithoutMissao_produtoInput>
    create: XOR<produtosCreateWithoutMissao_produtoInput, produtosUncheckedCreateWithoutMissao_produtoInput>
    where?: produtosWhereInput
  }

  export type produtosUpdateToOneWithWhereWithoutMissao_produtoInput = {
    where?: produtosWhereInput
    data: XOR<produtosUpdateWithoutMissao_produtoInput, produtosUncheckedUpdateWithoutMissao_produtoInput>
  }

  export type produtosUpdateWithoutMissao_produtoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type produtosUncheckedUpdateWithoutMissao_produtoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type missao_produtoCreateWithoutMissoesInput = {
    preco?: number | null
    preco_desconto?: number | null
    observacoes?: string | null
    status?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    produtos: produtosCreateNestedOneWithoutMissao_produtoInput
  }

  export type missao_produtoUncheckedCreateWithoutMissoesInput = {
    id?: number
    produto_id: number
    preco?: number | null
    preco_desconto?: number | null
    observacoes?: string | null
    status?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type missao_produtoCreateOrConnectWithoutMissoesInput = {
    where: missao_produtoWhereUniqueInput
    create: XOR<missao_produtoCreateWithoutMissoesInput, missao_produtoUncheckedCreateWithoutMissoesInput>
  }

  export type missao_produtoCreateManyMissoesInputEnvelope = {
    data: missao_produtoCreateManyMissoesInput | missao_produtoCreateManyMissoesInput[]
    skipDuplicates?: boolean
  }

  export type concorrentesCreateWithoutMissoesInput = {
    nome: string
    tipo: string
    endereco: string
    foto?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type concorrentesUncheckedCreateWithoutMissoesInput = {
    id?: number
    nome: string
    tipo: string
    endereco: string
    foto?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type concorrentesCreateOrConnectWithoutMissoesInput = {
    where: concorrentesWhereUniqueInput
    create: XOR<concorrentesCreateWithoutMissoesInput, concorrentesUncheckedCreateWithoutMissoesInput>
  }

  export type usuariosCreateWithoutMissoesInput = {
    nome: string
    email: string
    senha: string
    foto?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    nivel?: niveisCreateNestedOneWithoutUsuarioInput
  }

  export type usuariosUncheckedCreateWithoutMissoesInput = {
    id?: number
    nome: string
    email: string
    senha: string
    foto?: string | null
    nivel_id?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type usuariosCreateOrConnectWithoutMissoesInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutMissoesInput, usuariosUncheckedCreateWithoutMissoesInput>
  }

  export type missao_produtoUpsertWithWhereUniqueWithoutMissoesInput = {
    where: missao_produtoWhereUniqueInput
    update: XOR<missao_produtoUpdateWithoutMissoesInput, missao_produtoUncheckedUpdateWithoutMissoesInput>
    create: XOR<missao_produtoCreateWithoutMissoesInput, missao_produtoUncheckedCreateWithoutMissoesInput>
  }

  export type missao_produtoUpdateWithWhereUniqueWithoutMissoesInput = {
    where: missao_produtoWhereUniqueInput
    data: XOR<missao_produtoUpdateWithoutMissoesInput, missao_produtoUncheckedUpdateWithoutMissoesInput>
  }

  export type missao_produtoUpdateManyWithWhereWithoutMissoesInput = {
    where: missao_produtoScalarWhereInput
    data: XOR<missao_produtoUpdateManyMutationInput, missao_produtoUncheckedUpdateManyWithoutMissoesInput>
  }

  export type missao_produtoScalarWhereInput = {
    AND?: missao_produtoScalarWhereInput | missao_produtoScalarWhereInput[]
    OR?: missao_produtoScalarWhereInput[]
    NOT?: missao_produtoScalarWhereInput | missao_produtoScalarWhereInput[]
    id?: IntFilter<"missao_produto"> | number
    missao_id?: IntFilter<"missao_produto"> | number
    produto_id?: IntFilter<"missao_produto"> | number
    preco?: FloatNullableFilter<"missao_produto"> | number | null
    preco_desconto?: FloatNullableFilter<"missao_produto"> | number | null
    observacoes?: StringNullableFilter<"missao_produto"> | string | null
    status?: StringFilter<"missao_produto"> | string
    createdAt?: DateTimeNullableFilter<"missao_produto"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"missao_produto"> | Date | string | null
  }

  export type concorrentesUpsertWithoutMissoesInput = {
    update: XOR<concorrentesUpdateWithoutMissoesInput, concorrentesUncheckedUpdateWithoutMissoesInput>
    create: XOR<concorrentesCreateWithoutMissoesInput, concorrentesUncheckedCreateWithoutMissoesInput>
    where?: concorrentesWhereInput
  }

  export type concorrentesUpdateToOneWithWhereWithoutMissoesInput = {
    where?: concorrentesWhereInput
    data: XOR<concorrentesUpdateWithoutMissoesInput, concorrentesUncheckedUpdateWithoutMissoesInput>
  }

  export type concorrentesUpdateWithoutMissoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type concorrentesUncheckedUpdateWithoutMissoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosUpsertWithoutMissoesInput = {
    update: XOR<usuariosUpdateWithoutMissoesInput, usuariosUncheckedUpdateWithoutMissoesInput>
    create: XOR<usuariosCreateWithoutMissoesInput, usuariosUncheckedCreateWithoutMissoesInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutMissoesInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutMissoesInput, usuariosUncheckedUpdateWithoutMissoesInput>
  }

  export type usuariosUpdateWithoutMissoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel?: niveisUpdateOneWithoutUsuarioNestedInput
  }

  export type usuariosUncheckedUpdateWithoutMissoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    nivel_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type missao_produtoCreateWithoutProdutosInput = {
    preco?: number | null
    preco_desconto?: number | null
    observacoes?: string | null
    status?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    missoes: missoesCreateNestedOneWithoutMissao_produtoInput
  }

  export type missao_produtoUncheckedCreateWithoutProdutosInput = {
    id?: number
    missao_id: number
    preco?: number | null
    preco_desconto?: number | null
    observacoes?: string | null
    status?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type missao_produtoCreateOrConnectWithoutProdutosInput = {
    where: missao_produtoWhereUniqueInput
    create: XOR<missao_produtoCreateWithoutProdutosInput, missao_produtoUncheckedCreateWithoutProdutosInput>
  }

  export type missao_produtoCreateManyProdutosInputEnvelope = {
    data: missao_produtoCreateManyProdutosInput | missao_produtoCreateManyProdutosInput[]
    skipDuplicates?: boolean
  }

  export type missao_produtoUpsertWithWhereUniqueWithoutProdutosInput = {
    where: missao_produtoWhereUniqueInput
    update: XOR<missao_produtoUpdateWithoutProdutosInput, missao_produtoUncheckedUpdateWithoutProdutosInput>
    create: XOR<missao_produtoCreateWithoutProdutosInput, missao_produtoUncheckedCreateWithoutProdutosInput>
  }

  export type missao_produtoUpdateWithWhereUniqueWithoutProdutosInput = {
    where: missao_produtoWhereUniqueInput
    data: XOR<missao_produtoUpdateWithoutProdutosInput, missao_produtoUncheckedUpdateWithoutProdutosInput>
  }

  export type missao_produtoUpdateManyWithWhereWithoutProdutosInput = {
    where: missao_produtoScalarWhereInput
    data: XOR<missao_produtoUpdateManyMutationInput, missao_produtoUncheckedUpdateManyWithoutProdutosInput>
  }

  export type missoesCreateWithoutUsuariosInput = {
    status?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    missao_produto?: missao_produtoCreateNestedManyWithoutMissoesInput
    concorrentes: concorrentesCreateNestedOneWithoutMissoesInput
  }

  export type missoesUncheckedCreateWithoutUsuariosInput = {
    id?: number
    concorrente_id: number
    status?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    missao_produto?: missao_produtoUncheckedCreateNestedManyWithoutMissoesInput
  }

  export type missoesCreateOrConnectWithoutUsuariosInput = {
    where: missoesWhereUniqueInput
    create: XOR<missoesCreateWithoutUsuariosInput, missoesUncheckedCreateWithoutUsuariosInput>
  }

  export type missoesCreateManyUsuariosInputEnvelope = {
    data: missoesCreateManyUsuariosInput | missoesCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type niveisCreateWithoutUsuarioInput = {
    nome: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type niveisUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nome: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type niveisCreateOrConnectWithoutUsuarioInput = {
    where: niveisWhereUniqueInput
    create: XOR<niveisCreateWithoutUsuarioInput, niveisUncheckedCreateWithoutUsuarioInput>
  }

  export type missoesUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: missoesWhereUniqueInput
    update: XOR<missoesUpdateWithoutUsuariosInput, missoesUncheckedUpdateWithoutUsuariosInput>
    create: XOR<missoesCreateWithoutUsuariosInput, missoesUncheckedCreateWithoutUsuariosInput>
  }

  export type missoesUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: missoesWhereUniqueInput
    data: XOR<missoesUpdateWithoutUsuariosInput, missoesUncheckedUpdateWithoutUsuariosInput>
  }

  export type missoesUpdateManyWithWhereWithoutUsuariosInput = {
    where: missoesScalarWhereInput
    data: XOR<missoesUpdateManyMutationInput, missoesUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type niveisUpsertWithoutUsuarioInput = {
    update: XOR<niveisUpdateWithoutUsuarioInput, niveisUncheckedUpdateWithoutUsuarioInput>
    create: XOR<niveisCreateWithoutUsuarioInput, niveisUncheckedCreateWithoutUsuarioInput>
    where?: niveisWhereInput
  }

  export type niveisUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: niveisWhereInput
    data: XOR<niveisUpdateWithoutUsuarioInput, niveisUncheckedUpdateWithoutUsuarioInput>
  }

  export type niveisUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type niveisUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosCreateWithoutNivelInput = {
    nome: string
    email: string
    senha: string
    foto?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    missoes?: missoesCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutNivelInput = {
    id?: number
    nome: string
    email: string
    senha: string
    foto?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    missoes?: missoesUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutNivelInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutNivelInput, usuariosUncheckedCreateWithoutNivelInput>
  }

  export type usuariosCreateManyNivelInputEnvelope = {
    data: usuariosCreateManyNivelInput | usuariosCreateManyNivelInput[]
    skipDuplicates?: boolean
  }

  export type usuariosUpsertWithWhereUniqueWithoutNivelInput = {
    where: usuariosWhereUniqueInput
    update: XOR<usuariosUpdateWithoutNivelInput, usuariosUncheckedUpdateWithoutNivelInput>
    create: XOR<usuariosCreateWithoutNivelInput, usuariosUncheckedCreateWithoutNivelInput>
  }

  export type usuariosUpdateWithWhereUniqueWithoutNivelInput = {
    where: usuariosWhereUniqueInput
    data: XOR<usuariosUpdateWithoutNivelInput, usuariosUncheckedUpdateWithoutNivelInput>
  }

  export type usuariosUpdateManyWithWhereWithoutNivelInput = {
    where: usuariosScalarWhereInput
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyWithoutNivelInput>
  }

  export type usuariosScalarWhereInput = {
    AND?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
    OR?: usuariosScalarWhereInput[]
    NOT?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
    id?: IntFilter<"usuarios"> | number
    nome?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    senha?: StringFilter<"usuarios"> | string
    foto?: StringNullableFilter<"usuarios"> | string | null
    nivel_id?: IntNullableFilter<"usuarios"> | number | null
    createdAt?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"usuarios"> | Date | string | null
  }

  export type missoesCreateManyConcorrentesInput = {
    id?: number
    status?: string
    usuario_id?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type missoesUpdateWithoutConcorrentesInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missao_produto?: missao_produtoUpdateManyWithoutMissoesNestedInput
    usuarios?: usuariosUpdateOneWithoutMissoesNestedInput
  }

  export type missoesUncheckedUpdateWithoutConcorrentesInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missao_produto?: missao_produtoUncheckedUpdateManyWithoutMissoesNestedInput
  }

  export type missoesUncheckedUpdateManyWithoutConcorrentesInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type missao_produtoCreateManyMissoesInput = {
    id?: number
    produto_id: number
    preco?: number | null
    preco_desconto?: number | null
    observacoes?: string | null
    status?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type missao_produtoUpdateWithoutMissoesInput = {
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    preco_desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    produtos?: produtosUpdateOneRequiredWithoutMissao_produtoNestedInput
  }

  export type missao_produtoUncheckedUpdateWithoutMissoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    preco_desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type missao_produtoUncheckedUpdateManyWithoutMissoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    preco_desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type missao_produtoCreateManyProdutosInput = {
    id?: number
    missao_id: number
    preco?: number | null
    preco_desconto?: number | null
    observacoes?: string | null
    status?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type missao_produtoUpdateWithoutProdutosInput = {
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    preco_desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missoes?: missoesUpdateOneRequiredWithoutMissao_produtoNestedInput
  }

  export type missao_produtoUncheckedUpdateWithoutProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    missao_id?: IntFieldUpdateOperationsInput | number
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    preco_desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type missao_produtoUncheckedUpdateManyWithoutProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    missao_id?: IntFieldUpdateOperationsInput | number
    preco?: NullableFloatFieldUpdateOperationsInput | number | null
    preco_desconto?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type missoesCreateManyUsuariosInput = {
    id?: number
    concorrente_id: number
    status?: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type missoesUpdateWithoutUsuariosInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missao_produto?: missao_produtoUpdateManyWithoutMissoesNestedInput
    concorrentes?: concorrentesUpdateOneRequiredWithoutMissoesNestedInput
  }

  export type missoesUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    concorrente_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missao_produto?: missao_produtoUncheckedUpdateManyWithoutMissoesNestedInput
  }

  export type missoesUncheckedUpdateManyWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    concorrente_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosCreateManyNivelInput = {
    id?: number
    nome: string
    email: string
    senha: string
    foto?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type usuariosUpdateWithoutNivelInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missoes?: missoesUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutNivelInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missoes?: missoesUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateManyWithoutNivelInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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