<script lang="ts">
import { defineComponent } from "vue";
import { default as BaseButton } from "../baseButton/BaseButton.vue";
import type { PropType } from "vue";
import type { TPrimitive } from "@/shared/types/global";

export default defineComponent({
  components: {
    BaseButton,
  },
  props: {
    type: {
      type: String as PropType<TPrimitive>,
    },
  },
});
</script>

<template>
  <BaseButton name="form" :type>
    <slot />
  </BaseButton>
</template>

<style lang="sass">
.form
    background: var(--blue-button-background-color)
    &:hover
        background: var(--blue-button-background-color-hover)
</style>
