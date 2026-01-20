import "vue-router";
import "vue";
import type { TLayout } from "@/shared/types/ui/layout";

declare module "vue-router" {
  interface RouteMeta {
    layout?: TLayout;
  }
}
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $route: RouteLocationNormalizedLoaded;
  }
}
