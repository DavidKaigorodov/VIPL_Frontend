<script lang="ts">
import type { TPrimitive } from "@/shared/types/global";
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  props: {
    for: {
      type: String,
    },
    name: {
      type: String,
    },
    text: {
      type: String as PropType<TPrimitive>,
    },
  },
});
</script>

<template>
  <label :for="for" :class="['label', name]">
    {{ text }}
  </label>
</template>
