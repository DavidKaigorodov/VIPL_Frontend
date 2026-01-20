/**
 * Типы для Input`a
 */

// Варианты типа input
export type TInput =
  | "text"
  | "password"
  | "email"
  | "number"
  | "search"
  | "tel"
  | "url"
  | "date"
  | "time"
  | "datetime-local";

// Варианты размеров
export type TInputSize = "sm" | "md" | "lg";

// Варианты статуса
export type TInputState = "default" | "error" | "success";

// Записываем список допустимых значений
export const INPUT_TYPES: Record<TInput, TInput> = {
  text: "text",
  password: "password",
  email: "email",
  number: "number",
  search: "search",
  tel: "tel",
  url: "url",
  date: "date",
  "datetime-local": "datetime-local",
} as const;

export const INPUT_SIZES: Record<TInputSize, TInputSize> = {
  sm: "sm",
  md: "md",
  lg: "lg",
} as const;

export const INPUT_STATES: Record<TInputState, TInputState> = {
  default: "default",
  error: "error",
  success: "success",
} as const;

/**
 * Type Guards (проверка входных значений)
 */

export function isInputType(value: unknown): value is TInput {
  return typeof value === "string" && value in INPUT_TYPES;
}

export function isInputSize(value: unknown): value is TInputSize {
  return typeof value === "string" && value in INPUT_SIZES;
}

export function isInputState(value: unknown): value is TInputState {
  return typeof value === "string" && value in INPUT_STATES;
}
