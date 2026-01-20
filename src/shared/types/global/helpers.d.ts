import type * as helpers from "@/shared/helpers/plugin";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $helpers: typeof helpers;
  }
}
