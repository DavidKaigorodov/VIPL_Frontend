/**
 * Экспорт всех глобальных типов для Vue.js
 */
export * from "./common";


declare global {
  // Глобальные переменные приложения
  interface Window {
    __VUE_APP__: {
      NODE_ENV: "development" | "production" | "test";
      API_URL: string;
      APP_VERSION: string;
      BASE_URL: string;
    };
  }
}

export {};
