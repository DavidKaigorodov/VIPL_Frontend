<script lang="ts">
import type { TLayout } from "@/shared/types/ui/layout";
import BaseLayout from "./BaseLayout.vue";
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  components: {
    BaseLayout,
  },
  props: {
    type: {
      type: String as PropType<TLayout>,
    },
  },
});
</script>
<template>
  <BaseLayout :type="type">
    <slot />
  </BaseLayout>
</template>
