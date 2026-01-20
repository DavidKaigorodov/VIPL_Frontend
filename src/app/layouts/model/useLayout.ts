import { computed, type Ref } from "vue";

import GuestLayout from "../ui/GuestLayout.vue";
import AuthLayout from "../ui/AuthLayout.vue";
import type { TLayout } from "@/shared/types/ui/layout";

const layouts = {
  guest: GuestLayout,
  auth: AuthLayout,
} as const;

export function useLayout(type: Ref<TLayout>) {
  const selectedLayout = computed(() => layouts[type.value]);

  return { selectedLayout };
}
