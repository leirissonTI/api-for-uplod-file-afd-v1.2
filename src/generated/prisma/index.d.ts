
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
 * Model RegistroTipo1
 * 
 */
export type RegistroTipo1 = $Result.DefaultSelection<Prisma.$RegistroTipo1Payload>
/**
 * Model RegistroTipo10
 * 
 */
export type RegistroTipo10 = $Result.DefaultSelection<Prisma.$RegistroTipo10Payload>
/**
 * Model MarcacoesRelogio
 * 
 */
export type MarcacoesRelogio = $Result.DefaultSelection<Prisma.$MarcacoesRelogioPayload>
/**
 * Model EspelhoDiario
 * 
 */
export type EspelhoDiario = $Result.DefaultSelection<Prisma.$EspelhoDiarioPayload>
/**
 * Model MarcacoesUsuario
 * 
 */
export type MarcacoesUsuario = $Result.DefaultSelection<Prisma.$MarcacoesUsuarioPayload>
/**
 * Model EspelhoDePontoMensal
 * 
 */
export type EspelhoDePontoMensal = $Result.DefaultSelection<Prisma.$EspelhoDePontoMensalPayload>
/**
 * Model EspelhoMensal
 * 
 */
export type EspelhoMensal = $Result.DefaultSelection<Prisma.$EspelhoMensalPayload>
/**
 * Model Frequencia
 * 
 */
export type Frequencia = $Result.DefaultSelection<Prisma.$FrequenciaPayload>
/**
 * Model BancoDeHoras
 * 
 */
export type BancoDeHoras = $Result.DefaultSelection<Prisma.$BancoDeHorasPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more RegistroTipo1s
 * const registroTipo1s = await prisma.registroTipo1.findMany()
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
   * // Fetch zero or more RegistroTipo1s
   * const registroTipo1s = await prisma.registroTipo1.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
   * `prisma.registroTipo1`: Exposes CRUD operations for the **RegistroTipo1** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistroTipo1s
    * const registroTipo1s = await prisma.registroTipo1.findMany()
    * ```
    */
  get registroTipo1(): Prisma.RegistroTipo1Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registroTipo10`: Exposes CRUD operations for the **RegistroTipo10** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistroTipo10s
    * const registroTipo10s = await prisma.registroTipo10.findMany()
    * ```
    */
  get registroTipo10(): Prisma.RegistroTipo10Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marcacoesRelogio`: Exposes CRUD operations for the **MarcacoesRelogio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarcacoesRelogios
    * const marcacoesRelogios = await prisma.marcacoesRelogio.findMany()
    * ```
    */
  get marcacoesRelogio(): Prisma.MarcacoesRelogioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.espelhoDiario`: Exposes CRUD operations for the **EspelhoDiario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EspelhoDiarios
    * const espelhoDiarios = await prisma.espelhoDiario.findMany()
    * ```
    */
  get espelhoDiario(): Prisma.EspelhoDiarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marcacoesUsuario`: Exposes CRUD operations for the **MarcacoesUsuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarcacoesUsuarios
    * const marcacoesUsuarios = await prisma.marcacoesUsuario.findMany()
    * ```
    */
  get marcacoesUsuario(): Prisma.MarcacoesUsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.espelhoDePontoMensal`: Exposes CRUD operations for the **EspelhoDePontoMensal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EspelhoDePontoMensals
    * const espelhoDePontoMensals = await prisma.espelhoDePontoMensal.findMany()
    * ```
    */
  get espelhoDePontoMensal(): Prisma.EspelhoDePontoMensalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.espelhoMensal`: Exposes CRUD operations for the **EspelhoMensal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EspelhoMensals
    * const espelhoMensals = await prisma.espelhoMensal.findMany()
    * ```
    */
  get espelhoMensal(): Prisma.EspelhoMensalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.frequencia`: Exposes CRUD operations for the **Frequencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Frequencias
    * const frequencias = await prisma.frequencia.findMany()
    * ```
    */
  get frequencia(): Prisma.FrequenciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bancoDeHoras`: Exposes CRUD operations for the **BancoDeHoras** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BancoDeHoras
    * const bancoDeHoras = await prisma.bancoDeHoras.findMany()
    * ```
    */
  get bancoDeHoras(): Prisma.BancoDeHorasDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    RegistroTipo1: 'RegistroTipo1',
    RegistroTipo10: 'RegistroTipo10',
    MarcacoesRelogio: 'MarcacoesRelogio',
    EspelhoDiario: 'EspelhoDiario',
    MarcacoesUsuario: 'MarcacoesUsuario',
    EspelhoDePontoMensal: 'EspelhoDePontoMensal',
    EspelhoMensal: 'EspelhoMensal',
    Frequencia: 'Frequencia',
    BancoDeHoras: 'BancoDeHoras'
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
      modelProps: "registroTipo1" | "registroTipo10" | "marcacoesRelogio" | "espelhoDiario" | "marcacoesUsuario" | "espelhoDePontoMensal" | "espelhoMensal" | "frequencia" | "bancoDeHoras"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      RegistroTipo1: {
        payload: Prisma.$RegistroTipo1Payload<ExtArgs>
        fields: Prisma.RegistroTipo1FieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistroTipo1FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTipo1Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistroTipo1FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTipo1Payload>
          }
          findFirst: {
            args: Prisma.RegistroTipo1FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTipo1Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistroTipo1FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTipo1Payload>
          }
          findMany: {
            args: Prisma.RegistroTipo1FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTipo1Payload>[]
          }
          create: {
            args: Prisma.RegistroTipo1CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTipo1Payload>
          }
          createMany: {
            args: Prisma.RegistroTipo1CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistroTipo1CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTipo1Payload>[]
          }
          delete: {
            args: Prisma.RegistroTipo1DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTipo1Payload>
          }
          update: {
            args: Prisma.RegistroTipo1UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTipo1Payload>
          }
          deleteMany: {
            args: Prisma.RegistroTipo1DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistroTipo1UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistroTipo1UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTipo1Payload>[]
          }
          upsert: {
            args: Prisma.RegistroTipo1UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTipo1Payload>
          }
          aggregate: {
            args: Prisma.RegistroTipo1AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistroTipo1>
          }
          groupBy: {
            args: Prisma.RegistroTipo1GroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistroTipo1GroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistroTipo1CountArgs<ExtArgs>
            result: $Utils.Optional<RegistroTipo1CountAggregateOutputType> | number
          }
        }
      }
      RegistroTipo10: {
        payload: Prisma.$RegistroTipo10Payload<ExtArgs>
        fields: Prisma.RegistroTipo10FieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistroTipo10FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTipo10Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistroTipo10FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTipo10Payload>
          }
          findFirst: {
            args: Prisma.RegistroTipo10FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTipo10Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistroTipo10FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTipo10Payload>
          }
          findMany: {
            args: Prisma.RegistroTipo10FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTipo10Payload>[]
          }
          create: {
            args: Prisma.RegistroTipo10CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTipo10Payload>
          }
          createMany: {
            args: Prisma.RegistroTipo10CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistroTipo10CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTipo10Payload>[]
          }
          delete: {
            args: Prisma.RegistroTipo10DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTipo10Payload>
          }
          update: {
            args: Prisma.RegistroTipo10UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTipo10Payload>
          }
          deleteMany: {
            args: Prisma.RegistroTipo10DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistroTipo10UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistroTipo10UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTipo10Payload>[]
          }
          upsert: {
            args: Prisma.RegistroTipo10UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroTipo10Payload>
          }
          aggregate: {
            args: Prisma.RegistroTipo10AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistroTipo10>
          }
          groupBy: {
            args: Prisma.RegistroTipo10GroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistroTipo10GroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistroTipo10CountArgs<ExtArgs>
            result: $Utils.Optional<RegistroTipo10CountAggregateOutputType> | number
          }
        }
      }
      MarcacoesRelogio: {
        payload: Prisma.$MarcacoesRelogioPayload<ExtArgs>
        fields: Prisma.MarcacoesRelogioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarcacoesRelogioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacoesRelogioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarcacoesRelogioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacoesRelogioPayload>
          }
          findFirst: {
            args: Prisma.MarcacoesRelogioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacoesRelogioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarcacoesRelogioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacoesRelogioPayload>
          }
          findMany: {
            args: Prisma.MarcacoesRelogioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacoesRelogioPayload>[]
          }
          create: {
            args: Prisma.MarcacoesRelogioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacoesRelogioPayload>
          }
          createMany: {
            args: Prisma.MarcacoesRelogioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarcacoesRelogioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacoesRelogioPayload>[]
          }
          delete: {
            args: Prisma.MarcacoesRelogioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacoesRelogioPayload>
          }
          update: {
            args: Prisma.MarcacoesRelogioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacoesRelogioPayload>
          }
          deleteMany: {
            args: Prisma.MarcacoesRelogioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarcacoesRelogioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarcacoesRelogioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacoesRelogioPayload>[]
          }
          upsert: {
            args: Prisma.MarcacoesRelogioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacoesRelogioPayload>
          }
          aggregate: {
            args: Prisma.MarcacoesRelogioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarcacoesRelogio>
          }
          groupBy: {
            args: Prisma.MarcacoesRelogioGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarcacoesRelogioGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarcacoesRelogioCountArgs<ExtArgs>
            result: $Utils.Optional<MarcacoesRelogioCountAggregateOutputType> | number
          }
        }
      }
      EspelhoDiario: {
        payload: Prisma.$EspelhoDiarioPayload<ExtArgs>
        fields: Prisma.EspelhoDiarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EspelhoDiarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoDiarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EspelhoDiarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoDiarioPayload>
          }
          findFirst: {
            args: Prisma.EspelhoDiarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoDiarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EspelhoDiarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoDiarioPayload>
          }
          findMany: {
            args: Prisma.EspelhoDiarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoDiarioPayload>[]
          }
          create: {
            args: Prisma.EspelhoDiarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoDiarioPayload>
          }
          createMany: {
            args: Prisma.EspelhoDiarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EspelhoDiarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoDiarioPayload>[]
          }
          delete: {
            args: Prisma.EspelhoDiarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoDiarioPayload>
          }
          update: {
            args: Prisma.EspelhoDiarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoDiarioPayload>
          }
          deleteMany: {
            args: Prisma.EspelhoDiarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EspelhoDiarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EspelhoDiarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoDiarioPayload>[]
          }
          upsert: {
            args: Prisma.EspelhoDiarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoDiarioPayload>
          }
          aggregate: {
            args: Prisma.EspelhoDiarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEspelhoDiario>
          }
          groupBy: {
            args: Prisma.EspelhoDiarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<EspelhoDiarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.EspelhoDiarioCountArgs<ExtArgs>
            result: $Utils.Optional<EspelhoDiarioCountAggregateOutputType> | number
          }
        }
      }
      MarcacoesUsuario: {
        payload: Prisma.$MarcacoesUsuarioPayload<ExtArgs>
        fields: Prisma.MarcacoesUsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarcacoesUsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacoesUsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarcacoesUsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacoesUsuarioPayload>
          }
          findFirst: {
            args: Prisma.MarcacoesUsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacoesUsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarcacoesUsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacoesUsuarioPayload>
          }
          findMany: {
            args: Prisma.MarcacoesUsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacoesUsuarioPayload>[]
          }
          create: {
            args: Prisma.MarcacoesUsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacoesUsuarioPayload>
          }
          createMany: {
            args: Prisma.MarcacoesUsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarcacoesUsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacoesUsuarioPayload>[]
          }
          delete: {
            args: Prisma.MarcacoesUsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacoesUsuarioPayload>
          }
          update: {
            args: Prisma.MarcacoesUsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacoesUsuarioPayload>
          }
          deleteMany: {
            args: Prisma.MarcacoesUsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarcacoesUsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarcacoesUsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacoesUsuarioPayload>[]
          }
          upsert: {
            args: Prisma.MarcacoesUsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacoesUsuarioPayload>
          }
          aggregate: {
            args: Prisma.MarcacoesUsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarcacoesUsuario>
          }
          groupBy: {
            args: Prisma.MarcacoesUsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarcacoesUsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarcacoesUsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<MarcacoesUsuarioCountAggregateOutputType> | number
          }
        }
      }
      EspelhoDePontoMensal: {
        payload: Prisma.$EspelhoDePontoMensalPayload<ExtArgs>
        fields: Prisma.EspelhoDePontoMensalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EspelhoDePontoMensalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoDePontoMensalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EspelhoDePontoMensalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoDePontoMensalPayload>
          }
          findFirst: {
            args: Prisma.EspelhoDePontoMensalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoDePontoMensalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EspelhoDePontoMensalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoDePontoMensalPayload>
          }
          findMany: {
            args: Prisma.EspelhoDePontoMensalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoDePontoMensalPayload>[]
          }
          create: {
            args: Prisma.EspelhoDePontoMensalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoDePontoMensalPayload>
          }
          createMany: {
            args: Prisma.EspelhoDePontoMensalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EspelhoDePontoMensalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoDePontoMensalPayload>[]
          }
          delete: {
            args: Prisma.EspelhoDePontoMensalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoDePontoMensalPayload>
          }
          update: {
            args: Prisma.EspelhoDePontoMensalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoDePontoMensalPayload>
          }
          deleteMany: {
            args: Prisma.EspelhoDePontoMensalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EspelhoDePontoMensalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EspelhoDePontoMensalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoDePontoMensalPayload>[]
          }
          upsert: {
            args: Prisma.EspelhoDePontoMensalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoDePontoMensalPayload>
          }
          aggregate: {
            args: Prisma.EspelhoDePontoMensalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEspelhoDePontoMensal>
          }
          groupBy: {
            args: Prisma.EspelhoDePontoMensalGroupByArgs<ExtArgs>
            result: $Utils.Optional<EspelhoDePontoMensalGroupByOutputType>[]
          }
          count: {
            args: Prisma.EspelhoDePontoMensalCountArgs<ExtArgs>
            result: $Utils.Optional<EspelhoDePontoMensalCountAggregateOutputType> | number
          }
        }
      }
      EspelhoMensal: {
        payload: Prisma.$EspelhoMensalPayload<ExtArgs>
        fields: Prisma.EspelhoMensalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EspelhoMensalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoMensalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EspelhoMensalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoMensalPayload>
          }
          findFirst: {
            args: Prisma.EspelhoMensalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoMensalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EspelhoMensalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoMensalPayload>
          }
          findMany: {
            args: Prisma.EspelhoMensalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoMensalPayload>[]
          }
          create: {
            args: Prisma.EspelhoMensalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoMensalPayload>
          }
          createMany: {
            args: Prisma.EspelhoMensalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EspelhoMensalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoMensalPayload>[]
          }
          delete: {
            args: Prisma.EspelhoMensalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoMensalPayload>
          }
          update: {
            args: Prisma.EspelhoMensalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoMensalPayload>
          }
          deleteMany: {
            args: Prisma.EspelhoMensalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EspelhoMensalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EspelhoMensalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoMensalPayload>[]
          }
          upsert: {
            args: Prisma.EspelhoMensalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspelhoMensalPayload>
          }
          aggregate: {
            args: Prisma.EspelhoMensalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEspelhoMensal>
          }
          groupBy: {
            args: Prisma.EspelhoMensalGroupByArgs<ExtArgs>
            result: $Utils.Optional<EspelhoMensalGroupByOutputType>[]
          }
          count: {
            args: Prisma.EspelhoMensalCountArgs<ExtArgs>
            result: $Utils.Optional<EspelhoMensalCountAggregateOutputType> | number
          }
        }
      }
      Frequencia: {
        payload: Prisma.$FrequenciaPayload<ExtArgs>
        fields: Prisma.FrequenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FrequenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FrequenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>
          }
          findFirst: {
            args: Prisma.FrequenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FrequenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>
          }
          findMany: {
            args: Prisma.FrequenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>[]
          }
          create: {
            args: Prisma.FrequenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>
          }
          createMany: {
            args: Prisma.FrequenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FrequenciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>[]
          }
          delete: {
            args: Prisma.FrequenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>
          }
          update: {
            args: Prisma.FrequenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>
          }
          deleteMany: {
            args: Prisma.FrequenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FrequenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FrequenciaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>[]
          }
          upsert: {
            args: Prisma.FrequenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrequenciaPayload>
          }
          aggregate: {
            args: Prisma.FrequenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFrequencia>
          }
          groupBy: {
            args: Prisma.FrequenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FrequenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FrequenciaCountArgs<ExtArgs>
            result: $Utils.Optional<FrequenciaCountAggregateOutputType> | number
          }
        }
      }
      BancoDeHoras: {
        payload: Prisma.$BancoDeHorasPayload<ExtArgs>
        fields: Prisma.BancoDeHorasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BancoDeHorasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoDeHorasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BancoDeHorasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoDeHorasPayload>
          }
          findFirst: {
            args: Prisma.BancoDeHorasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoDeHorasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BancoDeHorasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoDeHorasPayload>
          }
          findMany: {
            args: Prisma.BancoDeHorasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoDeHorasPayload>[]
          }
          create: {
            args: Prisma.BancoDeHorasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoDeHorasPayload>
          }
          createMany: {
            args: Prisma.BancoDeHorasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BancoDeHorasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoDeHorasPayload>[]
          }
          delete: {
            args: Prisma.BancoDeHorasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoDeHorasPayload>
          }
          update: {
            args: Prisma.BancoDeHorasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoDeHorasPayload>
          }
          deleteMany: {
            args: Prisma.BancoDeHorasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BancoDeHorasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BancoDeHorasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoDeHorasPayload>[]
          }
          upsert: {
            args: Prisma.BancoDeHorasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoDeHorasPayload>
          }
          aggregate: {
            args: Prisma.BancoDeHorasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBancoDeHoras>
          }
          groupBy: {
            args: Prisma.BancoDeHorasGroupByArgs<ExtArgs>
            result: $Utils.Optional<BancoDeHorasGroupByOutputType>[]
          }
          count: {
            args: Prisma.BancoDeHorasCountArgs<ExtArgs>
            result: $Utils.Optional<BancoDeHorasCountAggregateOutputType> | number
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
    registroTipo1?: RegistroTipo1Omit
    registroTipo10?: RegistroTipo10Omit
    marcacoesRelogio?: MarcacoesRelogioOmit
    espelhoDiario?: EspelhoDiarioOmit
    marcacoesUsuario?: MarcacoesUsuarioOmit
    espelhoDePontoMensal?: EspelhoDePontoMensalOmit
    espelhoMensal?: EspelhoMensalOmit
    frequencia?: FrequenciaOmit
    bancoDeHoras?: BancoDeHorasOmit
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type EspelhoDiarioCountOutputType
   */

  export type EspelhoDiarioCountOutputType = {
    EspelhoMensal: number
  }

  export type EspelhoDiarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EspelhoMensal?: boolean | EspelhoDiarioCountOutputTypeCountEspelhoMensalArgs
  }

  // Custom InputTypes
  /**
   * EspelhoDiarioCountOutputType without action
   */
  export type EspelhoDiarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDiarioCountOutputType
     */
    select?: EspelhoDiarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EspelhoDiarioCountOutputType without action
   */
  export type EspelhoDiarioCountOutputTypeCountEspelhoMensalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspelhoMensalWhereInput
  }


  /**
   * Count Type EspelhoMensalCountOutputType
   */

  export type EspelhoMensalCountOutputType = {
    registros: number
  }

  export type EspelhoMensalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registros?: boolean | EspelhoMensalCountOutputTypeCountRegistrosArgs
  }

  // Custom InputTypes
  /**
   * EspelhoMensalCountOutputType without action
   */
  export type EspelhoMensalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoMensalCountOutputType
     */
    select?: EspelhoMensalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EspelhoMensalCountOutputType without action
   */
  export type EspelhoMensalCountOutputTypeCountRegistrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspelhoDiarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model RegistroTipo1
   */

  export type AggregateRegistroTipo1 = {
    _count: RegistroTipo1CountAggregateOutputType | null
    _min: RegistroTipo1MinAggregateOutputType | null
    _max: RegistroTipo1MaxAggregateOutputType | null
  }

  export type RegistroTipo1MinAggregateOutputType = {
    id: string | null
    tipo: string | null
    idSequencial: string | null
    tipoIdentificadorEmpregador: string | null
    cnpjCpfEmpregador: string | null
    cnoCaepf: string | null
    razaoSocial: string | null
    numeroFabricacao: string | null
    dataInicial: string | null
    dataFinal: string | null
    dataHoraGeracao: string | null
    versaoLayout: string | null
    tipoIdentificadorFabricante: string | null
    cnpjCpfFabricante: string | null
    modelo: string | null
    crc: string | null
    origem: string | null
  }

  export type RegistroTipo1MaxAggregateOutputType = {
    id: string | null
    tipo: string | null
    idSequencial: string | null
    tipoIdentificadorEmpregador: string | null
    cnpjCpfEmpregador: string | null
    cnoCaepf: string | null
    razaoSocial: string | null
    numeroFabricacao: string | null
    dataInicial: string | null
    dataFinal: string | null
    dataHoraGeracao: string | null
    versaoLayout: string | null
    tipoIdentificadorFabricante: string | null
    cnpjCpfFabricante: string | null
    modelo: string | null
    crc: string | null
    origem: string | null
  }

  export type RegistroTipo1CountAggregateOutputType = {
    id: number
    tipo: number
    idSequencial: number
    tipoIdentificadorEmpregador: number
    cnpjCpfEmpregador: number
    cnoCaepf: number
    razaoSocial: number
    numeroFabricacao: number
    dataInicial: number
    dataFinal: number
    dataHoraGeracao: number
    versaoLayout: number
    tipoIdentificadorFabricante: number
    cnpjCpfFabricante: number
    modelo: number
    crc: number
    origem: number
    _all: number
  }


  export type RegistroTipo1MinAggregateInputType = {
    id?: true
    tipo?: true
    idSequencial?: true
    tipoIdentificadorEmpregador?: true
    cnpjCpfEmpregador?: true
    cnoCaepf?: true
    razaoSocial?: true
    numeroFabricacao?: true
    dataInicial?: true
    dataFinal?: true
    dataHoraGeracao?: true
    versaoLayout?: true
    tipoIdentificadorFabricante?: true
    cnpjCpfFabricante?: true
    modelo?: true
    crc?: true
    origem?: true
  }

  export type RegistroTipo1MaxAggregateInputType = {
    id?: true
    tipo?: true
    idSequencial?: true
    tipoIdentificadorEmpregador?: true
    cnpjCpfEmpregador?: true
    cnoCaepf?: true
    razaoSocial?: true
    numeroFabricacao?: true
    dataInicial?: true
    dataFinal?: true
    dataHoraGeracao?: true
    versaoLayout?: true
    tipoIdentificadorFabricante?: true
    cnpjCpfFabricante?: true
    modelo?: true
    crc?: true
    origem?: true
  }

  export type RegistroTipo1CountAggregateInputType = {
    id?: true
    tipo?: true
    idSequencial?: true
    tipoIdentificadorEmpregador?: true
    cnpjCpfEmpregador?: true
    cnoCaepf?: true
    razaoSocial?: true
    numeroFabricacao?: true
    dataInicial?: true
    dataFinal?: true
    dataHoraGeracao?: true
    versaoLayout?: true
    tipoIdentificadorFabricante?: true
    cnpjCpfFabricante?: true
    modelo?: true
    crc?: true
    origem?: true
    _all?: true
  }

  export type RegistroTipo1AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroTipo1 to aggregate.
     */
    where?: RegistroTipo1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroTipo1s to fetch.
     */
    orderBy?: RegistroTipo1OrderByWithRelationInput | RegistroTipo1OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistroTipo1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroTipo1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroTipo1s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistroTipo1s
    **/
    _count?: true | RegistroTipo1CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistroTipo1MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistroTipo1MaxAggregateInputType
  }

  export type GetRegistroTipo1AggregateType<T extends RegistroTipo1AggregateArgs> = {
        [P in keyof T & keyof AggregateRegistroTipo1]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistroTipo1[P]>
      : GetScalarType<T[P], AggregateRegistroTipo1[P]>
  }




  export type RegistroTipo1GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroTipo1WhereInput
    orderBy?: RegistroTipo1OrderByWithAggregationInput | RegistroTipo1OrderByWithAggregationInput[]
    by: RegistroTipo1ScalarFieldEnum[] | RegistroTipo1ScalarFieldEnum
    having?: RegistroTipo1ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistroTipo1CountAggregateInputType | true
    _min?: RegistroTipo1MinAggregateInputType
    _max?: RegistroTipo1MaxAggregateInputType
  }

  export type RegistroTipo1GroupByOutputType = {
    id: string
    tipo: string
    idSequencial: string
    tipoIdentificadorEmpregador: string
    cnpjCpfEmpregador: string
    cnoCaepf: string
    razaoSocial: string
    numeroFabricacao: string
    dataInicial: string
    dataFinal: string
    dataHoraGeracao: string
    versaoLayout: string
    tipoIdentificadorFabricante: string
    cnpjCpfFabricante: string
    modelo: string
    crc: string
    origem: string | null
    _count: RegistroTipo1CountAggregateOutputType | null
    _min: RegistroTipo1MinAggregateOutputType | null
    _max: RegistroTipo1MaxAggregateOutputType | null
  }

  type GetRegistroTipo1GroupByPayload<T extends RegistroTipo1GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistroTipo1GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistroTipo1GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistroTipo1GroupByOutputType[P]>
            : GetScalarType<T[P], RegistroTipo1GroupByOutputType[P]>
        }
      >
    >


  export type RegistroTipo1Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    idSequencial?: boolean
    tipoIdentificadorEmpregador?: boolean
    cnpjCpfEmpregador?: boolean
    cnoCaepf?: boolean
    razaoSocial?: boolean
    numeroFabricacao?: boolean
    dataInicial?: boolean
    dataFinal?: boolean
    dataHoraGeracao?: boolean
    versaoLayout?: boolean
    tipoIdentificadorFabricante?: boolean
    cnpjCpfFabricante?: boolean
    modelo?: boolean
    crc?: boolean
    origem?: boolean
  }, ExtArgs["result"]["registroTipo1"]>

  export type RegistroTipo1SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    idSequencial?: boolean
    tipoIdentificadorEmpregador?: boolean
    cnpjCpfEmpregador?: boolean
    cnoCaepf?: boolean
    razaoSocial?: boolean
    numeroFabricacao?: boolean
    dataInicial?: boolean
    dataFinal?: boolean
    dataHoraGeracao?: boolean
    versaoLayout?: boolean
    tipoIdentificadorFabricante?: boolean
    cnpjCpfFabricante?: boolean
    modelo?: boolean
    crc?: boolean
    origem?: boolean
  }, ExtArgs["result"]["registroTipo1"]>

  export type RegistroTipo1SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    idSequencial?: boolean
    tipoIdentificadorEmpregador?: boolean
    cnpjCpfEmpregador?: boolean
    cnoCaepf?: boolean
    razaoSocial?: boolean
    numeroFabricacao?: boolean
    dataInicial?: boolean
    dataFinal?: boolean
    dataHoraGeracao?: boolean
    versaoLayout?: boolean
    tipoIdentificadorFabricante?: boolean
    cnpjCpfFabricante?: boolean
    modelo?: boolean
    crc?: boolean
    origem?: boolean
  }, ExtArgs["result"]["registroTipo1"]>

  export type RegistroTipo1SelectScalar = {
    id?: boolean
    tipo?: boolean
    idSequencial?: boolean
    tipoIdentificadorEmpregador?: boolean
    cnpjCpfEmpregador?: boolean
    cnoCaepf?: boolean
    razaoSocial?: boolean
    numeroFabricacao?: boolean
    dataInicial?: boolean
    dataFinal?: boolean
    dataHoraGeracao?: boolean
    versaoLayout?: boolean
    tipoIdentificadorFabricante?: boolean
    cnpjCpfFabricante?: boolean
    modelo?: boolean
    crc?: boolean
    origem?: boolean
  }

  export type RegistroTipo1Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "idSequencial" | "tipoIdentificadorEmpregador" | "cnpjCpfEmpregador" | "cnoCaepf" | "razaoSocial" | "numeroFabricacao" | "dataInicial" | "dataFinal" | "dataHoraGeracao" | "versaoLayout" | "tipoIdentificadorFabricante" | "cnpjCpfFabricante" | "modelo" | "crc" | "origem", ExtArgs["result"]["registroTipo1"]>

  export type $RegistroTipo1Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistroTipo1"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipo: string
      idSequencial: string
      tipoIdentificadorEmpregador: string
      cnpjCpfEmpregador: string
      cnoCaepf: string
      razaoSocial: string
      numeroFabricacao: string
      dataInicial: string
      dataFinal: string
      dataHoraGeracao: string
      versaoLayout: string
      tipoIdentificadorFabricante: string
      cnpjCpfFabricante: string
      modelo: string
      crc: string
      origem: string | null
    }, ExtArgs["result"]["registroTipo1"]>
    composites: {}
  }

  type RegistroTipo1GetPayload<S extends boolean | null | undefined | RegistroTipo1DefaultArgs> = $Result.GetResult<Prisma.$RegistroTipo1Payload, S>

  type RegistroTipo1CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistroTipo1FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistroTipo1CountAggregateInputType | true
    }

  export interface RegistroTipo1Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistroTipo1'], meta: { name: 'RegistroTipo1' } }
    /**
     * Find zero or one RegistroTipo1 that matches the filter.
     * @param {RegistroTipo1FindUniqueArgs} args - Arguments to find a RegistroTipo1
     * @example
     * // Get one RegistroTipo1
     * const registroTipo1 = await prisma.registroTipo1.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistroTipo1FindUniqueArgs>(args: SelectSubset<T, RegistroTipo1FindUniqueArgs<ExtArgs>>): Prisma__RegistroTipo1Client<$Result.GetResult<Prisma.$RegistroTipo1Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegistroTipo1 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistroTipo1FindUniqueOrThrowArgs} args - Arguments to find a RegistroTipo1
     * @example
     * // Get one RegistroTipo1
     * const registroTipo1 = await prisma.registroTipo1.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistroTipo1FindUniqueOrThrowArgs>(args: SelectSubset<T, RegistroTipo1FindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistroTipo1Client<$Result.GetResult<Prisma.$RegistroTipo1Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroTipo1 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTipo1FindFirstArgs} args - Arguments to find a RegistroTipo1
     * @example
     * // Get one RegistroTipo1
     * const registroTipo1 = await prisma.registroTipo1.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistroTipo1FindFirstArgs>(args?: SelectSubset<T, RegistroTipo1FindFirstArgs<ExtArgs>>): Prisma__RegistroTipo1Client<$Result.GetResult<Prisma.$RegistroTipo1Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroTipo1 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTipo1FindFirstOrThrowArgs} args - Arguments to find a RegistroTipo1
     * @example
     * // Get one RegistroTipo1
     * const registroTipo1 = await prisma.registroTipo1.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistroTipo1FindFirstOrThrowArgs>(args?: SelectSubset<T, RegistroTipo1FindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistroTipo1Client<$Result.GetResult<Prisma.$RegistroTipo1Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistroTipo1s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTipo1FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistroTipo1s
     * const registroTipo1s = await prisma.registroTipo1.findMany()
     * 
     * // Get first 10 RegistroTipo1s
     * const registroTipo1s = await prisma.registroTipo1.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registroTipo1WithIdOnly = await prisma.registroTipo1.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistroTipo1FindManyArgs>(args?: SelectSubset<T, RegistroTipo1FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroTipo1Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegistroTipo1.
     * @param {RegistroTipo1CreateArgs} args - Arguments to create a RegistroTipo1.
     * @example
     * // Create one RegistroTipo1
     * const RegistroTipo1 = await prisma.registroTipo1.create({
     *   data: {
     *     // ... data to create a RegistroTipo1
     *   }
     * })
     * 
     */
    create<T extends RegistroTipo1CreateArgs>(args: SelectSubset<T, RegistroTipo1CreateArgs<ExtArgs>>): Prisma__RegistroTipo1Client<$Result.GetResult<Prisma.$RegistroTipo1Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegistroTipo1s.
     * @param {RegistroTipo1CreateManyArgs} args - Arguments to create many RegistroTipo1s.
     * @example
     * // Create many RegistroTipo1s
     * const registroTipo1 = await prisma.registroTipo1.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistroTipo1CreateManyArgs>(args?: SelectSubset<T, RegistroTipo1CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegistroTipo1s and returns the data saved in the database.
     * @param {RegistroTipo1CreateManyAndReturnArgs} args - Arguments to create many RegistroTipo1s.
     * @example
     * // Create many RegistroTipo1s
     * const registroTipo1 = await prisma.registroTipo1.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegistroTipo1s and only return the `id`
     * const registroTipo1WithIdOnly = await prisma.registroTipo1.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistroTipo1CreateManyAndReturnArgs>(args?: SelectSubset<T, RegistroTipo1CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroTipo1Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RegistroTipo1.
     * @param {RegistroTipo1DeleteArgs} args - Arguments to delete one RegistroTipo1.
     * @example
     * // Delete one RegistroTipo1
     * const RegistroTipo1 = await prisma.registroTipo1.delete({
     *   where: {
     *     // ... filter to delete one RegistroTipo1
     *   }
     * })
     * 
     */
    delete<T extends RegistroTipo1DeleteArgs>(args: SelectSubset<T, RegistroTipo1DeleteArgs<ExtArgs>>): Prisma__RegistroTipo1Client<$Result.GetResult<Prisma.$RegistroTipo1Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegistroTipo1.
     * @param {RegistroTipo1UpdateArgs} args - Arguments to update one RegistroTipo1.
     * @example
     * // Update one RegistroTipo1
     * const registroTipo1 = await prisma.registroTipo1.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistroTipo1UpdateArgs>(args: SelectSubset<T, RegistroTipo1UpdateArgs<ExtArgs>>): Prisma__RegistroTipo1Client<$Result.GetResult<Prisma.$RegistroTipo1Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegistroTipo1s.
     * @param {RegistroTipo1DeleteManyArgs} args - Arguments to filter RegistroTipo1s to delete.
     * @example
     * // Delete a few RegistroTipo1s
     * const { count } = await prisma.registroTipo1.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistroTipo1DeleteManyArgs>(args?: SelectSubset<T, RegistroTipo1DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroTipo1s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTipo1UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistroTipo1s
     * const registroTipo1 = await prisma.registroTipo1.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistroTipo1UpdateManyArgs>(args: SelectSubset<T, RegistroTipo1UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroTipo1s and returns the data updated in the database.
     * @param {RegistroTipo1UpdateManyAndReturnArgs} args - Arguments to update many RegistroTipo1s.
     * @example
     * // Update many RegistroTipo1s
     * const registroTipo1 = await prisma.registroTipo1.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RegistroTipo1s and only return the `id`
     * const registroTipo1WithIdOnly = await prisma.registroTipo1.updateManyAndReturn({
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
    updateManyAndReturn<T extends RegistroTipo1UpdateManyAndReturnArgs>(args: SelectSubset<T, RegistroTipo1UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroTipo1Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RegistroTipo1.
     * @param {RegistroTipo1UpsertArgs} args - Arguments to update or create a RegistroTipo1.
     * @example
     * // Update or create a RegistroTipo1
     * const registroTipo1 = await prisma.registroTipo1.upsert({
     *   create: {
     *     // ... data to create a RegistroTipo1
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistroTipo1 we want to update
     *   }
     * })
     */
    upsert<T extends RegistroTipo1UpsertArgs>(args: SelectSubset<T, RegistroTipo1UpsertArgs<ExtArgs>>): Prisma__RegistroTipo1Client<$Result.GetResult<Prisma.$RegistroTipo1Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegistroTipo1s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTipo1CountArgs} args - Arguments to filter RegistroTipo1s to count.
     * @example
     * // Count the number of RegistroTipo1s
     * const count = await prisma.registroTipo1.count({
     *   where: {
     *     // ... the filter for the RegistroTipo1s we want to count
     *   }
     * })
    **/
    count<T extends RegistroTipo1CountArgs>(
      args?: Subset<T, RegistroTipo1CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistroTipo1CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistroTipo1.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTipo1AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistroTipo1AggregateArgs>(args: Subset<T, RegistroTipo1AggregateArgs>): Prisma.PrismaPromise<GetRegistroTipo1AggregateType<T>>

    /**
     * Group by RegistroTipo1.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTipo1GroupByArgs} args - Group by arguments.
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
      T extends RegistroTipo1GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistroTipo1GroupByArgs['orderBy'] }
        : { orderBy?: RegistroTipo1GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistroTipo1GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistroTipo1GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistroTipo1 model
   */
  readonly fields: RegistroTipo1FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistroTipo1.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistroTipo1Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the RegistroTipo1 model
   */
  interface RegistroTipo1FieldRefs {
    readonly id: FieldRef<"RegistroTipo1", 'String'>
    readonly tipo: FieldRef<"RegistroTipo1", 'String'>
    readonly idSequencial: FieldRef<"RegistroTipo1", 'String'>
    readonly tipoIdentificadorEmpregador: FieldRef<"RegistroTipo1", 'String'>
    readonly cnpjCpfEmpregador: FieldRef<"RegistroTipo1", 'String'>
    readonly cnoCaepf: FieldRef<"RegistroTipo1", 'String'>
    readonly razaoSocial: FieldRef<"RegistroTipo1", 'String'>
    readonly numeroFabricacao: FieldRef<"RegistroTipo1", 'String'>
    readonly dataInicial: FieldRef<"RegistroTipo1", 'String'>
    readonly dataFinal: FieldRef<"RegistroTipo1", 'String'>
    readonly dataHoraGeracao: FieldRef<"RegistroTipo1", 'String'>
    readonly versaoLayout: FieldRef<"RegistroTipo1", 'String'>
    readonly tipoIdentificadorFabricante: FieldRef<"RegistroTipo1", 'String'>
    readonly cnpjCpfFabricante: FieldRef<"RegistroTipo1", 'String'>
    readonly modelo: FieldRef<"RegistroTipo1", 'String'>
    readonly crc: FieldRef<"RegistroTipo1", 'String'>
    readonly origem: FieldRef<"RegistroTipo1", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RegistroTipo1 findUnique
   */
  export type RegistroTipo1FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTipo1
     */
    select?: RegistroTipo1Select<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTipo1
     */
    omit?: RegistroTipo1Omit<ExtArgs> | null
    /**
     * Filter, which RegistroTipo1 to fetch.
     */
    where: RegistroTipo1WhereUniqueInput
  }

  /**
   * RegistroTipo1 findUniqueOrThrow
   */
  export type RegistroTipo1FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTipo1
     */
    select?: RegistroTipo1Select<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTipo1
     */
    omit?: RegistroTipo1Omit<ExtArgs> | null
    /**
     * Filter, which RegistroTipo1 to fetch.
     */
    where: RegistroTipo1WhereUniqueInput
  }

  /**
   * RegistroTipo1 findFirst
   */
  export type RegistroTipo1FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTipo1
     */
    select?: RegistroTipo1Select<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTipo1
     */
    omit?: RegistroTipo1Omit<ExtArgs> | null
    /**
     * Filter, which RegistroTipo1 to fetch.
     */
    where?: RegistroTipo1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroTipo1s to fetch.
     */
    orderBy?: RegistroTipo1OrderByWithRelationInput | RegistroTipo1OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroTipo1s.
     */
    cursor?: RegistroTipo1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroTipo1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroTipo1s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroTipo1s.
     */
    distinct?: RegistroTipo1ScalarFieldEnum | RegistroTipo1ScalarFieldEnum[]
  }

  /**
   * RegistroTipo1 findFirstOrThrow
   */
  export type RegistroTipo1FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTipo1
     */
    select?: RegistroTipo1Select<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTipo1
     */
    omit?: RegistroTipo1Omit<ExtArgs> | null
    /**
     * Filter, which RegistroTipo1 to fetch.
     */
    where?: RegistroTipo1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroTipo1s to fetch.
     */
    orderBy?: RegistroTipo1OrderByWithRelationInput | RegistroTipo1OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroTipo1s.
     */
    cursor?: RegistroTipo1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroTipo1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroTipo1s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroTipo1s.
     */
    distinct?: RegistroTipo1ScalarFieldEnum | RegistroTipo1ScalarFieldEnum[]
  }

  /**
   * RegistroTipo1 findMany
   */
  export type RegistroTipo1FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTipo1
     */
    select?: RegistroTipo1Select<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTipo1
     */
    omit?: RegistroTipo1Omit<ExtArgs> | null
    /**
     * Filter, which RegistroTipo1s to fetch.
     */
    where?: RegistroTipo1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroTipo1s to fetch.
     */
    orderBy?: RegistroTipo1OrderByWithRelationInput | RegistroTipo1OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistroTipo1s.
     */
    cursor?: RegistroTipo1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroTipo1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroTipo1s.
     */
    skip?: number
    distinct?: RegistroTipo1ScalarFieldEnum | RegistroTipo1ScalarFieldEnum[]
  }

  /**
   * RegistroTipo1 create
   */
  export type RegistroTipo1CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTipo1
     */
    select?: RegistroTipo1Select<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTipo1
     */
    omit?: RegistroTipo1Omit<ExtArgs> | null
    /**
     * The data needed to create a RegistroTipo1.
     */
    data: XOR<RegistroTipo1CreateInput, RegistroTipo1UncheckedCreateInput>
  }

  /**
   * RegistroTipo1 createMany
   */
  export type RegistroTipo1CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistroTipo1s.
     */
    data: RegistroTipo1CreateManyInput | RegistroTipo1CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistroTipo1 createManyAndReturn
   */
  export type RegistroTipo1CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTipo1
     */
    select?: RegistroTipo1SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTipo1
     */
    omit?: RegistroTipo1Omit<ExtArgs> | null
    /**
     * The data used to create many RegistroTipo1s.
     */
    data: RegistroTipo1CreateManyInput | RegistroTipo1CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistroTipo1 update
   */
  export type RegistroTipo1UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTipo1
     */
    select?: RegistroTipo1Select<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTipo1
     */
    omit?: RegistroTipo1Omit<ExtArgs> | null
    /**
     * The data needed to update a RegistroTipo1.
     */
    data: XOR<RegistroTipo1UpdateInput, RegistroTipo1UncheckedUpdateInput>
    /**
     * Choose, which RegistroTipo1 to update.
     */
    where: RegistroTipo1WhereUniqueInput
  }

  /**
   * RegistroTipo1 updateMany
   */
  export type RegistroTipo1UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistroTipo1s.
     */
    data: XOR<RegistroTipo1UpdateManyMutationInput, RegistroTipo1UncheckedUpdateManyInput>
    /**
     * Filter which RegistroTipo1s to update
     */
    where?: RegistroTipo1WhereInput
    /**
     * Limit how many RegistroTipo1s to update.
     */
    limit?: number
  }

  /**
   * RegistroTipo1 updateManyAndReturn
   */
  export type RegistroTipo1UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTipo1
     */
    select?: RegistroTipo1SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTipo1
     */
    omit?: RegistroTipo1Omit<ExtArgs> | null
    /**
     * The data used to update RegistroTipo1s.
     */
    data: XOR<RegistroTipo1UpdateManyMutationInput, RegistroTipo1UncheckedUpdateManyInput>
    /**
     * Filter which RegistroTipo1s to update
     */
    where?: RegistroTipo1WhereInput
    /**
     * Limit how many RegistroTipo1s to update.
     */
    limit?: number
  }

  /**
   * RegistroTipo1 upsert
   */
  export type RegistroTipo1UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTipo1
     */
    select?: RegistroTipo1Select<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTipo1
     */
    omit?: RegistroTipo1Omit<ExtArgs> | null
    /**
     * The filter to search for the RegistroTipo1 to update in case it exists.
     */
    where: RegistroTipo1WhereUniqueInput
    /**
     * In case the RegistroTipo1 found by the `where` argument doesn't exist, create a new RegistroTipo1 with this data.
     */
    create: XOR<RegistroTipo1CreateInput, RegistroTipo1UncheckedCreateInput>
    /**
     * In case the RegistroTipo1 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistroTipo1UpdateInput, RegistroTipo1UncheckedUpdateInput>
  }

  /**
   * RegistroTipo1 delete
   */
  export type RegistroTipo1DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTipo1
     */
    select?: RegistroTipo1Select<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTipo1
     */
    omit?: RegistroTipo1Omit<ExtArgs> | null
    /**
     * Filter which RegistroTipo1 to delete.
     */
    where: RegistroTipo1WhereUniqueInput
  }

  /**
   * RegistroTipo1 deleteMany
   */
  export type RegistroTipo1DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroTipo1s to delete
     */
    where?: RegistroTipo1WhereInput
    /**
     * Limit how many RegistroTipo1s to delete.
     */
    limit?: number
  }

  /**
   * RegistroTipo1 without action
   */
  export type RegistroTipo1DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTipo1
     */
    select?: RegistroTipo1Select<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTipo1
     */
    omit?: RegistroTipo1Omit<ExtArgs> | null
  }


  /**
   * Model RegistroTipo10
   */

  export type AggregateRegistroTipo10 = {
    _count: RegistroTipo10CountAggregateOutputType | null
    _avg: RegistroTipo10AvgAggregateOutputType | null
    _sum: RegistroTipo10SumAggregateOutputType | null
    _min: RegistroTipo10MinAggregateOutputType | null
    _max: RegistroTipo10MaxAggregateOutputType | null
  }

  export type RegistroTipo10AvgAggregateOutputType = {
    ultimo_nsr: number | null
  }

  export type RegistroTipo10SumAggregateOutputType = {
    ultimo_nsr: number | null
  }

  export type RegistroTipo10MinAggregateOutputType = {
    id: string | null
    ultimo_nsr: number | null
    origem: string | null
  }

  export type RegistroTipo10MaxAggregateOutputType = {
    id: string | null
    ultimo_nsr: number | null
    origem: string | null
  }

  export type RegistroTipo10CountAggregateOutputType = {
    id: number
    ultimo_nsr: number
    origem: number
    _all: number
  }


  export type RegistroTipo10AvgAggregateInputType = {
    ultimo_nsr?: true
  }

  export type RegistroTipo10SumAggregateInputType = {
    ultimo_nsr?: true
  }

  export type RegistroTipo10MinAggregateInputType = {
    id?: true
    ultimo_nsr?: true
    origem?: true
  }

  export type RegistroTipo10MaxAggregateInputType = {
    id?: true
    ultimo_nsr?: true
    origem?: true
  }

  export type RegistroTipo10CountAggregateInputType = {
    id?: true
    ultimo_nsr?: true
    origem?: true
    _all?: true
  }

  export type RegistroTipo10AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroTipo10 to aggregate.
     */
    where?: RegistroTipo10WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroTipo10s to fetch.
     */
    orderBy?: RegistroTipo10OrderByWithRelationInput | RegistroTipo10OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistroTipo10WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroTipo10s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroTipo10s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistroTipo10s
    **/
    _count?: true | RegistroTipo10CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistroTipo10AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistroTipo10SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistroTipo10MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistroTipo10MaxAggregateInputType
  }

  export type GetRegistroTipo10AggregateType<T extends RegistroTipo10AggregateArgs> = {
        [P in keyof T & keyof AggregateRegistroTipo10]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistroTipo10[P]>
      : GetScalarType<T[P], AggregateRegistroTipo10[P]>
  }




  export type RegistroTipo10GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroTipo10WhereInput
    orderBy?: RegistroTipo10OrderByWithAggregationInput | RegistroTipo10OrderByWithAggregationInput[]
    by: RegistroTipo10ScalarFieldEnum[] | RegistroTipo10ScalarFieldEnum
    having?: RegistroTipo10ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistroTipo10CountAggregateInputType | true
    _avg?: RegistroTipo10AvgAggregateInputType
    _sum?: RegistroTipo10SumAggregateInputType
    _min?: RegistroTipo10MinAggregateInputType
    _max?: RegistroTipo10MaxAggregateInputType
  }

  export type RegistroTipo10GroupByOutputType = {
    id: string
    ultimo_nsr: number
    origem: string
    _count: RegistroTipo10CountAggregateOutputType | null
    _avg: RegistroTipo10AvgAggregateOutputType | null
    _sum: RegistroTipo10SumAggregateOutputType | null
    _min: RegistroTipo10MinAggregateOutputType | null
    _max: RegistroTipo10MaxAggregateOutputType | null
  }

  type GetRegistroTipo10GroupByPayload<T extends RegistroTipo10GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistroTipo10GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistroTipo10GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistroTipo10GroupByOutputType[P]>
            : GetScalarType<T[P], RegistroTipo10GroupByOutputType[P]>
        }
      >
    >


  export type RegistroTipo10Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ultimo_nsr?: boolean
    origem?: boolean
  }, ExtArgs["result"]["registroTipo10"]>

  export type RegistroTipo10SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ultimo_nsr?: boolean
    origem?: boolean
  }, ExtArgs["result"]["registroTipo10"]>

  export type RegistroTipo10SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ultimo_nsr?: boolean
    origem?: boolean
  }, ExtArgs["result"]["registroTipo10"]>

  export type RegistroTipo10SelectScalar = {
    id?: boolean
    ultimo_nsr?: boolean
    origem?: boolean
  }

  export type RegistroTipo10Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ultimo_nsr" | "origem", ExtArgs["result"]["registroTipo10"]>

  export type $RegistroTipo10Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistroTipo10"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ultimo_nsr: number
      origem: string
    }, ExtArgs["result"]["registroTipo10"]>
    composites: {}
  }

  type RegistroTipo10GetPayload<S extends boolean | null | undefined | RegistroTipo10DefaultArgs> = $Result.GetResult<Prisma.$RegistroTipo10Payload, S>

  type RegistroTipo10CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistroTipo10FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistroTipo10CountAggregateInputType | true
    }

  export interface RegistroTipo10Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistroTipo10'], meta: { name: 'RegistroTipo10' } }
    /**
     * Find zero or one RegistroTipo10 that matches the filter.
     * @param {RegistroTipo10FindUniqueArgs} args - Arguments to find a RegistroTipo10
     * @example
     * // Get one RegistroTipo10
     * const registroTipo10 = await prisma.registroTipo10.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistroTipo10FindUniqueArgs>(args: SelectSubset<T, RegistroTipo10FindUniqueArgs<ExtArgs>>): Prisma__RegistroTipo10Client<$Result.GetResult<Prisma.$RegistroTipo10Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegistroTipo10 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistroTipo10FindUniqueOrThrowArgs} args - Arguments to find a RegistroTipo10
     * @example
     * // Get one RegistroTipo10
     * const registroTipo10 = await prisma.registroTipo10.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistroTipo10FindUniqueOrThrowArgs>(args: SelectSubset<T, RegistroTipo10FindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistroTipo10Client<$Result.GetResult<Prisma.$RegistroTipo10Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroTipo10 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTipo10FindFirstArgs} args - Arguments to find a RegistroTipo10
     * @example
     * // Get one RegistroTipo10
     * const registroTipo10 = await prisma.registroTipo10.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistroTipo10FindFirstArgs>(args?: SelectSubset<T, RegistroTipo10FindFirstArgs<ExtArgs>>): Prisma__RegistroTipo10Client<$Result.GetResult<Prisma.$RegistroTipo10Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroTipo10 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTipo10FindFirstOrThrowArgs} args - Arguments to find a RegistroTipo10
     * @example
     * // Get one RegistroTipo10
     * const registroTipo10 = await prisma.registroTipo10.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistroTipo10FindFirstOrThrowArgs>(args?: SelectSubset<T, RegistroTipo10FindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistroTipo10Client<$Result.GetResult<Prisma.$RegistroTipo10Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistroTipo10s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTipo10FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistroTipo10s
     * const registroTipo10s = await prisma.registroTipo10.findMany()
     * 
     * // Get first 10 RegistroTipo10s
     * const registroTipo10s = await prisma.registroTipo10.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registroTipo10WithIdOnly = await prisma.registroTipo10.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistroTipo10FindManyArgs>(args?: SelectSubset<T, RegistroTipo10FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroTipo10Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegistroTipo10.
     * @param {RegistroTipo10CreateArgs} args - Arguments to create a RegistroTipo10.
     * @example
     * // Create one RegistroTipo10
     * const RegistroTipo10 = await prisma.registroTipo10.create({
     *   data: {
     *     // ... data to create a RegistroTipo10
     *   }
     * })
     * 
     */
    create<T extends RegistroTipo10CreateArgs>(args: SelectSubset<T, RegistroTipo10CreateArgs<ExtArgs>>): Prisma__RegistroTipo10Client<$Result.GetResult<Prisma.$RegistroTipo10Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegistroTipo10s.
     * @param {RegistroTipo10CreateManyArgs} args - Arguments to create many RegistroTipo10s.
     * @example
     * // Create many RegistroTipo10s
     * const registroTipo10 = await prisma.registroTipo10.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistroTipo10CreateManyArgs>(args?: SelectSubset<T, RegistroTipo10CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegistroTipo10s and returns the data saved in the database.
     * @param {RegistroTipo10CreateManyAndReturnArgs} args - Arguments to create many RegistroTipo10s.
     * @example
     * // Create many RegistroTipo10s
     * const registroTipo10 = await prisma.registroTipo10.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegistroTipo10s and only return the `id`
     * const registroTipo10WithIdOnly = await prisma.registroTipo10.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistroTipo10CreateManyAndReturnArgs>(args?: SelectSubset<T, RegistroTipo10CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroTipo10Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RegistroTipo10.
     * @param {RegistroTipo10DeleteArgs} args - Arguments to delete one RegistroTipo10.
     * @example
     * // Delete one RegistroTipo10
     * const RegistroTipo10 = await prisma.registroTipo10.delete({
     *   where: {
     *     // ... filter to delete one RegistroTipo10
     *   }
     * })
     * 
     */
    delete<T extends RegistroTipo10DeleteArgs>(args: SelectSubset<T, RegistroTipo10DeleteArgs<ExtArgs>>): Prisma__RegistroTipo10Client<$Result.GetResult<Prisma.$RegistroTipo10Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegistroTipo10.
     * @param {RegistroTipo10UpdateArgs} args - Arguments to update one RegistroTipo10.
     * @example
     * // Update one RegistroTipo10
     * const registroTipo10 = await prisma.registroTipo10.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistroTipo10UpdateArgs>(args: SelectSubset<T, RegistroTipo10UpdateArgs<ExtArgs>>): Prisma__RegistroTipo10Client<$Result.GetResult<Prisma.$RegistroTipo10Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegistroTipo10s.
     * @param {RegistroTipo10DeleteManyArgs} args - Arguments to filter RegistroTipo10s to delete.
     * @example
     * // Delete a few RegistroTipo10s
     * const { count } = await prisma.registroTipo10.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistroTipo10DeleteManyArgs>(args?: SelectSubset<T, RegistroTipo10DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroTipo10s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTipo10UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistroTipo10s
     * const registroTipo10 = await prisma.registroTipo10.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistroTipo10UpdateManyArgs>(args: SelectSubset<T, RegistroTipo10UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroTipo10s and returns the data updated in the database.
     * @param {RegistroTipo10UpdateManyAndReturnArgs} args - Arguments to update many RegistroTipo10s.
     * @example
     * // Update many RegistroTipo10s
     * const registroTipo10 = await prisma.registroTipo10.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RegistroTipo10s and only return the `id`
     * const registroTipo10WithIdOnly = await prisma.registroTipo10.updateManyAndReturn({
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
    updateManyAndReturn<T extends RegistroTipo10UpdateManyAndReturnArgs>(args: SelectSubset<T, RegistroTipo10UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroTipo10Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RegistroTipo10.
     * @param {RegistroTipo10UpsertArgs} args - Arguments to update or create a RegistroTipo10.
     * @example
     * // Update or create a RegistroTipo10
     * const registroTipo10 = await prisma.registroTipo10.upsert({
     *   create: {
     *     // ... data to create a RegistroTipo10
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistroTipo10 we want to update
     *   }
     * })
     */
    upsert<T extends RegistroTipo10UpsertArgs>(args: SelectSubset<T, RegistroTipo10UpsertArgs<ExtArgs>>): Prisma__RegistroTipo10Client<$Result.GetResult<Prisma.$RegistroTipo10Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegistroTipo10s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTipo10CountArgs} args - Arguments to filter RegistroTipo10s to count.
     * @example
     * // Count the number of RegistroTipo10s
     * const count = await prisma.registroTipo10.count({
     *   where: {
     *     // ... the filter for the RegistroTipo10s we want to count
     *   }
     * })
    **/
    count<T extends RegistroTipo10CountArgs>(
      args?: Subset<T, RegistroTipo10CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistroTipo10CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistroTipo10.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTipo10AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistroTipo10AggregateArgs>(args: Subset<T, RegistroTipo10AggregateArgs>): Prisma.PrismaPromise<GetRegistroTipo10AggregateType<T>>

    /**
     * Group by RegistroTipo10.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroTipo10GroupByArgs} args - Group by arguments.
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
      T extends RegistroTipo10GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistroTipo10GroupByArgs['orderBy'] }
        : { orderBy?: RegistroTipo10GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistroTipo10GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistroTipo10GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistroTipo10 model
   */
  readonly fields: RegistroTipo10FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistroTipo10.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistroTipo10Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the RegistroTipo10 model
   */
  interface RegistroTipo10FieldRefs {
    readonly id: FieldRef<"RegistroTipo10", 'String'>
    readonly ultimo_nsr: FieldRef<"RegistroTipo10", 'Int'>
    readonly origem: FieldRef<"RegistroTipo10", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RegistroTipo10 findUnique
   */
  export type RegistroTipo10FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTipo10
     */
    select?: RegistroTipo10Select<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTipo10
     */
    omit?: RegistroTipo10Omit<ExtArgs> | null
    /**
     * Filter, which RegistroTipo10 to fetch.
     */
    where: RegistroTipo10WhereUniqueInput
  }

  /**
   * RegistroTipo10 findUniqueOrThrow
   */
  export type RegistroTipo10FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTipo10
     */
    select?: RegistroTipo10Select<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTipo10
     */
    omit?: RegistroTipo10Omit<ExtArgs> | null
    /**
     * Filter, which RegistroTipo10 to fetch.
     */
    where: RegistroTipo10WhereUniqueInput
  }

  /**
   * RegistroTipo10 findFirst
   */
  export type RegistroTipo10FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTipo10
     */
    select?: RegistroTipo10Select<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTipo10
     */
    omit?: RegistroTipo10Omit<ExtArgs> | null
    /**
     * Filter, which RegistroTipo10 to fetch.
     */
    where?: RegistroTipo10WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroTipo10s to fetch.
     */
    orderBy?: RegistroTipo10OrderByWithRelationInput | RegistroTipo10OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroTipo10s.
     */
    cursor?: RegistroTipo10WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroTipo10s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroTipo10s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroTipo10s.
     */
    distinct?: RegistroTipo10ScalarFieldEnum | RegistroTipo10ScalarFieldEnum[]
  }

  /**
   * RegistroTipo10 findFirstOrThrow
   */
  export type RegistroTipo10FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTipo10
     */
    select?: RegistroTipo10Select<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTipo10
     */
    omit?: RegistroTipo10Omit<ExtArgs> | null
    /**
     * Filter, which RegistroTipo10 to fetch.
     */
    where?: RegistroTipo10WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroTipo10s to fetch.
     */
    orderBy?: RegistroTipo10OrderByWithRelationInput | RegistroTipo10OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroTipo10s.
     */
    cursor?: RegistroTipo10WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroTipo10s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroTipo10s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroTipo10s.
     */
    distinct?: RegistroTipo10ScalarFieldEnum | RegistroTipo10ScalarFieldEnum[]
  }

  /**
   * RegistroTipo10 findMany
   */
  export type RegistroTipo10FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTipo10
     */
    select?: RegistroTipo10Select<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTipo10
     */
    omit?: RegistroTipo10Omit<ExtArgs> | null
    /**
     * Filter, which RegistroTipo10s to fetch.
     */
    where?: RegistroTipo10WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroTipo10s to fetch.
     */
    orderBy?: RegistroTipo10OrderByWithRelationInput | RegistroTipo10OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistroTipo10s.
     */
    cursor?: RegistroTipo10WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroTipo10s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroTipo10s.
     */
    skip?: number
    distinct?: RegistroTipo10ScalarFieldEnum | RegistroTipo10ScalarFieldEnum[]
  }

  /**
   * RegistroTipo10 create
   */
  export type RegistroTipo10CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTipo10
     */
    select?: RegistroTipo10Select<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTipo10
     */
    omit?: RegistroTipo10Omit<ExtArgs> | null
    /**
     * The data needed to create a RegistroTipo10.
     */
    data: XOR<RegistroTipo10CreateInput, RegistroTipo10UncheckedCreateInput>
  }

  /**
   * RegistroTipo10 createMany
   */
  export type RegistroTipo10CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistroTipo10s.
     */
    data: RegistroTipo10CreateManyInput | RegistroTipo10CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistroTipo10 createManyAndReturn
   */
  export type RegistroTipo10CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTipo10
     */
    select?: RegistroTipo10SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTipo10
     */
    omit?: RegistroTipo10Omit<ExtArgs> | null
    /**
     * The data used to create many RegistroTipo10s.
     */
    data: RegistroTipo10CreateManyInput | RegistroTipo10CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistroTipo10 update
   */
  export type RegistroTipo10UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTipo10
     */
    select?: RegistroTipo10Select<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTipo10
     */
    omit?: RegistroTipo10Omit<ExtArgs> | null
    /**
     * The data needed to update a RegistroTipo10.
     */
    data: XOR<RegistroTipo10UpdateInput, RegistroTipo10UncheckedUpdateInput>
    /**
     * Choose, which RegistroTipo10 to update.
     */
    where: RegistroTipo10WhereUniqueInput
  }

  /**
   * RegistroTipo10 updateMany
   */
  export type RegistroTipo10UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistroTipo10s.
     */
    data: XOR<RegistroTipo10UpdateManyMutationInput, RegistroTipo10UncheckedUpdateManyInput>
    /**
     * Filter which RegistroTipo10s to update
     */
    where?: RegistroTipo10WhereInput
    /**
     * Limit how many RegistroTipo10s to update.
     */
    limit?: number
  }

  /**
   * RegistroTipo10 updateManyAndReturn
   */
  export type RegistroTipo10UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTipo10
     */
    select?: RegistroTipo10SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTipo10
     */
    omit?: RegistroTipo10Omit<ExtArgs> | null
    /**
     * The data used to update RegistroTipo10s.
     */
    data: XOR<RegistroTipo10UpdateManyMutationInput, RegistroTipo10UncheckedUpdateManyInput>
    /**
     * Filter which RegistroTipo10s to update
     */
    where?: RegistroTipo10WhereInput
    /**
     * Limit how many RegistroTipo10s to update.
     */
    limit?: number
  }

  /**
   * RegistroTipo10 upsert
   */
  export type RegistroTipo10UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTipo10
     */
    select?: RegistroTipo10Select<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTipo10
     */
    omit?: RegistroTipo10Omit<ExtArgs> | null
    /**
     * The filter to search for the RegistroTipo10 to update in case it exists.
     */
    where: RegistroTipo10WhereUniqueInput
    /**
     * In case the RegistroTipo10 found by the `where` argument doesn't exist, create a new RegistroTipo10 with this data.
     */
    create: XOR<RegistroTipo10CreateInput, RegistroTipo10UncheckedCreateInput>
    /**
     * In case the RegistroTipo10 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistroTipo10UpdateInput, RegistroTipo10UncheckedUpdateInput>
  }

  /**
   * RegistroTipo10 delete
   */
  export type RegistroTipo10DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTipo10
     */
    select?: RegistroTipo10Select<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTipo10
     */
    omit?: RegistroTipo10Omit<ExtArgs> | null
    /**
     * Filter which RegistroTipo10 to delete.
     */
    where: RegistroTipo10WhereUniqueInput
  }

  /**
   * RegistroTipo10 deleteMany
   */
  export type RegistroTipo10DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroTipo10s to delete
     */
    where?: RegistroTipo10WhereInput
    /**
     * Limit how many RegistroTipo10s to delete.
     */
    limit?: number
  }

  /**
   * RegistroTipo10 without action
   */
  export type RegistroTipo10DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroTipo10
     */
    select?: RegistroTipo10Select<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroTipo10
     */
    omit?: RegistroTipo10Omit<ExtArgs> | null
  }


  /**
   * Model MarcacoesRelogio
   */

  export type AggregateMarcacoesRelogio = {
    _count: MarcacoesRelogioCountAggregateOutputType | null
    _avg: MarcacoesRelogioAvgAggregateOutputType | null
    _sum: MarcacoesRelogioSumAggregateOutputType | null
    _min: MarcacoesRelogioMinAggregateOutputType | null
    _max: MarcacoesRelogioMaxAggregateOutputType | null
  }

  export type MarcacoesRelogioAvgAggregateOutputType = {
    nsr: number | null
  }

  export type MarcacoesRelogioSumAggregateOutputType = {
    nsr: number | null
  }

  export type MarcacoesRelogioMinAggregateOutputType = {
    id: string | null
    nsr: number | null
    tipo: string | null
    dataCompleta: Date | null
    data: string | null
    hora: string | null
    cpfEmpregado: string | null
    crc: string | null
    origem: string | null
  }

  export type MarcacoesRelogioMaxAggregateOutputType = {
    id: string | null
    nsr: number | null
    tipo: string | null
    dataCompleta: Date | null
    data: string | null
    hora: string | null
    cpfEmpregado: string | null
    crc: string | null
    origem: string | null
  }

  export type MarcacoesRelogioCountAggregateOutputType = {
    id: number
    nsr: number
    tipo: number
    dataCompleta: number
    data: number
    hora: number
    cpfEmpregado: number
    crc: number
    origem: number
    _all: number
  }


  export type MarcacoesRelogioAvgAggregateInputType = {
    nsr?: true
  }

  export type MarcacoesRelogioSumAggregateInputType = {
    nsr?: true
  }

  export type MarcacoesRelogioMinAggregateInputType = {
    id?: true
    nsr?: true
    tipo?: true
    dataCompleta?: true
    data?: true
    hora?: true
    cpfEmpregado?: true
    crc?: true
    origem?: true
  }

  export type MarcacoesRelogioMaxAggregateInputType = {
    id?: true
    nsr?: true
    tipo?: true
    dataCompleta?: true
    data?: true
    hora?: true
    cpfEmpregado?: true
    crc?: true
    origem?: true
  }

  export type MarcacoesRelogioCountAggregateInputType = {
    id?: true
    nsr?: true
    tipo?: true
    dataCompleta?: true
    data?: true
    hora?: true
    cpfEmpregado?: true
    crc?: true
    origem?: true
    _all?: true
  }

  export type MarcacoesRelogioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarcacoesRelogio to aggregate.
     */
    where?: MarcacoesRelogioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarcacoesRelogios to fetch.
     */
    orderBy?: MarcacoesRelogioOrderByWithRelationInput | MarcacoesRelogioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarcacoesRelogioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarcacoesRelogios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarcacoesRelogios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarcacoesRelogios
    **/
    _count?: true | MarcacoesRelogioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarcacoesRelogioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarcacoesRelogioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarcacoesRelogioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarcacoesRelogioMaxAggregateInputType
  }

  export type GetMarcacoesRelogioAggregateType<T extends MarcacoesRelogioAggregateArgs> = {
        [P in keyof T & keyof AggregateMarcacoesRelogio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarcacoesRelogio[P]>
      : GetScalarType<T[P], AggregateMarcacoesRelogio[P]>
  }




  export type MarcacoesRelogioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarcacoesRelogioWhereInput
    orderBy?: MarcacoesRelogioOrderByWithAggregationInput | MarcacoesRelogioOrderByWithAggregationInput[]
    by: MarcacoesRelogioScalarFieldEnum[] | MarcacoesRelogioScalarFieldEnum
    having?: MarcacoesRelogioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarcacoesRelogioCountAggregateInputType | true
    _avg?: MarcacoesRelogioAvgAggregateInputType
    _sum?: MarcacoesRelogioSumAggregateInputType
    _min?: MarcacoesRelogioMinAggregateInputType
    _max?: MarcacoesRelogioMaxAggregateInputType
  }

  export type MarcacoesRelogioGroupByOutputType = {
    id: string
    nsr: number
    tipo: string
    dataCompleta: Date
    data: string
    hora: string
    cpfEmpregado: string
    crc: string
    origem: string | null
    _count: MarcacoesRelogioCountAggregateOutputType | null
    _avg: MarcacoesRelogioAvgAggregateOutputType | null
    _sum: MarcacoesRelogioSumAggregateOutputType | null
    _min: MarcacoesRelogioMinAggregateOutputType | null
    _max: MarcacoesRelogioMaxAggregateOutputType | null
  }

  type GetMarcacoesRelogioGroupByPayload<T extends MarcacoesRelogioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarcacoesRelogioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarcacoesRelogioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarcacoesRelogioGroupByOutputType[P]>
            : GetScalarType<T[P], MarcacoesRelogioGroupByOutputType[P]>
        }
      >
    >


  export type MarcacoesRelogioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nsr?: boolean
    tipo?: boolean
    dataCompleta?: boolean
    data?: boolean
    hora?: boolean
    cpfEmpregado?: boolean
    crc?: boolean
    origem?: boolean
  }, ExtArgs["result"]["marcacoesRelogio"]>

  export type MarcacoesRelogioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nsr?: boolean
    tipo?: boolean
    dataCompleta?: boolean
    data?: boolean
    hora?: boolean
    cpfEmpregado?: boolean
    crc?: boolean
    origem?: boolean
  }, ExtArgs["result"]["marcacoesRelogio"]>

  export type MarcacoesRelogioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nsr?: boolean
    tipo?: boolean
    dataCompleta?: boolean
    data?: boolean
    hora?: boolean
    cpfEmpregado?: boolean
    crc?: boolean
    origem?: boolean
  }, ExtArgs["result"]["marcacoesRelogio"]>

  export type MarcacoesRelogioSelectScalar = {
    id?: boolean
    nsr?: boolean
    tipo?: boolean
    dataCompleta?: boolean
    data?: boolean
    hora?: boolean
    cpfEmpregado?: boolean
    crc?: boolean
    origem?: boolean
  }

  export type MarcacoesRelogioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nsr" | "tipo" | "dataCompleta" | "data" | "hora" | "cpfEmpregado" | "crc" | "origem", ExtArgs["result"]["marcacoesRelogio"]>

  export type $MarcacoesRelogioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarcacoesRelogio"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nsr: number
      tipo: string
      dataCompleta: Date
      data: string
      hora: string
      cpfEmpregado: string
      crc: string
      origem: string | null
    }, ExtArgs["result"]["marcacoesRelogio"]>
    composites: {}
  }

  type MarcacoesRelogioGetPayload<S extends boolean | null | undefined | MarcacoesRelogioDefaultArgs> = $Result.GetResult<Prisma.$MarcacoesRelogioPayload, S>

  type MarcacoesRelogioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarcacoesRelogioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarcacoesRelogioCountAggregateInputType | true
    }

  export interface MarcacoesRelogioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarcacoesRelogio'], meta: { name: 'MarcacoesRelogio' } }
    /**
     * Find zero or one MarcacoesRelogio that matches the filter.
     * @param {MarcacoesRelogioFindUniqueArgs} args - Arguments to find a MarcacoesRelogio
     * @example
     * // Get one MarcacoesRelogio
     * const marcacoesRelogio = await prisma.marcacoesRelogio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarcacoesRelogioFindUniqueArgs>(args: SelectSubset<T, MarcacoesRelogioFindUniqueArgs<ExtArgs>>): Prisma__MarcacoesRelogioClient<$Result.GetResult<Prisma.$MarcacoesRelogioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarcacoesRelogio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarcacoesRelogioFindUniqueOrThrowArgs} args - Arguments to find a MarcacoesRelogio
     * @example
     * // Get one MarcacoesRelogio
     * const marcacoesRelogio = await prisma.marcacoesRelogio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarcacoesRelogioFindUniqueOrThrowArgs>(args: SelectSubset<T, MarcacoesRelogioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarcacoesRelogioClient<$Result.GetResult<Prisma.$MarcacoesRelogioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarcacoesRelogio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcacoesRelogioFindFirstArgs} args - Arguments to find a MarcacoesRelogio
     * @example
     * // Get one MarcacoesRelogio
     * const marcacoesRelogio = await prisma.marcacoesRelogio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarcacoesRelogioFindFirstArgs>(args?: SelectSubset<T, MarcacoesRelogioFindFirstArgs<ExtArgs>>): Prisma__MarcacoesRelogioClient<$Result.GetResult<Prisma.$MarcacoesRelogioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarcacoesRelogio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcacoesRelogioFindFirstOrThrowArgs} args - Arguments to find a MarcacoesRelogio
     * @example
     * // Get one MarcacoesRelogio
     * const marcacoesRelogio = await prisma.marcacoesRelogio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarcacoesRelogioFindFirstOrThrowArgs>(args?: SelectSubset<T, MarcacoesRelogioFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarcacoesRelogioClient<$Result.GetResult<Prisma.$MarcacoesRelogioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarcacoesRelogios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcacoesRelogioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarcacoesRelogios
     * const marcacoesRelogios = await prisma.marcacoesRelogio.findMany()
     * 
     * // Get first 10 MarcacoesRelogios
     * const marcacoesRelogios = await prisma.marcacoesRelogio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marcacoesRelogioWithIdOnly = await prisma.marcacoesRelogio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarcacoesRelogioFindManyArgs>(args?: SelectSubset<T, MarcacoesRelogioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcacoesRelogioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarcacoesRelogio.
     * @param {MarcacoesRelogioCreateArgs} args - Arguments to create a MarcacoesRelogio.
     * @example
     * // Create one MarcacoesRelogio
     * const MarcacoesRelogio = await prisma.marcacoesRelogio.create({
     *   data: {
     *     // ... data to create a MarcacoesRelogio
     *   }
     * })
     * 
     */
    create<T extends MarcacoesRelogioCreateArgs>(args: SelectSubset<T, MarcacoesRelogioCreateArgs<ExtArgs>>): Prisma__MarcacoesRelogioClient<$Result.GetResult<Prisma.$MarcacoesRelogioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarcacoesRelogios.
     * @param {MarcacoesRelogioCreateManyArgs} args - Arguments to create many MarcacoesRelogios.
     * @example
     * // Create many MarcacoesRelogios
     * const marcacoesRelogio = await prisma.marcacoesRelogio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarcacoesRelogioCreateManyArgs>(args?: SelectSubset<T, MarcacoesRelogioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarcacoesRelogios and returns the data saved in the database.
     * @param {MarcacoesRelogioCreateManyAndReturnArgs} args - Arguments to create many MarcacoesRelogios.
     * @example
     * // Create many MarcacoesRelogios
     * const marcacoesRelogio = await prisma.marcacoesRelogio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarcacoesRelogios and only return the `id`
     * const marcacoesRelogioWithIdOnly = await prisma.marcacoesRelogio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarcacoesRelogioCreateManyAndReturnArgs>(args?: SelectSubset<T, MarcacoesRelogioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcacoesRelogioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MarcacoesRelogio.
     * @param {MarcacoesRelogioDeleteArgs} args - Arguments to delete one MarcacoesRelogio.
     * @example
     * // Delete one MarcacoesRelogio
     * const MarcacoesRelogio = await prisma.marcacoesRelogio.delete({
     *   where: {
     *     // ... filter to delete one MarcacoesRelogio
     *   }
     * })
     * 
     */
    delete<T extends MarcacoesRelogioDeleteArgs>(args: SelectSubset<T, MarcacoesRelogioDeleteArgs<ExtArgs>>): Prisma__MarcacoesRelogioClient<$Result.GetResult<Prisma.$MarcacoesRelogioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarcacoesRelogio.
     * @param {MarcacoesRelogioUpdateArgs} args - Arguments to update one MarcacoesRelogio.
     * @example
     * // Update one MarcacoesRelogio
     * const marcacoesRelogio = await prisma.marcacoesRelogio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarcacoesRelogioUpdateArgs>(args: SelectSubset<T, MarcacoesRelogioUpdateArgs<ExtArgs>>): Prisma__MarcacoesRelogioClient<$Result.GetResult<Prisma.$MarcacoesRelogioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarcacoesRelogios.
     * @param {MarcacoesRelogioDeleteManyArgs} args - Arguments to filter MarcacoesRelogios to delete.
     * @example
     * // Delete a few MarcacoesRelogios
     * const { count } = await prisma.marcacoesRelogio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarcacoesRelogioDeleteManyArgs>(args?: SelectSubset<T, MarcacoesRelogioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarcacoesRelogios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcacoesRelogioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarcacoesRelogios
     * const marcacoesRelogio = await prisma.marcacoesRelogio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarcacoesRelogioUpdateManyArgs>(args: SelectSubset<T, MarcacoesRelogioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarcacoesRelogios and returns the data updated in the database.
     * @param {MarcacoesRelogioUpdateManyAndReturnArgs} args - Arguments to update many MarcacoesRelogios.
     * @example
     * // Update many MarcacoesRelogios
     * const marcacoesRelogio = await prisma.marcacoesRelogio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MarcacoesRelogios and only return the `id`
     * const marcacoesRelogioWithIdOnly = await prisma.marcacoesRelogio.updateManyAndReturn({
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
    updateManyAndReturn<T extends MarcacoesRelogioUpdateManyAndReturnArgs>(args: SelectSubset<T, MarcacoesRelogioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcacoesRelogioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MarcacoesRelogio.
     * @param {MarcacoesRelogioUpsertArgs} args - Arguments to update or create a MarcacoesRelogio.
     * @example
     * // Update or create a MarcacoesRelogio
     * const marcacoesRelogio = await prisma.marcacoesRelogio.upsert({
     *   create: {
     *     // ... data to create a MarcacoesRelogio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarcacoesRelogio we want to update
     *   }
     * })
     */
    upsert<T extends MarcacoesRelogioUpsertArgs>(args: SelectSubset<T, MarcacoesRelogioUpsertArgs<ExtArgs>>): Prisma__MarcacoesRelogioClient<$Result.GetResult<Prisma.$MarcacoesRelogioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarcacoesRelogios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcacoesRelogioCountArgs} args - Arguments to filter MarcacoesRelogios to count.
     * @example
     * // Count the number of MarcacoesRelogios
     * const count = await prisma.marcacoesRelogio.count({
     *   where: {
     *     // ... the filter for the MarcacoesRelogios we want to count
     *   }
     * })
    **/
    count<T extends MarcacoesRelogioCountArgs>(
      args?: Subset<T, MarcacoesRelogioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarcacoesRelogioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarcacoesRelogio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcacoesRelogioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarcacoesRelogioAggregateArgs>(args: Subset<T, MarcacoesRelogioAggregateArgs>): Prisma.PrismaPromise<GetMarcacoesRelogioAggregateType<T>>

    /**
     * Group by MarcacoesRelogio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcacoesRelogioGroupByArgs} args - Group by arguments.
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
      T extends MarcacoesRelogioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarcacoesRelogioGroupByArgs['orderBy'] }
        : { orderBy?: MarcacoesRelogioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarcacoesRelogioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarcacoesRelogioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarcacoesRelogio model
   */
  readonly fields: MarcacoesRelogioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarcacoesRelogio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarcacoesRelogioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the MarcacoesRelogio model
   */
  interface MarcacoesRelogioFieldRefs {
    readonly id: FieldRef<"MarcacoesRelogio", 'String'>
    readonly nsr: FieldRef<"MarcacoesRelogio", 'Int'>
    readonly tipo: FieldRef<"MarcacoesRelogio", 'String'>
    readonly dataCompleta: FieldRef<"MarcacoesRelogio", 'DateTime'>
    readonly data: FieldRef<"MarcacoesRelogio", 'String'>
    readonly hora: FieldRef<"MarcacoesRelogio", 'String'>
    readonly cpfEmpregado: FieldRef<"MarcacoesRelogio", 'String'>
    readonly crc: FieldRef<"MarcacoesRelogio", 'String'>
    readonly origem: FieldRef<"MarcacoesRelogio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MarcacoesRelogio findUnique
   */
  export type MarcacoesRelogioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcacoesRelogio
     */
    select?: MarcacoesRelogioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcacoesRelogio
     */
    omit?: MarcacoesRelogioOmit<ExtArgs> | null
    /**
     * Filter, which MarcacoesRelogio to fetch.
     */
    where: MarcacoesRelogioWhereUniqueInput
  }

  /**
   * MarcacoesRelogio findUniqueOrThrow
   */
  export type MarcacoesRelogioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcacoesRelogio
     */
    select?: MarcacoesRelogioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcacoesRelogio
     */
    omit?: MarcacoesRelogioOmit<ExtArgs> | null
    /**
     * Filter, which MarcacoesRelogio to fetch.
     */
    where: MarcacoesRelogioWhereUniqueInput
  }

  /**
   * MarcacoesRelogio findFirst
   */
  export type MarcacoesRelogioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcacoesRelogio
     */
    select?: MarcacoesRelogioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcacoesRelogio
     */
    omit?: MarcacoesRelogioOmit<ExtArgs> | null
    /**
     * Filter, which MarcacoesRelogio to fetch.
     */
    where?: MarcacoesRelogioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarcacoesRelogios to fetch.
     */
    orderBy?: MarcacoesRelogioOrderByWithRelationInput | MarcacoesRelogioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarcacoesRelogios.
     */
    cursor?: MarcacoesRelogioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarcacoesRelogios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarcacoesRelogios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarcacoesRelogios.
     */
    distinct?: MarcacoesRelogioScalarFieldEnum | MarcacoesRelogioScalarFieldEnum[]
  }

  /**
   * MarcacoesRelogio findFirstOrThrow
   */
  export type MarcacoesRelogioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcacoesRelogio
     */
    select?: MarcacoesRelogioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcacoesRelogio
     */
    omit?: MarcacoesRelogioOmit<ExtArgs> | null
    /**
     * Filter, which MarcacoesRelogio to fetch.
     */
    where?: MarcacoesRelogioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarcacoesRelogios to fetch.
     */
    orderBy?: MarcacoesRelogioOrderByWithRelationInput | MarcacoesRelogioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarcacoesRelogios.
     */
    cursor?: MarcacoesRelogioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarcacoesRelogios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarcacoesRelogios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarcacoesRelogios.
     */
    distinct?: MarcacoesRelogioScalarFieldEnum | MarcacoesRelogioScalarFieldEnum[]
  }

  /**
   * MarcacoesRelogio findMany
   */
  export type MarcacoesRelogioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcacoesRelogio
     */
    select?: MarcacoesRelogioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcacoesRelogio
     */
    omit?: MarcacoesRelogioOmit<ExtArgs> | null
    /**
     * Filter, which MarcacoesRelogios to fetch.
     */
    where?: MarcacoesRelogioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarcacoesRelogios to fetch.
     */
    orderBy?: MarcacoesRelogioOrderByWithRelationInput | MarcacoesRelogioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarcacoesRelogios.
     */
    cursor?: MarcacoesRelogioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarcacoesRelogios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarcacoesRelogios.
     */
    skip?: number
    distinct?: MarcacoesRelogioScalarFieldEnum | MarcacoesRelogioScalarFieldEnum[]
  }

  /**
   * MarcacoesRelogio create
   */
  export type MarcacoesRelogioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcacoesRelogio
     */
    select?: MarcacoesRelogioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcacoesRelogio
     */
    omit?: MarcacoesRelogioOmit<ExtArgs> | null
    /**
     * The data needed to create a MarcacoesRelogio.
     */
    data: XOR<MarcacoesRelogioCreateInput, MarcacoesRelogioUncheckedCreateInput>
  }

  /**
   * MarcacoesRelogio createMany
   */
  export type MarcacoesRelogioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarcacoesRelogios.
     */
    data: MarcacoesRelogioCreateManyInput | MarcacoesRelogioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarcacoesRelogio createManyAndReturn
   */
  export type MarcacoesRelogioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcacoesRelogio
     */
    select?: MarcacoesRelogioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarcacoesRelogio
     */
    omit?: MarcacoesRelogioOmit<ExtArgs> | null
    /**
     * The data used to create many MarcacoesRelogios.
     */
    data: MarcacoesRelogioCreateManyInput | MarcacoesRelogioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarcacoesRelogio update
   */
  export type MarcacoesRelogioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcacoesRelogio
     */
    select?: MarcacoesRelogioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcacoesRelogio
     */
    omit?: MarcacoesRelogioOmit<ExtArgs> | null
    /**
     * The data needed to update a MarcacoesRelogio.
     */
    data: XOR<MarcacoesRelogioUpdateInput, MarcacoesRelogioUncheckedUpdateInput>
    /**
     * Choose, which MarcacoesRelogio to update.
     */
    where: MarcacoesRelogioWhereUniqueInput
  }

  /**
   * MarcacoesRelogio updateMany
   */
  export type MarcacoesRelogioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarcacoesRelogios.
     */
    data: XOR<MarcacoesRelogioUpdateManyMutationInput, MarcacoesRelogioUncheckedUpdateManyInput>
    /**
     * Filter which MarcacoesRelogios to update
     */
    where?: MarcacoesRelogioWhereInput
    /**
     * Limit how many MarcacoesRelogios to update.
     */
    limit?: number
  }

  /**
   * MarcacoesRelogio updateManyAndReturn
   */
  export type MarcacoesRelogioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcacoesRelogio
     */
    select?: MarcacoesRelogioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarcacoesRelogio
     */
    omit?: MarcacoesRelogioOmit<ExtArgs> | null
    /**
     * The data used to update MarcacoesRelogios.
     */
    data: XOR<MarcacoesRelogioUpdateManyMutationInput, MarcacoesRelogioUncheckedUpdateManyInput>
    /**
     * Filter which MarcacoesRelogios to update
     */
    where?: MarcacoesRelogioWhereInput
    /**
     * Limit how many MarcacoesRelogios to update.
     */
    limit?: number
  }

  /**
   * MarcacoesRelogio upsert
   */
  export type MarcacoesRelogioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcacoesRelogio
     */
    select?: MarcacoesRelogioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcacoesRelogio
     */
    omit?: MarcacoesRelogioOmit<ExtArgs> | null
    /**
     * The filter to search for the MarcacoesRelogio to update in case it exists.
     */
    where: MarcacoesRelogioWhereUniqueInput
    /**
     * In case the MarcacoesRelogio found by the `where` argument doesn't exist, create a new MarcacoesRelogio with this data.
     */
    create: XOR<MarcacoesRelogioCreateInput, MarcacoesRelogioUncheckedCreateInput>
    /**
     * In case the MarcacoesRelogio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarcacoesRelogioUpdateInput, MarcacoesRelogioUncheckedUpdateInput>
  }

  /**
   * MarcacoesRelogio delete
   */
  export type MarcacoesRelogioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcacoesRelogio
     */
    select?: MarcacoesRelogioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcacoesRelogio
     */
    omit?: MarcacoesRelogioOmit<ExtArgs> | null
    /**
     * Filter which MarcacoesRelogio to delete.
     */
    where: MarcacoesRelogioWhereUniqueInput
  }

  /**
   * MarcacoesRelogio deleteMany
   */
  export type MarcacoesRelogioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarcacoesRelogios to delete
     */
    where?: MarcacoesRelogioWhereInput
    /**
     * Limit how many MarcacoesRelogios to delete.
     */
    limit?: number
  }

  /**
   * MarcacoesRelogio without action
   */
  export type MarcacoesRelogioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcacoesRelogio
     */
    select?: MarcacoesRelogioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcacoesRelogio
     */
    omit?: MarcacoesRelogioOmit<ExtArgs> | null
  }


  /**
   * Model EspelhoDiario
   */

  export type AggregateEspelhoDiario = {
    _count: EspelhoDiarioCountAggregateOutputType | null
    _avg: EspelhoDiarioAvgAggregateOutputType | null
    _sum: EspelhoDiarioSumAggregateOutputType | null
    _min: EspelhoDiarioMinAggregateOutputType | null
    _max: EspelhoDiarioMaxAggregateOutputType | null
  }

  export type EspelhoDiarioAvgAggregateOutputType = {
    id: number | null
    credito: number | null
    debito: number | null
    horasNormais: number | null
    horasExtras: number | null
    saldo: number | null
    horasTrabalhadas: number | null
    horasAlmoco: number | null
    bancoDeHoras: number | null
  }

  export type EspelhoDiarioSumAggregateOutputType = {
    id: number | null
    credito: number | null
    debito: number | null
    horasNormais: number | null
    horasExtras: number | null
    saldo: number | null
    horasTrabalhadas: number | null
    horasAlmoco: number | null
    bancoDeHoras: number | null
  }

  export type EspelhoDiarioMinAggregateOutputType = {
    id: number | null
    cpf: string | null
    mesAno: string | null
    diaDoMes: string | null
    credito: number | null
    debito: number | null
    horasNormais: number | null
    horasExtras: number | null
    saldo: number | null
    motivoReajuste: string | null
    data: string | null
    primeiraEntrada: string | null
    primeiraSaida: string | null
    segundaEntrada: string | null
    segundaSaida: string | null
    horasTrabalhadas: number | null
    horasAlmoco: number | null
    bancoDeHoras: number | null
    observacoes: string | null
    status: string | null
    origem: string | null
  }

  export type EspelhoDiarioMaxAggregateOutputType = {
    id: number | null
    cpf: string | null
    mesAno: string | null
    diaDoMes: string | null
    credito: number | null
    debito: number | null
    horasNormais: number | null
    horasExtras: number | null
    saldo: number | null
    motivoReajuste: string | null
    data: string | null
    primeiraEntrada: string | null
    primeiraSaida: string | null
    segundaEntrada: string | null
    segundaSaida: string | null
    horasTrabalhadas: number | null
    horasAlmoco: number | null
    bancoDeHoras: number | null
    observacoes: string | null
    status: string | null
    origem: string | null
  }

  export type EspelhoDiarioCountAggregateOutputType = {
    id: number
    cpf: number
    mesAno: number
    diaDoMes: number
    credito: number
    debito: number
    horasNormais: number
    horasExtras: number
    saldo: number
    motivoReajuste: number
    data: number
    primeiraEntrada: number
    primeiraSaida: number
    segundaEntrada: number
    segundaSaida: number
    horasTrabalhadas: number
    horasAlmoco: number
    bancoDeHoras: number
    observacoes: number
    status: number
    origem: number
    _all: number
  }


  export type EspelhoDiarioAvgAggregateInputType = {
    id?: true
    credito?: true
    debito?: true
    horasNormais?: true
    horasExtras?: true
    saldo?: true
    horasTrabalhadas?: true
    horasAlmoco?: true
    bancoDeHoras?: true
  }

  export type EspelhoDiarioSumAggregateInputType = {
    id?: true
    credito?: true
    debito?: true
    horasNormais?: true
    horasExtras?: true
    saldo?: true
    horasTrabalhadas?: true
    horasAlmoco?: true
    bancoDeHoras?: true
  }

  export type EspelhoDiarioMinAggregateInputType = {
    id?: true
    cpf?: true
    mesAno?: true
    diaDoMes?: true
    credito?: true
    debito?: true
    horasNormais?: true
    horasExtras?: true
    saldo?: true
    motivoReajuste?: true
    data?: true
    primeiraEntrada?: true
    primeiraSaida?: true
    segundaEntrada?: true
    segundaSaida?: true
    horasTrabalhadas?: true
    horasAlmoco?: true
    bancoDeHoras?: true
    observacoes?: true
    status?: true
    origem?: true
  }

  export type EspelhoDiarioMaxAggregateInputType = {
    id?: true
    cpf?: true
    mesAno?: true
    diaDoMes?: true
    credito?: true
    debito?: true
    horasNormais?: true
    horasExtras?: true
    saldo?: true
    motivoReajuste?: true
    data?: true
    primeiraEntrada?: true
    primeiraSaida?: true
    segundaEntrada?: true
    segundaSaida?: true
    horasTrabalhadas?: true
    horasAlmoco?: true
    bancoDeHoras?: true
    observacoes?: true
    status?: true
    origem?: true
  }

  export type EspelhoDiarioCountAggregateInputType = {
    id?: true
    cpf?: true
    mesAno?: true
    diaDoMes?: true
    credito?: true
    debito?: true
    horasNormais?: true
    horasExtras?: true
    saldo?: true
    motivoReajuste?: true
    data?: true
    primeiraEntrada?: true
    primeiraSaida?: true
    segundaEntrada?: true
    segundaSaida?: true
    horasTrabalhadas?: true
    horasAlmoco?: true
    bancoDeHoras?: true
    observacoes?: true
    status?: true
    origem?: true
    _all?: true
  }

  export type EspelhoDiarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EspelhoDiario to aggregate.
     */
    where?: EspelhoDiarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EspelhoDiarios to fetch.
     */
    orderBy?: EspelhoDiarioOrderByWithRelationInput | EspelhoDiarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EspelhoDiarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EspelhoDiarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EspelhoDiarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EspelhoDiarios
    **/
    _count?: true | EspelhoDiarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EspelhoDiarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EspelhoDiarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EspelhoDiarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EspelhoDiarioMaxAggregateInputType
  }

  export type GetEspelhoDiarioAggregateType<T extends EspelhoDiarioAggregateArgs> = {
        [P in keyof T & keyof AggregateEspelhoDiario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEspelhoDiario[P]>
      : GetScalarType<T[P], AggregateEspelhoDiario[P]>
  }




  export type EspelhoDiarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspelhoDiarioWhereInput
    orderBy?: EspelhoDiarioOrderByWithAggregationInput | EspelhoDiarioOrderByWithAggregationInput[]
    by: EspelhoDiarioScalarFieldEnum[] | EspelhoDiarioScalarFieldEnum
    having?: EspelhoDiarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EspelhoDiarioCountAggregateInputType | true
    _avg?: EspelhoDiarioAvgAggregateInputType
    _sum?: EspelhoDiarioSumAggregateInputType
    _min?: EspelhoDiarioMinAggregateInputType
    _max?: EspelhoDiarioMaxAggregateInputType
  }

  export type EspelhoDiarioGroupByOutputType = {
    id: number
    cpf: string
    mesAno: string
    diaDoMes: string
    credito: number
    debito: number
    horasNormais: number
    horasExtras: number
    saldo: number
    motivoReajuste: string | null
    data: string
    primeiraEntrada: string | null
    primeiraSaida: string | null
    segundaEntrada: string | null
    segundaSaida: string | null
    horasTrabalhadas: number
    horasAlmoco: number
    bancoDeHoras: number
    observacoes: string
    status: string
    origem: string | null
    _count: EspelhoDiarioCountAggregateOutputType | null
    _avg: EspelhoDiarioAvgAggregateOutputType | null
    _sum: EspelhoDiarioSumAggregateOutputType | null
    _min: EspelhoDiarioMinAggregateOutputType | null
    _max: EspelhoDiarioMaxAggregateOutputType | null
  }

  type GetEspelhoDiarioGroupByPayload<T extends EspelhoDiarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EspelhoDiarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EspelhoDiarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EspelhoDiarioGroupByOutputType[P]>
            : GetScalarType<T[P], EspelhoDiarioGroupByOutputType[P]>
        }
      >
    >


  export type EspelhoDiarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    mesAno?: boolean
    diaDoMes?: boolean
    credito?: boolean
    debito?: boolean
    horasNormais?: boolean
    horasExtras?: boolean
    saldo?: boolean
    motivoReajuste?: boolean
    data?: boolean
    primeiraEntrada?: boolean
    primeiraSaida?: boolean
    segundaEntrada?: boolean
    segundaSaida?: boolean
    horasTrabalhadas?: boolean
    horasAlmoco?: boolean
    bancoDeHoras?: boolean
    observacoes?: boolean
    status?: boolean
    origem?: boolean
    EspelhoMensal?: boolean | EspelhoDiario$EspelhoMensalArgs<ExtArgs>
    _count?: boolean | EspelhoDiarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["espelhoDiario"]>

  export type EspelhoDiarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    mesAno?: boolean
    diaDoMes?: boolean
    credito?: boolean
    debito?: boolean
    horasNormais?: boolean
    horasExtras?: boolean
    saldo?: boolean
    motivoReajuste?: boolean
    data?: boolean
    primeiraEntrada?: boolean
    primeiraSaida?: boolean
    segundaEntrada?: boolean
    segundaSaida?: boolean
    horasTrabalhadas?: boolean
    horasAlmoco?: boolean
    bancoDeHoras?: boolean
    observacoes?: boolean
    status?: boolean
    origem?: boolean
  }, ExtArgs["result"]["espelhoDiario"]>

  export type EspelhoDiarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    mesAno?: boolean
    diaDoMes?: boolean
    credito?: boolean
    debito?: boolean
    horasNormais?: boolean
    horasExtras?: boolean
    saldo?: boolean
    motivoReajuste?: boolean
    data?: boolean
    primeiraEntrada?: boolean
    primeiraSaida?: boolean
    segundaEntrada?: boolean
    segundaSaida?: boolean
    horasTrabalhadas?: boolean
    horasAlmoco?: boolean
    bancoDeHoras?: boolean
    observacoes?: boolean
    status?: boolean
    origem?: boolean
  }, ExtArgs["result"]["espelhoDiario"]>

  export type EspelhoDiarioSelectScalar = {
    id?: boolean
    cpf?: boolean
    mesAno?: boolean
    diaDoMes?: boolean
    credito?: boolean
    debito?: boolean
    horasNormais?: boolean
    horasExtras?: boolean
    saldo?: boolean
    motivoReajuste?: boolean
    data?: boolean
    primeiraEntrada?: boolean
    primeiraSaida?: boolean
    segundaEntrada?: boolean
    segundaSaida?: boolean
    horasTrabalhadas?: boolean
    horasAlmoco?: boolean
    bancoDeHoras?: boolean
    observacoes?: boolean
    status?: boolean
    origem?: boolean
  }

  export type EspelhoDiarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cpf" | "mesAno" | "diaDoMes" | "credito" | "debito" | "horasNormais" | "horasExtras" | "saldo" | "motivoReajuste" | "data" | "primeiraEntrada" | "primeiraSaida" | "segundaEntrada" | "segundaSaida" | "horasTrabalhadas" | "horasAlmoco" | "bancoDeHoras" | "observacoes" | "status" | "origem", ExtArgs["result"]["espelhoDiario"]>
  export type EspelhoDiarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EspelhoMensal?: boolean | EspelhoDiario$EspelhoMensalArgs<ExtArgs>
    _count?: boolean | EspelhoDiarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EspelhoDiarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EspelhoDiarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EspelhoDiarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EspelhoDiario"
    objects: {
      EspelhoMensal: Prisma.$EspelhoMensalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cpf: string
      mesAno: string
      diaDoMes: string
      credito: number
      debito: number
      horasNormais: number
      horasExtras: number
      saldo: number
      motivoReajuste: string | null
      data: string
      primeiraEntrada: string | null
      primeiraSaida: string | null
      segundaEntrada: string | null
      segundaSaida: string | null
      horasTrabalhadas: number
      horasAlmoco: number
      bancoDeHoras: number
      observacoes: string
      status: string
      origem: string | null
    }, ExtArgs["result"]["espelhoDiario"]>
    composites: {}
  }

  type EspelhoDiarioGetPayload<S extends boolean | null | undefined | EspelhoDiarioDefaultArgs> = $Result.GetResult<Prisma.$EspelhoDiarioPayload, S>

  type EspelhoDiarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EspelhoDiarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EspelhoDiarioCountAggregateInputType | true
    }

  export interface EspelhoDiarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EspelhoDiario'], meta: { name: 'EspelhoDiario' } }
    /**
     * Find zero or one EspelhoDiario that matches the filter.
     * @param {EspelhoDiarioFindUniqueArgs} args - Arguments to find a EspelhoDiario
     * @example
     * // Get one EspelhoDiario
     * const espelhoDiario = await prisma.espelhoDiario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EspelhoDiarioFindUniqueArgs>(args: SelectSubset<T, EspelhoDiarioFindUniqueArgs<ExtArgs>>): Prisma__EspelhoDiarioClient<$Result.GetResult<Prisma.$EspelhoDiarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EspelhoDiario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EspelhoDiarioFindUniqueOrThrowArgs} args - Arguments to find a EspelhoDiario
     * @example
     * // Get one EspelhoDiario
     * const espelhoDiario = await prisma.espelhoDiario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EspelhoDiarioFindUniqueOrThrowArgs>(args: SelectSubset<T, EspelhoDiarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EspelhoDiarioClient<$Result.GetResult<Prisma.$EspelhoDiarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EspelhoDiario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspelhoDiarioFindFirstArgs} args - Arguments to find a EspelhoDiario
     * @example
     * // Get one EspelhoDiario
     * const espelhoDiario = await prisma.espelhoDiario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EspelhoDiarioFindFirstArgs>(args?: SelectSubset<T, EspelhoDiarioFindFirstArgs<ExtArgs>>): Prisma__EspelhoDiarioClient<$Result.GetResult<Prisma.$EspelhoDiarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EspelhoDiario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspelhoDiarioFindFirstOrThrowArgs} args - Arguments to find a EspelhoDiario
     * @example
     * // Get one EspelhoDiario
     * const espelhoDiario = await prisma.espelhoDiario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EspelhoDiarioFindFirstOrThrowArgs>(args?: SelectSubset<T, EspelhoDiarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__EspelhoDiarioClient<$Result.GetResult<Prisma.$EspelhoDiarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EspelhoDiarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspelhoDiarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EspelhoDiarios
     * const espelhoDiarios = await prisma.espelhoDiario.findMany()
     * 
     * // Get first 10 EspelhoDiarios
     * const espelhoDiarios = await prisma.espelhoDiario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const espelhoDiarioWithIdOnly = await prisma.espelhoDiario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EspelhoDiarioFindManyArgs>(args?: SelectSubset<T, EspelhoDiarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspelhoDiarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EspelhoDiario.
     * @param {EspelhoDiarioCreateArgs} args - Arguments to create a EspelhoDiario.
     * @example
     * // Create one EspelhoDiario
     * const EspelhoDiario = await prisma.espelhoDiario.create({
     *   data: {
     *     // ... data to create a EspelhoDiario
     *   }
     * })
     * 
     */
    create<T extends EspelhoDiarioCreateArgs>(args: SelectSubset<T, EspelhoDiarioCreateArgs<ExtArgs>>): Prisma__EspelhoDiarioClient<$Result.GetResult<Prisma.$EspelhoDiarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EspelhoDiarios.
     * @param {EspelhoDiarioCreateManyArgs} args - Arguments to create many EspelhoDiarios.
     * @example
     * // Create many EspelhoDiarios
     * const espelhoDiario = await prisma.espelhoDiario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EspelhoDiarioCreateManyArgs>(args?: SelectSubset<T, EspelhoDiarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EspelhoDiarios and returns the data saved in the database.
     * @param {EspelhoDiarioCreateManyAndReturnArgs} args - Arguments to create many EspelhoDiarios.
     * @example
     * // Create many EspelhoDiarios
     * const espelhoDiario = await prisma.espelhoDiario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EspelhoDiarios and only return the `id`
     * const espelhoDiarioWithIdOnly = await prisma.espelhoDiario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EspelhoDiarioCreateManyAndReturnArgs>(args?: SelectSubset<T, EspelhoDiarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspelhoDiarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EspelhoDiario.
     * @param {EspelhoDiarioDeleteArgs} args - Arguments to delete one EspelhoDiario.
     * @example
     * // Delete one EspelhoDiario
     * const EspelhoDiario = await prisma.espelhoDiario.delete({
     *   where: {
     *     // ... filter to delete one EspelhoDiario
     *   }
     * })
     * 
     */
    delete<T extends EspelhoDiarioDeleteArgs>(args: SelectSubset<T, EspelhoDiarioDeleteArgs<ExtArgs>>): Prisma__EspelhoDiarioClient<$Result.GetResult<Prisma.$EspelhoDiarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EspelhoDiario.
     * @param {EspelhoDiarioUpdateArgs} args - Arguments to update one EspelhoDiario.
     * @example
     * // Update one EspelhoDiario
     * const espelhoDiario = await prisma.espelhoDiario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EspelhoDiarioUpdateArgs>(args: SelectSubset<T, EspelhoDiarioUpdateArgs<ExtArgs>>): Prisma__EspelhoDiarioClient<$Result.GetResult<Prisma.$EspelhoDiarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EspelhoDiarios.
     * @param {EspelhoDiarioDeleteManyArgs} args - Arguments to filter EspelhoDiarios to delete.
     * @example
     * // Delete a few EspelhoDiarios
     * const { count } = await prisma.espelhoDiario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EspelhoDiarioDeleteManyArgs>(args?: SelectSubset<T, EspelhoDiarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EspelhoDiarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspelhoDiarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EspelhoDiarios
     * const espelhoDiario = await prisma.espelhoDiario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EspelhoDiarioUpdateManyArgs>(args: SelectSubset<T, EspelhoDiarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EspelhoDiarios and returns the data updated in the database.
     * @param {EspelhoDiarioUpdateManyAndReturnArgs} args - Arguments to update many EspelhoDiarios.
     * @example
     * // Update many EspelhoDiarios
     * const espelhoDiario = await prisma.espelhoDiario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EspelhoDiarios and only return the `id`
     * const espelhoDiarioWithIdOnly = await prisma.espelhoDiario.updateManyAndReturn({
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
    updateManyAndReturn<T extends EspelhoDiarioUpdateManyAndReturnArgs>(args: SelectSubset<T, EspelhoDiarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspelhoDiarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EspelhoDiario.
     * @param {EspelhoDiarioUpsertArgs} args - Arguments to update or create a EspelhoDiario.
     * @example
     * // Update or create a EspelhoDiario
     * const espelhoDiario = await prisma.espelhoDiario.upsert({
     *   create: {
     *     // ... data to create a EspelhoDiario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EspelhoDiario we want to update
     *   }
     * })
     */
    upsert<T extends EspelhoDiarioUpsertArgs>(args: SelectSubset<T, EspelhoDiarioUpsertArgs<ExtArgs>>): Prisma__EspelhoDiarioClient<$Result.GetResult<Prisma.$EspelhoDiarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EspelhoDiarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspelhoDiarioCountArgs} args - Arguments to filter EspelhoDiarios to count.
     * @example
     * // Count the number of EspelhoDiarios
     * const count = await prisma.espelhoDiario.count({
     *   where: {
     *     // ... the filter for the EspelhoDiarios we want to count
     *   }
     * })
    **/
    count<T extends EspelhoDiarioCountArgs>(
      args?: Subset<T, EspelhoDiarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EspelhoDiarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EspelhoDiario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspelhoDiarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EspelhoDiarioAggregateArgs>(args: Subset<T, EspelhoDiarioAggregateArgs>): Prisma.PrismaPromise<GetEspelhoDiarioAggregateType<T>>

    /**
     * Group by EspelhoDiario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspelhoDiarioGroupByArgs} args - Group by arguments.
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
      T extends EspelhoDiarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EspelhoDiarioGroupByArgs['orderBy'] }
        : { orderBy?: EspelhoDiarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EspelhoDiarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspelhoDiarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EspelhoDiario model
   */
  readonly fields: EspelhoDiarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EspelhoDiario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EspelhoDiarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    EspelhoMensal<T extends EspelhoDiario$EspelhoMensalArgs<ExtArgs> = {}>(args?: Subset<T, EspelhoDiario$EspelhoMensalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspelhoMensalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EspelhoDiario model
   */
  interface EspelhoDiarioFieldRefs {
    readonly id: FieldRef<"EspelhoDiario", 'Int'>
    readonly cpf: FieldRef<"EspelhoDiario", 'String'>
    readonly mesAno: FieldRef<"EspelhoDiario", 'String'>
    readonly diaDoMes: FieldRef<"EspelhoDiario", 'String'>
    readonly credito: FieldRef<"EspelhoDiario", 'Float'>
    readonly debito: FieldRef<"EspelhoDiario", 'Float'>
    readonly horasNormais: FieldRef<"EspelhoDiario", 'Float'>
    readonly horasExtras: FieldRef<"EspelhoDiario", 'Float'>
    readonly saldo: FieldRef<"EspelhoDiario", 'Float'>
    readonly motivoReajuste: FieldRef<"EspelhoDiario", 'String'>
    readonly data: FieldRef<"EspelhoDiario", 'String'>
    readonly primeiraEntrada: FieldRef<"EspelhoDiario", 'String'>
    readonly primeiraSaida: FieldRef<"EspelhoDiario", 'String'>
    readonly segundaEntrada: FieldRef<"EspelhoDiario", 'String'>
    readonly segundaSaida: FieldRef<"EspelhoDiario", 'String'>
    readonly horasTrabalhadas: FieldRef<"EspelhoDiario", 'Float'>
    readonly horasAlmoco: FieldRef<"EspelhoDiario", 'Float'>
    readonly bancoDeHoras: FieldRef<"EspelhoDiario", 'Float'>
    readonly observacoes: FieldRef<"EspelhoDiario", 'String'>
    readonly status: FieldRef<"EspelhoDiario", 'String'>
    readonly origem: FieldRef<"EspelhoDiario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EspelhoDiario findUnique
   */
  export type EspelhoDiarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDiario
     */
    select?: EspelhoDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDiario
     */
    omit?: EspelhoDiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspelhoDiarioInclude<ExtArgs> | null
    /**
     * Filter, which EspelhoDiario to fetch.
     */
    where: EspelhoDiarioWhereUniqueInput
  }

  /**
   * EspelhoDiario findUniqueOrThrow
   */
  export type EspelhoDiarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDiario
     */
    select?: EspelhoDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDiario
     */
    omit?: EspelhoDiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspelhoDiarioInclude<ExtArgs> | null
    /**
     * Filter, which EspelhoDiario to fetch.
     */
    where: EspelhoDiarioWhereUniqueInput
  }

  /**
   * EspelhoDiario findFirst
   */
  export type EspelhoDiarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDiario
     */
    select?: EspelhoDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDiario
     */
    omit?: EspelhoDiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspelhoDiarioInclude<ExtArgs> | null
    /**
     * Filter, which EspelhoDiario to fetch.
     */
    where?: EspelhoDiarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EspelhoDiarios to fetch.
     */
    orderBy?: EspelhoDiarioOrderByWithRelationInput | EspelhoDiarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EspelhoDiarios.
     */
    cursor?: EspelhoDiarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EspelhoDiarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EspelhoDiarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EspelhoDiarios.
     */
    distinct?: EspelhoDiarioScalarFieldEnum | EspelhoDiarioScalarFieldEnum[]
  }

  /**
   * EspelhoDiario findFirstOrThrow
   */
  export type EspelhoDiarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDiario
     */
    select?: EspelhoDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDiario
     */
    omit?: EspelhoDiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspelhoDiarioInclude<ExtArgs> | null
    /**
     * Filter, which EspelhoDiario to fetch.
     */
    where?: EspelhoDiarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EspelhoDiarios to fetch.
     */
    orderBy?: EspelhoDiarioOrderByWithRelationInput | EspelhoDiarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EspelhoDiarios.
     */
    cursor?: EspelhoDiarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EspelhoDiarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EspelhoDiarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EspelhoDiarios.
     */
    distinct?: EspelhoDiarioScalarFieldEnum | EspelhoDiarioScalarFieldEnum[]
  }

  /**
   * EspelhoDiario findMany
   */
  export type EspelhoDiarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDiario
     */
    select?: EspelhoDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDiario
     */
    omit?: EspelhoDiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspelhoDiarioInclude<ExtArgs> | null
    /**
     * Filter, which EspelhoDiarios to fetch.
     */
    where?: EspelhoDiarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EspelhoDiarios to fetch.
     */
    orderBy?: EspelhoDiarioOrderByWithRelationInput | EspelhoDiarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EspelhoDiarios.
     */
    cursor?: EspelhoDiarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EspelhoDiarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EspelhoDiarios.
     */
    skip?: number
    distinct?: EspelhoDiarioScalarFieldEnum | EspelhoDiarioScalarFieldEnum[]
  }

  /**
   * EspelhoDiario create
   */
  export type EspelhoDiarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDiario
     */
    select?: EspelhoDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDiario
     */
    omit?: EspelhoDiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspelhoDiarioInclude<ExtArgs> | null
    /**
     * The data needed to create a EspelhoDiario.
     */
    data: XOR<EspelhoDiarioCreateInput, EspelhoDiarioUncheckedCreateInput>
  }

  /**
   * EspelhoDiario createMany
   */
  export type EspelhoDiarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EspelhoDiarios.
     */
    data: EspelhoDiarioCreateManyInput | EspelhoDiarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EspelhoDiario createManyAndReturn
   */
  export type EspelhoDiarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDiario
     */
    select?: EspelhoDiarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDiario
     */
    omit?: EspelhoDiarioOmit<ExtArgs> | null
    /**
     * The data used to create many EspelhoDiarios.
     */
    data: EspelhoDiarioCreateManyInput | EspelhoDiarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EspelhoDiario update
   */
  export type EspelhoDiarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDiario
     */
    select?: EspelhoDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDiario
     */
    omit?: EspelhoDiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspelhoDiarioInclude<ExtArgs> | null
    /**
     * The data needed to update a EspelhoDiario.
     */
    data: XOR<EspelhoDiarioUpdateInput, EspelhoDiarioUncheckedUpdateInput>
    /**
     * Choose, which EspelhoDiario to update.
     */
    where: EspelhoDiarioWhereUniqueInput
  }

  /**
   * EspelhoDiario updateMany
   */
  export type EspelhoDiarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EspelhoDiarios.
     */
    data: XOR<EspelhoDiarioUpdateManyMutationInput, EspelhoDiarioUncheckedUpdateManyInput>
    /**
     * Filter which EspelhoDiarios to update
     */
    where?: EspelhoDiarioWhereInput
    /**
     * Limit how many EspelhoDiarios to update.
     */
    limit?: number
  }

  /**
   * EspelhoDiario updateManyAndReturn
   */
  export type EspelhoDiarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDiario
     */
    select?: EspelhoDiarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDiario
     */
    omit?: EspelhoDiarioOmit<ExtArgs> | null
    /**
     * The data used to update EspelhoDiarios.
     */
    data: XOR<EspelhoDiarioUpdateManyMutationInput, EspelhoDiarioUncheckedUpdateManyInput>
    /**
     * Filter which EspelhoDiarios to update
     */
    where?: EspelhoDiarioWhereInput
    /**
     * Limit how many EspelhoDiarios to update.
     */
    limit?: number
  }

  /**
   * EspelhoDiario upsert
   */
  export type EspelhoDiarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDiario
     */
    select?: EspelhoDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDiario
     */
    omit?: EspelhoDiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspelhoDiarioInclude<ExtArgs> | null
    /**
     * The filter to search for the EspelhoDiario to update in case it exists.
     */
    where: EspelhoDiarioWhereUniqueInput
    /**
     * In case the EspelhoDiario found by the `where` argument doesn't exist, create a new EspelhoDiario with this data.
     */
    create: XOR<EspelhoDiarioCreateInput, EspelhoDiarioUncheckedCreateInput>
    /**
     * In case the EspelhoDiario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EspelhoDiarioUpdateInput, EspelhoDiarioUncheckedUpdateInput>
  }

  /**
   * EspelhoDiario delete
   */
  export type EspelhoDiarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDiario
     */
    select?: EspelhoDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDiario
     */
    omit?: EspelhoDiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspelhoDiarioInclude<ExtArgs> | null
    /**
     * Filter which EspelhoDiario to delete.
     */
    where: EspelhoDiarioWhereUniqueInput
  }

  /**
   * EspelhoDiario deleteMany
   */
  export type EspelhoDiarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EspelhoDiarios to delete
     */
    where?: EspelhoDiarioWhereInput
    /**
     * Limit how many EspelhoDiarios to delete.
     */
    limit?: number
  }

  /**
   * EspelhoDiario.EspelhoMensal
   */
  export type EspelhoDiario$EspelhoMensalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoMensal
     */
    select?: EspelhoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoMensal
     */
    omit?: EspelhoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspelhoMensalInclude<ExtArgs> | null
    where?: EspelhoMensalWhereInput
    orderBy?: EspelhoMensalOrderByWithRelationInput | EspelhoMensalOrderByWithRelationInput[]
    cursor?: EspelhoMensalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EspelhoMensalScalarFieldEnum | EspelhoMensalScalarFieldEnum[]
  }

  /**
   * EspelhoDiario without action
   */
  export type EspelhoDiarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDiario
     */
    select?: EspelhoDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDiario
     */
    omit?: EspelhoDiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspelhoDiarioInclude<ExtArgs> | null
  }


  /**
   * Model MarcacoesUsuario
   */

  export type AggregateMarcacoesUsuario = {
    _count: MarcacoesUsuarioCountAggregateOutputType | null
    _min: MarcacoesUsuarioMinAggregateOutputType | null
    _max: MarcacoesUsuarioMaxAggregateOutputType | null
  }

  export type MarcacoesUsuarioMinAggregateOutputType = {
    id: string | null
    pimeiraEntrada: Date | null
    primeiraSaida: Date | null
    segundaEntrada: Date | null
    segundaSaida: Date | null
    pausaAlmoco: Date | null
  }

  export type MarcacoesUsuarioMaxAggregateOutputType = {
    id: string | null
    pimeiraEntrada: Date | null
    primeiraSaida: Date | null
    segundaEntrada: Date | null
    segundaSaida: Date | null
    pausaAlmoco: Date | null
  }

  export type MarcacoesUsuarioCountAggregateOutputType = {
    id: number
    pimeiraEntrada: number
    primeiraSaida: number
    segundaEntrada: number
    segundaSaida: number
    pausaAlmoco: number
    _all: number
  }


  export type MarcacoesUsuarioMinAggregateInputType = {
    id?: true
    pimeiraEntrada?: true
    primeiraSaida?: true
    segundaEntrada?: true
    segundaSaida?: true
    pausaAlmoco?: true
  }

  export type MarcacoesUsuarioMaxAggregateInputType = {
    id?: true
    pimeiraEntrada?: true
    primeiraSaida?: true
    segundaEntrada?: true
    segundaSaida?: true
    pausaAlmoco?: true
  }

  export type MarcacoesUsuarioCountAggregateInputType = {
    id?: true
    pimeiraEntrada?: true
    primeiraSaida?: true
    segundaEntrada?: true
    segundaSaida?: true
    pausaAlmoco?: true
    _all?: true
  }

  export type MarcacoesUsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarcacoesUsuario to aggregate.
     */
    where?: MarcacoesUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarcacoesUsuarios to fetch.
     */
    orderBy?: MarcacoesUsuarioOrderByWithRelationInput | MarcacoesUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarcacoesUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarcacoesUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarcacoesUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarcacoesUsuarios
    **/
    _count?: true | MarcacoesUsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarcacoesUsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarcacoesUsuarioMaxAggregateInputType
  }

  export type GetMarcacoesUsuarioAggregateType<T extends MarcacoesUsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateMarcacoesUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarcacoesUsuario[P]>
      : GetScalarType<T[P], AggregateMarcacoesUsuario[P]>
  }




  export type MarcacoesUsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarcacoesUsuarioWhereInput
    orderBy?: MarcacoesUsuarioOrderByWithAggregationInput | MarcacoesUsuarioOrderByWithAggregationInput[]
    by: MarcacoesUsuarioScalarFieldEnum[] | MarcacoesUsuarioScalarFieldEnum
    having?: MarcacoesUsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarcacoesUsuarioCountAggregateInputType | true
    _min?: MarcacoesUsuarioMinAggregateInputType
    _max?: MarcacoesUsuarioMaxAggregateInputType
  }

  export type MarcacoesUsuarioGroupByOutputType = {
    id: string
    pimeiraEntrada: Date
    primeiraSaida: Date
    segundaEntrada: Date
    segundaSaida: Date
    pausaAlmoco: Date | null
    _count: MarcacoesUsuarioCountAggregateOutputType | null
    _min: MarcacoesUsuarioMinAggregateOutputType | null
    _max: MarcacoesUsuarioMaxAggregateOutputType | null
  }

  type GetMarcacoesUsuarioGroupByPayload<T extends MarcacoesUsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarcacoesUsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarcacoesUsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarcacoesUsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], MarcacoesUsuarioGroupByOutputType[P]>
        }
      >
    >


  export type MarcacoesUsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pimeiraEntrada?: boolean
    primeiraSaida?: boolean
    segundaEntrada?: boolean
    segundaSaida?: boolean
    pausaAlmoco?: boolean
  }, ExtArgs["result"]["marcacoesUsuario"]>

  export type MarcacoesUsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pimeiraEntrada?: boolean
    primeiraSaida?: boolean
    segundaEntrada?: boolean
    segundaSaida?: boolean
    pausaAlmoco?: boolean
  }, ExtArgs["result"]["marcacoesUsuario"]>

  export type MarcacoesUsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pimeiraEntrada?: boolean
    primeiraSaida?: boolean
    segundaEntrada?: boolean
    segundaSaida?: boolean
    pausaAlmoco?: boolean
  }, ExtArgs["result"]["marcacoesUsuario"]>

  export type MarcacoesUsuarioSelectScalar = {
    id?: boolean
    pimeiraEntrada?: boolean
    primeiraSaida?: boolean
    segundaEntrada?: boolean
    segundaSaida?: boolean
    pausaAlmoco?: boolean
  }

  export type MarcacoesUsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pimeiraEntrada" | "primeiraSaida" | "segundaEntrada" | "segundaSaida" | "pausaAlmoco", ExtArgs["result"]["marcacoesUsuario"]>

  export type $MarcacoesUsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarcacoesUsuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pimeiraEntrada: Date
      primeiraSaida: Date
      segundaEntrada: Date
      segundaSaida: Date
      pausaAlmoco: Date | null
    }, ExtArgs["result"]["marcacoesUsuario"]>
    composites: {}
  }

  type MarcacoesUsuarioGetPayload<S extends boolean | null | undefined | MarcacoesUsuarioDefaultArgs> = $Result.GetResult<Prisma.$MarcacoesUsuarioPayload, S>

  type MarcacoesUsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarcacoesUsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarcacoesUsuarioCountAggregateInputType | true
    }

  export interface MarcacoesUsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarcacoesUsuario'], meta: { name: 'MarcacoesUsuario' } }
    /**
     * Find zero or one MarcacoesUsuario that matches the filter.
     * @param {MarcacoesUsuarioFindUniqueArgs} args - Arguments to find a MarcacoesUsuario
     * @example
     * // Get one MarcacoesUsuario
     * const marcacoesUsuario = await prisma.marcacoesUsuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarcacoesUsuarioFindUniqueArgs>(args: SelectSubset<T, MarcacoesUsuarioFindUniqueArgs<ExtArgs>>): Prisma__MarcacoesUsuarioClient<$Result.GetResult<Prisma.$MarcacoesUsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarcacoesUsuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarcacoesUsuarioFindUniqueOrThrowArgs} args - Arguments to find a MarcacoesUsuario
     * @example
     * // Get one MarcacoesUsuario
     * const marcacoesUsuario = await prisma.marcacoesUsuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarcacoesUsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, MarcacoesUsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarcacoesUsuarioClient<$Result.GetResult<Prisma.$MarcacoesUsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarcacoesUsuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcacoesUsuarioFindFirstArgs} args - Arguments to find a MarcacoesUsuario
     * @example
     * // Get one MarcacoesUsuario
     * const marcacoesUsuario = await prisma.marcacoesUsuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarcacoesUsuarioFindFirstArgs>(args?: SelectSubset<T, MarcacoesUsuarioFindFirstArgs<ExtArgs>>): Prisma__MarcacoesUsuarioClient<$Result.GetResult<Prisma.$MarcacoesUsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarcacoesUsuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcacoesUsuarioFindFirstOrThrowArgs} args - Arguments to find a MarcacoesUsuario
     * @example
     * // Get one MarcacoesUsuario
     * const marcacoesUsuario = await prisma.marcacoesUsuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarcacoesUsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, MarcacoesUsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarcacoesUsuarioClient<$Result.GetResult<Prisma.$MarcacoesUsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarcacoesUsuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcacoesUsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarcacoesUsuarios
     * const marcacoesUsuarios = await prisma.marcacoesUsuario.findMany()
     * 
     * // Get first 10 MarcacoesUsuarios
     * const marcacoesUsuarios = await prisma.marcacoesUsuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marcacoesUsuarioWithIdOnly = await prisma.marcacoesUsuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarcacoesUsuarioFindManyArgs>(args?: SelectSubset<T, MarcacoesUsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcacoesUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarcacoesUsuario.
     * @param {MarcacoesUsuarioCreateArgs} args - Arguments to create a MarcacoesUsuario.
     * @example
     * // Create one MarcacoesUsuario
     * const MarcacoesUsuario = await prisma.marcacoesUsuario.create({
     *   data: {
     *     // ... data to create a MarcacoesUsuario
     *   }
     * })
     * 
     */
    create<T extends MarcacoesUsuarioCreateArgs>(args: SelectSubset<T, MarcacoesUsuarioCreateArgs<ExtArgs>>): Prisma__MarcacoesUsuarioClient<$Result.GetResult<Prisma.$MarcacoesUsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarcacoesUsuarios.
     * @param {MarcacoesUsuarioCreateManyArgs} args - Arguments to create many MarcacoesUsuarios.
     * @example
     * // Create many MarcacoesUsuarios
     * const marcacoesUsuario = await prisma.marcacoesUsuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarcacoesUsuarioCreateManyArgs>(args?: SelectSubset<T, MarcacoesUsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarcacoesUsuarios and returns the data saved in the database.
     * @param {MarcacoesUsuarioCreateManyAndReturnArgs} args - Arguments to create many MarcacoesUsuarios.
     * @example
     * // Create many MarcacoesUsuarios
     * const marcacoesUsuario = await prisma.marcacoesUsuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarcacoesUsuarios and only return the `id`
     * const marcacoesUsuarioWithIdOnly = await prisma.marcacoesUsuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarcacoesUsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, MarcacoesUsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcacoesUsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MarcacoesUsuario.
     * @param {MarcacoesUsuarioDeleteArgs} args - Arguments to delete one MarcacoesUsuario.
     * @example
     * // Delete one MarcacoesUsuario
     * const MarcacoesUsuario = await prisma.marcacoesUsuario.delete({
     *   where: {
     *     // ... filter to delete one MarcacoesUsuario
     *   }
     * })
     * 
     */
    delete<T extends MarcacoesUsuarioDeleteArgs>(args: SelectSubset<T, MarcacoesUsuarioDeleteArgs<ExtArgs>>): Prisma__MarcacoesUsuarioClient<$Result.GetResult<Prisma.$MarcacoesUsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarcacoesUsuario.
     * @param {MarcacoesUsuarioUpdateArgs} args - Arguments to update one MarcacoesUsuario.
     * @example
     * // Update one MarcacoesUsuario
     * const marcacoesUsuario = await prisma.marcacoesUsuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarcacoesUsuarioUpdateArgs>(args: SelectSubset<T, MarcacoesUsuarioUpdateArgs<ExtArgs>>): Prisma__MarcacoesUsuarioClient<$Result.GetResult<Prisma.$MarcacoesUsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarcacoesUsuarios.
     * @param {MarcacoesUsuarioDeleteManyArgs} args - Arguments to filter MarcacoesUsuarios to delete.
     * @example
     * // Delete a few MarcacoesUsuarios
     * const { count } = await prisma.marcacoesUsuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarcacoesUsuarioDeleteManyArgs>(args?: SelectSubset<T, MarcacoesUsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarcacoesUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcacoesUsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarcacoesUsuarios
     * const marcacoesUsuario = await prisma.marcacoesUsuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarcacoesUsuarioUpdateManyArgs>(args: SelectSubset<T, MarcacoesUsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarcacoesUsuarios and returns the data updated in the database.
     * @param {MarcacoesUsuarioUpdateManyAndReturnArgs} args - Arguments to update many MarcacoesUsuarios.
     * @example
     * // Update many MarcacoesUsuarios
     * const marcacoesUsuario = await prisma.marcacoesUsuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MarcacoesUsuarios and only return the `id`
     * const marcacoesUsuarioWithIdOnly = await prisma.marcacoesUsuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends MarcacoesUsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, MarcacoesUsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcacoesUsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MarcacoesUsuario.
     * @param {MarcacoesUsuarioUpsertArgs} args - Arguments to update or create a MarcacoesUsuario.
     * @example
     * // Update or create a MarcacoesUsuario
     * const marcacoesUsuario = await prisma.marcacoesUsuario.upsert({
     *   create: {
     *     // ... data to create a MarcacoesUsuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarcacoesUsuario we want to update
     *   }
     * })
     */
    upsert<T extends MarcacoesUsuarioUpsertArgs>(args: SelectSubset<T, MarcacoesUsuarioUpsertArgs<ExtArgs>>): Prisma__MarcacoesUsuarioClient<$Result.GetResult<Prisma.$MarcacoesUsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarcacoesUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcacoesUsuarioCountArgs} args - Arguments to filter MarcacoesUsuarios to count.
     * @example
     * // Count the number of MarcacoesUsuarios
     * const count = await prisma.marcacoesUsuario.count({
     *   where: {
     *     // ... the filter for the MarcacoesUsuarios we want to count
     *   }
     * })
    **/
    count<T extends MarcacoesUsuarioCountArgs>(
      args?: Subset<T, MarcacoesUsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarcacoesUsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarcacoesUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcacoesUsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarcacoesUsuarioAggregateArgs>(args: Subset<T, MarcacoesUsuarioAggregateArgs>): Prisma.PrismaPromise<GetMarcacoesUsuarioAggregateType<T>>

    /**
     * Group by MarcacoesUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcacoesUsuarioGroupByArgs} args - Group by arguments.
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
      T extends MarcacoesUsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarcacoesUsuarioGroupByArgs['orderBy'] }
        : { orderBy?: MarcacoesUsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarcacoesUsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarcacoesUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarcacoesUsuario model
   */
  readonly fields: MarcacoesUsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarcacoesUsuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarcacoesUsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the MarcacoesUsuario model
   */
  interface MarcacoesUsuarioFieldRefs {
    readonly id: FieldRef<"MarcacoesUsuario", 'String'>
    readonly pimeiraEntrada: FieldRef<"MarcacoesUsuario", 'DateTime'>
    readonly primeiraSaida: FieldRef<"MarcacoesUsuario", 'DateTime'>
    readonly segundaEntrada: FieldRef<"MarcacoesUsuario", 'DateTime'>
    readonly segundaSaida: FieldRef<"MarcacoesUsuario", 'DateTime'>
    readonly pausaAlmoco: FieldRef<"MarcacoesUsuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MarcacoesUsuario findUnique
   */
  export type MarcacoesUsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcacoesUsuario
     */
    select?: MarcacoesUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcacoesUsuario
     */
    omit?: MarcacoesUsuarioOmit<ExtArgs> | null
    /**
     * Filter, which MarcacoesUsuario to fetch.
     */
    where: MarcacoesUsuarioWhereUniqueInput
  }

  /**
   * MarcacoesUsuario findUniqueOrThrow
   */
  export type MarcacoesUsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcacoesUsuario
     */
    select?: MarcacoesUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcacoesUsuario
     */
    omit?: MarcacoesUsuarioOmit<ExtArgs> | null
    /**
     * Filter, which MarcacoesUsuario to fetch.
     */
    where: MarcacoesUsuarioWhereUniqueInput
  }

  /**
   * MarcacoesUsuario findFirst
   */
  export type MarcacoesUsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcacoesUsuario
     */
    select?: MarcacoesUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcacoesUsuario
     */
    omit?: MarcacoesUsuarioOmit<ExtArgs> | null
    /**
     * Filter, which MarcacoesUsuario to fetch.
     */
    where?: MarcacoesUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarcacoesUsuarios to fetch.
     */
    orderBy?: MarcacoesUsuarioOrderByWithRelationInput | MarcacoesUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarcacoesUsuarios.
     */
    cursor?: MarcacoesUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarcacoesUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarcacoesUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarcacoesUsuarios.
     */
    distinct?: MarcacoesUsuarioScalarFieldEnum | MarcacoesUsuarioScalarFieldEnum[]
  }

  /**
   * MarcacoesUsuario findFirstOrThrow
   */
  export type MarcacoesUsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcacoesUsuario
     */
    select?: MarcacoesUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcacoesUsuario
     */
    omit?: MarcacoesUsuarioOmit<ExtArgs> | null
    /**
     * Filter, which MarcacoesUsuario to fetch.
     */
    where?: MarcacoesUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarcacoesUsuarios to fetch.
     */
    orderBy?: MarcacoesUsuarioOrderByWithRelationInput | MarcacoesUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarcacoesUsuarios.
     */
    cursor?: MarcacoesUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarcacoesUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarcacoesUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarcacoesUsuarios.
     */
    distinct?: MarcacoesUsuarioScalarFieldEnum | MarcacoesUsuarioScalarFieldEnum[]
  }

  /**
   * MarcacoesUsuario findMany
   */
  export type MarcacoesUsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcacoesUsuario
     */
    select?: MarcacoesUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcacoesUsuario
     */
    omit?: MarcacoesUsuarioOmit<ExtArgs> | null
    /**
     * Filter, which MarcacoesUsuarios to fetch.
     */
    where?: MarcacoesUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarcacoesUsuarios to fetch.
     */
    orderBy?: MarcacoesUsuarioOrderByWithRelationInput | MarcacoesUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarcacoesUsuarios.
     */
    cursor?: MarcacoesUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarcacoesUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarcacoesUsuarios.
     */
    skip?: number
    distinct?: MarcacoesUsuarioScalarFieldEnum | MarcacoesUsuarioScalarFieldEnum[]
  }

  /**
   * MarcacoesUsuario create
   */
  export type MarcacoesUsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcacoesUsuario
     */
    select?: MarcacoesUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcacoesUsuario
     */
    omit?: MarcacoesUsuarioOmit<ExtArgs> | null
    /**
     * The data needed to create a MarcacoesUsuario.
     */
    data: XOR<MarcacoesUsuarioCreateInput, MarcacoesUsuarioUncheckedCreateInput>
  }

  /**
   * MarcacoesUsuario createMany
   */
  export type MarcacoesUsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarcacoesUsuarios.
     */
    data: MarcacoesUsuarioCreateManyInput | MarcacoesUsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarcacoesUsuario createManyAndReturn
   */
  export type MarcacoesUsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcacoesUsuario
     */
    select?: MarcacoesUsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarcacoesUsuario
     */
    omit?: MarcacoesUsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many MarcacoesUsuarios.
     */
    data: MarcacoesUsuarioCreateManyInput | MarcacoesUsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarcacoesUsuario update
   */
  export type MarcacoesUsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcacoesUsuario
     */
    select?: MarcacoesUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcacoesUsuario
     */
    omit?: MarcacoesUsuarioOmit<ExtArgs> | null
    /**
     * The data needed to update a MarcacoesUsuario.
     */
    data: XOR<MarcacoesUsuarioUpdateInput, MarcacoesUsuarioUncheckedUpdateInput>
    /**
     * Choose, which MarcacoesUsuario to update.
     */
    where: MarcacoesUsuarioWhereUniqueInput
  }

  /**
   * MarcacoesUsuario updateMany
   */
  export type MarcacoesUsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarcacoesUsuarios.
     */
    data: XOR<MarcacoesUsuarioUpdateManyMutationInput, MarcacoesUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which MarcacoesUsuarios to update
     */
    where?: MarcacoesUsuarioWhereInput
    /**
     * Limit how many MarcacoesUsuarios to update.
     */
    limit?: number
  }

  /**
   * MarcacoesUsuario updateManyAndReturn
   */
  export type MarcacoesUsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcacoesUsuario
     */
    select?: MarcacoesUsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarcacoesUsuario
     */
    omit?: MarcacoesUsuarioOmit<ExtArgs> | null
    /**
     * The data used to update MarcacoesUsuarios.
     */
    data: XOR<MarcacoesUsuarioUpdateManyMutationInput, MarcacoesUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which MarcacoesUsuarios to update
     */
    where?: MarcacoesUsuarioWhereInput
    /**
     * Limit how many MarcacoesUsuarios to update.
     */
    limit?: number
  }

  /**
   * MarcacoesUsuario upsert
   */
  export type MarcacoesUsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcacoesUsuario
     */
    select?: MarcacoesUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcacoesUsuario
     */
    omit?: MarcacoesUsuarioOmit<ExtArgs> | null
    /**
     * The filter to search for the MarcacoesUsuario to update in case it exists.
     */
    where: MarcacoesUsuarioWhereUniqueInput
    /**
     * In case the MarcacoesUsuario found by the `where` argument doesn't exist, create a new MarcacoesUsuario with this data.
     */
    create: XOR<MarcacoesUsuarioCreateInput, MarcacoesUsuarioUncheckedCreateInput>
    /**
     * In case the MarcacoesUsuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarcacoesUsuarioUpdateInput, MarcacoesUsuarioUncheckedUpdateInput>
  }

  /**
   * MarcacoesUsuario delete
   */
  export type MarcacoesUsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcacoesUsuario
     */
    select?: MarcacoesUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcacoesUsuario
     */
    omit?: MarcacoesUsuarioOmit<ExtArgs> | null
    /**
     * Filter which MarcacoesUsuario to delete.
     */
    where: MarcacoesUsuarioWhereUniqueInput
  }

  /**
   * MarcacoesUsuario deleteMany
   */
  export type MarcacoesUsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarcacoesUsuarios to delete
     */
    where?: MarcacoesUsuarioWhereInput
    /**
     * Limit how many MarcacoesUsuarios to delete.
     */
    limit?: number
  }

  /**
   * MarcacoesUsuario without action
   */
  export type MarcacoesUsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcacoesUsuario
     */
    select?: MarcacoesUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarcacoesUsuario
     */
    omit?: MarcacoesUsuarioOmit<ExtArgs> | null
  }


  /**
   * Model EspelhoDePontoMensal
   */

  export type AggregateEspelhoDePontoMensal = {
    _count: EspelhoDePontoMensalCountAggregateOutputType | null
    _avg: EspelhoDePontoMensalAvgAggregateOutputType | null
    _sum: EspelhoDePontoMensalSumAggregateOutputType | null
    _min: EspelhoDePontoMensalMinAggregateOutputType | null
    _max: EspelhoDePontoMensalMaxAggregateOutputType | null
  }

  export type EspelhoDePontoMensalAvgAggregateOutputType = {
    credito: number | null
    debito: number | null
    horasNormais: number | null
    horasExtras: number | null
    saldo: number | null
    horasTrabalhadas: number | null
  }

  export type EspelhoDePontoMensalSumAggregateOutputType = {
    credito: number | null
    debito: number | null
    horasNormais: number | null
    horasExtras: number | null
    saldo: number | null
    horasTrabalhadas: number | null
  }

  export type EspelhoDePontoMensalMinAggregateOutputType = {
    id: string | null
    mesEmAberto: boolean | null
    cpf: string | null
    mesAno: string | null
    diaDoMes: string | null
    credito: number | null
    debito: number | null
    horasNormais: number | null
    horasExtras: number | null
    saldo: number | null
    motivoReajuste: string | null
    data: string | null
    primeiraEntrada: string | null
    primeiraSaida: string | null
    segundaEntrada: string | null
    segundaSaida: string | null
    horasTrabalhadas: number | null
    observacoes: string | null
    status: string | null
    origem: string | null
  }

  export type EspelhoDePontoMensalMaxAggregateOutputType = {
    id: string | null
    mesEmAberto: boolean | null
    cpf: string | null
    mesAno: string | null
    diaDoMes: string | null
    credito: number | null
    debito: number | null
    horasNormais: number | null
    horasExtras: number | null
    saldo: number | null
    motivoReajuste: string | null
    data: string | null
    primeiraEntrada: string | null
    primeiraSaida: string | null
    segundaEntrada: string | null
    segundaSaida: string | null
    horasTrabalhadas: number | null
    observacoes: string | null
    status: string | null
    origem: string | null
  }

  export type EspelhoDePontoMensalCountAggregateOutputType = {
    id: number
    mesEmAberto: number
    cpf: number
    mesAno: number
    diaDoMes: number
    credito: number
    debito: number
    horasNormais: number
    horasExtras: number
    saldo: number
    motivoReajuste: number
    data: number
    primeiraEntrada: number
    primeiraSaida: number
    segundaEntrada: number
    segundaSaida: number
    horasTrabalhadas: number
    observacoes: number
    status: number
    origem: number
    _all: number
  }


  export type EspelhoDePontoMensalAvgAggregateInputType = {
    credito?: true
    debito?: true
    horasNormais?: true
    horasExtras?: true
    saldo?: true
    horasTrabalhadas?: true
  }

  export type EspelhoDePontoMensalSumAggregateInputType = {
    credito?: true
    debito?: true
    horasNormais?: true
    horasExtras?: true
    saldo?: true
    horasTrabalhadas?: true
  }

  export type EspelhoDePontoMensalMinAggregateInputType = {
    id?: true
    mesEmAberto?: true
    cpf?: true
    mesAno?: true
    diaDoMes?: true
    credito?: true
    debito?: true
    horasNormais?: true
    horasExtras?: true
    saldo?: true
    motivoReajuste?: true
    data?: true
    primeiraEntrada?: true
    primeiraSaida?: true
    segundaEntrada?: true
    segundaSaida?: true
    horasTrabalhadas?: true
    observacoes?: true
    status?: true
    origem?: true
  }

  export type EspelhoDePontoMensalMaxAggregateInputType = {
    id?: true
    mesEmAberto?: true
    cpf?: true
    mesAno?: true
    diaDoMes?: true
    credito?: true
    debito?: true
    horasNormais?: true
    horasExtras?: true
    saldo?: true
    motivoReajuste?: true
    data?: true
    primeiraEntrada?: true
    primeiraSaida?: true
    segundaEntrada?: true
    segundaSaida?: true
    horasTrabalhadas?: true
    observacoes?: true
    status?: true
    origem?: true
  }

  export type EspelhoDePontoMensalCountAggregateInputType = {
    id?: true
    mesEmAberto?: true
    cpf?: true
    mesAno?: true
    diaDoMes?: true
    credito?: true
    debito?: true
    horasNormais?: true
    horasExtras?: true
    saldo?: true
    motivoReajuste?: true
    data?: true
    primeiraEntrada?: true
    primeiraSaida?: true
    segundaEntrada?: true
    segundaSaida?: true
    horasTrabalhadas?: true
    observacoes?: true
    status?: true
    origem?: true
    _all?: true
  }

  export type EspelhoDePontoMensalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EspelhoDePontoMensal to aggregate.
     */
    where?: EspelhoDePontoMensalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EspelhoDePontoMensals to fetch.
     */
    orderBy?: EspelhoDePontoMensalOrderByWithRelationInput | EspelhoDePontoMensalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EspelhoDePontoMensalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EspelhoDePontoMensals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EspelhoDePontoMensals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EspelhoDePontoMensals
    **/
    _count?: true | EspelhoDePontoMensalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EspelhoDePontoMensalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EspelhoDePontoMensalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EspelhoDePontoMensalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EspelhoDePontoMensalMaxAggregateInputType
  }

  export type GetEspelhoDePontoMensalAggregateType<T extends EspelhoDePontoMensalAggregateArgs> = {
        [P in keyof T & keyof AggregateEspelhoDePontoMensal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEspelhoDePontoMensal[P]>
      : GetScalarType<T[P], AggregateEspelhoDePontoMensal[P]>
  }




  export type EspelhoDePontoMensalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspelhoDePontoMensalWhereInput
    orderBy?: EspelhoDePontoMensalOrderByWithAggregationInput | EspelhoDePontoMensalOrderByWithAggregationInput[]
    by: EspelhoDePontoMensalScalarFieldEnum[] | EspelhoDePontoMensalScalarFieldEnum
    having?: EspelhoDePontoMensalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EspelhoDePontoMensalCountAggregateInputType | true
    _avg?: EspelhoDePontoMensalAvgAggregateInputType
    _sum?: EspelhoDePontoMensalSumAggregateInputType
    _min?: EspelhoDePontoMensalMinAggregateInputType
    _max?: EspelhoDePontoMensalMaxAggregateInputType
  }

  export type EspelhoDePontoMensalGroupByOutputType = {
    id: string
    mesEmAberto: boolean
    cpf: string
    mesAno: string
    diaDoMes: string
    credito: number
    debito: number
    horasNormais: number
    horasExtras: number
    saldo: number
    motivoReajuste: string | null
    data: string
    primeiraEntrada: string | null
    primeiraSaida: string | null
    segundaEntrada: string | null
    segundaSaida: string | null
    horasTrabalhadas: number
    observacoes: string
    status: string
    origem: string | null
    _count: EspelhoDePontoMensalCountAggregateOutputType | null
    _avg: EspelhoDePontoMensalAvgAggregateOutputType | null
    _sum: EspelhoDePontoMensalSumAggregateOutputType | null
    _min: EspelhoDePontoMensalMinAggregateOutputType | null
    _max: EspelhoDePontoMensalMaxAggregateOutputType | null
  }

  type GetEspelhoDePontoMensalGroupByPayload<T extends EspelhoDePontoMensalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EspelhoDePontoMensalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EspelhoDePontoMensalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EspelhoDePontoMensalGroupByOutputType[P]>
            : GetScalarType<T[P], EspelhoDePontoMensalGroupByOutputType[P]>
        }
      >
    >


  export type EspelhoDePontoMensalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mesEmAberto?: boolean
    cpf?: boolean
    mesAno?: boolean
    diaDoMes?: boolean
    credito?: boolean
    debito?: boolean
    horasNormais?: boolean
    horasExtras?: boolean
    saldo?: boolean
    motivoReajuste?: boolean
    data?: boolean
    primeiraEntrada?: boolean
    primeiraSaida?: boolean
    segundaEntrada?: boolean
    segundaSaida?: boolean
    horasTrabalhadas?: boolean
    observacoes?: boolean
    status?: boolean
    origem?: boolean
  }, ExtArgs["result"]["espelhoDePontoMensal"]>

  export type EspelhoDePontoMensalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mesEmAberto?: boolean
    cpf?: boolean
    mesAno?: boolean
    diaDoMes?: boolean
    credito?: boolean
    debito?: boolean
    horasNormais?: boolean
    horasExtras?: boolean
    saldo?: boolean
    motivoReajuste?: boolean
    data?: boolean
    primeiraEntrada?: boolean
    primeiraSaida?: boolean
    segundaEntrada?: boolean
    segundaSaida?: boolean
    horasTrabalhadas?: boolean
    observacoes?: boolean
    status?: boolean
    origem?: boolean
  }, ExtArgs["result"]["espelhoDePontoMensal"]>

  export type EspelhoDePontoMensalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mesEmAberto?: boolean
    cpf?: boolean
    mesAno?: boolean
    diaDoMes?: boolean
    credito?: boolean
    debito?: boolean
    horasNormais?: boolean
    horasExtras?: boolean
    saldo?: boolean
    motivoReajuste?: boolean
    data?: boolean
    primeiraEntrada?: boolean
    primeiraSaida?: boolean
    segundaEntrada?: boolean
    segundaSaida?: boolean
    horasTrabalhadas?: boolean
    observacoes?: boolean
    status?: boolean
    origem?: boolean
  }, ExtArgs["result"]["espelhoDePontoMensal"]>

  export type EspelhoDePontoMensalSelectScalar = {
    id?: boolean
    mesEmAberto?: boolean
    cpf?: boolean
    mesAno?: boolean
    diaDoMes?: boolean
    credito?: boolean
    debito?: boolean
    horasNormais?: boolean
    horasExtras?: boolean
    saldo?: boolean
    motivoReajuste?: boolean
    data?: boolean
    primeiraEntrada?: boolean
    primeiraSaida?: boolean
    segundaEntrada?: boolean
    segundaSaida?: boolean
    horasTrabalhadas?: boolean
    observacoes?: boolean
    status?: boolean
    origem?: boolean
  }

  export type EspelhoDePontoMensalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mesEmAberto" | "cpf" | "mesAno" | "diaDoMes" | "credito" | "debito" | "horasNormais" | "horasExtras" | "saldo" | "motivoReajuste" | "data" | "primeiraEntrada" | "primeiraSaida" | "segundaEntrada" | "segundaSaida" | "horasTrabalhadas" | "observacoes" | "status" | "origem", ExtArgs["result"]["espelhoDePontoMensal"]>

  export type $EspelhoDePontoMensalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EspelhoDePontoMensal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mesEmAberto: boolean
      cpf: string
      mesAno: string
      diaDoMes: string
      credito: number
      debito: number
      horasNormais: number
      horasExtras: number
      saldo: number
      motivoReajuste: string | null
      data: string
      primeiraEntrada: string | null
      primeiraSaida: string | null
      segundaEntrada: string | null
      segundaSaida: string | null
      horasTrabalhadas: number
      observacoes: string
      status: string
      origem: string | null
    }, ExtArgs["result"]["espelhoDePontoMensal"]>
    composites: {}
  }

  type EspelhoDePontoMensalGetPayload<S extends boolean | null | undefined | EspelhoDePontoMensalDefaultArgs> = $Result.GetResult<Prisma.$EspelhoDePontoMensalPayload, S>

  type EspelhoDePontoMensalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EspelhoDePontoMensalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EspelhoDePontoMensalCountAggregateInputType | true
    }

  export interface EspelhoDePontoMensalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EspelhoDePontoMensal'], meta: { name: 'EspelhoDePontoMensal' } }
    /**
     * Find zero or one EspelhoDePontoMensal that matches the filter.
     * @param {EspelhoDePontoMensalFindUniqueArgs} args - Arguments to find a EspelhoDePontoMensal
     * @example
     * // Get one EspelhoDePontoMensal
     * const espelhoDePontoMensal = await prisma.espelhoDePontoMensal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EspelhoDePontoMensalFindUniqueArgs>(args: SelectSubset<T, EspelhoDePontoMensalFindUniqueArgs<ExtArgs>>): Prisma__EspelhoDePontoMensalClient<$Result.GetResult<Prisma.$EspelhoDePontoMensalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EspelhoDePontoMensal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EspelhoDePontoMensalFindUniqueOrThrowArgs} args - Arguments to find a EspelhoDePontoMensal
     * @example
     * // Get one EspelhoDePontoMensal
     * const espelhoDePontoMensal = await prisma.espelhoDePontoMensal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EspelhoDePontoMensalFindUniqueOrThrowArgs>(args: SelectSubset<T, EspelhoDePontoMensalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EspelhoDePontoMensalClient<$Result.GetResult<Prisma.$EspelhoDePontoMensalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EspelhoDePontoMensal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspelhoDePontoMensalFindFirstArgs} args - Arguments to find a EspelhoDePontoMensal
     * @example
     * // Get one EspelhoDePontoMensal
     * const espelhoDePontoMensal = await prisma.espelhoDePontoMensal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EspelhoDePontoMensalFindFirstArgs>(args?: SelectSubset<T, EspelhoDePontoMensalFindFirstArgs<ExtArgs>>): Prisma__EspelhoDePontoMensalClient<$Result.GetResult<Prisma.$EspelhoDePontoMensalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EspelhoDePontoMensal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspelhoDePontoMensalFindFirstOrThrowArgs} args - Arguments to find a EspelhoDePontoMensal
     * @example
     * // Get one EspelhoDePontoMensal
     * const espelhoDePontoMensal = await prisma.espelhoDePontoMensal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EspelhoDePontoMensalFindFirstOrThrowArgs>(args?: SelectSubset<T, EspelhoDePontoMensalFindFirstOrThrowArgs<ExtArgs>>): Prisma__EspelhoDePontoMensalClient<$Result.GetResult<Prisma.$EspelhoDePontoMensalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EspelhoDePontoMensals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspelhoDePontoMensalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EspelhoDePontoMensals
     * const espelhoDePontoMensals = await prisma.espelhoDePontoMensal.findMany()
     * 
     * // Get first 10 EspelhoDePontoMensals
     * const espelhoDePontoMensals = await prisma.espelhoDePontoMensal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const espelhoDePontoMensalWithIdOnly = await prisma.espelhoDePontoMensal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EspelhoDePontoMensalFindManyArgs>(args?: SelectSubset<T, EspelhoDePontoMensalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspelhoDePontoMensalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EspelhoDePontoMensal.
     * @param {EspelhoDePontoMensalCreateArgs} args - Arguments to create a EspelhoDePontoMensal.
     * @example
     * // Create one EspelhoDePontoMensal
     * const EspelhoDePontoMensal = await prisma.espelhoDePontoMensal.create({
     *   data: {
     *     // ... data to create a EspelhoDePontoMensal
     *   }
     * })
     * 
     */
    create<T extends EspelhoDePontoMensalCreateArgs>(args: SelectSubset<T, EspelhoDePontoMensalCreateArgs<ExtArgs>>): Prisma__EspelhoDePontoMensalClient<$Result.GetResult<Prisma.$EspelhoDePontoMensalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EspelhoDePontoMensals.
     * @param {EspelhoDePontoMensalCreateManyArgs} args - Arguments to create many EspelhoDePontoMensals.
     * @example
     * // Create many EspelhoDePontoMensals
     * const espelhoDePontoMensal = await prisma.espelhoDePontoMensal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EspelhoDePontoMensalCreateManyArgs>(args?: SelectSubset<T, EspelhoDePontoMensalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EspelhoDePontoMensals and returns the data saved in the database.
     * @param {EspelhoDePontoMensalCreateManyAndReturnArgs} args - Arguments to create many EspelhoDePontoMensals.
     * @example
     * // Create many EspelhoDePontoMensals
     * const espelhoDePontoMensal = await prisma.espelhoDePontoMensal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EspelhoDePontoMensals and only return the `id`
     * const espelhoDePontoMensalWithIdOnly = await prisma.espelhoDePontoMensal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EspelhoDePontoMensalCreateManyAndReturnArgs>(args?: SelectSubset<T, EspelhoDePontoMensalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspelhoDePontoMensalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EspelhoDePontoMensal.
     * @param {EspelhoDePontoMensalDeleteArgs} args - Arguments to delete one EspelhoDePontoMensal.
     * @example
     * // Delete one EspelhoDePontoMensal
     * const EspelhoDePontoMensal = await prisma.espelhoDePontoMensal.delete({
     *   where: {
     *     // ... filter to delete one EspelhoDePontoMensal
     *   }
     * })
     * 
     */
    delete<T extends EspelhoDePontoMensalDeleteArgs>(args: SelectSubset<T, EspelhoDePontoMensalDeleteArgs<ExtArgs>>): Prisma__EspelhoDePontoMensalClient<$Result.GetResult<Prisma.$EspelhoDePontoMensalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EspelhoDePontoMensal.
     * @param {EspelhoDePontoMensalUpdateArgs} args - Arguments to update one EspelhoDePontoMensal.
     * @example
     * // Update one EspelhoDePontoMensal
     * const espelhoDePontoMensal = await prisma.espelhoDePontoMensal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EspelhoDePontoMensalUpdateArgs>(args: SelectSubset<T, EspelhoDePontoMensalUpdateArgs<ExtArgs>>): Prisma__EspelhoDePontoMensalClient<$Result.GetResult<Prisma.$EspelhoDePontoMensalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EspelhoDePontoMensals.
     * @param {EspelhoDePontoMensalDeleteManyArgs} args - Arguments to filter EspelhoDePontoMensals to delete.
     * @example
     * // Delete a few EspelhoDePontoMensals
     * const { count } = await prisma.espelhoDePontoMensal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EspelhoDePontoMensalDeleteManyArgs>(args?: SelectSubset<T, EspelhoDePontoMensalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EspelhoDePontoMensals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspelhoDePontoMensalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EspelhoDePontoMensals
     * const espelhoDePontoMensal = await prisma.espelhoDePontoMensal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EspelhoDePontoMensalUpdateManyArgs>(args: SelectSubset<T, EspelhoDePontoMensalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EspelhoDePontoMensals and returns the data updated in the database.
     * @param {EspelhoDePontoMensalUpdateManyAndReturnArgs} args - Arguments to update many EspelhoDePontoMensals.
     * @example
     * // Update many EspelhoDePontoMensals
     * const espelhoDePontoMensal = await prisma.espelhoDePontoMensal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EspelhoDePontoMensals and only return the `id`
     * const espelhoDePontoMensalWithIdOnly = await prisma.espelhoDePontoMensal.updateManyAndReturn({
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
    updateManyAndReturn<T extends EspelhoDePontoMensalUpdateManyAndReturnArgs>(args: SelectSubset<T, EspelhoDePontoMensalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspelhoDePontoMensalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EspelhoDePontoMensal.
     * @param {EspelhoDePontoMensalUpsertArgs} args - Arguments to update or create a EspelhoDePontoMensal.
     * @example
     * // Update or create a EspelhoDePontoMensal
     * const espelhoDePontoMensal = await prisma.espelhoDePontoMensal.upsert({
     *   create: {
     *     // ... data to create a EspelhoDePontoMensal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EspelhoDePontoMensal we want to update
     *   }
     * })
     */
    upsert<T extends EspelhoDePontoMensalUpsertArgs>(args: SelectSubset<T, EspelhoDePontoMensalUpsertArgs<ExtArgs>>): Prisma__EspelhoDePontoMensalClient<$Result.GetResult<Prisma.$EspelhoDePontoMensalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EspelhoDePontoMensals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspelhoDePontoMensalCountArgs} args - Arguments to filter EspelhoDePontoMensals to count.
     * @example
     * // Count the number of EspelhoDePontoMensals
     * const count = await prisma.espelhoDePontoMensal.count({
     *   where: {
     *     // ... the filter for the EspelhoDePontoMensals we want to count
     *   }
     * })
    **/
    count<T extends EspelhoDePontoMensalCountArgs>(
      args?: Subset<T, EspelhoDePontoMensalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EspelhoDePontoMensalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EspelhoDePontoMensal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspelhoDePontoMensalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EspelhoDePontoMensalAggregateArgs>(args: Subset<T, EspelhoDePontoMensalAggregateArgs>): Prisma.PrismaPromise<GetEspelhoDePontoMensalAggregateType<T>>

    /**
     * Group by EspelhoDePontoMensal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspelhoDePontoMensalGroupByArgs} args - Group by arguments.
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
      T extends EspelhoDePontoMensalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EspelhoDePontoMensalGroupByArgs['orderBy'] }
        : { orderBy?: EspelhoDePontoMensalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EspelhoDePontoMensalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspelhoDePontoMensalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EspelhoDePontoMensal model
   */
  readonly fields: EspelhoDePontoMensalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EspelhoDePontoMensal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EspelhoDePontoMensalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the EspelhoDePontoMensal model
   */
  interface EspelhoDePontoMensalFieldRefs {
    readonly id: FieldRef<"EspelhoDePontoMensal", 'String'>
    readonly mesEmAberto: FieldRef<"EspelhoDePontoMensal", 'Boolean'>
    readonly cpf: FieldRef<"EspelhoDePontoMensal", 'String'>
    readonly mesAno: FieldRef<"EspelhoDePontoMensal", 'String'>
    readonly diaDoMes: FieldRef<"EspelhoDePontoMensal", 'String'>
    readonly credito: FieldRef<"EspelhoDePontoMensal", 'Float'>
    readonly debito: FieldRef<"EspelhoDePontoMensal", 'Float'>
    readonly horasNormais: FieldRef<"EspelhoDePontoMensal", 'Float'>
    readonly horasExtras: FieldRef<"EspelhoDePontoMensal", 'Float'>
    readonly saldo: FieldRef<"EspelhoDePontoMensal", 'Float'>
    readonly motivoReajuste: FieldRef<"EspelhoDePontoMensal", 'String'>
    readonly data: FieldRef<"EspelhoDePontoMensal", 'String'>
    readonly primeiraEntrada: FieldRef<"EspelhoDePontoMensal", 'String'>
    readonly primeiraSaida: FieldRef<"EspelhoDePontoMensal", 'String'>
    readonly segundaEntrada: FieldRef<"EspelhoDePontoMensal", 'String'>
    readonly segundaSaida: FieldRef<"EspelhoDePontoMensal", 'String'>
    readonly horasTrabalhadas: FieldRef<"EspelhoDePontoMensal", 'Float'>
    readonly observacoes: FieldRef<"EspelhoDePontoMensal", 'String'>
    readonly status: FieldRef<"EspelhoDePontoMensal", 'String'>
    readonly origem: FieldRef<"EspelhoDePontoMensal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EspelhoDePontoMensal findUnique
   */
  export type EspelhoDePontoMensalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDePontoMensal
     */
    select?: EspelhoDePontoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDePontoMensal
     */
    omit?: EspelhoDePontoMensalOmit<ExtArgs> | null
    /**
     * Filter, which EspelhoDePontoMensal to fetch.
     */
    where: EspelhoDePontoMensalWhereUniqueInput
  }

  /**
   * EspelhoDePontoMensal findUniqueOrThrow
   */
  export type EspelhoDePontoMensalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDePontoMensal
     */
    select?: EspelhoDePontoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDePontoMensal
     */
    omit?: EspelhoDePontoMensalOmit<ExtArgs> | null
    /**
     * Filter, which EspelhoDePontoMensal to fetch.
     */
    where: EspelhoDePontoMensalWhereUniqueInput
  }

  /**
   * EspelhoDePontoMensal findFirst
   */
  export type EspelhoDePontoMensalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDePontoMensal
     */
    select?: EspelhoDePontoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDePontoMensal
     */
    omit?: EspelhoDePontoMensalOmit<ExtArgs> | null
    /**
     * Filter, which EspelhoDePontoMensal to fetch.
     */
    where?: EspelhoDePontoMensalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EspelhoDePontoMensals to fetch.
     */
    orderBy?: EspelhoDePontoMensalOrderByWithRelationInput | EspelhoDePontoMensalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EspelhoDePontoMensals.
     */
    cursor?: EspelhoDePontoMensalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EspelhoDePontoMensals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EspelhoDePontoMensals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EspelhoDePontoMensals.
     */
    distinct?: EspelhoDePontoMensalScalarFieldEnum | EspelhoDePontoMensalScalarFieldEnum[]
  }

  /**
   * EspelhoDePontoMensal findFirstOrThrow
   */
  export type EspelhoDePontoMensalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDePontoMensal
     */
    select?: EspelhoDePontoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDePontoMensal
     */
    omit?: EspelhoDePontoMensalOmit<ExtArgs> | null
    /**
     * Filter, which EspelhoDePontoMensal to fetch.
     */
    where?: EspelhoDePontoMensalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EspelhoDePontoMensals to fetch.
     */
    orderBy?: EspelhoDePontoMensalOrderByWithRelationInput | EspelhoDePontoMensalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EspelhoDePontoMensals.
     */
    cursor?: EspelhoDePontoMensalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EspelhoDePontoMensals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EspelhoDePontoMensals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EspelhoDePontoMensals.
     */
    distinct?: EspelhoDePontoMensalScalarFieldEnum | EspelhoDePontoMensalScalarFieldEnum[]
  }

  /**
   * EspelhoDePontoMensal findMany
   */
  export type EspelhoDePontoMensalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDePontoMensal
     */
    select?: EspelhoDePontoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDePontoMensal
     */
    omit?: EspelhoDePontoMensalOmit<ExtArgs> | null
    /**
     * Filter, which EspelhoDePontoMensals to fetch.
     */
    where?: EspelhoDePontoMensalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EspelhoDePontoMensals to fetch.
     */
    orderBy?: EspelhoDePontoMensalOrderByWithRelationInput | EspelhoDePontoMensalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EspelhoDePontoMensals.
     */
    cursor?: EspelhoDePontoMensalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EspelhoDePontoMensals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EspelhoDePontoMensals.
     */
    skip?: number
    distinct?: EspelhoDePontoMensalScalarFieldEnum | EspelhoDePontoMensalScalarFieldEnum[]
  }

  /**
   * EspelhoDePontoMensal create
   */
  export type EspelhoDePontoMensalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDePontoMensal
     */
    select?: EspelhoDePontoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDePontoMensal
     */
    omit?: EspelhoDePontoMensalOmit<ExtArgs> | null
    /**
     * The data needed to create a EspelhoDePontoMensal.
     */
    data: XOR<EspelhoDePontoMensalCreateInput, EspelhoDePontoMensalUncheckedCreateInput>
  }

  /**
   * EspelhoDePontoMensal createMany
   */
  export type EspelhoDePontoMensalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EspelhoDePontoMensals.
     */
    data: EspelhoDePontoMensalCreateManyInput | EspelhoDePontoMensalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EspelhoDePontoMensal createManyAndReturn
   */
  export type EspelhoDePontoMensalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDePontoMensal
     */
    select?: EspelhoDePontoMensalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDePontoMensal
     */
    omit?: EspelhoDePontoMensalOmit<ExtArgs> | null
    /**
     * The data used to create many EspelhoDePontoMensals.
     */
    data: EspelhoDePontoMensalCreateManyInput | EspelhoDePontoMensalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EspelhoDePontoMensal update
   */
  export type EspelhoDePontoMensalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDePontoMensal
     */
    select?: EspelhoDePontoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDePontoMensal
     */
    omit?: EspelhoDePontoMensalOmit<ExtArgs> | null
    /**
     * The data needed to update a EspelhoDePontoMensal.
     */
    data: XOR<EspelhoDePontoMensalUpdateInput, EspelhoDePontoMensalUncheckedUpdateInput>
    /**
     * Choose, which EspelhoDePontoMensal to update.
     */
    where: EspelhoDePontoMensalWhereUniqueInput
  }

  /**
   * EspelhoDePontoMensal updateMany
   */
  export type EspelhoDePontoMensalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EspelhoDePontoMensals.
     */
    data: XOR<EspelhoDePontoMensalUpdateManyMutationInput, EspelhoDePontoMensalUncheckedUpdateManyInput>
    /**
     * Filter which EspelhoDePontoMensals to update
     */
    where?: EspelhoDePontoMensalWhereInput
    /**
     * Limit how many EspelhoDePontoMensals to update.
     */
    limit?: number
  }

  /**
   * EspelhoDePontoMensal updateManyAndReturn
   */
  export type EspelhoDePontoMensalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDePontoMensal
     */
    select?: EspelhoDePontoMensalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDePontoMensal
     */
    omit?: EspelhoDePontoMensalOmit<ExtArgs> | null
    /**
     * The data used to update EspelhoDePontoMensals.
     */
    data: XOR<EspelhoDePontoMensalUpdateManyMutationInput, EspelhoDePontoMensalUncheckedUpdateManyInput>
    /**
     * Filter which EspelhoDePontoMensals to update
     */
    where?: EspelhoDePontoMensalWhereInput
    /**
     * Limit how many EspelhoDePontoMensals to update.
     */
    limit?: number
  }

  /**
   * EspelhoDePontoMensal upsert
   */
  export type EspelhoDePontoMensalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDePontoMensal
     */
    select?: EspelhoDePontoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDePontoMensal
     */
    omit?: EspelhoDePontoMensalOmit<ExtArgs> | null
    /**
     * The filter to search for the EspelhoDePontoMensal to update in case it exists.
     */
    where: EspelhoDePontoMensalWhereUniqueInput
    /**
     * In case the EspelhoDePontoMensal found by the `where` argument doesn't exist, create a new EspelhoDePontoMensal with this data.
     */
    create: XOR<EspelhoDePontoMensalCreateInput, EspelhoDePontoMensalUncheckedCreateInput>
    /**
     * In case the EspelhoDePontoMensal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EspelhoDePontoMensalUpdateInput, EspelhoDePontoMensalUncheckedUpdateInput>
  }

  /**
   * EspelhoDePontoMensal delete
   */
  export type EspelhoDePontoMensalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDePontoMensal
     */
    select?: EspelhoDePontoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDePontoMensal
     */
    omit?: EspelhoDePontoMensalOmit<ExtArgs> | null
    /**
     * Filter which EspelhoDePontoMensal to delete.
     */
    where: EspelhoDePontoMensalWhereUniqueInput
  }

  /**
   * EspelhoDePontoMensal deleteMany
   */
  export type EspelhoDePontoMensalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EspelhoDePontoMensals to delete
     */
    where?: EspelhoDePontoMensalWhereInput
    /**
     * Limit how many EspelhoDePontoMensals to delete.
     */
    limit?: number
  }

  /**
   * EspelhoDePontoMensal without action
   */
  export type EspelhoDePontoMensalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDePontoMensal
     */
    select?: EspelhoDePontoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDePontoMensal
     */
    omit?: EspelhoDePontoMensalOmit<ExtArgs> | null
  }


  /**
   * Model EspelhoMensal
   */

  export type AggregateEspelhoMensal = {
    _count: EspelhoMensalCountAggregateOutputType | null
    _avg: EspelhoMensalAvgAggregateOutputType | null
    _sum: EspelhoMensalSumAggregateOutputType | null
    _min: EspelhoMensalMinAggregateOutputType | null
    _max: EspelhoMensalMaxAggregateOutputType | null
  }

  export type EspelhoMensalAvgAggregateOutputType = {
    diasUteis: number | null
    diasTrabalhados: number | null
    registrosCorretos: number | null
    ajustesEAbonos: number | null
    faltas: number | null
    totalHorasTrabalhadas: number | null
    totalHorasDevidas: number | null
    saldoHoras: number | null
  }

  export type EspelhoMensalSumAggregateOutputType = {
    diasUteis: number | null
    diasTrabalhados: number | null
    registrosCorretos: number | null
    ajustesEAbonos: number | null
    faltas: number | null
    totalHorasTrabalhadas: number | null
    totalHorasDevidas: number | null
    saldoHoras: number | null
  }

  export type EspelhoMensalMinAggregateOutputType = {
    id: string | null
    cpf: string | null
    mesAno: string | null
    diasUteis: number | null
    diasTrabalhados: number | null
    registrosCorretos: number | null
    ajustesEAbonos: number | null
    faltas: number | null
    totalHorasTrabalhadas: number | null
    totalHorasDevidas: number | null
    saldoHoras: number | null
    dataCriacao: Date | null
    MesAberto: boolean | null
  }

  export type EspelhoMensalMaxAggregateOutputType = {
    id: string | null
    cpf: string | null
    mesAno: string | null
    diasUteis: number | null
    diasTrabalhados: number | null
    registrosCorretos: number | null
    ajustesEAbonos: number | null
    faltas: number | null
    totalHorasTrabalhadas: number | null
    totalHorasDevidas: number | null
    saldoHoras: number | null
    dataCriacao: Date | null
    MesAberto: boolean | null
  }

  export type EspelhoMensalCountAggregateOutputType = {
    id: number
    cpf: number
    mesAno: number
    diasUteis: number
    diasTrabalhados: number
    registrosCorretos: number
    ajustesEAbonos: number
    faltas: number
    totalHorasTrabalhadas: number
    totalHorasDevidas: number
    saldoHoras: number
    dataCriacao: number
    MesAberto: number
    _all: number
  }


  export type EspelhoMensalAvgAggregateInputType = {
    diasUteis?: true
    diasTrabalhados?: true
    registrosCorretos?: true
    ajustesEAbonos?: true
    faltas?: true
    totalHorasTrabalhadas?: true
    totalHorasDevidas?: true
    saldoHoras?: true
  }

  export type EspelhoMensalSumAggregateInputType = {
    diasUteis?: true
    diasTrabalhados?: true
    registrosCorretos?: true
    ajustesEAbonos?: true
    faltas?: true
    totalHorasTrabalhadas?: true
    totalHorasDevidas?: true
    saldoHoras?: true
  }

  export type EspelhoMensalMinAggregateInputType = {
    id?: true
    cpf?: true
    mesAno?: true
    diasUteis?: true
    diasTrabalhados?: true
    registrosCorretos?: true
    ajustesEAbonos?: true
    faltas?: true
    totalHorasTrabalhadas?: true
    totalHorasDevidas?: true
    saldoHoras?: true
    dataCriacao?: true
    MesAberto?: true
  }

  export type EspelhoMensalMaxAggregateInputType = {
    id?: true
    cpf?: true
    mesAno?: true
    diasUteis?: true
    diasTrabalhados?: true
    registrosCorretos?: true
    ajustesEAbonos?: true
    faltas?: true
    totalHorasTrabalhadas?: true
    totalHorasDevidas?: true
    saldoHoras?: true
    dataCriacao?: true
    MesAberto?: true
  }

  export type EspelhoMensalCountAggregateInputType = {
    id?: true
    cpf?: true
    mesAno?: true
    diasUteis?: true
    diasTrabalhados?: true
    registrosCorretos?: true
    ajustesEAbonos?: true
    faltas?: true
    totalHorasTrabalhadas?: true
    totalHorasDevidas?: true
    saldoHoras?: true
    dataCriacao?: true
    MesAberto?: true
    _all?: true
  }

  export type EspelhoMensalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EspelhoMensal to aggregate.
     */
    where?: EspelhoMensalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EspelhoMensals to fetch.
     */
    orderBy?: EspelhoMensalOrderByWithRelationInput | EspelhoMensalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EspelhoMensalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EspelhoMensals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EspelhoMensals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EspelhoMensals
    **/
    _count?: true | EspelhoMensalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EspelhoMensalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EspelhoMensalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EspelhoMensalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EspelhoMensalMaxAggregateInputType
  }

  export type GetEspelhoMensalAggregateType<T extends EspelhoMensalAggregateArgs> = {
        [P in keyof T & keyof AggregateEspelhoMensal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEspelhoMensal[P]>
      : GetScalarType<T[P], AggregateEspelhoMensal[P]>
  }




  export type EspelhoMensalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspelhoMensalWhereInput
    orderBy?: EspelhoMensalOrderByWithAggregationInput | EspelhoMensalOrderByWithAggregationInput[]
    by: EspelhoMensalScalarFieldEnum[] | EspelhoMensalScalarFieldEnum
    having?: EspelhoMensalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EspelhoMensalCountAggregateInputType | true
    _avg?: EspelhoMensalAvgAggregateInputType
    _sum?: EspelhoMensalSumAggregateInputType
    _min?: EspelhoMensalMinAggregateInputType
    _max?: EspelhoMensalMaxAggregateInputType
  }

  export type EspelhoMensalGroupByOutputType = {
    id: string
    cpf: string
    mesAno: string
    diasUteis: number
    diasTrabalhados: number
    registrosCorretos: number | null
    ajustesEAbonos: number | null
    faltas: number | null
    totalHorasTrabalhadas: number
    totalHorasDevidas: number
    saldoHoras: number
    dataCriacao: Date
    MesAberto: boolean
    _count: EspelhoMensalCountAggregateOutputType | null
    _avg: EspelhoMensalAvgAggregateOutputType | null
    _sum: EspelhoMensalSumAggregateOutputType | null
    _min: EspelhoMensalMinAggregateOutputType | null
    _max: EspelhoMensalMaxAggregateOutputType | null
  }

  type GetEspelhoMensalGroupByPayload<T extends EspelhoMensalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EspelhoMensalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EspelhoMensalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EspelhoMensalGroupByOutputType[P]>
            : GetScalarType<T[P], EspelhoMensalGroupByOutputType[P]>
        }
      >
    >


  export type EspelhoMensalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    mesAno?: boolean
    diasUteis?: boolean
    diasTrabalhados?: boolean
    registrosCorretos?: boolean
    ajustesEAbonos?: boolean
    faltas?: boolean
    totalHorasTrabalhadas?: boolean
    totalHorasDevidas?: boolean
    saldoHoras?: boolean
    dataCriacao?: boolean
    MesAberto?: boolean
    registros?: boolean | EspelhoMensal$registrosArgs<ExtArgs>
    _count?: boolean | EspelhoMensalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["espelhoMensal"]>

  export type EspelhoMensalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    mesAno?: boolean
    diasUteis?: boolean
    diasTrabalhados?: boolean
    registrosCorretos?: boolean
    ajustesEAbonos?: boolean
    faltas?: boolean
    totalHorasTrabalhadas?: boolean
    totalHorasDevidas?: boolean
    saldoHoras?: boolean
    dataCriacao?: boolean
    MesAberto?: boolean
  }, ExtArgs["result"]["espelhoMensal"]>

  export type EspelhoMensalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    mesAno?: boolean
    diasUteis?: boolean
    diasTrabalhados?: boolean
    registrosCorretos?: boolean
    ajustesEAbonos?: boolean
    faltas?: boolean
    totalHorasTrabalhadas?: boolean
    totalHorasDevidas?: boolean
    saldoHoras?: boolean
    dataCriacao?: boolean
    MesAberto?: boolean
  }, ExtArgs["result"]["espelhoMensal"]>

  export type EspelhoMensalSelectScalar = {
    id?: boolean
    cpf?: boolean
    mesAno?: boolean
    diasUteis?: boolean
    diasTrabalhados?: boolean
    registrosCorretos?: boolean
    ajustesEAbonos?: boolean
    faltas?: boolean
    totalHorasTrabalhadas?: boolean
    totalHorasDevidas?: boolean
    saldoHoras?: boolean
    dataCriacao?: boolean
    MesAberto?: boolean
  }

  export type EspelhoMensalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cpf" | "mesAno" | "diasUteis" | "diasTrabalhados" | "registrosCorretos" | "ajustesEAbonos" | "faltas" | "totalHorasTrabalhadas" | "totalHorasDevidas" | "saldoHoras" | "dataCriacao" | "MesAberto", ExtArgs["result"]["espelhoMensal"]>
  export type EspelhoMensalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registros?: boolean | EspelhoMensal$registrosArgs<ExtArgs>
    _count?: boolean | EspelhoMensalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EspelhoMensalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EspelhoMensalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EspelhoMensalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EspelhoMensal"
    objects: {
      registros: Prisma.$EspelhoDiarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cpf: string
      mesAno: string
      diasUteis: number
      diasTrabalhados: number
      registrosCorretos: number | null
      ajustesEAbonos: number | null
      faltas: number | null
      totalHorasTrabalhadas: number
      totalHorasDevidas: number
      saldoHoras: number
      dataCriacao: Date
      MesAberto: boolean
    }, ExtArgs["result"]["espelhoMensal"]>
    composites: {}
  }

  type EspelhoMensalGetPayload<S extends boolean | null | undefined | EspelhoMensalDefaultArgs> = $Result.GetResult<Prisma.$EspelhoMensalPayload, S>

  type EspelhoMensalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EspelhoMensalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EspelhoMensalCountAggregateInputType | true
    }

  export interface EspelhoMensalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EspelhoMensal'], meta: { name: 'EspelhoMensal' } }
    /**
     * Find zero or one EspelhoMensal that matches the filter.
     * @param {EspelhoMensalFindUniqueArgs} args - Arguments to find a EspelhoMensal
     * @example
     * // Get one EspelhoMensal
     * const espelhoMensal = await prisma.espelhoMensal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EspelhoMensalFindUniqueArgs>(args: SelectSubset<T, EspelhoMensalFindUniqueArgs<ExtArgs>>): Prisma__EspelhoMensalClient<$Result.GetResult<Prisma.$EspelhoMensalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EspelhoMensal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EspelhoMensalFindUniqueOrThrowArgs} args - Arguments to find a EspelhoMensal
     * @example
     * // Get one EspelhoMensal
     * const espelhoMensal = await prisma.espelhoMensal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EspelhoMensalFindUniqueOrThrowArgs>(args: SelectSubset<T, EspelhoMensalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EspelhoMensalClient<$Result.GetResult<Prisma.$EspelhoMensalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EspelhoMensal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspelhoMensalFindFirstArgs} args - Arguments to find a EspelhoMensal
     * @example
     * // Get one EspelhoMensal
     * const espelhoMensal = await prisma.espelhoMensal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EspelhoMensalFindFirstArgs>(args?: SelectSubset<T, EspelhoMensalFindFirstArgs<ExtArgs>>): Prisma__EspelhoMensalClient<$Result.GetResult<Prisma.$EspelhoMensalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EspelhoMensal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspelhoMensalFindFirstOrThrowArgs} args - Arguments to find a EspelhoMensal
     * @example
     * // Get one EspelhoMensal
     * const espelhoMensal = await prisma.espelhoMensal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EspelhoMensalFindFirstOrThrowArgs>(args?: SelectSubset<T, EspelhoMensalFindFirstOrThrowArgs<ExtArgs>>): Prisma__EspelhoMensalClient<$Result.GetResult<Prisma.$EspelhoMensalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EspelhoMensals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspelhoMensalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EspelhoMensals
     * const espelhoMensals = await prisma.espelhoMensal.findMany()
     * 
     * // Get first 10 EspelhoMensals
     * const espelhoMensals = await prisma.espelhoMensal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const espelhoMensalWithIdOnly = await prisma.espelhoMensal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EspelhoMensalFindManyArgs>(args?: SelectSubset<T, EspelhoMensalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspelhoMensalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EspelhoMensal.
     * @param {EspelhoMensalCreateArgs} args - Arguments to create a EspelhoMensal.
     * @example
     * // Create one EspelhoMensal
     * const EspelhoMensal = await prisma.espelhoMensal.create({
     *   data: {
     *     // ... data to create a EspelhoMensal
     *   }
     * })
     * 
     */
    create<T extends EspelhoMensalCreateArgs>(args: SelectSubset<T, EspelhoMensalCreateArgs<ExtArgs>>): Prisma__EspelhoMensalClient<$Result.GetResult<Prisma.$EspelhoMensalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EspelhoMensals.
     * @param {EspelhoMensalCreateManyArgs} args - Arguments to create many EspelhoMensals.
     * @example
     * // Create many EspelhoMensals
     * const espelhoMensal = await prisma.espelhoMensal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EspelhoMensalCreateManyArgs>(args?: SelectSubset<T, EspelhoMensalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EspelhoMensals and returns the data saved in the database.
     * @param {EspelhoMensalCreateManyAndReturnArgs} args - Arguments to create many EspelhoMensals.
     * @example
     * // Create many EspelhoMensals
     * const espelhoMensal = await prisma.espelhoMensal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EspelhoMensals and only return the `id`
     * const espelhoMensalWithIdOnly = await prisma.espelhoMensal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EspelhoMensalCreateManyAndReturnArgs>(args?: SelectSubset<T, EspelhoMensalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspelhoMensalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EspelhoMensal.
     * @param {EspelhoMensalDeleteArgs} args - Arguments to delete one EspelhoMensal.
     * @example
     * // Delete one EspelhoMensal
     * const EspelhoMensal = await prisma.espelhoMensal.delete({
     *   where: {
     *     // ... filter to delete one EspelhoMensal
     *   }
     * })
     * 
     */
    delete<T extends EspelhoMensalDeleteArgs>(args: SelectSubset<T, EspelhoMensalDeleteArgs<ExtArgs>>): Prisma__EspelhoMensalClient<$Result.GetResult<Prisma.$EspelhoMensalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EspelhoMensal.
     * @param {EspelhoMensalUpdateArgs} args - Arguments to update one EspelhoMensal.
     * @example
     * // Update one EspelhoMensal
     * const espelhoMensal = await prisma.espelhoMensal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EspelhoMensalUpdateArgs>(args: SelectSubset<T, EspelhoMensalUpdateArgs<ExtArgs>>): Prisma__EspelhoMensalClient<$Result.GetResult<Prisma.$EspelhoMensalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EspelhoMensals.
     * @param {EspelhoMensalDeleteManyArgs} args - Arguments to filter EspelhoMensals to delete.
     * @example
     * // Delete a few EspelhoMensals
     * const { count } = await prisma.espelhoMensal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EspelhoMensalDeleteManyArgs>(args?: SelectSubset<T, EspelhoMensalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EspelhoMensals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspelhoMensalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EspelhoMensals
     * const espelhoMensal = await prisma.espelhoMensal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EspelhoMensalUpdateManyArgs>(args: SelectSubset<T, EspelhoMensalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EspelhoMensals and returns the data updated in the database.
     * @param {EspelhoMensalUpdateManyAndReturnArgs} args - Arguments to update many EspelhoMensals.
     * @example
     * // Update many EspelhoMensals
     * const espelhoMensal = await prisma.espelhoMensal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EspelhoMensals and only return the `id`
     * const espelhoMensalWithIdOnly = await prisma.espelhoMensal.updateManyAndReturn({
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
    updateManyAndReturn<T extends EspelhoMensalUpdateManyAndReturnArgs>(args: SelectSubset<T, EspelhoMensalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspelhoMensalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EspelhoMensal.
     * @param {EspelhoMensalUpsertArgs} args - Arguments to update or create a EspelhoMensal.
     * @example
     * // Update or create a EspelhoMensal
     * const espelhoMensal = await prisma.espelhoMensal.upsert({
     *   create: {
     *     // ... data to create a EspelhoMensal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EspelhoMensal we want to update
     *   }
     * })
     */
    upsert<T extends EspelhoMensalUpsertArgs>(args: SelectSubset<T, EspelhoMensalUpsertArgs<ExtArgs>>): Prisma__EspelhoMensalClient<$Result.GetResult<Prisma.$EspelhoMensalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EspelhoMensals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspelhoMensalCountArgs} args - Arguments to filter EspelhoMensals to count.
     * @example
     * // Count the number of EspelhoMensals
     * const count = await prisma.espelhoMensal.count({
     *   where: {
     *     // ... the filter for the EspelhoMensals we want to count
     *   }
     * })
    **/
    count<T extends EspelhoMensalCountArgs>(
      args?: Subset<T, EspelhoMensalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EspelhoMensalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EspelhoMensal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspelhoMensalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EspelhoMensalAggregateArgs>(args: Subset<T, EspelhoMensalAggregateArgs>): Prisma.PrismaPromise<GetEspelhoMensalAggregateType<T>>

    /**
     * Group by EspelhoMensal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspelhoMensalGroupByArgs} args - Group by arguments.
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
      T extends EspelhoMensalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EspelhoMensalGroupByArgs['orderBy'] }
        : { orderBy?: EspelhoMensalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EspelhoMensalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspelhoMensalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EspelhoMensal model
   */
  readonly fields: EspelhoMensalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EspelhoMensal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EspelhoMensalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registros<T extends EspelhoMensal$registrosArgs<ExtArgs> = {}>(args?: Subset<T, EspelhoMensal$registrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspelhoDiarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EspelhoMensal model
   */
  interface EspelhoMensalFieldRefs {
    readonly id: FieldRef<"EspelhoMensal", 'String'>
    readonly cpf: FieldRef<"EspelhoMensal", 'String'>
    readonly mesAno: FieldRef<"EspelhoMensal", 'String'>
    readonly diasUteis: FieldRef<"EspelhoMensal", 'Int'>
    readonly diasTrabalhados: FieldRef<"EspelhoMensal", 'Int'>
    readonly registrosCorretos: FieldRef<"EspelhoMensal", 'Int'>
    readonly ajustesEAbonos: FieldRef<"EspelhoMensal", 'Int'>
    readonly faltas: FieldRef<"EspelhoMensal", 'Int'>
    readonly totalHorasTrabalhadas: FieldRef<"EspelhoMensal", 'Float'>
    readonly totalHorasDevidas: FieldRef<"EspelhoMensal", 'Float'>
    readonly saldoHoras: FieldRef<"EspelhoMensal", 'Float'>
    readonly dataCriacao: FieldRef<"EspelhoMensal", 'DateTime'>
    readonly MesAberto: FieldRef<"EspelhoMensal", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * EspelhoMensal findUnique
   */
  export type EspelhoMensalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoMensal
     */
    select?: EspelhoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoMensal
     */
    omit?: EspelhoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspelhoMensalInclude<ExtArgs> | null
    /**
     * Filter, which EspelhoMensal to fetch.
     */
    where: EspelhoMensalWhereUniqueInput
  }

  /**
   * EspelhoMensal findUniqueOrThrow
   */
  export type EspelhoMensalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoMensal
     */
    select?: EspelhoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoMensal
     */
    omit?: EspelhoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspelhoMensalInclude<ExtArgs> | null
    /**
     * Filter, which EspelhoMensal to fetch.
     */
    where: EspelhoMensalWhereUniqueInput
  }

  /**
   * EspelhoMensal findFirst
   */
  export type EspelhoMensalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoMensal
     */
    select?: EspelhoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoMensal
     */
    omit?: EspelhoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspelhoMensalInclude<ExtArgs> | null
    /**
     * Filter, which EspelhoMensal to fetch.
     */
    where?: EspelhoMensalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EspelhoMensals to fetch.
     */
    orderBy?: EspelhoMensalOrderByWithRelationInput | EspelhoMensalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EspelhoMensals.
     */
    cursor?: EspelhoMensalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EspelhoMensals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EspelhoMensals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EspelhoMensals.
     */
    distinct?: EspelhoMensalScalarFieldEnum | EspelhoMensalScalarFieldEnum[]
  }

  /**
   * EspelhoMensal findFirstOrThrow
   */
  export type EspelhoMensalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoMensal
     */
    select?: EspelhoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoMensal
     */
    omit?: EspelhoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspelhoMensalInclude<ExtArgs> | null
    /**
     * Filter, which EspelhoMensal to fetch.
     */
    where?: EspelhoMensalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EspelhoMensals to fetch.
     */
    orderBy?: EspelhoMensalOrderByWithRelationInput | EspelhoMensalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EspelhoMensals.
     */
    cursor?: EspelhoMensalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EspelhoMensals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EspelhoMensals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EspelhoMensals.
     */
    distinct?: EspelhoMensalScalarFieldEnum | EspelhoMensalScalarFieldEnum[]
  }

  /**
   * EspelhoMensal findMany
   */
  export type EspelhoMensalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoMensal
     */
    select?: EspelhoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoMensal
     */
    omit?: EspelhoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspelhoMensalInclude<ExtArgs> | null
    /**
     * Filter, which EspelhoMensals to fetch.
     */
    where?: EspelhoMensalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EspelhoMensals to fetch.
     */
    orderBy?: EspelhoMensalOrderByWithRelationInput | EspelhoMensalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EspelhoMensals.
     */
    cursor?: EspelhoMensalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EspelhoMensals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EspelhoMensals.
     */
    skip?: number
    distinct?: EspelhoMensalScalarFieldEnum | EspelhoMensalScalarFieldEnum[]
  }

  /**
   * EspelhoMensal create
   */
  export type EspelhoMensalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoMensal
     */
    select?: EspelhoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoMensal
     */
    omit?: EspelhoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspelhoMensalInclude<ExtArgs> | null
    /**
     * The data needed to create a EspelhoMensal.
     */
    data: XOR<EspelhoMensalCreateInput, EspelhoMensalUncheckedCreateInput>
  }

  /**
   * EspelhoMensal createMany
   */
  export type EspelhoMensalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EspelhoMensals.
     */
    data: EspelhoMensalCreateManyInput | EspelhoMensalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EspelhoMensal createManyAndReturn
   */
  export type EspelhoMensalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoMensal
     */
    select?: EspelhoMensalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoMensal
     */
    omit?: EspelhoMensalOmit<ExtArgs> | null
    /**
     * The data used to create many EspelhoMensals.
     */
    data: EspelhoMensalCreateManyInput | EspelhoMensalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EspelhoMensal update
   */
  export type EspelhoMensalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoMensal
     */
    select?: EspelhoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoMensal
     */
    omit?: EspelhoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspelhoMensalInclude<ExtArgs> | null
    /**
     * The data needed to update a EspelhoMensal.
     */
    data: XOR<EspelhoMensalUpdateInput, EspelhoMensalUncheckedUpdateInput>
    /**
     * Choose, which EspelhoMensal to update.
     */
    where: EspelhoMensalWhereUniqueInput
  }

  /**
   * EspelhoMensal updateMany
   */
  export type EspelhoMensalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EspelhoMensals.
     */
    data: XOR<EspelhoMensalUpdateManyMutationInput, EspelhoMensalUncheckedUpdateManyInput>
    /**
     * Filter which EspelhoMensals to update
     */
    where?: EspelhoMensalWhereInput
    /**
     * Limit how many EspelhoMensals to update.
     */
    limit?: number
  }

  /**
   * EspelhoMensal updateManyAndReturn
   */
  export type EspelhoMensalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoMensal
     */
    select?: EspelhoMensalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoMensal
     */
    omit?: EspelhoMensalOmit<ExtArgs> | null
    /**
     * The data used to update EspelhoMensals.
     */
    data: XOR<EspelhoMensalUpdateManyMutationInput, EspelhoMensalUncheckedUpdateManyInput>
    /**
     * Filter which EspelhoMensals to update
     */
    where?: EspelhoMensalWhereInput
    /**
     * Limit how many EspelhoMensals to update.
     */
    limit?: number
  }

  /**
   * EspelhoMensal upsert
   */
  export type EspelhoMensalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoMensal
     */
    select?: EspelhoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoMensal
     */
    omit?: EspelhoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspelhoMensalInclude<ExtArgs> | null
    /**
     * The filter to search for the EspelhoMensal to update in case it exists.
     */
    where: EspelhoMensalWhereUniqueInput
    /**
     * In case the EspelhoMensal found by the `where` argument doesn't exist, create a new EspelhoMensal with this data.
     */
    create: XOR<EspelhoMensalCreateInput, EspelhoMensalUncheckedCreateInput>
    /**
     * In case the EspelhoMensal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EspelhoMensalUpdateInput, EspelhoMensalUncheckedUpdateInput>
  }

  /**
   * EspelhoMensal delete
   */
  export type EspelhoMensalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoMensal
     */
    select?: EspelhoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoMensal
     */
    omit?: EspelhoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspelhoMensalInclude<ExtArgs> | null
    /**
     * Filter which EspelhoMensal to delete.
     */
    where: EspelhoMensalWhereUniqueInput
  }

  /**
   * EspelhoMensal deleteMany
   */
  export type EspelhoMensalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EspelhoMensals to delete
     */
    where?: EspelhoMensalWhereInput
    /**
     * Limit how many EspelhoMensals to delete.
     */
    limit?: number
  }

  /**
   * EspelhoMensal.registros
   */
  export type EspelhoMensal$registrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoDiario
     */
    select?: EspelhoDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoDiario
     */
    omit?: EspelhoDiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspelhoDiarioInclude<ExtArgs> | null
    where?: EspelhoDiarioWhereInput
    orderBy?: EspelhoDiarioOrderByWithRelationInput | EspelhoDiarioOrderByWithRelationInput[]
    cursor?: EspelhoDiarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EspelhoDiarioScalarFieldEnum | EspelhoDiarioScalarFieldEnum[]
  }

  /**
   * EspelhoMensal without action
   */
  export type EspelhoMensalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspelhoMensal
     */
    select?: EspelhoMensalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspelhoMensal
     */
    omit?: EspelhoMensalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspelhoMensalInclude<ExtArgs> | null
  }


  /**
   * Model Frequencia
   */

  export type AggregateFrequencia = {
    _count: FrequenciaCountAggregateOutputType | null
    _min: FrequenciaMinAggregateOutputType | null
    _max: FrequenciaMaxAggregateOutputType | null
  }

  export type FrequenciaMinAggregateOutputType = {
    id: string | null
    cpf: string | null
    data: Date | null
    primeiraEntrada: Date | null
    primeiraSaida: Date | null
    segundaEntrada: Date | null
    segundaSaida: Date | null
  }

  export type FrequenciaMaxAggregateOutputType = {
    id: string | null
    cpf: string | null
    data: Date | null
    primeiraEntrada: Date | null
    primeiraSaida: Date | null
    segundaEntrada: Date | null
    segundaSaida: Date | null
  }

  export type FrequenciaCountAggregateOutputType = {
    id: number
    cpf: number
    data: number
    primeiraEntrada: number
    primeiraSaida: number
    segundaEntrada: number
    segundaSaida: number
    _all: number
  }


  export type FrequenciaMinAggregateInputType = {
    id?: true
    cpf?: true
    data?: true
    primeiraEntrada?: true
    primeiraSaida?: true
    segundaEntrada?: true
    segundaSaida?: true
  }

  export type FrequenciaMaxAggregateInputType = {
    id?: true
    cpf?: true
    data?: true
    primeiraEntrada?: true
    primeiraSaida?: true
    segundaEntrada?: true
    segundaSaida?: true
  }

  export type FrequenciaCountAggregateInputType = {
    id?: true
    cpf?: true
    data?: true
    primeiraEntrada?: true
    primeiraSaida?: true
    segundaEntrada?: true
    segundaSaida?: true
    _all?: true
  }

  export type FrequenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Frequencia to aggregate.
     */
    where?: FrequenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frequencias to fetch.
     */
    orderBy?: FrequenciaOrderByWithRelationInput | FrequenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FrequenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frequencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frequencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Frequencias
    **/
    _count?: true | FrequenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FrequenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FrequenciaMaxAggregateInputType
  }

  export type GetFrequenciaAggregateType<T extends FrequenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateFrequencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFrequencia[P]>
      : GetScalarType<T[P], AggregateFrequencia[P]>
  }




  export type FrequenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FrequenciaWhereInput
    orderBy?: FrequenciaOrderByWithAggregationInput | FrequenciaOrderByWithAggregationInput[]
    by: FrequenciaScalarFieldEnum[] | FrequenciaScalarFieldEnum
    having?: FrequenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FrequenciaCountAggregateInputType | true
    _min?: FrequenciaMinAggregateInputType
    _max?: FrequenciaMaxAggregateInputType
  }

  export type FrequenciaGroupByOutputType = {
    id: string
    cpf: string
    data: Date
    primeiraEntrada: Date | null
    primeiraSaida: Date | null
    segundaEntrada: Date | null
    segundaSaida: Date | null
    _count: FrequenciaCountAggregateOutputType | null
    _min: FrequenciaMinAggregateOutputType | null
    _max: FrequenciaMaxAggregateOutputType | null
  }

  type GetFrequenciaGroupByPayload<T extends FrequenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FrequenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FrequenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FrequenciaGroupByOutputType[P]>
            : GetScalarType<T[P], FrequenciaGroupByOutputType[P]>
        }
      >
    >


  export type FrequenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    data?: boolean
    primeiraEntrada?: boolean
    primeiraSaida?: boolean
    segundaEntrada?: boolean
    segundaSaida?: boolean
  }, ExtArgs["result"]["frequencia"]>

  export type FrequenciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    data?: boolean
    primeiraEntrada?: boolean
    primeiraSaida?: boolean
    segundaEntrada?: boolean
    segundaSaida?: boolean
  }, ExtArgs["result"]["frequencia"]>

  export type FrequenciaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    data?: boolean
    primeiraEntrada?: boolean
    primeiraSaida?: boolean
    segundaEntrada?: boolean
    segundaSaida?: boolean
  }, ExtArgs["result"]["frequencia"]>

  export type FrequenciaSelectScalar = {
    id?: boolean
    cpf?: boolean
    data?: boolean
    primeiraEntrada?: boolean
    primeiraSaida?: boolean
    segundaEntrada?: boolean
    segundaSaida?: boolean
  }

  export type FrequenciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cpf" | "data" | "primeiraEntrada" | "primeiraSaida" | "segundaEntrada" | "segundaSaida", ExtArgs["result"]["frequencia"]>

  export type $FrequenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Frequencia"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cpf: string
      data: Date
      primeiraEntrada: Date | null
      primeiraSaida: Date | null
      segundaEntrada: Date | null
      segundaSaida: Date | null
    }, ExtArgs["result"]["frequencia"]>
    composites: {}
  }

  type FrequenciaGetPayload<S extends boolean | null | undefined | FrequenciaDefaultArgs> = $Result.GetResult<Prisma.$FrequenciaPayload, S>

  type FrequenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FrequenciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FrequenciaCountAggregateInputType | true
    }

  export interface FrequenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Frequencia'], meta: { name: 'Frequencia' } }
    /**
     * Find zero or one Frequencia that matches the filter.
     * @param {FrequenciaFindUniqueArgs} args - Arguments to find a Frequencia
     * @example
     * // Get one Frequencia
     * const frequencia = await prisma.frequencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FrequenciaFindUniqueArgs>(args: SelectSubset<T, FrequenciaFindUniqueArgs<ExtArgs>>): Prisma__FrequenciaClient<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Frequencia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FrequenciaFindUniqueOrThrowArgs} args - Arguments to find a Frequencia
     * @example
     * // Get one Frequencia
     * const frequencia = await prisma.frequencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FrequenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, FrequenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FrequenciaClient<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Frequencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequenciaFindFirstArgs} args - Arguments to find a Frequencia
     * @example
     * // Get one Frequencia
     * const frequencia = await prisma.frequencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FrequenciaFindFirstArgs>(args?: SelectSubset<T, FrequenciaFindFirstArgs<ExtArgs>>): Prisma__FrequenciaClient<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Frequencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequenciaFindFirstOrThrowArgs} args - Arguments to find a Frequencia
     * @example
     * // Get one Frequencia
     * const frequencia = await prisma.frequencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FrequenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, FrequenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FrequenciaClient<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Frequencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Frequencias
     * const frequencias = await prisma.frequencia.findMany()
     * 
     * // Get first 10 Frequencias
     * const frequencias = await prisma.frequencia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const frequenciaWithIdOnly = await prisma.frequencia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FrequenciaFindManyArgs>(args?: SelectSubset<T, FrequenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Frequencia.
     * @param {FrequenciaCreateArgs} args - Arguments to create a Frequencia.
     * @example
     * // Create one Frequencia
     * const Frequencia = await prisma.frequencia.create({
     *   data: {
     *     // ... data to create a Frequencia
     *   }
     * })
     * 
     */
    create<T extends FrequenciaCreateArgs>(args: SelectSubset<T, FrequenciaCreateArgs<ExtArgs>>): Prisma__FrequenciaClient<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Frequencias.
     * @param {FrequenciaCreateManyArgs} args - Arguments to create many Frequencias.
     * @example
     * // Create many Frequencias
     * const frequencia = await prisma.frequencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FrequenciaCreateManyArgs>(args?: SelectSubset<T, FrequenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Frequencias and returns the data saved in the database.
     * @param {FrequenciaCreateManyAndReturnArgs} args - Arguments to create many Frequencias.
     * @example
     * // Create many Frequencias
     * const frequencia = await prisma.frequencia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Frequencias and only return the `id`
     * const frequenciaWithIdOnly = await prisma.frequencia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FrequenciaCreateManyAndReturnArgs>(args?: SelectSubset<T, FrequenciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Frequencia.
     * @param {FrequenciaDeleteArgs} args - Arguments to delete one Frequencia.
     * @example
     * // Delete one Frequencia
     * const Frequencia = await prisma.frequencia.delete({
     *   where: {
     *     // ... filter to delete one Frequencia
     *   }
     * })
     * 
     */
    delete<T extends FrequenciaDeleteArgs>(args: SelectSubset<T, FrequenciaDeleteArgs<ExtArgs>>): Prisma__FrequenciaClient<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Frequencia.
     * @param {FrequenciaUpdateArgs} args - Arguments to update one Frequencia.
     * @example
     * // Update one Frequencia
     * const frequencia = await prisma.frequencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FrequenciaUpdateArgs>(args: SelectSubset<T, FrequenciaUpdateArgs<ExtArgs>>): Prisma__FrequenciaClient<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Frequencias.
     * @param {FrequenciaDeleteManyArgs} args - Arguments to filter Frequencias to delete.
     * @example
     * // Delete a few Frequencias
     * const { count } = await prisma.frequencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FrequenciaDeleteManyArgs>(args?: SelectSubset<T, FrequenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Frequencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Frequencias
     * const frequencia = await prisma.frequencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FrequenciaUpdateManyArgs>(args: SelectSubset<T, FrequenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Frequencias and returns the data updated in the database.
     * @param {FrequenciaUpdateManyAndReturnArgs} args - Arguments to update many Frequencias.
     * @example
     * // Update many Frequencias
     * const frequencia = await prisma.frequencia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Frequencias and only return the `id`
     * const frequenciaWithIdOnly = await prisma.frequencia.updateManyAndReturn({
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
    updateManyAndReturn<T extends FrequenciaUpdateManyAndReturnArgs>(args: SelectSubset<T, FrequenciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Frequencia.
     * @param {FrequenciaUpsertArgs} args - Arguments to update or create a Frequencia.
     * @example
     * // Update or create a Frequencia
     * const frequencia = await prisma.frequencia.upsert({
     *   create: {
     *     // ... data to create a Frequencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Frequencia we want to update
     *   }
     * })
     */
    upsert<T extends FrequenciaUpsertArgs>(args: SelectSubset<T, FrequenciaUpsertArgs<ExtArgs>>): Prisma__FrequenciaClient<$Result.GetResult<Prisma.$FrequenciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Frequencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequenciaCountArgs} args - Arguments to filter Frequencias to count.
     * @example
     * // Count the number of Frequencias
     * const count = await prisma.frequencia.count({
     *   where: {
     *     // ... the filter for the Frequencias we want to count
     *   }
     * })
    **/
    count<T extends FrequenciaCountArgs>(
      args?: Subset<T, FrequenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FrequenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Frequencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FrequenciaAggregateArgs>(args: Subset<T, FrequenciaAggregateArgs>): Prisma.PrismaPromise<GetFrequenciaAggregateType<T>>

    /**
     * Group by Frequencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrequenciaGroupByArgs} args - Group by arguments.
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
      T extends FrequenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FrequenciaGroupByArgs['orderBy'] }
        : { orderBy?: FrequenciaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FrequenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFrequenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Frequencia model
   */
  readonly fields: FrequenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Frequencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FrequenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Frequencia model
   */
  interface FrequenciaFieldRefs {
    readonly id: FieldRef<"Frequencia", 'String'>
    readonly cpf: FieldRef<"Frequencia", 'String'>
    readonly data: FieldRef<"Frequencia", 'DateTime'>
    readonly primeiraEntrada: FieldRef<"Frequencia", 'DateTime'>
    readonly primeiraSaida: FieldRef<"Frequencia", 'DateTime'>
    readonly segundaEntrada: FieldRef<"Frequencia", 'DateTime'>
    readonly segundaSaida: FieldRef<"Frequencia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Frequencia findUnique
   */
  export type FrequenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Filter, which Frequencia to fetch.
     */
    where: FrequenciaWhereUniqueInput
  }

  /**
   * Frequencia findUniqueOrThrow
   */
  export type FrequenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Filter, which Frequencia to fetch.
     */
    where: FrequenciaWhereUniqueInput
  }

  /**
   * Frequencia findFirst
   */
  export type FrequenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Filter, which Frequencia to fetch.
     */
    where?: FrequenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frequencias to fetch.
     */
    orderBy?: FrequenciaOrderByWithRelationInput | FrequenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Frequencias.
     */
    cursor?: FrequenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frequencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frequencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Frequencias.
     */
    distinct?: FrequenciaScalarFieldEnum | FrequenciaScalarFieldEnum[]
  }

  /**
   * Frequencia findFirstOrThrow
   */
  export type FrequenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Filter, which Frequencia to fetch.
     */
    where?: FrequenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frequencias to fetch.
     */
    orderBy?: FrequenciaOrderByWithRelationInput | FrequenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Frequencias.
     */
    cursor?: FrequenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frequencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frequencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Frequencias.
     */
    distinct?: FrequenciaScalarFieldEnum | FrequenciaScalarFieldEnum[]
  }

  /**
   * Frequencia findMany
   */
  export type FrequenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Filter, which Frequencias to fetch.
     */
    where?: FrequenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Frequencias to fetch.
     */
    orderBy?: FrequenciaOrderByWithRelationInput | FrequenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Frequencias.
     */
    cursor?: FrequenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Frequencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Frequencias.
     */
    skip?: number
    distinct?: FrequenciaScalarFieldEnum | FrequenciaScalarFieldEnum[]
  }

  /**
   * Frequencia create
   */
  export type FrequenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * The data needed to create a Frequencia.
     */
    data: XOR<FrequenciaCreateInput, FrequenciaUncheckedCreateInput>
  }

  /**
   * Frequencia createMany
   */
  export type FrequenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Frequencias.
     */
    data: FrequenciaCreateManyInput | FrequenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Frequencia createManyAndReturn
   */
  export type FrequenciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * The data used to create many Frequencias.
     */
    data: FrequenciaCreateManyInput | FrequenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Frequencia update
   */
  export type FrequenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * The data needed to update a Frequencia.
     */
    data: XOR<FrequenciaUpdateInput, FrequenciaUncheckedUpdateInput>
    /**
     * Choose, which Frequencia to update.
     */
    where: FrequenciaWhereUniqueInput
  }

  /**
   * Frequencia updateMany
   */
  export type FrequenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Frequencias.
     */
    data: XOR<FrequenciaUpdateManyMutationInput, FrequenciaUncheckedUpdateManyInput>
    /**
     * Filter which Frequencias to update
     */
    where?: FrequenciaWhereInput
    /**
     * Limit how many Frequencias to update.
     */
    limit?: number
  }

  /**
   * Frequencia updateManyAndReturn
   */
  export type FrequenciaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * The data used to update Frequencias.
     */
    data: XOR<FrequenciaUpdateManyMutationInput, FrequenciaUncheckedUpdateManyInput>
    /**
     * Filter which Frequencias to update
     */
    where?: FrequenciaWhereInput
    /**
     * Limit how many Frequencias to update.
     */
    limit?: number
  }

  /**
   * Frequencia upsert
   */
  export type FrequenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * The filter to search for the Frequencia to update in case it exists.
     */
    where: FrequenciaWhereUniqueInput
    /**
     * In case the Frequencia found by the `where` argument doesn't exist, create a new Frequencia with this data.
     */
    create: XOR<FrequenciaCreateInput, FrequenciaUncheckedCreateInput>
    /**
     * In case the Frequencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FrequenciaUpdateInput, FrequenciaUncheckedUpdateInput>
  }

  /**
   * Frequencia delete
   */
  export type FrequenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
    /**
     * Filter which Frequencia to delete.
     */
    where: FrequenciaWhereUniqueInput
  }

  /**
   * Frequencia deleteMany
   */
  export type FrequenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Frequencias to delete
     */
    where?: FrequenciaWhereInput
    /**
     * Limit how many Frequencias to delete.
     */
    limit?: number
  }

  /**
   * Frequencia without action
   */
  export type FrequenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Frequencia
     */
    select?: FrequenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Frequencia
     */
    omit?: FrequenciaOmit<ExtArgs> | null
  }


  /**
   * Model BancoDeHoras
   */

  export type AggregateBancoDeHoras = {
    _count: BancoDeHorasCountAggregateOutputType | null
    _avg: BancoDeHorasAvgAggregateOutputType | null
    _sum: BancoDeHorasSumAggregateOutputType | null
    _min: BancoDeHorasMinAggregateOutputType | null
    _max: BancoDeHorasMaxAggregateOutputType | null
  }

  export type BancoDeHorasAvgAggregateOutputType = {
    saldoHoras: number | null
  }

  export type BancoDeHorasSumAggregateOutputType = {
    saldoHoras: number | null
  }

  export type BancoDeHorasMinAggregateOutputType = {
    id: string | null
    cpf: string | null
    saldoHoras: number | null
    ultimaAtualizacao: Date | null
  }

  export type BancoDeHorasMaxAggregateOutputType = {
    id: string | null
    cpf: string | null
    saldoHoras: number | null
    ultimaAtualizacao: Date | null
  }

  export type BancoDeHorasCountAggregateOutputType = {
    id: number
    cpf: number
    saldoHoras: number
    ultimaAtualizacao: number
    _all: number
  }


  export type BancoDeHorasAvgAggregateInputType = {
    saldoHoras?: true
  }

  export type BancoDeHorasSumAggregateInputType = {
    saldoHoras?: true
  }

  export type BancoDeHorasMinAggregateInputType = {
    id?: true
    cpf?: true
    saldoHoras?: true
    ultimaAtualizacao?: true
  }

  export type BancoDeHorasMaxAggregateInputType = {
    id?: true
    cpf?: true
    saldoHoras?: true
    ultimaAtualizacao?: true
  }

  export type BancoDeHorasCountAggregateInputType = {
    id?: true
    cpf?: true
    saldoHoras?: true
    ultimaAtualizacao?: true
    _all?: true
  }

  export type BancoDeHorasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BancoDeHoras to aggregate.
     */
    where?: BancoDeHorasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BancoDeHoras to fetch.
     */
    orderBy?: BancoDeHorasOrderByWithRelationInput | BancoDeHorasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BancoDeHorasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BancoDeHoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BancoDeHoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BancoDeHoras
    **/
    _count?: true | BancoDeHorasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BancoDeHorasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BancoDeHorasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BancoDeHorasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BancoDeHorasMaxAggregateInputType
  }

  export type GetBancoDeHorasAggregateType<T extends BancoDeHorasAggregateArgs> = {
        [P in keyof T & keyof AggregateBancoDeHoras]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBancoDeHoras[P]>
      : GetScalarType<T[P], AggregateBancoDeHoras[P]>
  }




  export type BancoDeHorasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BancoDeHorasWhereInput
    orderBy?: BancoDeHorasOrderByWithAggregationInput | BancoDeHorasOrderByWithAggregationInput[]
    by: BancoDeHorasScalarFieldEnum[] | BancoDeHorasScalarFieldEnum
    having?: BancoDeHorasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BancoDeHorasCountAggregateInputType | true
    _avg?: BancoDeHorasAvgAggregateInputType
    _sum?: BancoDeHorasSumAggregateInputType
    _min?: BancoDeHorasMinAggregateInputType
    _max?: BancoDeHorasMaxAggregateInputType
  }

  export type BancoDeHorasGroupByOutputType = {
    id: string
    cpf: string
    saldoHoras: number
    ultimaAtualizacao: Date
    _count: BancoDeHorasCountAggregateOutputType | null
    _avg: BancoDeHorasAvgAggregateOutputType | null
    _sum: BancoDeHorasSumAggregateOutputType | null
    _min: BancoDeHorasMinAggregateOutputType | null
    _max: BancoDeHorasMaxAggregateOutputType | null
  }

  type GetBancoDeHorasGroupByPayload<T extends BancoDeHorasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BancoDeHorasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BancoDeHorasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BancoDeHorasGroupByOutputType[P]>
            : GetScalarType<T[P], BancoDeHorasGroupByOutputType[P]>
        }
      >
    >


  export type BancoDeHorasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    saldoHoras?: boolean
    ultimaAtualizacao?: boolean
  }, ExtArgs["result"]["bancoDeHoras"]>

  export type BancoDeHorasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    saldoHoras?: boolean
    ultimaAtualizacao?: boolean
  }, ExtArgs["result"]["bancoDeHoras"]>

  export type BancoDeHorasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    saldoHoras?: boolean
    ultimaAtualizacao?: boolean
  }, ExtArgs["result"]["bancoDeHoras"]>

  export type BancoDeHorasSelectScalar = {
    id?: boolean
    cpf?: boolean
    saldoHoras?: boolean
    ultimaAtualizacao?: boolean
  }

  export type BancoDeHorasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cpf" | "saldoHoras" | "ultimaAtualizacao", ExtArgs["result"]["bancoDeHoras"]>

  export type $BancoDeHorasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BancoDeHoras"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cpf: string
      saldoHoras: number
      ultimaAtualizacao: Date
    }, ExtArgs["result"]["bancoDeHoras"]>
    composites: {}
  }

  type BancoDeHorasGetPayload<S extends boolean | null | undefined | BancoDeHorasDefaultArgs> = $Result.GetResult<Prisma.$BancoDeHorasPayload, S>

  type BancoDeHorasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BancoDeHorasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BancoDeHorasCountAggregateInputType | true
    }

  export interface BancoDeHorasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BancoDeHoras'], meta: { name: 'BancoDeHoras' } }
    /**
     * Find zero or one BancoDeHoras that matches the filter.
     * @param {BancoDeHorasFindUniqueArgs} args - Arguments to find a BancoDeHoras
     * @example
     * // Get one BancoDeHoras
     * const bancoDeHoras = await prisma.bancoDeHoras.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BancoDeHorasFindUniqueArgs>(args: SelectSubset<T, BancoDeHorasFindUniqueArgs<ExtArgs>>): Prisma__BancoDeHorasClient<$Result.GetResult<Prisma.$BancoDeHorasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BancoDeHoras that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BancoDeHorasFindUniqueOrThrowArgs} args - Arguments to find a BancoDeHoras
     * @example
     * // Get one BancoDeHoras
     * const bancoDeHoras = await prisma.bancoDeHoras.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BancoDeHorasFindUniqueOrThrowArgs>(args: SelectSubset<T, BancoDeHorasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BancoDeHorasClient<$Result.GetResult<Prisma.$BancoDeHorasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BancoDeHoras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoDeHorasFindFirstArgs} args - Arguments to find a BancoDeHoras
     * @example
     * // Get one BancoDeHoras
     * const bancoDeHoras = await prisma.bancoDeHoras.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BancoDeHorasFindFirstArgs>(args?: SelectSubset<T, BancoDeHorasFindFirstArgs<ExtArgs>>): Prisma__BancoDeHorasClient<$Result.GetResult<Prisma.$BancoDeHorasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BancoDeHoras that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoDeHorasFindFirstOrThrowArgs} args - Arguments to find a BancoDeHoras
     * @example
     * // Get one BancoDeHoras
     * const bancoDeHoras = await prisma.bancoDeHoras.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BancoDeHorasFindFirstOrThrowArgs>(args?: SelectSubset<T, BancoDeHorasFindFirstOrThrowArgs<ExtArgs>>): Prisma__BancoDeHorasClient<$Result.GetResult<Prisma.$BancoDeHorasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BancoDeHoras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoDeHorasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BancoDeHoras
     * const bancoDeHoras = await prisma.bancoDeHoras.findMany()
     * 
     * // Get first 10 BancoDeHoras
     * const bancoDeHoras = await prisma.bancoDeHoras.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bancoDeHorasWithIdOnly = await prisma.bancoDeHoras.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BancoDeHorasFindManyArgs>(args?: SelectSubset<T, BancoDeHorasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BancoDeHorasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BancoDeHoras.
     * @param {BancoDeHorasCreateArgs} args - Arguments to create a BancoDeHoras.
     * @example
     * // Create one BancoDeHoras
     * const BancoDeHoras = await prisma.bancoDeHoras.create({
     *   data: {
     *     // ... data to create a BancoDeHoras
     *   }
     * })
     * 
     */
    create<T extends BancoDeHorasCreateArgs>(args: SelectSubset<T, BancoDeHorasCreateArgs<ExtArgs>>): Prisma__BancoDeHorasClient<$Result.GetResult<Prisma.$BancoDeHorasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BancoDeHoras.
     * @param {BancoDeHorasCreateManyArgs} args - Arguments to create many BancoDeHoras.
     * @example
     * // Create many BancoDeHoras
     * const bancoDeHoras = await prisma.bancoDeHoras.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BancoDeHorasCreateManyArgs>(args?: SelectSubset<T, BancoDeHorasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BancoDeHoras and returns the data saved in the database.
     * @param {BancoDeHorasCreateManyAndReturnArgs} args - Arguments to create many BancoDeHoras.
     * @example
     * // Create many BancoDeHoras
     * const bancoDeHoras = await prisma.bancoDeHoras.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BancoDeHoras and only return the `id`
     * const bancoDeHorasWithIdOnly = await prisma.bancoDeHoras.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BancoDeHorasCreateManyAndReturnArgs>(args?: SelectSubset<T, BancoDeHorasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BancoDeHorasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BancoDeHoras.
     * @param {BancoDeHorasDeleteArgs} args - Arguments to delete one BancoDeHoras.
     * @example
     * // Delete one BancoDeHoras
     * const BancoDeHoras = await prisma.bancoDeHoras.delete({
     *   where: {
     *     // ... filter to delete one BancoDeHoras
     *   }
     * })
     * 
     */
    delete<T extends BancoDeHorasDeleteArgs>(args: SelectSubset<T, BancoDeHorasDeleteArgs<ExtArgs>>): Prisma__BancoDeHorasClient<$Result.GetResult<Prisma.$BancoDeHorasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BancoDeHoras.
     * @param {BancoDeHorasUpdateArgs} args - Arguments to update one BancoDeHoras.
     * @example
     * // Update one BancoDeHoras
     * const bancoDeHoras = await prisma.bancoDeHoras.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BancoDeHorasUpdateArgs>(args: SelectSubset<T, BancoDeHorasUpdateArgs<ExtArgs>>): Prisma__BancoDeHorasClient<$Result.GetResult<Prisma.$BancoDeHorasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BancoDeHoras.
     * @param {BancoDeHorasDeleteManyArgs} args - Arguments to filter BancoDeHoras to delete.
     * @example
     * // Delete a few BancoDeHoras
     * const { count } = await prisma.bancoDeHoras.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BancoDeHorasDeleteManyArgs>(args?: SelectSubset<T, BancoDeHorasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BancoDeHoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoDeHorasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BancoDeHoras
     * const bancoDeHoras = await prisma.bancoDeHoras.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BancoDeHorasUpdateManyArgs>(args: SelectSubset<T, BancoDeHorasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BancoDeHoras and returns the data updated in the database.
     * @param {BancoDeHorasUpdateManyAndReturnArgs} args - Arguments to update many BancoDeHoras.
     * @example
     * // Update many BancoDeHoras
     * const bancoDeHoras = await prisma.bancoDeHoras.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BancoDeHoras and only return the `id`
     * const bancoDeHorasWithIdOnly = await prisma.bancoDeHoras.updateManyAndReturn({
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
    updateManyAndReturn<T extends BancoDeHorasUpdateManyAndReturnArgs>(args: SelectSubset<T, BancoDeHorasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BancoDeHorasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BancoDeHoras.
     * @param {BancoDeHorasUpsertArgs} args - Arguments to update or create a BancoDeHoras.
     * @example
     * // Update or create a BancoDeHoras
     * const bancoDeHoras = await prisma.bancoDeHoras.upsert({
     *   create: {
     *     // ... data to create a BancoDeHoras
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BancoDeHoras we want to update
     *   }
     * })
     */
    upsert<T extends BancoDeHorasUpsertArgs>(args: SelectSubset<T, BancoDeHorasUpsertArgs<ExtArgs>>): Prisma__BancoDeHorasClient<$Result.GetResult<Prisma.$BancoDeHorasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BancoDeHoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoDeHorasCountArgs} args - Arguments to filter BancoDeHoras to count.
     * @example
     * // Count the number of BancoDeHoras
     * const count = await prisma.bancoDeHoras.count({
     *   where: {
     *     // ... the filter for the BancoDeHoras we want to count
     *   }
     * })
    **/
    count<T extends BancoDeHorasCountArgs>(
      args?: Subset<T, BancoDeHorasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BancoDeHorasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BancoDeHoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoDeHorasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BancoDeHorasAggregateArgs>(args: Subset<T, BancoDeHorasAggregateArgs>): Prisma.PrismaPromise<GetBancoDeHorasAggregateType<T>>

    /**
     * Group by BancoDeHoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoDeHorasGroupByArgs} args - Group by arguments.
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
      T extends BancoDeHorasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BancoDeHorasGroupByArgs['orderBy'] }
        : { orderBy?: BancoDeHorasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BancoDeHorasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBancoDeHorasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BancoDeHoras model
   */
  readonly fields: BancoDeHorasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BancoDeHoras.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BancoDeHorasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the BancoDeHoras model
   */
  interface BancoDeHorasFieldRefs {
    readonly id: FieldRef<"BancoDeHoras", 'String'>
    readonly cpf: FieldRef<"BancoDeHoras", 'String'>
    readonly saldoHoras: FieldRef<"BancoDeHoras", 'Float'>
    readonly ultimaAtualizacao: FieldRef<"BancoDeHoras", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BancoDeHoras findUnique
   */
  export type BancoDeHorasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BancoDeHoras
     */
    select?: BancoDeHorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BancoDeHoras
     */
    omit?: BancoDeHorasOmit<ExtArgs> | null
    /**
     * Filter, which BancoDeHoras to fetch.
     */
    where: BancoDeHorasWhereUniqueInput
  }

  /**
   * BancoDeHoras findUniqueOrThrow
   */
  export type BancoDeHorasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BancoDeHoras
     */
    select?: BancoDeHorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BancoDeHoras
     */
    omit?: BancoDeHorasOmit<ExtArgs> | null
    /**
     * Filter, which BancoDeHoras to fetch.
     */
    where: BancoDeHorasWhereUniqueInput
  }

  /**
   * BancoDeHoras findFirst
   */
  export type BancoDeHorasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BancoDeHoras
     */
    select?: BancoDeHorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BancoDeHoras
     */
    omit?: BancoDeHorasOmit<ExtArgs> | null
    /**
     * Filter, which BancoDeHoras to fetch.
     */
    where?: BancoDeHorasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BancoDeHoras to fetch.
     */
    orderBy?: BancoDeHorasOrderByWithRelationInput | BancoDeHorasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BancoDeHoras.
     */
    cursor?: BancoDeHorasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BancoDeHoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BancoDeHoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BancoDeHoras.
     */
    distinct?: BancoDeHorasScalarFieldEnum | BancoDeHorasScalarFieldEnum[]
  }

  /**
   * BancoDeHoras findFirstOrThrow
   */
  export type BancoDeHorasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BancoDeHoras
     */
    select?: BancoDeHorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BancoDeHoras
     */
    omit?: BancoDeHorasOmit<ExtArgs> | null
    /**
     * Filter, which BancoDeHoras to fetch.
     */
    where?: BancoDeHorasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BancoDeHoras to fetch.
     */
    orderBy?: BancoDeHorasOrderByWithRelationInput | BancoDeHorasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BancoDeHoras.
     */
    cursor?: BancoDeHorasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BancoDeHoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BancoDeHoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BancoDeHoras.
     */
    distinct?: BancoDeHorasScalarFieldEnum | BancoDeHorasScalarFieldEnum[]
  }

  /**
   * BancoDeHoras findMany
   */
  export type BancoDeHorasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BancoDeHoras
     */
    select?: BancoDeHorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BancoDeHoras
     */
    omit?: BancoDeHorasOmit<ExtArgs> | null
    /**
     * Filter, which BancoDeHoras to fetch.
     */
    where?: BancoDeHorasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BancoDeHoras to fetch.
     */
    orderBy?: BancoDeHorasOrderByWithRelationInput | BancoDeHorasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BancoDeHoras.
     */
    cursor?: BancoDeHorasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BancoDeHoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BancoDeHoras.
     */
    skip?: number
    distinct?: BancoDeHorasScalarFieldEnum | BancoDeHorasScalarFieldEnum[]
  }

  /**
   * BancoDeHoras create
   */
  export type BancoDeHorasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BancoDeHoras
     */
    select?: BancoDeHorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BancoDeHoras
     */
    omit?: BancoDeHorasOmit<ExtArgs> | null
    /**
     * The data needed to create a BancoDeHoras.
     */
    data: XOR<BancoDeHorasCreateInput, BancoDeHorasUncheckedCreateInput>
  }

  /**
   * BancoDeHoras createMany
   */
  export type BancoDeHorasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BancoDeHoras.
     */
    data: BancoDeHorasCreateManyInput | BancoDeHorasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BancoDeHoras createManyAndReturn
   */
  export type BancoDeHorasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BancoDeHoras
     */
    select?: BancoDeHorasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BancoDeHoras
     */
    omit?: BancoDeHorasOmit<ExtArgs> | null
    /**
     * The data used to create many BancoDeHoras.
     */
    data: BancoDeHorasCreateManyInput | BancoDeHorasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BancoDeHoras update
   */
  export type BancoDeHorasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BancoDeHoras
     */
    select?: BancoDeHorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BancoDeHoras
     */
    omit?: BancoDeHorasOmit<ExtArgs> | null
    /**
     * The data needed to update a BancoDeHoras.
     */
    data: XOR<BancoDeHorasUpdateInput, BancoDeHorasUncheckedUpdateInput>
    /**
     * Choose, which BancoDeHoras to update.
     */
    where: BancoDeHorasWhereUniqueInput
  }

  /**
   * BancoDeHoras updateMany
   */
  export type BancoDeHorasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BancoDeHoras.
     */
    data: XOR<BancoDeHorasUpdateManyMutationInput, BancoDeHorasUncheckedUpdateManyInput>
    /**
     * Filter which BancoDeHoras to update
     */
    where?: BancoDeHorasWhereInput
    /**
     * Limit how many BancoDeHoras to update.
     */
    limit?: number
  }

  /**
   * BancoDeHoras updateManyAndReturn
   */
  export type BancoDeHorasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BancoDeHoras
     */
    select?: BancoDeHorasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BancoDeHoras
     */
    omit?: BancoDeHorasOmit<ExtArgs> | null
    /**
     * The data used to update BancoDeHoras.
     */
    data: XOR<BancoDeHorasUpdateManyMutationInput, BancoDeHorasUncheckedUpdateManyInput>
    /**
     * Filter which BancoDeHoras to update
     */
    where?: BancoDeHorasWhereInput
    /**
     * Limit how many BancoDeHoras to update.
     */
    limit?: number
  }

  /**
   * BancoDeHoras upsert
   */
  export type BancoDeHorasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BancoDeHoras
     */
    select?: BancoDeHorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BancoDeHoras
     */
    omit?: BancoDeHorasOmit<ExtArgs> | null
    /**
     * The filter to search for the BancoDeHoras to update in case it exists.
     */
    where: BancoDeHorasWhereUniqueInput
    /**
     * In case the BancoDeHoras found by the `where` argument doesn't exist, create a new BancoDeHoras with this data.
     */
    create: XOR<BancoDeHorasCreateInput, BancoDeHorasUncheckedCreateInput>
    /**
     * In case the BancoDeHoras was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BancoDeHorasUpdateInput, BancoDeHorasUncheckedUpdateInput>
  }

  /**
   * BancoDeHoras delete
   */
  export type BancoDeHorasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BancoDeHoras
     */
    select?: BancoDeHorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BancoDeHoras
     */
    omit?: BancoDeHorasOmit<ExtArgs> | null
    /**
     * Filter which BancoDeHoras to delete.
     */
    where: BancoDeHorasWhereUniqueInput
  }

  /**
   * BancoDeHoras deleteMany
   */
  export type BancoDeHorasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BancoDeHoras to delete
     */
    where?: BancoDeHorasWhereInput
    /**
     * Limit how many BancoDeHoras to delete.
     */
    limit?: number
  }

  /**
   * BancoDeHoras without action
   */
  export type BancoDeHorasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BancoDeHoras
     */
    select?: BancoDeHorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BancoDeHoras
     */
    omit?: BancoDeHorasOmit<ExtArgs> | null
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


  export const RegistroTipo1ScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    idSequencial: 'idSequencial',
    tipoIdentificadorEmpregador: 'tipoIdentificadorEmpregador',
    cnpjCpfEmpregador: 'cnpjCpfEmpregador',
    cnoCaepf: 'cnoCaepf',
    razaoSocial: 'razaoSocial',
    numeroFabricacao: 'numeroFabricacao',
    dataInicial: 'dataInicial',
    dataFinal: 'dataFinal',
    dataHoraGeracao: 'dataHoraGeracao',
    versaoLayout: 'versaoLayout',
    tipoIdentificadorFabricante: 'tipoIdentificadorFabricante',
    cnpjCpfFabricante: 'cnpjCpfFabricante',
    modelo: 'modelo',
    crc: 'crc',
    origem: 'origem'
  };

  export type RegistroTipo1ScalarFieldEnum = (typeof RegistroTipo1ScalarFieldEnum)[keyof typeof RegistroTipo1ScalarFieldEnum]


  export const RegistroTipo10ScalarFieldEnum: {
    id: 'id',
    ultimo_nsr: 'ultimo_nsr',
    origem: 'origem'
  };

  export type RegistroTipo10ScalarFieldEnum = (typeof RegistroTipo10ScalarFieldEnum)[keyof typeof RegistroTipo10ScalarFieldEnum]


  export const MarcacoesRelogioScalarFieldEnum: {
    id: 'id',
    nsr: 'nsr',
    tipo: 'tipo',
    dataCompleta: 'dataCompleta',
    data: 'data',
    hora: 'hora',
    cpfEmpregado: 'cpfEmpregado',
    crc: 'crc',
    origem: 'origem'
  };

  export type MarcacoesRelogioScalarFieldEnum = (typeof MarcacoesRelogioScalarFieldEnum)[keyof typeof MarcacoesRelogioScalarFieldEnum]


  export const EspelhoDiarioScalarFieldEnum: {
    id: 'id',
    cpf: 'cpf',
    mesAno: 'mesAno',
    diaDoMes: 'diaDoMes',
    credito: 'credito',
    debito: 'debito',
    horasNormais: 'horasNormais',
    horasExtras: 'horasExtras',
    saldo: 'saldo',
    motivoReajuste: 'motivoReajuste',
    data: 'data',
    primeiraEntrada: 'primeiraEntrada',
    primeiraSaida: 'primeiraSaida',
    segundaEntrada: 'segundaEntrada',
    segundaSaida: 'segundaSaida',
    horasTrabalhadas: 'horasTrabalhadas',
    horasAlmoco: 'horasAlmoco',
    bancoDeHoras: 'bancoDeHoras',
    observacoes: 'observacoes',
    status: 'status',
    origem: 'origem'
  };

  export type EspelhoDiarioScalarFieldEnum = (typeof EspelhoDiarioScalarFieldEnum)[keyof typeof EspelhoDiarioScalarFieldEnum]


  export const MarcacoesUsuarioScalarFieldEnum: {
    id: 'id',
    pimeiraEntrada: 'pimeiraEntrada',
    primeiraSaida: 'primeiraSaida',
    segundaEntrada: 'segundaEntrada',
    segundaSaida: 'segundaSaida',
    pausaAlmoco: 'pausaAlmoco'
  };

  export type MarcacoesUsuarioScalarFieldEnum = (typeof MarcacoesUsuarioScalarFieldEnum)[keyof typeof MarcacoesUsuarioScalarFieldEnum]


  export const EspelhoDePontoMensalScalarFieldEnum: {
    id: 'id',
    mesEmAberto: 'mesEmAberto',
    cpf: 'cpf',
    mesAno: 'mesAno',
    diaDoMes: 'diaDoMes',
    credito: 'credito',
    debito: 'debito',
    horasNormais: 'horasNormais',
    horasExtras: 'horasExtras',
    saldo: 'saldo',
    motivoReajuste: 'motivoReajuste',
    data: 'data',
    primeiraEntrada: 'primeiraEntrada',
    primeiraSaida: 'primeiraSaida',
    segundaEntrada: 'segundaEntrada',
    segundaSaida: 'segundaSaida',
    horasTrabalhadas: 'horasTrabalhadas',
    observacoes: 'observacoes',
    status: 'status',
    origem: 'origem'
  };

  export type EspelhoDePontoMensalScalarFieldEnum = (typeof EspelhoDePontoMensalScalarFieldEnum)[keyof typeof EspelhoDePontoMensalScalarFieldEnum]


  export const EspelhoMensalScalarFieldEnum: {
    id: 'id',
    cpf: 'cpf',
    mesAno: 'mesAno',
    diasUteis: 'diasUteis',
    diasTrabalhados: 'diasTrabalhados',
    registrosCorretos: 'registrosCorretos',
    ajustesEAbonos: 'ajustesEAbonos',
    faltas: 'faltas',
    totalHorasTrabalhadas: 'totalHorasTrabalhadas',
    totalHorasDevidas: 'totalHorasDevidas',
    saldoHoras: 'saldoHoras',
    dataCriacao: 'dataCriacao',
    MesAberto: 'MesAberto'
  };

  export type EspelhoMensalScalarFieldEnum = (typeof EspelhoMensalScalarFieldEnum)[keyof typeof EspelhoMensalScalarFieldEnum]


  export const FrequenciaScalarFieldEnum: {
    id: 'id',
    cpf: 'cpf',
    data: 'data',
    primeiraEntrada: 'primeiraEntrada',
    primeiraSaida: 'primeiraSaida',
    segundaEntrada: 'segundaEntrada',
    segundaSaida: 'segundaSaida'
  };

  export type FrequenciaScalarFieldEnum = (typeof FrequenciaScalarFieldEnum)[keyof typeof FrequenciaScalarFieldEnum]


  export const BancoDeHorasScalarFieldEnum: {
    id: 'id',
    cpf: 'cpf',
    saldoHoras: 'saldoHoras',
    ultimaAtualizacao: 'ultimaAtualizacao'
  };

  export type BancoDeHorasScalarFieldEnum = (typeof BancoDeHorasScalarFieldEnum)[keyof typeof BancoDeHorasScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type RegistroTipo1WhereInput = {
    AND?: RegistroTipo1WhereInput | RegistroTipo1WhereInput[]
    OR?: RegistroTipo1WhereInput[]
    NOT?: RegistroTipo1WhereInput | RegistroTipo1WhereInput[]
    id?: StringFilter<"RegistroTipo1"> | string
    tipo?: StringFilter<"RegistroTipo1"> | string
    idSequencial?: StringFilter<"RegistroTipo1"> | string
    tipoIdentificadorEmpregador?: StringFilter<"RegistroTipo1"> | string
    cnpjCpfEmpregador?: StringFilter<"RegistroTipo1"> | string
    cnoCaepf?: StringFilter<"RegistroTipo1"> | string
    razaoSocial?: StringFilter<"RegistroTipo1"> | string
    numeroFabricacao?: StringFilter<"RegistroTipo1"> | string
    dataInicial?: StringFilter<"RegistroTipo1"> | string
    dataFinal?: StringFilter<"RegistroTipo1"> | string
    dataHoraGeracao?: StringFilter<"RegistroTipo1"> | string
    versaoLayout?: StringFilter<"RegistroTipo1"> | string
    tipoIdentificadorFabricante?: StringFilter<"RegistroTipo1"> | string
    cnpjCpfFabricante?: StringFilter<"RegistroTipo1"> | string
    modelo?: StringFilter<"RegistroTipo1"> | string
    crc?: StringFilter<"RegistroTipo1"> | string
    origem?: StringNullableFilter<"RegistroTipo1"> | string | null
  }

  export type RegistroTipo1OrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    idSequencial?: SortOrder
    tipoIdentificadorEmpregador?: SortOrder
    cnpjCpfEmpregador?: SortOrder
    cnoCaepf?: SortOrder
    razaoSocial?: SortOrder
    numeroFabricacao?: SortOrder
    dataInicial?: SortOrder
    dataFinal?: SortOrder
    dataHoraGeracao?: SortOrder
    versaoLayout?: SortOrder
    tipoIdentificadorFabricante?: SortOrder
    cnpjCpfFabricante?: SortOrder
    modelo?: SortOrder
    crc?: SortOrder
    origem?: SortOrderInput | SortOrder
  }

  export type RegistroTipo1WhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegistroTipo1WhereInput | RegistroTipo1WhereInput[]
    OR?: RegistroTipo1WhereInput[]
    NOT?: RegistroTipo1WhereInput | RegistroTipo1WhereInput[]
    tipo?: StringFilter<"RegistroTipo1"> | string
    idSequencial?: StringFilter<"RegistroTipo1"> | string
    tipoIdentificadorEmpregador?: StringFilter<"RegistroTipo1"> | string
    cnpjCpfEmpregador?: StringFilter<"RegistroTipo1"> | string
    cnoCaepf?: StringFilter<"RegistroTipo1"> | string
    razaoSocial?: StringFilter<"RegistroTipo1"> | string
    numeroFabricacao?: StringFilter<"RegistroTipo1"> | string
    dataInicial?: StringFilter<"RegistroTipo1"> | string
    dataFinal?: StringFilter<"RegistroTipo1"> | string
    dataHoraGeracao?: StringFilter<"RegistroTipo1"> | string
    versaoLayout?: StringFilter<"RegistroTipo1"> | string
    tipoIdentificadorFabricante?: StringFilter<"RegistroTipo1"> | string
    cnpjCpfFabricante?: StringFilter<"RegistroTipo1"> | string
    modelo?: StringFilter<"RegistroTipo1"> | string
    crc?: StringFilter<"RegistroTipo1"> | string
    origem?: StringNullableFilter<"RegistroTipo1"> | string | null
  }, "id">

  export type RegistroTipo1OrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    idSequencial?: SortOrder
    tipoIdentificadorEmpregador?: SortOrder
    cnpjCpfEmpregador?: SortOrder
    cnoCaepf?: SortOrder
    razaoSocial?: SortOrder
    numeroFabricacao?: SortOrder
    dataInicial?: SortOrder
    dataFinal?: SortOrder
    dataHoraGeracao?: SortOrder
    versaoLayout?: SortOrder
    tipoIdentificadorFabricante?: SortOrder
    cnpjCpfFabricante?: SortOrder
    modelo?: SortOrder
    crc?: SortOrder
    origem?: SortOrderInput | SortOrder
    _count?: RegistroTipo1CountOrderByAggregateInput
    _max?: RegistroTipo1MaxOrderByAggregateInput
    _min?: RegistroTipo1MinOrderByAggregateInput
  }

  export type RegistroTipo1ScalarWhereWithAggregatesInput = {
    AND?: RegistroTipo1ScalarWhereWithAggregatesInput | RegistroTipo1ScalarWhereWithAggregatesInput[]
    OR?: RegistroTipo1ScalarWhereWithAggregatesInput[]
    NOT?: RegistroTipo1ScalarWhereWithAggregatesInput | RegistroTipo1ScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RegistroTipo1"> | string
    tipo?: StringWithAggregatesFilter<"RegistroTipo1"> | string
    idSequencial?: StringWithAggregatesFilter<"RegistroTipo1"> | string
    tipoIdentificadorEmpregador?: StringWithAggregatesFilter<"RegistroTipo1"> | string
    cnpjCpfEmpregador?: StringWithAggregatesFilter<"RegistroTipo1"> | string
    cnoCaepf?: StringWithAggregatesFilter<"RegistroTipo1"> | string
    razaoSocial?: StringWithAggregatesFilter<"RegistroTipo1"> | string
    numeroFabricacao?: StringWithAggregatesFilter<"RegistroTipo1"> | string
    dataInicial?: StringWithAggregatesFilter<"RegistroTipo1"> | string
    dataFinal?: StringWithAggregatesFilter<"RegistroTipo1"> | string
    dataHoraGeracao?: StringWithAggregatesFilter<"RegistroTipo1"> | string
    versaoLayout?: StringWithAggregatesFilter<"RegistroTipo1"> | string
    tipoIdentificadorFabricante?: StringWithAggregatesFilter<"RegistroTipo1"> | string
    cnpjCpfFabricante?: StringWithAggregatesFilter<"RegistroTipo1"> | string
    modelo?: StringWithAggregatesFilter<"RegistroTipo1"> | string
    crc?: StringWithAggregatesFilter<"RegistroTipo1"> | string
    origem?: StringNullableWithAggregatesFilter<"RegistroTipo1"> | string | null
  }

  export type RegistroTipo10WhereInput = {
    AND?: RegistroTipo10WhereInput | RegistroTipo10WhereInput[]
    OR?: RegistroTipo10WhereInput[]
    NOT?: RegistroTipo10WhereInput | RegistroTipo10WhereInput[]
    id?: StringFilter<"RegistroTipo10"> | string
    ultimo_nsr?: IntFilter<"RegistroTipo10"> | number
    origem?: StringFilter<"RegistroTipo10"> | string
  }

  export type RegistroTipo10OrderByWithRelationInput = {
    id?: SortOrder
    ultimo_nsr?: SortOrder
    origem?: SortOrder
  }

  export type RegistroTipo10WhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ultimo_nsr?: number
    origem?: string
    AND?: RegistroTipo10WhereInput | RegistroTipo10WhereInput[]
    OR?: RegistroTipo10WhereInput[]
    NOT?: RegistroTipo10WhereInput | RegistroTipo10WhereInput[]
  }, "id" | "origem" | "ultimo_nsr">

  export type RegistroTipo10OrderByWithAggregationInput = {
    id?: SortOrder
    ultimo_nsr?: SortOrder
    origem?: SortOrder
    _count?: RegistroTipo10CountOrderByAggregateInput
    _avg?: RegistroTipo10AvgOrderByAggregateInput
    _max?: RegistroTipo10MaxOrderByAggregateInput
    _min?: RegistroTipo10MinOrderByAggregateInput
    _sum?: RegistroTipo10SumOrderByAggregateInput
  }

  export type RegistroTipo10ScalarWhereWithAggregatesInput = {
    AND?: RegistroTipo10ScalarWhereWithAggregatesInput | RegistroTipo10ScalarWhereWithAggregatesInput[]
    OR?: RegistroTipo10ScalarWhereWithAggregatesInput[]
    NOT?: RegistroTipo10ScalarWhereWithAggregatesInput | RegistroTipo10ScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RegistroTipo10"> | string
    ultimo_nsr?: IntWithAggregatesFilter<"RegistroTipo10"> | number
    origem?: StringWithAggregatesFilter<"RegistroTipo10"> | string
  }

  export type MarcacoesRelogioWhereInput = {
    AND?: MarcacoesRelogioWhereInput | MarcacoesRelogioWhereInput[]
    OR?: MarcacoesRelogioWhereInput[]
    NOT?: MarcacoesRelogioWhereInput | MarcacoesRelogioWhereInput[]
    id?: StringFilter<"MarcacoesRelogio"> | string
    nsr?: IntFilter<"MarcacoesRelogio"> | number
    tipo?: StringFilter<"MarcacoesRelogio"> | string
    dataCompleta?: DateTimeFilter<"MarcacoesRelogio"> | Date | string
    data?: StringFilter<"MarcacoesRelogio"> | string
    hora?: StringFilter<"MarcacoesRelogio"> | string
    cpfEmpregado?: StringFilter<"MarcacoesRelogio"> | string
    crc?: StringFilter<"MarcacoesRelogio"> | string
    origem?: StringNullableFilter<"MarcacoesRelogio"> | string | null
  }

  export type MarcacoesRelogioOrderByWithRelationInput = {
    id?: SortOrder
    nsr?: SortOrder
    tipo?: SortOrder
    dataCompleta?: SortOrder
    data?: SortOrder
    hora?: SortOrder
    cpfEmpregado?: SortOrder
    crc?: SortOrder
    origem?: SortOrderInput | SortOrder
  }

  export type MarcacoesRelogioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nsr_cpfEmpregado_data_hora_origem?: MarcacoesRelogioNsrCpfEmpregadoDataHoraOrigemCompoundUniqueInput
    AND?: MarcacoesRelogioWhereInput | MarcacoesRelogioWhereInput[]
    OR?: MarcacoesRelogioWhereInput[]
    NOT?: MarcacoesRelogioWhereInput | MarcacoesRelogioWhereInput[]
    nsr?: IntFilter<"MarcacoesRelogio"> | number
    tipo?: StringFilter<"MarcacoesRelogio"> | string
    dataCompleta?: DateTimeFilter<"MarcacoesRelogio"> | Date | string
    data?: StringFilter<"MarcacoesRelogio"> | string
    hora?: StringFilter<"MarcacoesRelogio"> | string
    cpfEmpregado?: StringFilter<"MarcacoesRelogio"> | string
    crc?: StringFilter<"MarcacoesRelogio"> | string
    origem?: StringNullableFilter<"MarcacoesRelogio"> | string | null
  }, "id" | "nsr_cpfEmpregado_data_hora_origem">

  export type MarcacoesRelogioOrderByWithAggregationInput = {
    id?: SortOrder
    nsr?: SortOrder
    tipo?: SortOrder
    dataCompleta?: SortOrder
    data?: SortOrder
    hora?: SortOrder
    cpfEmpregado?: SortOrder
    crc?: SortOrder
    origem?: SortOrderInput | SortOrder
    _count?: MarcacoesRelogioCountOrderByAggregateInput
    _avg?: MarcacoesRelogioAvgOrderByAggregateInput
    _max?: MarcacoesRelogioMaxOrderByAggregateInput
    _min?: MarcacoesRelogioMinOrderByAggregateInput
    _sum?: MarcacoesRelogioSumOrderByAggregateInput
  }

  export type MarcacoesRelogioScalarWhereWithAggregatesInput = {
    AND?: MarcacoesRelogioScalarWhereWithAggregatesInput | MarcacoesRelogioScalarWhereWithAggregatesInput[]
    OR?: MarcacoesRelogioScalarWhereWithAggregatesInput[]
    NOT?: MarcacoesRelogioScalarWhereWithAggregatesInput | MarcacoesRelogioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MarcacoesRelogio"> | string
    nsr?: IntWithAggregatesFilter<"MarcacoesRelogio"> | number
    tipo?: StringWithAggregatesFilter<"MarcacoesRelogio"> | string
    dataCompleta?: DateTimeWithAggregatesFilter<"MarcacoesRelogio"> | Date | string
    data?: StringWithAggregatesFilter<"MarcacoesRelogio"> | string
    hora?: StringWithAggregatesFilter<"MarcacoesRelogio"> | string
    cpfEmpregado?: StringWithAggregatesFilter<"MarcacoesRelogio"> | string
    crc?: StringWithAggregatesFilter<"MarcacoesRelogio"> | string
    origem?: StringNullableWithAggregatesFilter<"MarcacoesRelogio"> | string | null
  }

  export type EspelhoDiarioWhereInput = {
    AND?: EspelhoDiarioWhereInput | EspelhoDiarioWhereInput[]
    OR?: EspelhoDiarioWhereInput[]
    NOT?: EspelhoDiarioWhereInput | EspelhoDiarioWhereInput[]
    id?: IntFilter<"EspelhoDiario"> | number
    cpf?: StringFilter<"EspelhoDiario"> | string
    mesAno?: StringFilter<"EspelhoDiario"> | string
    diaDoMes?: StringFilter<"EspelhoDiario"> | string
    credito?: FloatFilter<"EspelhoDiario"> | number
    debito?: FloatFilter<"EspelhoDiario"> | number
    horasNormais?: FloatFilter<"EspelhoDiario"> | number
    horasExtras?: FloatFilter<"EspelhoDiario"> | number
    saldo?: FloatFilter<"EspelhoDiario"> | number
    motivoReajuste?: StringNullableFilter<"EspelhoDiario"> | string | null
    data?: StringFilter<"EspelhoDiario"> | string
    primeiraEntrada?: StringNullableFilter<"EspelhoDiario"> | string | null
    primeiraSaida?: StringNullableFilter<"EspelhoDiario"> | string | null
    segundaEntrada?: StringNullableFilter<"EspelhoDiario"> | string | null
    segundaSaida?: StringNullableFilter<"EspelhoDiario"> | string | null
    horasTrabalhadas?: FloatFilter<"EspelhoDiario"> | number
    horasAlmoco?: FloatFilter<"EspelhoDiario"> | number
    bancoDeHoras?: FloatFilter<"EspelhoDiario"> | number
    observacoes?: StringFilter<"EspelhoDiario"> | string
    status?: StringFilter<"EspelhoDiario"> | string
    origem?: StringNullableFilter<"EspelhoDiario"> | string | null
    EspelhoMensal?: EspelhoMensalListRelationFilter
  }

  export type EspelhoDiarioOrderByWithRelationInput = {
    id?: SortOrder
    cpf?: SortOrder
    mesAno?: SortOrder
    diaDoMes?: SortOrder
    credito?: SortOrder
    debito?: SortOrder
    horasNormais?: SortOrder
    horasExtras?: SortOrder
    saldo?: SortOrder
    motivoReajuste?: SortOrderInput | SortOrder
    data?: SortOrder
    primeiraEntrada?: SortOrderInput | SortOrder
    primeiraSaida?: SortOrderInput | SortOrder
    segundaEntrada?: SortOrderInput | SortOrder
    segundaSaida?: SortOrderInput | SortOrder
    horasTrabalhadas?: SortOrder
    horasAlmoco?: SortOrder
    bancoDeHoras?: SortOrder
    observacoes?: SortOrder
    status?: SortOrder
    origem?: SortOrderInput | SortOrder
    EspelhoMensal?: EspelhoMensalOrderByRelationAggregateInput
  }

  export type EspelhoDiarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EspelhoDiarioWhereInput | EspelhoDiarioWhereInput[]
    OR?: EspelhoDiarioWhereInput[]
    NOT?: EspelhoDiarioWhereInput | EspelhoDiarioWhereInput[]
    cpf?: StringFilter<"EspelhoDiario"> | string
    mesAno?: StringFilter<"EspelhoDiario"> | string
    diaDoMes?: StringFilter<"EspelhoDiario"> | string
    credito?: FloatFilter<"EspelhoDiario"> | number
    debito?: FloatFilter<"EspelhoDiario"> | number
    horasNormais?: FloatFilter<"EspelhoDiario"> | number
    horasExtras?: FloatFilter<"EspelhoDiario"> | number
    saldo?: FloatFilter<"EspelhoDiario"> | number
    motivoReajuste?: StringNullableFilter<"EspelhoDiario"> | string | null
    data?: StringFilter<"EspelhoDiario"> | string
    primeiraEntrada?: StringNullableFilter<"EspelhoDiario"> | string | null
    primeiraSaida?: StringNullableFilter<"EspelhoDiario"> | string | null
    segundaEntrada?: StringNullableFilter<"EspelhoDiario"> | string | null
    segundaSaida?: StringNullableFilter<"EspelhoDiario"> | string | null
    horasTrabalhadas?: FloatFilter<"EspelhoDiario"> | number
    horasAlmoco?: FloatFilter<"EspelhoDiario"> | number
    bancoDeHoras?: FloatFilter<"EspelhoDiario"> | number
    observacoes?: StringFilter<"EspelhoDiario"> | string
    status?: StringFilter<"EspelhoDiario"> | string
    origem?: StringNullableFilter<"EspelhoDiario"> | string | null
    EspelhoMensal?: EspelhoMensalListRelationFilter
  }, "id">

  export type EspelhoDiarioOrderByWithAggregationInput = {
    id?: SortOrder
    cpf?: SortOrder
    mesAno?: SortOrder
    diaDoMes?: SortOrder
    credito?: SortOrder
    debito?: SortOrder
    horasNormais?: SortOrder
    horasExtras?: SortOrder
    saldo?: SortOrder
    motivoReajuste?: SortOrderInput | SortOrder
    data?: SortOrder
    primeiraEntrada?: SortOrderInput | SortOrder
    primeiraSaida?: SortOrderInput | SortOrder
    segundaEntrada?: SortOrderInput | SortOrder
    segundaSaida?: SortOrderInput | SortOrder
    horasTrabalhadas?: SortOrder
    horasAlmoco?: SortOrder
    bancoDeHoras?: SortOrder
    observacoes?: SortOrder
    status?: SortOrder
    origem?: SortOrderInput | SortOrder
    _count?: EspelhoDiarioCountOrderByAggregateInput
    _avg?: EspelhoDiarioAvgOrderByAggregateInput
    _max?: EspelhoDiarioMaxOrderByAggregateInput
    _min?: EspelhoDiarioMinOrderByAggregateInput
    _sum?: EspelhoDiarioSumOrderByAggregateInput
  }

  export type EspelhoDiarioScalarWhereWithAggregatesInput = {
    AND?: EspelhoDiarioScalarWhereWithAggregatesInput | EspelhoDiarioScalarWhereWithAggregatesInput[]
    OR?: EspelhoDiarioScalarWhereWithAggregatesInput[]
    NOT?: EspelhoDiarioScalarWhereWithAggregatesInput | EspelhoDiarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EspelhoDiario"> | number
    cpf?: StringWithAggregatesFilter<"EspelhoDiario"> | string
    mesAno?: StringWithAggregatesFilter<"EspelhoDiario"> | string
    diaDoMes?: StringWithAggregatesFilter<"EspelhoDiario"> | string
    credito?: FloatWithAggregatesFilter<"EspelhoDiario"> | number
    debito?: FloatWithAggregatesFilter<"EspelhoDiario"> | number
    horasNormais?: FloatWithAggregatesFilter<"EspelhoDiario"> | number
    horasExtras?: FloatWithAggregatesFilter<"EspelhoDiario"> | number
    saldo?: FloatWithAggregatesFilter<"EspelhoDiario"> | number
    motivoReajuste?: StringNullableWithAggregatesFilter<"EspelhoDiario"> | string | null
    data?: StringWithAggregatesFilter<"EspelhoDiario"> | string
    primeiraEntrada?: StringNullableWithAggregatesFilter<"EspelhoDiario"> | string | null
    primeiraSaida?: StringNullableWithAggregatesFilter<"EspelhoDiario"> | string | null
    segundaEntrada?: StringNullableWithAggregatesFilter<"EspelhoDiario"> | string | null
    segundaSaida?: StringNullableWithAggregatesFilter<"EspelhoDiario"> | string | null
    horasTrabalhadas?: FloatWithAggregatesFilter<"EspelhoDiario"> | number
    horasAlmoco?: FloatWithAggregatesFilter<"EspelhoDiario"> | number
    bancoDeHoras?: FloatWithAggregatesFilter<"EspelhoDiario"> | number
    observacoes?: StringWithAggregatesFilter<"EspelhoDiario"> | string
    status?: StringWithAggregatesFilter<"EspelhoDiario"> | string
    origem?: StringNullableWithAggregatesFilter<"EspelhoDiario"> | string | null
  }

  export type MarcacoesUsuarioWhereInput = {
    AND?: MarcacoesUsuarioWhereInput | MarcacoesUsuarioWhereInput[]
    OR?: MarcacoesUsuarioWhereInput[]
    NOT?: MarcacoesUsuarioWhereInput | MarcacoesUsuarioWhereInput[]
    id?: StringFilter<"MarcacoesUsuario"> | string
    pimeiraEntrada?: DateTimeFilter<"MarcacoesUsuario"> | Date | string
    primeiraSaida?: DateTimeFilter<"MarcacoesUsuario"> | Date | string
    segundaEntrada?: DateTimeFilter<"MarcacoesUsuario"> | Date | string
    segundaSaida?: DateTimeFilter<"MarcacoesUsuario"> | Date | string
    pausaAlmoco?: DateTimeNullableFilter<"MarcacoesUsuario"> | Date | string | null
  }

  export type MarcacoesUsuarioOrderByWithRelationInput = {
    id?: SortOrder
    pimeiraEntrada?: SortOrder
    primeiraSaida?: SortOrder
    segundaEntrada?: SortOrder
    segundaSaida?: SortOrder
    pausaAlmoco?: SortOrderInput | SortOrder
  }

  export type MarcacoesUsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MarcacoesUsuarioWhereInput | MarcacoesUsuarioWhereInput[]
    OR?: MarcacoesUsuarioWhereInput[]
    NOT?: MarcacoesUsuarioWhereInput | MarcacoesUsuarioWhereInput[]
    pimeiraEntrada?: DateTimeFilter<"MarcacoesUsuario"> | Date | string
    primeiraSaida?: DateTimeFilter<"MarcacoesUsuario"> | Date | string
    segundaEntrada?: DateTimeFilter<"MarcacoesUsuario"> | Date | string
    segundaSaida?: DateTimeFilter<"MarcacoesUsuario"> | Date | string
    pausaAlmoco?: DateTimeNullableFilter<"MarcacoesUsuario"> | Date | string | null
  }, "id">

  export type MarcacoesUsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    pimeiraEntrada?: SortOrder
    primeiraSaida?: SortOrder
    segundaEntrada?: SortOrder
    segundaSaida?: SortOrder
    pausaAlmoco?: SortOrderInput | SortOrder
    _count?: MarcacoesUsuarioCountOrderByAggregateInput
    _max?: MarcacoesUsuarioMaxOrderByAggregateInput
    _min?: MarcacoesUsuarioMinOrderByAggregateInput
  }

  export type MarcacoesUsuarioScalarWhereWithAggregatesInput = {
    AND?: MarcacoesUsuarioScalarWhereWithAggregatesInput | MarcacoesUsuarioScalarWhereWithAggregatesInput[]
    OR?: MarcacoesUsuarioScalarWhereWithAggregatesInput[]
    NOT?: MarcacoesUsuarioScalarWhereWithAggregatesInput | MarcacoesUsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MarcacoesUsuario"> | string
    pimeiraEntrada?: DateTimeWithAggregatesFilter<"MarcacoesUsuario"> | Date | string
    primeiraSaida?: DateTimeWithAggregatesFilter<"MarcacoesUsuario"> | Date | string
    segundaEntrada?: DateTimeWithAggregatesFilter<"MarcacoesUsuario"> | Date | string
    segundaSaida?: DateTimeWithAggregatesFilter<"MarcacoesUsuario"> | Date | string
    pausaAlmoco?: DateTimeNullableWithAggregatesFilter<"MarcacoesUsuario"> | Date | string | null
  }

  export type EspelhoDePontoMensalWhereInput = {
    AND?: EspelhoDePontoMensalWhereInput | EspelhoDePontoMensalWhereInput[]
    OR?: EspelhoDePontoMensalWhereInput[]
    NOT?: EspelhoDePontoMensalWhereInput | EspelhoDePontoMensalWhereInput[]
    id?: StringFilter<"EspelhoDePontoMensal"> | string
    mesEmAberto?: BoolFilter<"EspelhoDePontoMensal"> | boolean
    cpf?: StringFilter<"EspelhoDePontoMensal"> | string
    mesAno?: StringFilter<"EspelhoDePontoMensal"> | string
    diaDoMes?: StringFilter<"EspelhoDePontoMensal"> | string
    credito?: FloatFilter<"EspelhoDePontoMensal"> | number
    debito?: FloatFilter<"EspelhoDePontoMensal"> | number
    horasNormais?: FloatFilter<"EspelhoDePontoMensal"> | number
    horasExtras?: FloatFilter<"EspelhoDePontoMensal"> | number
    saldo?: FloatFilter<"EspelhoDePontoMensal"> | number
    motivoReajuste?: StringNullableFilter<"EspelhoDePontoMensal"> | string | null
    data?: StringFilter<"EspelhoDePontoMensal"> | string
    primeiraEntrada?: StringNullableFilter<"EspelhoDePontoMensal"> | string | null
    primeiraSaida?: StringNullableFilter<"EspelhoDePontoMensal"> | string | null
    segundaEntrada?: StringNullableFilter<"EspelhoDePontoMensal"> | string | null
    segundaSaida?: StringNullableFilter<"EspelhoDePontoMensal"> | string | null
    horasTrabalhadas?: FloatFilter<"EspelhoDePontoMensal"> | number
    observacoes?: StringFilter<"EspelhoDePontoMensal"> | string
    status?: StringFilter<"EspelhoDePontoMensal"> | string
    origem?: StringNullableFilter<"EspelhoDePontoMensal"> | string | null
  }

  export type EspelhoDePontoMensalOrderByWithRelationInput = {
    id?: SortOrder
    mesEmAberto?: SortOrder
    cpf?: SortOrder
    mesAno?: SortOrder
    diaDoMes?: SortOrder
    credito?: SortOrder
    debito?: SortOrder
    horasNormais?: SortOrder
    horasExtras?: SortOrder
    saldo?: SortOrder
    motivoReajuste?: SortOrderInput | SortOrder
    data?: SortOrder
    primeiraEntrada?: SortOrderInput | SortOrder
    primeiraSaida?: SortOrderInput | SortOrder
    segundaEntrada?: SortOrderInput | SortOrder
    segundaSaida?: SortOrderInput | SortOrder
    horasTrabalhadas?: SortOrder
    observacoes?: SortOrder
    status?: SortOrder
    origem?: SortOrderInput | SortOrder
  }

  export type EspelhoDePontoMensalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EspelhoDePontoMensalWhereInput | EspelhoDePontoMensalWhereInput[]
    OR?: EspelhoDePontoMensalWhereInput[]
    NOT?: EspelhoDePontoMensalWhereInput | EspelhoDePontoMensalWhereInput[]
    mesEmAberto?: BoolFilter<"EspelhoDePontoMensal"> | boolean
    cpf?: StringFilter<"EspelhoDePontoMensal"> | string
    mesAno?: StringFilter<"EspelhoDePontoMensal"> | string
    diaDoMes?: StringFilter<"EspelhoDePontoMensal"> | string
    credito?: FloatFilter<"EspelhoDePontoMensal"> | number
    debito?: FloatFilter<"EspelhoDePontoMensal"> | number
    horasNormais?: FloatFilter<"EspelhoDePontoMensal"> | number
    horasExtras?: FloatFilter<"EspelhoDePontoMensal"> | number
    saldo?: FloatFilter<"EspelhoDePontoMensal"> | number
    motivoReajuste?: StringNullableFilter<"EspelhoDePontoMensal"> | string | null
    data?: StringFilter<"EspelhoDePontoMensal"> | string
    primeiraEntrada?: StringNullableFilter<"EspelhoDePontoMensal"> | string | null
    primeiraSaida?: StringNullableFilter<"EspelhoDePontoMensal"> | string | null
    segundaEntrada?: StringNullableFilter<"EspelhoDePontoMensal"> | string | null
    segundaSaida?: StringNullableFilter<"EspelhoDePontoMensal"> | string | null
    horasTrabalhadas?: FloatFilter<"EspelhoDePontoMensal"> | number
    observacoes?: StringFilter<"EspelhoDePontoMensal"> | string
    status?: StringFilter<"EspelhoDePontoMensal"> | string
    origem?: StringNullableFilter<"EspelhoDePontoMensal"> | string | null
  }, "id">

  export type EspelhoDePontoMensalOrderByWithAggregationInput = {
    id?: SortOrder
    mesEmAberto?: SortOrder
    cpf?: SortOrder
    mesAno?: SortOrder
    diaDoMes?: SortOrder
    credito?: SortOrder
    debito?: SortOrder
    horasNormais?: SortOrder
    horasExtras?: SortOrder
    saldo?: SortOrder
    motivoReajuste?: SortOrderInput | SortOrder
    data?: SortOrder
    primeiraEntrada?: SortOrderInput | SortOrder
    primeiraSaida?: SortOrderInput | SortOrder
    segundaEntrada?: SortOrderInput | SortOrder
    segundaSaida?: SortOrderInput | SortOrder
    horasTrabalhadas?: SortOrder
    observacoes?: SortOrder
    status?: SortOrder
    origem?: SortOrderInput | SortOrder
    _count?: EspelhoDePontoMensalCountOrderByAggregateInput
    _avg?: EspelhoDePontoMensalAvgOrderByAggregateInput
    _max?: EspelhoDePontoMensalMaxOrderByAggregateInput
    _min?: EspelhoDePontoMensalMinOrderByAggregateInput
    _sum?: EspelhoDePontoMensalSumOrderByAggregateInput
  }

  export type EspelhoDePontoMensalScalarWhereWithAggregatesInput = {
    AND?: EspelhoDePontoMensalScalarWhereWithAggregatesInput | EspelhoDePontoMensalScalarWhereWithAggregatesInput[]
    OR?: EspelhoDePontoMensalScalarWhereWithAggregatesInput[]
    NOT?: EspelhoDePontoMensalScalarWhereWithAggregatesInput | EspelhoDePontoMensalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EspelhoDePontoMensal"> | string
    mesEmAberto?: BoolWithAggregatesFilter<"EspelhoDePontoMensal"> | boolean
    cpf?: StringWithAggregatesFilter<"EspelhoDePontoMensal"> | string
    mesAno?: StringWithAggregatesFilter<"EspelhoDePontoMensal"> | string
    diaDoMes?: StringWithAggregatesFilter<"EspelhoDePontoMensal"> | string
    credito?: FloatWithAggregatesFilter<"EspelhoDePontoMensal"> | number
    debito?: FloatWithAggregatesFilter<"EspelhoDePontoMensal"> | number
    horasNormais?: FloatWithAggregatesFilter<"EspelhoDePontoMensal"> | number
    horasExtras?: FloatWithAggregatesFilter<"EspelhoDePontoMensal"> | number
    saldo?: FloatWithAggregatesFilter<"EspelhoDePontoMensal"> | number
    motivoReajuste?: StringNullableWithAggregatesFilter<"EspelhoDePontoMensal"> | string | null
    data?: StringWithAggregatesFilter<"EspelhoDePontoMensal"> | string
    primeiraEntrada?: StringNullableWithAggregatesFilter<"EspelhoDePontoMensal"> | string | null
    primeiraSaida?: StringNullableWithAggregatesFilter<"EspelhoDePontoMensal"> | string | null
    segundaEntrada?: StringNullableWithAggregatesFilter<"EspelhoDePontoMensal"> | string | null
    segundaSaida?: StringNullableWithAggregatesFilter<"EspelhoDePontoMensal"> | string | null
    horasTrabalhadas?: FloatWithAggregatesFilter<"EspelhoDePontoMensal"> | number
    observacoes?: StringWithAggregatesFilter<"EspelhoDePontoMensal"> | string
    status?: StringWithAggregatesFilter<"EspelhoDePontoMensal"> | string
    origem?: StringNullableWithAggregatesFilter<"EspelhoDePontoMensal"> | string | null
  }

  export type EspelhoMensalWhereInput = {
    AND?: EspelhoMensalWhereInput | EspelhoMensalWhereInput[]
    OR?: EspelhoMensalWhereInput[]
    NOT?: EspelhoMensalWhereInput | EspelhoMensalWhereInput[]
    id?: StringFilter<"EspelhoMensal"> | string
    cpf?: StringFilter<"EspelhoMensal"> | string
    mesAno?: StringFilter<"EspelhoMensal"> | string
    diasUteis?: IntFilter<"EspelhoMensal"> | number
    diasTrabalhados?: IntFilter<"EspelhoMensal"> | number
    registrosCorretos?: IntNullableFilter<"EspelhoMensal"> | number | null
    ajustesEAbonos?: IntNullableFilter<"EspelhoMensal"> | number | null
    faltas?: IntNullableFilter<"EspelhoMensal"> | number | null
    totalHorasTrabalhadas?: FloatFilter<"EspelhoMensal"> | number
    totalHorasDevidas?: FloatFilter<"EspelhoMensal"> | number
    saldoHoras?: FloatFilter<"EspelhoMensal"> | number
    dataCriacao?: DateTimeFilter<"EspelhoMensal"> | Date | string
    MesAberto?: BoolFilter<"EspelhoMensal"> | boolean
    registros?: EspelhoDiarioListRelationFilter
  }

  export type EspelhoMensalOrderByWithRelationInput = {
    id?: SortOrder
    cpf?: SortOrder
    mesAno?: SortOrder
    diasUteis?: SortOrder
    diasTrabalhados?: SortOrder
    registrosCorretos?: SortOrderInput | SortOrder
    ajustesEAbonos?: SortOrderInput | SortOrder
    faltas?: SortOrderInput | SortOrder
    totalHorasTrabalhadas?: SortOrder
    totalHorasDevidas?: SortOrder
    saldoHoras?: SortOrder
    dataCriacao?: SortOrder
    MesAberto?: SortOrder
    registros?: EspelhoDiarioOrderByRelationAggregateInput
  }

  export type EspelhoMensalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cpf_mesAno?: EspelhoMensalCpfMesAnoCompoundUniqueInput
    AND?: EspelhoMensalWhereInput | EspelhoMensalWhereInput[]
    OR?: EspelhoMensalWhereInput[]
    NOT?: EspelhoMensalWhereInput | EspelhoMensalWhereInput[]
    cpf?: StringFilter<"EspelhoMensal"> | string
    mesAno?: StringFilter<"EspelhoMensal"> | string
    diasUteis?: IntFilter<"EspelhoMensal"> | number
    diasTrabalhados?: IntFilter<"EspelhoMensal"> | number
    registrosCorretos?: IntNullableFilter<"EspelhoMensal"> | number | null
    ajustesEAbonos?: IntNullableFilter<"EspelhoMensal"> | number | null
    faltas?: IntNullableFilter<"EspelhoMensal"> | number | null
    totalHorasTrabalhadas?: FloatFilter<"EspelhoMensal"> | number
    totalHorasDevidas?: FloatFilter<"EspelhoMensal"> | number
    saldoHoras?: FloatFilter<"EspelhoMensal"> | number
    dataCriacao?: DateTimeFilter<"EspelhoMensal"> | Date | string
    MesAberto?: BoolFilter<"EspelhoMensal"> | boolean
    registros?: EspelhoDiarioListRelationFilter
  }, "id" | "cpf_mesAno">

  export type EspelhoMensalOrderByWithAggregationInput = {
    id?: SortOrder
    cpf?: SortOrder
    mesAno?: SortOrder
    diasUteis?: SortOrder
    diasTrabalhados?: SortOrder
    registrosCorretos?: SortOrderInput | SortOrder
    ajustesEAbonos?: SortOrderInput | SortOrder
    faltas?: SortOrderInput | SortOrder
    totalHorasTrabalhadas?: SortOrder
    totalHorasDevidas?: SortOrder
    saldoHoras?: SortOrder
    dataCriacao?: SortOrder
    MesAberto?: SortOrder
    _count?: EspelhoMensalCountOrderByAggregateInput
    _avg?: EspelhoMensalAvgOrderByAggregateInput
    _max?: EspelhoMensalMaxOrderByAggregateInput
    _min?: EspelhoMensalMinOrderByAggregateInput
    _sum?: EspelhoMensalSumOrderByAggregateInput
  }

  export type EspelhoMensalScalarWhereWithAggregatesInput = {
    AND?: EspelhoMensalScalarWhereWithAggregatesInput | EspelhoMensalScalarWhereWithAggregatesInput[]
    OR?: EspelhoMensalScalarWhereWithAggregatesInput[]
    NOT?: EspelhoMensalScalarWhereWithAggregatesInput | EspelhoMensalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EspelhoMensal"> | string
    cpf?: StringWithAggregatesFilter<"EspelhoMensal"> | string
    mesAno?: StringWithAggregatesFilter<"EspelhoMensal"> | string
    diasUteis?: IntWithAggregatesFilter<"EspelhoMensal"> | number
    diasTrabalhados?: IntWithAggregatesFilter<"EspelhoMensal"> | number
    registrosCorretos?: IntNullableWithAggregatesFilter<"EspelhoMensal"> | number | null
    ajustesEAbonos?: IntNullableWithAggregatesFilter<"EspelhoMensal"> | number | null
    faltas?: IntNullableWithAggregatesFilter<"EspelhoMensal"> | number | null
    totalHorasTrabalhadas?: FloatWithAggregatesFilter<"EspelhoMensal"> | number
    totalHorasDevidas?: FloatWithAggregatesFilter<"EspelhoMensal"> | number
    saldoHoras?: FloatWithAggregatesFilter<"EspelhoMensal"> | number
    dataCriacao?: DateTimeWithAggregatesFilter<"EspelhoMensal"> | Date | string
    MesAberto?: BoolWithAggregatesFilter<"EspelhoMensal"> | boolean
  }

  export type FrequenciaWhereInput = {
    AND?: FrequenciaWhereInput | FrequenciaWhereInput[]
    OR?: FrequenciaWhereInput[]
    NOT?: FrequenciaWhereInput | FrequenciaWhereInput[]
    id?: StringFilter<"Frequencia"> | string
    cpf?: StringFilter<"Frequencia"> | string
    data?: DateTimeFilter<"Frequencia"> | Date | string
    primeiraEntrada?: DateTimeNullableFilter<"Frequencia"> | Date | string | null
    primeiraSaida?: DateTimeNullableFilter<"Frequencia"> | Date | string | null
    segundaEntrada?: DateTimeNullableFilter<"Frequencia"> | Date | string | null
    segundaSaida?: DateTimeNullableFilter<"Frequencia"> | Date | string | null
  }

  export type FrequenciaOrderByWithRelationInput = {
    id?: SortOrder
    cpf?: SortOrder
    data?: SortOrder
    primeiraEntrada?: SortOrderInput | SortOrder
    primeiraSaida?: SortOrderInput | SortOrder
    segundaEntrada?: SortOrderInput | SortOrder
    segundaSaida?: SortOrderInput | SortOrder
  }

  export type FrequenciaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cpf_data?: FrequenciaCpfDataCompoundUniqueInput
    AND?: FrequenciaWhereInput | FrequenciaWhereInput[]
    OR?: FrequenciaWhereInput[]
    NOT?: FrequenciaWhereInput | FrequenciaWhereInput[]
    cpf?: StringFilter<"Frequencia"> | string
    data?: DateTimeFilter<"Frequencia"> | Date | string
    primeiraEntrada?: DateTimeNullableFilter<"Frequencia"> | Date | string | null
    primeiraSaida?: DateTimeNullableFilter<"Frequencia"> | Date | string | null
    segundaEntrada?: DateTimeNullableFilter<"Frequencia"> | Date | string | null
    segundaSaida?: DateTimeNullableFilter<"Frequencia"> | Date | string | null
  }, "id" | "cpf_data">

  export type FrequenciaOrderByWithAggregationInput = {
    id?: SortOrder
    cpf?: SortOrder
    data?: SortOrder
    primeiraEntrada?: SortOrderInput | SortOrder
    primeiraSaida?: SortOrderInput | SortOrder
    segundaEntrada?: SortOrderInput | SortOrder
    segundaSaida?: SortOrderInput | SortOrder
    _count?: FrequenciaCountOrderByAggregateInput
    _max?: FrequenciaMaxOrderByAggregateInput
    _min?: FrequenciaMinOrderByAggregateInput
  }

  export type FrequenciaScalarWhereWithAggregatesInput = {
    AND?: FrequenciaScalarWhereWithAggregatesInput | FrequenciaScalarWhereWithAggregatesInput[]
    OR?: FrequenciaScalarWhereWithAggregatesInput[]
    NOT?: FrequenciaScalarWhereWithAggregatesInput | FrequenciaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Frequencia"> | string
    cpf?: StringWithAggregatesFilter<"Frequencia"> | string
    data?: DateTimeWithAggregatesFilter<"Frequencia"> | Date | string
    primeiraEntrada?: DateTimeNullableWithAggregatesFilter<"Frequencia"> | Date | string | null
    primeiraSaida?: DateTimeNullableWithAggregatesFilter<"Frequencia"> | Date | string | null
    segundaEntrada?: DateTimeNullableWithAggregatesFilter<"Frequencia"> | Date | string | null
    segundaSaida?: DateTimeNullableWithAggregatesFilter<"Frequencia"> | Date | string | null
  }

  export type BancoDeHorasWhereInput = {
    AND?: BancoDeHorasWhereInput | BancoDeHorasWhereInput[]
    OR?: BancoDeHorasWhereInput[]
    NOT?: BancoDeHorasWhereInput | BancoDeHorasWhereInput[]
    id?: StringFilter<"BancoDeHoras"> | string
    cpf?: StringFilter<"BancoDeHoras"> | string
    saldoHoras?: FloatFilter<"BancoDeHoras"> | number
    ultimaAtualizacao?: DateTimeFilter<"BancoDeHoras"> | Date | string
  }

  export type BancoDeHorasOrderByWithRelationInput = {
    id?: SortOrder
    cpf?: SortOrder
    saldoHoras?: SortOrder
    ultimaAtualizacao?: SortOrder
  }

  export type BancoDeHorasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cpf?: string
    AND?: BancoDeHorasWhereInput | BancoDeHorasWhereInput[]
    OR?: BancoDeHorasWhereInput[]
    NOT?: BancoDeHorasWhereInput | BancoDeHorasWhereInput[]
    saldoHoras?: FloatFilter<"BancoDeHoras"> | number
    ultimaAtualizacao?: DateTimeFilter<"BancoDeHoras"> | Date | string
  }, "id" | "cpf">

  export type BancoDeHorasOrderByWithAggregationInput = {
    id?: SortOrder
    cpf?: SortOrder
    saldoHoras?: SortOrder
    ultimaAtualizacao?: SortOrder
    _count?: BancoDeHorasCountOrderByAggregateInput
    _avg?: BancoDeHorasAvgOrderByAggregateInput
    _max?: BancoDeHorasMaxOrderByAggregateInput
    _min?: BancoDeHorasMinOrderByAggregateInput
    _sum?: BancoDeHorasSumOrderByAggregateInput
  }

  export type BancoDeHorasScalarWhereWithAggregatesInput = {
    AND?: BancoDeHorasScalarWhereWithAggregatesInput | BancoDeHorasScalarWhereWithAggregatesInput[]
    OR?: BancoDeHorasScalarWhereWithAggregatesInput[]
    NOT?: BancoDeHorasScalarWhereWithAggregatesInput | BancoDeHorasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BancoDeHoras"> | string
    cpf?: StringWithAggregatesFilter<"BancoDeHoras"> | string
    saldoHoras?: FloatWithAggregatesFilter<"BancoDeHoras"> | number
    ultimaAtualizacao?: DateTimeWithAggregatesFilter<"BancoDeHoras"> | Date | string
  }

  export type RegistroTipo1CreateInput = {
    id?: string
    tipo: string
    idSequencial: string
    tipoIdentificadorEmpregador: string
    cnpjCpfEmpregador: string
    cnoCaepf: string
    razaoSocial: string
    numeroFabricacao: string
    dataInicial: string
    dataFinal: string
    dataHoraGeracao: string
    versaoLayout: string
    tipoIdentificadorFabricante: string
    cnpjCpfFabricante: string
    modelo: string
    crc: string
    origem?: string | null
  }

  export type RegistroTipo1UncheckedCreateInput = {
    id?: string
    tipo: string
    idSequencial: string
    tipoIdentificadorEmpregador: string
    cnpjCpfEmpregador: string
    cnoCaepf: string
    razaoSocial: string
    numeroFabricacao: string
    dataInicial: string
    dataFinal: string
    dataHoraGeracao: string
    versaoLayout: string
    tipoIdentificadorFabricante: string
    cnpjCpfFabricante: string
    modelo: string
    crc: string
    origem?: string | null
  }

  export type RegistroTipo1UpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    idSequencial?: StringFieldUpdateOperationsInput | string
    tipoIdentificadorEmpregador?: StringFieldUpdateOperationsInput | string
    cnpjCpfEmpregador?: StringFieldUpdateOperationsInput | string
    cnoCaepf?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    numeroFabricacao?: StringFieldUpdateOperationsInput | string
    dataInicial?: StringFieldUpdateOperationsInput | string
    dataFinal?: StringFieldUpdateOperationsInput | string
    dataHoraGeracao?: StringFieldUpdateOperationsInput | string
    versaoLayout?: StringFieldUpdateOperationsInput | string
    tipoIdentificadorFabricante?: StringFieldUpdateOperationsInput | string
    cnpjCpfFabricante?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    crc?: StringFieldUpdateOperationsInput | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegistroTipo1UncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    idSequencial?: StringFieldUpdateOperationsInput | string
    tipoIdentificadorEmpregador?: StringFieldUpdateOperationsInput | string
    cnpjCpfEmpregador?: StringFieldUpdateOperationsInput | string
    cnoCaepf?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    numeroFabricacao?: StringFieldUpdateOperationsInput | string
    dataInicial?: StringFieldUpdateOperationsInput | string
    dataFinal?: StringFieldUpdateOperationsInput | string
    dataHoraGeracao?: StringFieldUpdateOperationsInput | string
    versaoLayout?: StringFieldUpdateOperationsInput | string
    tipoIdentificadorFabricante?: StringFieldUpdateOperationsInput | string
    cnpjCpfFabricante?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    crc?: StringFieldUpdateOperationsInput | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegistroTipo1CreateManyInput = {
    id?: string
    tipo: string
    idSequencial: string
    tipoIdentificadorEmpregador: string
    cnpjCpfEmpregador: string
    cnoCaepf: string
    razaoSocial: string
    numeroFabricacao: string
    dataInicial: string
    dataFinal: string
    dataHoraGeracao: string
    versaoLayout: string
    tipoIdentificadorFabricante: string
    cnpjCpfFabricante: string
    modelo: string
    crc: string
    origem?: string | null
  }

  export type RegistroTipo1UpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    idSequencial?: StringFieldUpdateOperationsInput | string
    tipoIdentificadorEmpregador?: StringFieldUpdateOperationsInput | string
    cnpjCpfEmpregador?: StringFieldUpdateOperationsInput | string
    cnoCaepf?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    numeroFabricacao?: StringFieldUpdateOperationsInput | string
    dataInicial?: StringFieldUpdateOperationsInput | string
    dataFinal?: StringFieldUpdateOperationsInput | string
    dataHoraGeracao?: StringFieldUpdateOperationsInput | string
    versaoLayout?: StringFieldUpdateOperationsInput | string
    tipoIdentificadorFabricante?: StringFieldUpdateOperationsInput | string
    cnpjCpfFabricante?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    crc?: StringFieldUpdateOperationsInput | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegistroTipo1UncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    idSequencial?: StringFieldUpdateOperationsInput | string
    tipoIdentificadorEmpregador?: StringFieldUpdateOperationsInput | string
    cnpjCpfEmpregador?: StringFieldUpdateOperationsInput | string
    cnoCaepf?: StringFieldUpdateOperationsInput | string
    razaoSocial?: StringFieldUpdateOperationsInput | string
    numeroFabricacao?: StringFieldUpdateOperationsInput | string
    dataInicial?: StringFieldUpdateOperationsInput | string
    dataFinal?: StringFieldUpdateOperationsInput | string
    dataHoraGeracao?: StringFieldUpdateOperationsInput | string
    versaoLayout?: StringFieldUpdateOperationsInput | string
    tipoIdentificadorFabricante?: StringFieldUpdateOperationsInput | string
    cnpjCpfFabricante?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    crc?: StringFieldUpdateOperationsInput | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegistroTipo10CreateInput = {
    id?: string
    ultimo_nsr: number
    origem: string
  }

  export type RegistroTipo10UncheckedCreateInput = {
    id?: string
    ultimo_nsr: number
    origem: string
  }

  export type RegistroTipo10UpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ultimo_nsr?: IntFieldUpdateOperationsInput | number
    origem?: StringFieldUpdateOperationsInput | string
  }

  export type RegistroTipo10UncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ultimo_nsr?: IntFieldUpdateOperationsInput | number
    origem?: StringFieldUpdateOperationsInput | string
  }

  export type RegistroTipo10CreateManyInput = {
    id?: string
    ultimo_nsr: number
    origem: string
  }

  export type RegistroTipo10UpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ultimo_nsr?: IntFieldUpdateOperationsInput | number
    origem?: StringFieldUpdateOperationsInput | string
  }

  export type RegistroTipo10UncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ultimo_nsr?: IntFieldUpdateOperationsInput | number
    origem?: StringFieldUpdateOperationsInput | string
  }

  export type MarcacoesRelogioCreateInput = {
    id?: string
    nsr: number
    tipo: string
    dataCompleta: Date | string
    data: string
    hora: string
    cpfEmpregado: string
    crc: string
    origem?: string | null
  }

  export type MarcacoesRelogioUncheckedCreateInput = {
    id?: string
    nsr: number
    tipo: string
    dataCompleta: Date | string
    data: string
    hora: string
    cpfEmpregado: string
    crc: string
    origem?: string | null
  }

  export type MarcacoesRelogioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nsr?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    dataCompleta?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: StringFieldUpdateOperationsInput | string
    hora?: StringFieldUpdateOperationsInput | string
    cpfEmpregado?: StringFieldUpdateOperationsInput | string
    crc?: StringFieldUpdateOperationsInput | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarcacoesRelogioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nsr?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    dataCompleta?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: StringFieldUpdateOperationsInput | string
    hora?: StringFieldUpdateOperationsInput | string
    cpfEmpregado?: StringFieldUpdateOperationsInput | string
    crc?: StringFieldUpdateOperationsInput | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarcacoesRelogioCreateManyInput = {
    id?: string
    nsr: number
    tipo: string
    dataCompleta: Date | string
    data: string
    hora: string
    cpfEmpregado: string
    crc: string
    origem?: string | null
  }

  export type MarcacoesRelogioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nsr?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    dataCompleta?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: StringFieldUpdateOperationsInput | string
    hora?: StringFieldUpdateOperationsInput | string
    cpfEmpregado?: StringFieldUpdateOperationsInput | string
    crc?: StringFieldUpdateOperationsInput | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarcacoesRelogioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nsr?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    dataCompleta?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: StringFieldUpdateOperationsInput | string
    hora?: StringFieldUpdateOperationsInput | string
    cpfEmpregado?: StringFieldUpdateOperationsInput | string
    crc?: StringFieldUpdateOperationsInput | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EspelhoDiarioCreateInput = {
    cpf: string
    mesAno: string
    diaDoMes: string
    credito: number
    debito: number
    horasNormais: number
    horasExtras: number
    saldo: number
    motivoReajuste?: string | null
    data: string
    primeiraEntrada?: string | null
    primeiraSaida?: string | null
    segundaEntrada?: string | null
    segundaSaida?: string | null
    horasTrabalhadas: number
    horasAlmoco: number
    bancoDeHoras: number
    observacoes: string
    status: string
    origem?: string | null
    EspelhoMensal?: EspelhoMensalCreateNestedManyWithoutRegistrosInput
  }

  export type EspelhoDiarioUncheckedCreateInput = {
    id?: number
    cpf: string
    mesAno: string
    diaDoMes: string
    credito: number
    debito: number
    horasNormais: number
    horasExtras: number
    saldo: number
    motivoReajuste?: string | null
    data: string
    primeiraEntrada?: string | null
    primeiraSaida?: string | null
    segundaEntrada?: string | null
    segundaSaida?: string | null
    horasTrabalhadas: number
    horasAlmoco: number
    bancoDeHoras: number
    observacoes: string
    status: string
    origem?: string | null
    EspelhoMensal?: EspelhoMensalUncheckedCreateNestedManyWithoutRegistrosInput
  }

  export type EspelhoDiarioUpdateInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    mesAno?: StringFieldUpdateOperationsInput | string
    diaDoMes?: StringFieldUpdateOperationsInput | string
    credito?: FloatFieldUpdateOperationsInput | number
    debito?: FloatFieldUpdateOperationsInput | number
    horasNormais?: FloatFieldUpdateOperationsInput | number
    horasExtras?: FloatFieldUpdateOperationsInput | number
    saldo?: FloatFieldUpdateOperationsInput | number
    motivoReajuste?: NullableStringFieldUpdateOperationsInput | string | null
    data?: StringFieldUpdateOperationsInput | string
    primeiraEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    primeiraSaida?: NullableStringFieldUpdateOperationsInput | string | null
    segundaEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    segundaSaida?: NullableStringFieldUpdateOperationsInput | string | null
    horasTrabalhadas?: FloatFieldUpdateOperationsInput | number
    horasAlmoco?: FloatFieldUpdateOperationsInput | number
    bancoDeHoras?: FloatFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
    EspelhoMensal?: EspelhoMensalUpdateManyWithoutRegistrosNestedInput
  }

  export type EspelhoDiarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    mesAno?: StringFieldUpdateOperationsInput | string
    diaDoMes?: StringFieldUpdateOperationsInput | string
    credito?: FloatFieldUpdateOperationsInput | number
    debito?: FloatFieldUpdateOperationsInput | number
    horasNormais?: FloatFieldUpdateOperationsInput | number
    horasExtras?: FloatFieldUpdateOperationsInput | number
    saldo?: FloatFieldUpdateOperationsInput | number
    motivoReajuste?: NullableStringFieldUpdateOperationsInput | string | null
    data?: StringFieldUpdateOperationsInput | string
    primeiraEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    primeiraSaida?: NullableStringFieldUpdateOperationsInput | string | null
    segundaEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    segundaSaida?: NullableStringFieldUpdateOperationsInput | string | null
    horasTrabalhadas?: FloatFieldUpdateOperationsInput | number
    horasAlmoco?: FloatFieldUpdateOperationsInput | number
    bancoDeHoras?: FloatFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
    EspelhoMensal?: EspelhoMensalUncheckedUpdateManyWithoutRegistrosNestedInput
  }

  export type EspelhoDiarioCreateManyInput = {
    id?: number
    cpf: string
    mesAno: string
    diaDoMes: string
    credito: number
    debito: number
    horasNormais: number
    horasExtras: number
    saldo: number
    motivoReajuste?: string | null
    data: string
    primeiraEntrada?: string | null
    primeiraSaida?: string | null
    segundaEntrada?: string | null
    segundaSaida?: string | null
    horasTrabalhadas: number
    horasAlmoco: number
    bancoDeHoras: number
    observacoes: string
    status: string
    origem?: string | null
  }

  export type EspelhoDiarioUpdateManyMutationInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    mesAno?: StringFieldUpdateOperationsInput | string
    diaDoMes?: StringFieldUpdateOperationsInput | string
    credito?: FloatFieldUpdateOperationsInput | number
    debito?: FloatFieldUpdateOperationsInput | number
    horasNormais?: FloatFieldUpdateOperationsInput | number
    horasExtras?: FloatFieldUpdateOperationsInput | number
    saldo?: FloatFieldUpdateOperationsInput | number
    motivoReajuste?: NullableStringFieldUpdateOperationsInput | string | null
    data?: StringFieldUpdateOperationsInput | string
    primeiraEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    primeiraSaida?: NullableStringFieldUpdateOperationsInput | string | null
    segundaEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    segundaSaida?: NullableStringFieldUpdateOperationsInput | string | null
    horasTrabalhadas?: FloatFieldUpdateOperationsInput | number
    horasAlmoco?: FloatFieldUpdateOperationsInput | number
    bancoDeHoras?: FloatFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EspelhoDiarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    mesAno?: StringFieldUpdateOperationsInput | string
    diaDoMes?: StringFieldUpdateOperationsInput | string
    credito?: FloatFieldUpdateOperationsInput | number
    debito?: FloatFieldUpdateOperationsInput | number
    horasNormais?: FloatFieldUpdateOperationsInput | number
    horasExtras?: FloatFieldUpdateOperationsInput | number
    saldo?: FloatFieldUpdateOperationsInput | number
    motivoReajuste?: NullableStringFieldUpdateOperationsInput | string | null
    data?: StringFieldUpdateOperationsInput | string
    primeiraEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    primeiraSaida?: NullableStringFieldUpdateOperationsInput | string | null
    segundaEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    segundaSaida?: NullableStringFieldUpdateOperationsInput | string | null
    horasTrabalhadas?: FloatFieldUpdateOperationsInput | number
    horasAlmoco?: FloatFieldUpdateOperationsInput | number
    bancoDeHoras?: FloatFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarcacoesUsuarioCreateInput = {
    id?: string
    pimeiraEntrada: Date | string
    primeiraSaida: Date | string
    segundaEntrada: Date | string
    segundaSaida: Date | string
    pausaAlmoco?: Date | string | null
  }

  export type MarcacoesUsuarioUncheckedCreateInput = {
    id?: string
    pimeiraEntrada: Date | string
    primeiraSaida: Date | string
    segundaEntrada: Date | string
    segundaSaida: Date | string
    pausaAlmoco?: Date | string | null
  }

  export type MarcacoesUsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pimeiraEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    primeiraSaida?: DateTimeFieldUpdateOperationsInput | Date | string
    segundaEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    segundaSaida?: DateTimeFieldUpdateOperationsInput | Date | string
    pausaAlmoco?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MarcacoesUsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pimeiraEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    primeiraSaida?: DateTimeFieldUpdateOperationsInput | Date | string
    segundaEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    segundaSaida?: DateTimeFieldUpdateOperationsInput | Date | string
    pausaAlmoco?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MarcacoesUsuarioCreateManyInput = {
    id?: string
    pimeiraEntrada: Date | string
    primeiraSaida: Date | string
    segundaEntrada: Date | string
    segundaSaida: Date | string
    pausaAlmoco?: Date | string | null
  }

  export type MarcacoesUsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pimeiraEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    primeiraSaida?: DateTimeFieldUpdateOperationsInput | Date | string
    segundaEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    segundaSaida?: DateTimeFieldUpdateOperationsInput | Date | string
    pausaAlmoco?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MarcacoesUsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pimeiraEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    primeiraSaida?: DateTimeFieldUpdateOperationsInput | Date | string
    segundaEntrada?: DateTimeFieldUpdateOperationsInput | Date | string
    segundaSaida?: DateTimeFieldUpdateOperationsInput | Date | string
    pausaAlmoco?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EspelhoDePontoMensalCreateInput = {
    id?: string
    mesEmAberto?: boolean
    cpf: string
    mesAno: string
    diaDoMes: string
    credito: number
    debito: number
    horasNormais: number
    horasExtras: number
    saldo: number
    motivoReajuste?: string | null
    data: string
    primeiraEntrada?: string | null
    primeiraSaida?: string | null
    segundaEntrada?: string | null
    segundaSaida?: string | null
    horasTrabalhadas: number
    observacoes: string
    status: string
    origem?: string | null
  }

  export type EspelhoDePontoMensalUncheckedCreateInput = {
    id?: string
    mesEmAberto?: boolean
    cpf: string
    mesAno: string
    diaDoMes: string
    credito: number
    debito: number
    horasNormais: number
    horasExtras: number
    saldo: number
    motivoReajuste?: string | null
    data: string
    primeiraEntrada?: string | null
    primeiraSaida?: string | null
    segundaEntrada?: string | null
    segundaSaida?: string | null
    horasTrabalhadas: number
    observacoes: string
    status: string
    origem?: string | null
  }

  export type EspelhoDePontoMensalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesEmAberto?: BoolFieldUpdateOperationsInput | boolean
    cpf?: StringFieldUpdateOperationsInput | string
    mesAno?: StringFieldUpdateOperationsInput | string
    diaDoMes?: StringFieldUpdateOperationsInput | string
    credito?: FloatFieldUpdateOperationsInput | number
    debito?: FloatFieldUpdateOperationsInput | number
    horasNormais?: FloatFieldUpdateOperationsInput | number
    horasExtras?: FloatFieldUpdateOperationsInput | number
    saldo?: FloatFieldUpdateOperationsInput | number
    motivoReajuste?: NullableStringFieldUpdateOperationsInput | string | null
    data?: StringFieldUpdateOperationsInput | string
    primeiraEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    primeiraSaida?: NullableStringFieldUpdateOperationsInput | string | null
    segundaEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    segundaSaida?: NullableStringFieldUpdateOperationsInput | string | null
    horasTrabalhadas?: FloatFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EspelhoDePontoMensalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesEmAberto?: BoolFieldUpdateOperationsInput | boolean
    cpf?: StringFieldUpdateOperationsInput | string
    mesAno?: StringFieldUpdateOperationsInput | string
    diaDoMes?: StringFieldUpdateOperationsInput | string
    credito?: FloatFieldUpdateOperationsInput | number
    debito?: FloatFieldUpdateOperationsInput | number
    horasNormais?: FloatFieldUpdateOperationsInput | number
    horasExtras?: FloatFieldUpdateOperationsInput | number
    saldo?: FloatFieldUpdateOperationsInput | number
    motivoReajuste?: NullableStringFieldUpdateOperationsInput | string | null
    data?: StringFieldUpdateOperationsInput | string
    primeiraEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    primeiraSaida?: NullableStringFieldUpdateOperationsInput | string | null
    segundaEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    segundaSaida?: NullableStringFieldUpdateOperationsInput | string | null
    horasTrabalhadas?: FloatFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EspelhoDePontoMensalCreateManyInput = {
    id?: string
    mesEmAberto?: boolean
    cpf: string
    mesAno: string
    diaDoMes: string
    credito: number
    debito: number
    horasNormais: number
    horasExtras: number
    saldo: number
    motivoReajuste?: string | null
    data: string
    primeiraEntrada?: string | null
    primeiraSaida?: string | null
    segundaEntrada?: string | null
    segundaSaida?: string | null
    horasTrabalhadas: number
    observacoes: string
    status: string
    origem?: string | null
  }

  export type EspelhoDePontoMensalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesEmAberto?: BoolFieldUpdateOperationsInput | boolean
    cpf?: StringFieldUpdateOperationsInput | string
    mesAno?: StringFieldUpdateOperationsInput | string
    diaDoMes?: StringFieldUpdateOperationsInput | string
    credito?: FloatFieldUpdateOperationsInput | number
    debito?: FloatFieldUpdateOperationsInput | number
    horasNormais?: FloatFieldUpdateOperationsInput | number
    horasExtras?: FloatFieldUpdateOperationsInput | number
    saldo?: FloatFieldUpdateOperationsInput | number
    motivoReajuste?: NullableStringFieldUpdateOperationsInput | string | null
    data?: StringFieldUpdateOperationsInput | string
    primeiraEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    primeiraSaida?: NullableStringFieldUpdateOperationsInput | string | null
    segundaEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    segundaSaida?: NullableStringFieldUpdateOperationsInput | string | null
    horasTrabalhadas?: FloatFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EspelhoDePontoMensalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesEmAberto?: BoolFieldUpdateOperationsInput | boolean
    cpf?: StringFieldUpdateOperationsInput | string
    mesAno?: StringFieldUpdateOperationsInput | string
    diaDoMes?: StringFieldUpdateOperationsInput | string
    credito?: FloatFieldUpdateOperationsInput | number
    debito?: FloatFieldUpdateOperationsInput | number
    horasNormais?: FloatFieldUpdateOperationsInput | number
    horasExtras?: FloatFieldUpdateOperationsInput | number
    saldo?: FloatFieldUpdateOperationsInput | number
    motivoReajuste?: NullableStringFieldUpdateOperationsInput | string | null
    data?: StringFieldUpdateOperationsInput | string
    primeiraEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    primeiraSaida?: NullableStringFieldUpdateOperationsInput | string | null
    segundaEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    segundaSaida?: NullableStringFieldUpdateOperationsInput | string | null
    horasTrabalhadas?: FloatFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EspelhoMensalCreateInput = {
    id?: string
    cpf: string
    mesAno: string
    diasUteis: number
    diasTrabalhados: number
    registrosCorretos?: number | null
    ajustesEAbonos?: number | null
    faltas?: number | null
    totalHorasTrabalhadas: number
    totalHorasDevidas: number
    saldoHoras: number
    dataCriacao?: Date | string
    MesAberto?: boolean
    registros?: EspelhoDiarioCreateNestedManyWithoutEspelhoMensalInput
  }

  export type EspelhoMensalUncheckedCreateInput = {
    id?: string
    cpf: string
    mesAno: string
    diasUteis: number
    diasTrabalhados: number
    registrosCorretos?: number | null
    ajustesEAbonos?: number | null
    faltas?: number | null
    totalHorasTrabalhadas: number
    totalHorasDevidas: number
    saldoHoras: number
    dataCriacao?: Date | string
    MesAberto?: boolean
    registros?: EspelhoDiarioUncheckedCreateNestedManyWithoutEspelhoMensalInput
  }

  export type EspelhoMensalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    mesAno?: StringFieldUpdateOperationsInput | string
    diasUteis?: IntFieldUpdateOperationsInput | number
    diasTrabalhados?: IntFieldUpdateOperationsInput | number
    registrosCorretos?: NullableIntFieldUpdateOperationsInput | number | null
    ajustesEAbonos?: NullableIntFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    totalHorasTrabalhadas?: FloatFieldUpdateOperationsInput | number
    totalHorasDevidas?: FloatFieldUpdateOperationsInput | number
    saldoHoras?: FloatFieldUpdateOperationsInput | number
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    MesAberto?: BoolFieldUpdateOperationsInput | boolean
    registros?: EspelhoDiarioUpdateManyWithoutEspelhoMensalNestedInput
  }

  export type EspelhoMensalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    mesAno?: StringFieldUpdateOperationsInput | string
    diasUteis?: IntFieldUpdateOperationsInput | number
    diasTrabalhados?: IntFieldUpdateOperationsInput | number
    registrosCorretos?: NullableIntFieldUpdateOperationsInput | number | null
    ajustesEAbonos?: NullableIntFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    totalHorasTrabalhadas?: FloatFieldUpdateOperationsInput | number
    totalHorasDevidas?: FloatFieldUpdateOperationsInput | number
    saldoHoras?: FloatFieldUpdateOperationsInput | number
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    MesAberto?: BoolFieldUpdateOperationsInput | boolean
    registros?: EspelhoDiarioUncheckedUpdateManyWithoutEspelhoMensalNestedInput
  }

  export type EspelhoMensalCreateManyInput = {
    id?: string
    cpf: string
    mesAno: string
    diasUteis: number
    diasTrabalhados: number
    registrosCorretos?: number | null
    ajustesEAbonos?: number | null
    faltas?: number | null
    totalHorasTrabalhadas: number
    totalHorasDevidas: number
    saldoHoras: number
    dataCriacao?: Date | string
    MesAberto?: boolean
  }

  export type EspelhoMensalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    mesAno?: StringFieldUpdateOperationsInput | string
    diasUteis?: IntFieldUpdateOperationsInput | number
    diasTrabalhados?: IntFieldUpdateOperationsInput | number
    registrosCorretos?: NullableIntFieldUpdateOperationsInput | number | null
    ajustesEAbonos?: NullableIntFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    totalHorasTrabalhadas?: FloatFieldUpdateOperationsInput | number
    totalHorasDevidas?: FloatFieldUpdateOperationsInput | number
    saldoHoras?: FloatFieldUpdateOperationsInput | number
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    MesAberto?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EspelhoMensalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    mesAno?: StringFieldUpdateOperationsInput | string
    diasUteis?: IntFieldUpdateOperationsInput | number
    diasTrabalhados?: IntFieldUpdateOperationsInput | number
    registrosCorretos?: NullableIntFieldUpdateOperationsInput | number | null
    ajustesEAbonos?: NullableIntFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    totalHorasTrabalhadas?: FloatFieldUpdateOperationsInput | number
    totalHorasDevidas?: FloatFieldUpdateOperationsInput | number
    saldoHoras?: FloatFieldUpdateOperationsInput | number
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    MesAberto?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FrequenciaCreateInput = {
    id?: string
    cpf: string
    data: Date | string
    primeiraEntrada?: Date | string | null
    primeiraSaida?: Date | string | null
    segundaEntrada?: Date | string | null
    segundaSaida?: Date | string | null
  }

  export type FrequenciaUncheckedCreateInput = {
    id?: string
    cpf: string
    data: Date | string
    primeiraEntrada?: Date | string | null
    primeiraSaida?: Date | string | null
    segundaEntrada?: Date | string | null
    segundaSaida?: Date | string | null
  }

  export type FrequenciaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    primeiraEntrada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    primeiraSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    segundaEntrada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    segundaSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FrequenciaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    primeiraEntrada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    primeiraSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    segundaEntrada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    segundaSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FrequenciaCreateManyInput = {
    id?: string
    cpf: string
    data: Date | string
    primeiraEntrada?: Date | string | null
    primeiraSaida?: Date | string | null
    segundaEntrada?: Date | string | null
    segundaSaida?: Date | string | null
  }

  export type FrequenciaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    primeiraEntrada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    primeiraSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    segundaEntrada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    segundaSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FrequenciaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    primeiraEntrada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    primeiraSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    segundaEntrada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    segundaSaida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BancoDeHorasCreateInput = {
    id?: string
    cpf: string
    saldoHoras: number
    ultimaAtualizacao?: Date | string
  }

  export type BancoDeHorasUncheckedCreateInput = {
    id?: string
    cpf: string
    saldoHoras: number
    ultimaAtualizacao?: Date | string
  }

  export type BancoDeHorasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    saldoHoras?: FloatFieldUpdateOperationsInput | number
    ultimaAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BancoDeHorasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    saldoHoras?: FloatFieldUpdateOperationsInput | number
    ultimaAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BancoDeHorasCreateManyInput = {
    id?: string
    cpf: string
    saldoHoras: number
    ultimaAtualizacao?: Date | string
  }

  export type BancoDeHorasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    saldoHoras?: FloatFieldUpdateOperationsInput | number
    ultimaAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BancoDeHorasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    saldoHoras?: FloatFieldUpdateOperationsInput | number
    ultimaAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RegistroTipo1CountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    idSequencial?: SortOrder
    tipoIdentificadorEmpregador?: SortOrder
    cnpjCpfEmpregador?: SortOrder
    cnoCaepf?: SortOrder
    razaoSocial?: SortOrder
    numeroFabricacao?: SortOrder
    dataInicial?: SortOrder
    dataFinal?: SortOrder
    dataHoraGeracao?: SortOrder
    versaoLayout?: SortOrder
    tipoIdentificadorFabricante?: SortOrder
    cnpjCpfFabricante?: SortOrder
    modelo?: SortOrder
    crc?: SortOrder
    origem?: SortOrder
  }

  export type RegistroTipo1MaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    idSequencial?: SortOrder
    tipoIdentificadorEmpregador?: SortOrder
    cnpjCpfEmpregador?: SortOrder
    cnoCaepf?: SortOrder
    razaoSocial?: SortOrder
    numeroFabricacao?: SortOrder
    dataInicial?: SortOrder
    dataFinal?: SortOrder
    dataHoraGeracao?: SortOrder
    versaoLayout?: SortOrder
    tipoIdentificadorFabricante?: SortOrder
    cnpjCpfFabricante?: SortOrder
    modelo?: SortOrder
    crc?: SortOrder
    origem?: SortOrder
  }

  export type RegistroTipo1MinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    idSequencial?: SortOrder
    tipoIdentificadorEmpregador?: SortOrder
    cnpjCpfEmpregador?: SortOrder
    cnoCaepf?: SortOrder
    razaoSocial?: SortOrder
    numeroFabricacao?: SortOrder
    dataInicial?: SortOrder
    dataFinal?: SortOrder
    dataHoraGeracao?: SortOrder
    versaoLayout?: SortOrder
    tipoIdentificadorFabricante?: SortOrder
    cnpjCpfFabricante?: SortOrder
    modelo?: SortOrder
    crc?: SortOrder
    origem?: SortOrder
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

  export type RegistroTipo10CountOrderByAggregateInput = {
    id?: SortOrder
    ultimo_nsr?: SortOrder
    origem?: SortOrder
  }

  export type RegistroTipo10AvgOrderByAggregateInput = {
    ultimo_nsr?: SortOrder
  }

  export type RegistroTipo10MaxOrderByAggregateInput = {
    id?: SortOrder
    ultimo_nsr?: SortOrder
    origem?: SortOrder
  }

  export type RegistroTipo10MinOrderByAggregateInput = {
    id?: SortOrder
    ultimo_nsr?: SortOrder
    origem?: SortOrder
  }

  export type RegistroTipo10SumOrderByAggregateInput = {
    ultimo_nsr?: SortOrder
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MarcacoesRelogioNsrCpfEmpregadoDataHoraOrigemCompoundUniqueInput = {
    nsr: number
    cpfEmpregado: string
    data: string
    hora: string
    origem: string
  }

  export type MarcacoesRelogioCountOrderByAggregateInput = {
    id?: SortOrder
    nsr?: SortOrder
    tipo?: SortOrder
    dataCompleta?: SortOrder
    data?: SortOrder
    hora?: SortOrder
    cpfEmpregado?: SortOrder
    crc?: SortOrder
    origem?: SortOrder
  }

  export type MarcacoesRelogioAvgOrderByAggregateInput = {
    nsr?: SortOrder
  }

  export type MarcacoesRelogioMaxOrderByAggregateInput = {
    id?: SortOrder
    nsr?: SortOrder
    tipo?: SortOrder
    dataCompleta?: SortOrder
    data?: SortOrder
    hora?: SortOrder
    cpfEmpregado?: SortOrder
    crc?: SortOrder
    origem?: SortOrder
  }

  export type MarcacoesRelogioMinOrderByAggregateInput = {
    id?: SortOrder
    nsr?: SortOrder
    tipo?: SortOrder
    dataCompleta?: SortOrder
    data?: SortOrder
    hora?: SortOrder
    cpfEmpregado?: SortOrder
    crc?: SortOrder
    origem?: SortOrder
  }

  export type MarcacoesRelogioSumOrderByAggregateInput = {
    nsr?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type EspelhoMensalListRelationFilter = {
    every?: EspelhoMensalWhereInput
    some?: EspelhoMensalWhereInput
    none?: EspelhoMensalWhereInput
  }

  export type EspelhoMensalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EspelhoDiarioCountOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    mesAno?: SortOrder
    diaDoMes?: SortOrder
    credito?: SortOrder
    debito?: SortOrder
    horasNormais?: SortOrder
    horasExtras?: SortOrder
    saldo?: SortOrder
    motivoReajuste?: SortOrder
    data?: SortOrder
    primeiraEntrada?: SortOrder
    primeiraSaida?: SortOrder
    segundaEntrada?: SortOrder
    segundaSaida?: SortOrder
    horasTrabalhadas?: SortOrder
    horasAlmoco?: SortOrder
    bancoDeHoras?: SortOrder
    observacoes?: SortOrder
    status?: SortOrder
    origem?: SortOrder
  }

  export type EspelhoDiarioAvgOrderByAggregateInput = {
    id?: SortOrder
    credito?: SortOrder
    debito?: SortOrder
    horasNormais?: SortOrder
    horasExtras?: SortOrder
    saldo?: SortOrder
    horasTrabalhadas?: SortOrder
    horasAlmoco?: SortOrder
    bancoDeHoras?: SortOrder
  }

  export type EspelhoDiarioMaxOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    mesAno?: SortOrder
    diaDoMes?: SortOrder
    credito?: SortOrder
    debito?: SortOrder
    horasNormais?: SortOrder
    horasExtras?: SortOrder
    saldo?: SortOrder
    motivoReajuste?: SortOrder
    data?: SortOrder
    primeiraEntrada?: SortOrder
    primeiraSaida?: SortOrder
    segundaEntrada?: SortOrder
    segundaSaida?: SortOrder
    horasTrabalhadas?: SortOrder
    horasAlmoco?: SortOrder
    bancoDeHoras?: SortOrder
    observacoes?: SortOrder
    status?: SortOrder
    origem?: SortOrder
  }

  export type EspelhoDiarioMinOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    mesAno?: SortOrder
    diaDoMes?: SortOrder
    credito?: SortOrder
    debito?: SortOrder
    horasNormais?: SortOrder
    horasExtras?: SortOrder
    saldo?: SortOrder
    motivoReajuste?: SortOrder
    data?: SortOrder
    primeiraEntrada?: SortOrder
    primeiraSaida?: SortOrder
    segundaEntrada?: SortOrder
    segundaSaida?: SortOrder
    horasTrabalhadas?: SortOrder
    horasAlmoco?: SortOrder
    bancoDeHoras?: SortOrder
    observacoes?: SortOrder
    status?: SortOrder
    origem?: SortOrder
  }

  export type EspelhoDiarioSumOrderByAggregateInput = {
    id?: SortOrder
    credito?: SortOrder
    debito?: SortOrder
    horasNormais?: SortOrder
    horasExtras?: SortOrder
    saldo?: SortOrder
    horasTrabalhadas?: SortOrder
    horasAlmoco?: SortOrder
    bancoDeHoras?: SortOrder
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

  export type MarcacoesUsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    pimeiraEntrada?: SortOrder
    primeiraSaida?: SortOrder
    segundaEntrada?: SortOrder
    segundaSaida?: SortOrder
    pausaAlmoco?: SortOrder
  }

  export type MarcacoesUsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    pimeiraEntrada?: SortOrder
    primeiraSaida?: SortOrder
    segundaEntrada?: SortOrder
    segundaSaida?: SortOrder
    pausaAlmoco?: SortOrder
  }

  export type MarcacoesUsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    pimeiraEntrada?: SortOrder
    primeiraSaida?: SortOrder
    segundaEntrada?: SortOrder
    segundaSaida?: SortOrder
    pausaAlmoco?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EspelhoDePontoMensalCountOrderByAggregateInput = {
    id?: SortOrder
    mesEmAberto?: SortOrder
    cpf?: SortOrder
    mesAno?: SortOrder
    diaDoMes?: SortOrder
    credito?: SortOrder
    debito?: SortOrder
    horasNormais?: SortOrder
    horasExtras?: SortOrder
    saldo?: SortOrder
    motivoReajuste?: SortOrder
    data?: SortOrder
    primeiraEntrada?: SortOrder
    primeiraSaida?: SortOrder
    segundaEntrada?: SortOrder
    segundaSaida?: SortOrder
    horasTrabalhadas?: SortOrder
    observacoes?: SortOrder
    status?: SortOrder
    origem?: SortOrder
  }

  export type EspelhoDePontoMensalAvgOrderByAggregateInput = {
    credito?: SortOrder
    debito?: SortOrder
    horasNormais?: SortOrder
    horasExtras?: SortOrder
    saldo?: SortOrder
    horasTrabalhadas?: SortOrder
  }

  export type EspelhoDePontoMensalMaxOrderByAggregateInput = {
    id?: SortOrder
    mesEmAberto?: SortOrder
    cpf?: SortOrder
    mesAno?: SortOrder
    diaDoMes?: SortOrder
    credito?: SortOrder
    debito?: SortOrder
    horasNormais?: SortOrder
    horasExtras?: SortOrder
    saldo?: SortOrder
    motivoReajuste?: SortOrder
    data?: SortOrder
    primeiraEntrada?: SortOrder
    primeiraSaida?: SortOrder
    segundaEntrada?: SortOrder
    segundaSaida?: SortOrder
    horasTrabalhadas?: SortOrder
    observacoes?: SortOrder
    status?: SortOrder
    origem?: SortOrder
  }

  export type EspelhoDePontoMensalMinOrderByAggregateInput = {
    id?: SortOrder
    mesEmAberto?: SortOrder
    cpf?: SortOrder
    mesAno?: SortOrder
    diaDoMes?: SortOrder
    credito?: SortOrder
    debito?: SortOrder
    horasNormais?: SortOrder
    horasExtras?: SortOrder
    saldo?: SortOrder
    motivoReajuste?: SortOrder
    data?: SortOrder
    primeiraEntrada?: SortOrder
    primeiraSaida?: SortOrder
    segundaEntrada?: SortOrder
    segundaSaida?: SortOrder
    horasTrabalhadas?: SortOrder
    observacoes?: SortOrder
    status?: SortOrder
    origem?: SortOrder
  }

  export type EspelhoDePontoMensalSumOrderByAggregateInput = {
    credito?: SortOrder
    debito?: SortOrder
    horasNormais?: SortOrder
    horasExtras?: SortOrder
    saldo?: SortOrder
    horasTrabalhadas?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EspelhoDiarioListRelationFilter = {
    every?: EspelhoDiarioWhereInput
    some?: EspelhoDiarioWhereInput
    none?: EspelhoDiarioWhereInput
  }

  export type EspelhoDiarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EspelhoMensalCpfMesAnoCompoundUniqueInput = {
    cpf: string
    mesAno: string
  }

  export type EspelhoMensalCountOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    mesAno?: SortOrder
    diasUteis?: SortOrder
    diasTrabalhados?: SortOrder
    registrosCorretos?: SortOrder
    ajustesEAbonos?: SortOrder
    faltas?: SortOrder
    totalHorasTrabalhadas?: SortOrder
    totalHorasDevidas?: SortOrder
    saldoHoras?: SortOrder
    dataCriacao?: SortOrder
    MesAberto?: SortOrder
  }

  export type EspelhoMensalAvgOrderByAggregateInput = {
    diasUteis?: SortOrder
    diasTrabalhados?: SortOrder
    registrosCorretos?: SortOrder
    ajustesEAbonos?: SortOrder
    faltas?: SortOrder
    totalHorasTrabalhadas?: SortOrder
    totalHorasDevidas?: SortOrder
    saldoHoras?: SortOrder
  }

  export type EspelhoMensalMaxOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    mesAno?: SortOrder
    diasUteis?: SortOrder
    diasTrabalhados?: SortOrder
    registrosCorretos?: SortOrder
    ajustesEAbonos?: SortOrder
    faltas?: SortOrder
    totalHorasTrabalhadas?: SortOrder
    totalHorasDevidas?: SortOrder
    saldoHoras?: SortOrder
    dataCriacao?: SortOrder
    MesAberto?: SortOrder
  }

  export type EspelhoMensalMinOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    mesAno?: SortOrder
    diasUteis?: SortOrder
    diasTrabalhados?: SortOrder
    registrosCorretos?: SortOrder
    ajustesEAbonos?: SortOrder
    faltas?: SortOrder
    totalHorasTrabalhadas?: SortOrder
    totalHorasDevidas?: SortOrder
    saldoHoras?: SortOrder
    dataCriacao?: SortOrder
    MesAberto?: SortOrder
  }

  export type EspelhoMensalSumOrderByAggregateInput = {
    diasUteis?: SortOrder
    diasTrabalhados?: SortOrder
    registrosCorretos?: SortOrder
    ajustesEAbonos?: SortOrder
    faltas?: SortOrder
    totalHorasTrabalhadas?: SortOrder
    totalHorasDevidas?: SortOrder
    saldoHoras?: SortOrder
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

  export type FrequenciaCpfDataCompoundUniqueInput = {
    cpf: string
    data: Date | string
  }

  export type FrequenciaCountOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    data?: SortOrder
    primeiraEntrada?: SortOrder
    primeiraSaida?: SortOrder
    segundaEntrada?: SortOrder
    segundaSaida?: SortOrder
  }

  export type FrequenciaMaxOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    data?: SortOrder
    primeiraEntrada?: SortOrder
    primeiraSaida?: SortOrder
    segundaEntrada?: SortOrder
    segundaSaida?: SortOrder
  }

  export type FrequenciaMinOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    data?: SortOrder
    primeiraEntrada?: SortOrder
    primeiraSaida?: SortOrder
    segundaEntrada?: SortOrder
    segundaSaida?: SortOrder
  }

  export type BancoDeHorasCountOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    saldoHoras?: SortOrder
    ultimaAtualizacao?: SortOrder
  }

  export type BancoDeHorasAvgOrderByAggregateInput = {
    saldoHoras?: SortOrder
  }

  export type BancoDeHorasMaxOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    saldoHoras?: SortOrder
    ultimaAtualizacao?: SortOrder
  }

  export type BancoDeHorasMinOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    saldoHoras?: SortOrder
    ultimaAtualizacao?: SortOrder
  }

  export type BancoDeHorasSumOrderByAggregateInput = {
    saldoHoras?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EspelhoMensalCreateNestedManyWithoutRegistrosInput = {
    create?: XOR<EspelhoMensalCreateWithoutRegistrosInput, EspelhoMensalUncheckedCreateWithoutRegistrosInput> | EspelhoMensalCreateWithoutRegistrosInput[] | EspelhoMensalUncheckedCreateWithoutRegistrosInput[]
    connectOrCreate?: EspelhoMensalCreateOrConnectWithoutRegistrosInput | EspelhoMensalCreateOrConnectWithoutRegistrosInput[]
    connect?: EspelhoMensalWhereUniqueInput | EspelhoMensalWhereUniqueInput[]
  }

  export type EspelhoMensalUncheckedCreateNestedManyWithoutRegistrosInput = {
    create?: XOR<EspelhoMensalCreateWithoutRegistrosInput, EspelhoMensalUncheckedCreateWithoutRegistrosInput> | EspelhoMensalCreateWithoutRegistrosInput[] | EspelhoMensalUncheckedCreateWithoutRegistrosInput[]
    connectOrCreate?: EspelhoMensalCreateOrConnectWithoutRegistrosInput | EspelhoMensalCreateOrConnectWithoutRegistrosInput[]
    connect?: EspelhoMensalWhereUniqueInput | EspelhoMensalWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EspelhoMensalUpdateManyWithoutRegistrosNestedInput = {
    create?: XOR<EspelhoMensalCreateWithoutRegistrosInput, EspelhoMensalUncheckedCreateWithoutRegistrosInput> | EspelhoMensalCreateWithoutRegistrosInput[] | EspelhoMensalUncheckedCreateWithoutRegistrosInput[]
    connectOrCreate?: EspelhoMensalCreateOrConnectWithoutRegistrosInput | EspelhoMensalCreateOrConnectWithoutRegistrosInput[]
    upsert?: EspelhoMensalUpsertWithWhereUniqueWithoutRegistrosInput | EspelhoMensalUpsertWithWhereUniqueWithoutRegistrosInput[]
    set?: EspelhoMensalWhereUniqueInput | EspelhoMensalWhereUniqueInput[]
    disconnect?: EspelhoMensalWhereUniqueInput | EspelhoMensalWhereUniqueInput[]
    delete?: EspelhoMensalWhereUniqueInput | EspelhoMensalWhereUniqueInput[]
    connect?: EspelhoMensalWhereUniqueInput | EspelhoMensalWhereUniqueInput[]
    update?: EspelhoMensalUpdateWithWhereUniqueWithoutRegistrosInput | EspelhoMensalUpdateWithWhereUniqueWithoutRegistrosInput[]
    updateMany?: EspelhoMensalUpdateManyWithWhereWithoutRegistrosInput | EspelhoMensalUpdateManyWithWhereWithoutRegistrosInput[]
    deleteMany?: EspelhoMensalScalarWhereInput | EspelhoMensalScalarWhereInput[]
  }

  export type EspelhoMensalUncheckedUpdateManyWithoutRegistrosNestedInput = {
    create?: XOR<EspelhoMensalCreateWithoutRegistrosInput, EspelhoMensalUncheckedCreateWithoutRegistrosInput> | EspelhoMensalCreateWithoutRegistrosInput[] | EspelhoMensalUncheckedCreateWithoutRegistrosInput[]
    connectOrCreate?: EspelhoMensalCreateOrConnectWithoutRegistrosInput | EspelhoMensalCreateOrConnectWithoutRegistrosInput[]
    upsert?: EspelhoMensalUpsertWithWhereUniqueWithoutRegistrosInput | EspelhoMensalUpsertWithWhereUniqueWithoutRegistrosInput[]
    set?: EspelhoMensalWhereUniqueInput | EspelhoMensalWhereUniqueInput[]
    disconnect?: EspelhoMensalWhereUniqueInput | EspelhoMensalWhereUniqueInput[]
    delete?: EspelhoMensalWhereUniqueInput | EspelhoMensalWhereUniqueInput[]
    connect?: EspelhoMensalWhereUniqueInput | EspelhoMensalWhereUniqueInput[]
    update?: EspelhoMensalUpdateWithWhereUniqueWithoutRegistrosInput | EspelhoMensalUpdateWithWhereUniqueWithoutRegistrosInput[]
    updateMany?: EspelhoMensalUpdateManyWithWhereWithoutRegistrosInput | EspelhoMensalUpdateManyWithWhereWithoutRegistrosInput[]
    deleteMany?: EspelhoMensalScalarWhereInput | EspelhoMensalScalarWhereInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EspelhoDiarioCreateNestedManyWithoutEspelhoMensalInput = {
    create?: XOR<EspelhoDiarioCreateWithoutEspelhoMensalInput, EspelhoDiarioUncheckedCreateWithoutEspelhoMensalInput> | EspelhoDiarioCreateWithoutEspelhoMensalInput[] | EspelhoDiarioUncheckedCreateWithoutEspelhoMensalInput[]
    connectOrCreate?: EspelhoDiarioCreateOrConnectWithoutEspelhoMensalInput | EspelhoDiarioCreateOrConnectWithoutEspelhoMensalInput[]
    connect?: EspelhoDiarioWhereUniqueInput | EspelhoDiarioWhereUniqueInput[]
  }

  export type EspelhoDiarioUncheckedCreateNestedManyWithoutEspelhoMensalInput = {
    create?: XOR<EspelhoDiarioCreateWithoutEspelhoMensalInput, EspelhoDiarioUncheckedCreateWithoutEspelhoMensalInput> | EspelhoDiarioCreateWithoutEspelhoMensalInput[] | EspelhoDiarioUncheckedCreateWithoutEspelhoMensalInput[]
    connectOrCreate?: EspelhoDiarioCreateOrConnectWithoutEspelhoMensalInput | EspelhoDiarioCreateOrConnectWithoutEspelhoMensalInput[]
    connect?: EspelhoDiarioWhereUniqueInput | EspelhoDiarioWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EspelhoDiarioUpdateManyWithoutEspelhoMensalNestedInput = {
    create?: XOR<EspelhoDiarioCreateWithoutEspelhoMensalInput, EspelhoDiarioUncheckedCreateWithoutEspelhoMensalInput> | EspelhoDiarioCreateWithoutEspelhoMensalInput[] | EspelhoDiarioUncheckedCreateWithoutEspelhoMensalInput[]
    connectOrCreate?: EspelhoDiarioCreateOrConnectWithoutEspelhoMensalInput | EspelhoDiarioCreateOrConnectWithoutEspelhoMensalInput[]
    upsert?: EspelhoDiarioUpsertWithWhereUniqueWithoutEspelhoMensalInput | EspelhoDiarioUpsertWithWhereUniqueWithoutEspelhoMensalInput[]
    set?: EspelhoDiarioWhereUniqueInput | EspelhoDiarioWhereUniqueInput[]
    disconnect?: EspelhoDiarioWhereUniqueInput | EspelhoDiarioWhereUniqueInput[]
    delete?: EspelhoDiarioWhereUniqueInput | EspelhoDiarioWhereUniqueInput[]
    connect?: EspelhoDiarioWhereUniqueInput | EspelhoDiarioWhereUniqueInput[]
    update?: EspelhoDiarioUpdateWithWhereUniqueWithoutEspelhoMensalInput | EspelhoDiarioUpdateWithWhereUniqueWithoutEspelhoMensalInput[]
    updateMany?: EspelhoDiarioUpdateManyWithWhereWithoutEspelhoMensalInput | EspelhoDiarioUpdateManyWithWhereWithoutEspelhoMensalInput[]
    deleteMany?: EspelhoDiarioScalarWhereInput | EspelhoDiarioScalarWhereInput[]
  }

  export type EspelhoDiarioUncheckedUpdateManyWithoutEspelhoMensalNestedInput = {
    create?: XOR<EspelhoDiarioCreateWithoutEspelhoMensalInput, EspelhoDiarioUncheckedCreateWithoutEspelhoMensalInput> | EspelhoDiarioCreateWithoutEspelhoMensalInput[] | EspelhoDiarioUncheckedCreateWithoutEspelhoMensalInput[]
    connectOrCreate?: EspelhoDiarioCreateOrConnectWithoutEspelhoMensalInput | EspelhoDiarioCreateOrConnectWithoutEspelhoMensalInput[]
    upsert?: EspelhoDiarioUpsertWithWhereUniqueWithoutEspelhoMensalInput | EspelhoDiarioUpsertWithWhereUniqueWithoutEspelhoMensalInput[]
    set?: EspelhoDiarioWhereUniqueInput | EspelhoDiarioWhereUniqueInput[]
    disconnect?: EspelhoDiarioWhereUniqueInput | EspelhoDiarioWhereUniqueInput[]
    delete?: EspelhoDiarioWhereUniqueInput | EspelhoDiarioWhereUniqueInput[]
    connect?: EspelhoDiarioWhereUniqueInput | EspelhoDiarioWhereUniqueInput[]
    update?: EspelhoDiarioUpdateWithWhereUniqueWithoutEspelhoMensalInput | EspelhoDiarioUpdateWithWhereUniqueWithoutEspelhoMensalInput[]
    updateMany?: EspelhoDiarioUpdateManyWithWhereWithoutEspelhoMensalInput | EspelhoDiarioUpdateManyWithWhereWithoutEspelhoMensalInput[]
    deleteMany?: EspelhoDiarioScalarWhereInput | EspelhoDiarioScalarWhereInput[]
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EspelhoMensalCreateWithoutRegistrosInput = {
    id?: string
    cpf: string
    mesAno: string
    diasUteis: number
    diasTrabalhados: number
    registrosCorretos?: number | null
    ajustesEAbonos?: number | null
    faltas?: number | null
    totalHorasTrabalhadas: number
    totalHorasDevidas: number
    saldoHoras: number
    dataCriacao?: Date | string
    MesAberto?: boolean
  }

  export type EspelhoMensalUncheckedCreateWithoutRegistrosInput = {
    id?: string
    cpf: string
    mesAno: string
    diasUteis: number
    diasTrabalhados: number
    registrosCorretos?: number | null
    ajustesEAbonos?: number | null
    faltas?: number | null
    totalHorasTrabalhadas: number
    totalHorasDevidas: number
    saldoHoras: number
    dataCriacao?: Date | string
    MesAberto?: boolean
  }

  export type EspelhoMensalCreateOrConnectWithoutRegistrosInput = {
    where: EspelhoMensalWhereUniqueInput
    create: XOR<EspelhoMensalCreateWithoutRegistrosInput, EspelhoMensalUncheckedCreateWithoutRegistrosInput>
  }

  export type EspelhoMensalUpsertWithWhereUniqueWithoutRegistrosInput = {
    where: EspelhoMensalWhereUniqueInput
    update: XOR<EspelhoMensalUpdateWithoutRegistrosInput, EspelhoMensalUncheckedUpdateWithoutRegistrosInput>
    create: XOR<EspelhoMensalCreateWithoutRegistrosInput, EspelhoMensalUncheckedCreateWithoutRegistrosInput>
  }

  export type EspelhoMensalUpdateWithWhereUniqueWithoutRegistrosInput = {
    where: EspelhoMensalWhereUniqueInput
    data: XOR<EspelhoMensalUpdateWithoutRegistrosInput, EspelhoMensalUncheckedUpdateWithoutRegistrosInput>
  }

  export type EspelhoMensalUpdateManyWithWhereWithoutRegistrosInput = {
    where: EspelhoMensalScalarWhereInput
    data: XOR<EspelhoMensalUpdateManyMutationInput, EspelhoMensalUncheckedUpdateManyWithoutRegistrosInput>
  }

  export type EspelhoMensalScalarWhereInput = {
    AND?: EspelhoMensalScalarWhereInput | EspelhoMensalScalarWhereInput[]
    OR?: EspelhoMensalScalarWhereInput[]
    NOT?: EspelhoMensalScalarWhereInput | EspelhoMensalScalarWhereInput[]
    id?: StringFilter<"EspelhoMensal"> | string
    cpf?: StringFilter<"EspelhoMensal"> | string
    mesAno?: StringFilter<"EspelhoMensal"> | string
    diasUteis?: IntFilter<"EspelhoMensal"> | number
    diasTrabalhados?: IntFilter<"EspelhoMensal"> | number
    registrosCorretos?: IntNullableFilter<"EspelhoMensal"> | number | null
    ajustesEAbonos?: IntNullableFilter<"EspelhoMensal"> | number | null
    faltas?: IntNullableFilter<"EspelhoMensal"> | number | null
    totalHorasTrabalhadas?: FloatFilter<"EspelhoMensal"> | number
    totalHorasDevidas?: FloatFilter<"EspelhoMensal"> | number
    saldoHoras?: FloatFilter<"EspelhoMensal"> | number
    dataCriacao?: DateTimeFilter<"EspelhoMensal"> | Date | string
    MesAberto?: BoolFilter<"EspelhoMensal"> | boolean
  }

  export type EspelhoDiarioCreateWithoutEspelhoMensalInput = {
    cpf: string
    mesAno: string
    diaDoMes: string
    credito: number
    debito: number
    horasNormais: number
    horasExtras: number
    saldo: number
    motivoReajuste?: string | null
    data: string
    primeiraEntrada?: string | null
    primeiraSaida?: string | null
    segundaEntrada?: string | null
    segundaSaida?: string | null
    horasTrabalhadas: number
    horasAlmoco: number
    bancoDeHoras: number
    observacoes: string
    status: string
    origem?: string | null
  }

  export type EspelhoDiarioUncheckedCreateWithoutEspelhoMensalInput = {
    id?: number
    cpf: string
    mesAno: string
    diaDoMes: string
    credito: number
    debito: number
    horasNormais: number
    horasExtras: number
    saldo: number
    motivoReajuste?: string | null
    data: string
    primeiraEntrada?: string | null
    primeiraSaida?: string | null
    segundaEntrada?: string | null
    segundaSaida?: string | null
    horasTrabalhadas: number
    horasAlmoco: number
    bancoDeHoras: number
    observacoes: string
    status: string
    origem?: string | null
  }

  export type EspelhoDiarioCreateOrConnectWithoutEspelhoMensalInput = {
    where: EspelhoDiarioWhereUniqueInput
    create: XOR<EspelhoDiarioCreateWithoutEspelhoMensalInput, EspelhoDiarioUncheckedCreateWithoutEspelhoMensalInput>
  }

  export type EspelhoDiarioUpsertWithWhereUniqueWithoutEspelhoMensalInput = {
    where: EspelhoDiarioWhereUniqueInput
    update: XOR<EspelhoDiarioUpdateWithoutEspelhoMensalInput, EspelhoDiarioUncheckedUpdateWithoutEspelhoMensalInput>
    create: XOR<EspelhoDiarioCreateWithoutEspelhoMensalInput, EspelhoDiarioUncheckedCreateWithoutEspelhoMensalInput>
  }

  export type EspelhoDiarioUpdateWithWhereUniqueWithoutEspelhoMensalInput = {
    where: EspelhoDiarioWhereUniqueInput
    data: XOR<EspelhoDiarioUpdateWithoutEspelhoMensalInput, EspelhoDiarioUncheckedUpdateWithoutEspelhoMensalInput>
  }

  export type EspelhoDiarioUpdateManyWithWhereWithoutEspelhoMensalInput = {
    where: EspelhoDiarioScalarWhereInput
    data: XOR<EspelhoDiarioUpdateManyMutationInput, EspelhoDiarioUncheckedUpdateManyWithoutEspelhoMensalInput>
  }

  export type EspelhoDiarioScalarWhereInput = {
    AND?: EspelhoDiarioScalarWhereInput | EspelhoDiarioScalarWhereInput[]
    OR?: EspelhoDiarioScalarWhereInput[]
    NOT?: EspelhoDiarioScalarWhereInput | EspelhoDiarioScalarWhereInput[]
    id?: IntFilter<"EspelhoDiario"> | number
    cpf?: StringFilter<"EspelhoDiario"> | string
    mesAno?: StringFilter<"EspelhoDiario"> | string
    diaDoMes?: StringFilter<"EspelhoDiario"> | string
    credito?: FloatFilter<"EspelhoDiario"> | number
    debito?: FloatFilter<"EspelhoDiario"> | number
    horasNormais?: FloatFilter<"EspelhoDiario"> | number
    horasExtras?: FloatFilter<"EspelhoDiario"> | number
    saldo?: FloatFilter<"EspelhoDiario"> | number
    motivoReajuste?: StringNullableFilter<"EspelhoDiario"> | string | null
    data?: StringFilter<"EspelhoDiario"> | string
    primeiraEntrada?: StringNullableFilter<"EspelhoDiario"> | string | null
    primeiraSaida?: StringNullableFilter<"EspelhoDiario"> | string | null
    segundaEntrada?: StringNullableFilter<"EspelhoDiario"> | string | null
    segundaSaida?: StringNullableFilter<"EspelhoDiario"> | string | null
    horasTrabalhadas?: FloatFilter<"EspelhoDiario"> | number
    horasAlmoco?: FloatFilter<"EspelhoDiario"> | number
    bancoDeHoras?: FloatFilter<"EspelhoDiario"> | number
    observacoes?: StringFilter<"EspelhoDiario"> | string
    status?: StringFilter<"EspelhoDiario"> | string
    origem?: StringNullableFilter<"EspelhoDiario"> | string | null
  }

  export type EspelhoMensalUpdateWithoutRegistrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    mesAno?: StringFieldUpdateOperationsInput | string
    diasUteis?: IntFieldUpdateOperationsInput | number
    diasTrabalhados?: IntFieldUpdateOperationsInput | number
    registrosCorretos?: NullableIntFieldUpdateOperationsInput | number | null
    ajustesEAbonos?: NullableIntFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    totalHorasTrabalhadas?: FloatFieldUpdateOperationsInput | number
    totalHorasDevidas?: FloatFieldUpdateOperationsInput | number
    saldoHoras?: FloatFieldUpdateOperationsInput | number
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    MesAberto?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EspelhoMensalUncheckedUpdateWithoutRegistrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    mesAno?: StringFieldUpdateOperationsInput | string
    diasUteis?: IntFieldUpdateOperationsInput | number
    diasTrabalhados?: IntFieldUpdateOperationsInput | number
    registrosCorretos?: NullableIntFieldUpdateOperationsInput | number | null
    ajustesEAbonos?: NullableIntFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    totalHorasTrabalhadas?: FloatFieldUpdateOperationsInput | number
    totalHorasDevidas?: FloatFieldUpdateOperationsInput | number
    saldoHoras?: FloatFieldUpdateOperationsInput | number
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    MesAberto?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EspelhoMensalUncheckedUpdateManyWithoutRegistrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    mesAno?: StringFieldUpdateOperationsInput | string
    diasUteis?: IntFieldUpdateOperationsInput | number
    diasTrabalhados?: IntFieldUpdateOperationsInput | number
    registrosCorretos?: NullableIntFieldUpdateOperationsInput | number | null
    ajustesEAbonos?: NullableIntFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    totalHorasTrabalhadas?: FloatFieldUpdateOperationsInput | number
    totalHorasDevidas?: FloatFieldUpdateOperationsInput | number
    saldoHoras?: FloatFieldUpdateOperationsInput | number
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    MesAberto?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EspelhoDiarioUpdateWithoutEspelhoMensalInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    mesAno?: StringFieldUpdateOperationsInput | string
    diaDoMes?: StringFieldUpdateOperationsInput | string
    credito?: FloatFieldUpdateOperationsInput | number
    debito?: FloatFieldUpdateOperationsInput | number
    horasNormais?: FloatFieldUpdateOperationsInput | number
    horasExtras?: FloatFieldUpdateOperationsInput | number
    saldo?: FloatFieldUpdateOperationsInput | number
    motivoReajuste?: NullableStringFieldUpdateOperationsInput | string | null
    data?: StringFieldUpdateOperationsInput | string
    primeiraEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    primeiraSaida?: NullableStringFieldUpdateOperationsInput | string | null
    segundaEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    segundaSaida?: NullableStringFieldUpdateOperationsInput | string | null
    horasTrabalhadas?: FloatFieldUpdateOperationsInput | number
    horasAlmoco?: FloatFieldUpdateOperationsInput | number
    bancoDeHoras?: FloatFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EspelhoDiarioUncheckedUpdateWithoutEspelhoMensalInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    mesAno?: StringFieldUpdateOperationsInput | string
    diaDoMes?: StringFieldUpdateOperationsInput | string
    credito?: FloatFieldUpdateOperationsInput | number
    debito?: FloatFieldUpdateOperationsInput | number
    horasNormais?: FloatFieldUpdateOperationsInput | number
    horasExtras?: FloatFieldUpdateOperationsInput | number
    saldo?: FloatFieldUpdateOperationsInput | number
    motivoReajuste?: NullableStringFieldUpdateOperationsInput | string | null
    data?: StringFieldUpdateOperationsInput | string
    primeiraEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    primeiraSaida?: NullableStringFieldUpdateOperationsInput | string | null
    segundaEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    segundaSaida?: NullableStringFieldUpdateOperationsInput | string | null
    horasTrabalhadas?: FloatFieldUpdateOperationsInput | number
    horasAlmoco?: FloatFieldUpdateOperationsInput | number
    bancoDeHoras?: FloatFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EspelhoDiarioUncheckedUpdateManyWithoutEspelhoMensalInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    mesAno?: StringFieldUpdateOperationsInput | string
    diaDoMes?: StringFieldUpdateOperationsInput | string
    credito?: FloatFieldUpdateOperationsInput | number
    debito?: FloatFieldUpdateOperationsInput | number
    horasNormais?: FloatFieldUpdateOperationsInput | number
    horasExtras?: FloatFieldUpdateOperationsInput | number
    saldo?: FloatFieldUpdateOperationsInput | number
    motivoReajuste?: NullableStringFieldUpdateOperationsInput | string | null
    data?: StringFieldUpdateOperationsInput | string
    primeiraEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    primeiraSaida?: NullableStringFieldUpdateOperationsInput | string | null
    segundaEntrada?: NullableStringFieldUpdateOperationsInput | string | null
    segundaSaida?: NullableStringFieldUpdateOperationsInput | string | null
    horasTrabalhadas?: FloatFieldUpdateOperationsInput | number
    horasAlmoco?: FloatFieldUpdateOperationsInput | number
    bancoDeHoras?: FloatFieldUpdateOperationsInput | number
    observacoes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    origem?: NullableStringFieldUpdateOperationsInput | string | null
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