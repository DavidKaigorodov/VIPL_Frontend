<script lang="ts">
import type { TLayout } from "@/shared/types/ui/layout";
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  props: {
    type: {
      type: String as PropType<TLayout>,
    },
  },
});
</script>

<template>
  <div :class="['layout', type]">
    <slot />
  </div>
</template>
