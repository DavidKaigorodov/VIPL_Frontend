/**
 * Типы для layout`a
 */

export type TLayout = "guest" | "auth";

export const LAYOUT_TYPES: Record<TLayout, TLayout> = {
  guest: "guest",
  auth: "auth",
} as const;

export function isLayoutType(value: unknown): value is TLayout {
  return typeof value === "string" && value in LAYOUT_TYPES;
}
