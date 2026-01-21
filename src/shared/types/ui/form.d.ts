/**
 * Типы для From`ы
 */

export type TForm = "vertical" | "horisontal";

export const FORM_TYPES: Record<TForm, TForm> = {
  guest: "vertical",
  auth: "horisontal",
} as const;
