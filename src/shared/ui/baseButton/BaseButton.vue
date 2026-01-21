<script lang="ts">
import type { TFn, TPrimitive } from "@/shared/types/global";
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String as PropType<TPrimitive>,
    },
    disabled: {
      type: Boolean,
    },
    type: {
      type: String as PropType<TPrimitive>,
    },
    styles: {
      type: Object,
      required: false,
      default: () => [
        { backgroundColor: "var(--green-button-background-color)" },
      ],
    },
    handleClick: {
      type: Function as PropType<TFn>,
    },
  },
});
</script>

<template>
  <div :class="['button-container', name]" :style="styles">
    <button class="button" @click="handleClick" :disabled>
      <slot />
    </button>
  </div>
</template>

<style lang="sass">
.button-container
    border-radius: 8px
</style>
