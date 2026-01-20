<script lang="ts">
import type { TFn, TPrimitive } from "@/shared/types/global";
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String as PropType<TPrimitive>,
    },
    buttonText: {
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
      default: () => [{ background: "var(--blue-button-background-color)" }],
    },
    handleClick: {
      type: Function as PropType<TFn>,
    },
  },
});
</script>

<template>
  <div class="button-container" :style="styles">
    <button :class="['button', name]" @click="handleClick" :disabled>
      <slot />
    </button>
  </div>
</template>

<style lang="sass">
.button-container
    color: var(--button-color)
    border-radius: 7px
    cursor: pointer
</style>
