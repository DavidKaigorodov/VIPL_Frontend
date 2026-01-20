/**
 * Общие утилитарные типы и валидаторы
 */

// Nullable
export type TNullable<T> = T | null;
export const NULL = null;

// Optional
export type TOptional<T> = T | undefined;

// Maybe
export type TMaybe<T> = T | null | undefined;

// Primitive
export type TPrimitive = string | number | boolean | symbol | bigint;

export const PRIMITIVES = {
  string: "string",
  number: "number",
  boolean: "boolean",
  symbol: "symbol",
  bigint: "bigint",
} as const;

export function isPrimitive(value: unknown): value is TPrimitive {
  const t = typeof value;
  return (
    t === "string" ||
    t === "number" ||
    t === "boolean" ||
    t === "symbol" ||
    t === "bigint"
  );
}

// Key
export type TKey = string | number | symbol;

// Objects
export type TObject = Record<string, unknown>;
export type TStringObject = Record<string, string>;
export type TNumberObject = Record<string, number>;

export const OBJECT_TYPES = {
  empty: {} as const,
} as const;

export function isObject(value: unknown): value is TObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

// ID
export type TID = number;
export type TUUID = string;

// Date-like
export type TDateString = string;
export type TTimestamp = number;

export function isTimestamp(value: unknown): value is TTimestamp {
  return typeof value === "number" && Number.isFinite(value);
}

// LoadingState
export const LOADING_STATES = {
  idle: "idle",
  loading: "loading",
  succeeded: "succeeded",
  failed: "failed",
} as const;

export type TLoadingState = keyof typeof LOADING_STATES;

// AsyncState
export type TAsyncState<T = null, E = string> = {
  data: T;
  error: E | null;
  status: TLoadingState;
};

// Sorting
export const SORT_DIRECTIONS = {
  asc: "asc",
  desc: "desc",
} as const;

export type TSortDirection = keyof typeof SORT_DIRECTIONS;

export type TSortParams<T extends string = string> = {
  sortBy?: T;
  sortOrder?: TSortDirection;
};

// Pagination
export type TPaginationParams = {
  page?: number;
  limit?: number;
  offset?: number;
};

export type TPaginatedResponse<T> = {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
};

// Errors
export type TFailedResponse = {
  message: string;
  code?: number;
  Status?: number;
};

// Функция без аргументов
export type TFn = () => void;

// Функция с любыми аргументами и любым возвращаемым значением
export type TAnyFn = (...args: any[]) => any;

// Функция-сабмит
export type TSubmitFn = (e: Event) => void;

export type TArray<T = unknown> = T[];

export type TPrimitiveArray = TPrimitive[];

export type TArrayObj = Array<Record<string, unknown>>;

export type TTableColumn = {
  label: string;
  key: string;
  width?: string | number;
  render?: (row: TObject) => unknown;
  splitDateTime?: boolean;
} & Record<string, unknown>;

export interface IModelInstance {
  id?: number;
  update?(data?: any): Promise<any>;
  destroy?(id?: number): Promise<any>;
}

export type TModelClass = {
  new (...args: any[]): IModelInstance;
  config: {
    paginate?: number;
    url: string;
  };
  getAny(page?: number): Promise<{ data: any[]; meta?: any }>;
  fillable: Record<string, { label: string; type: string }>;
  store?(data: any): any;
  show?(id: number): any;
};
