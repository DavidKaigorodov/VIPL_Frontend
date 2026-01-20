<script lang="ts">
import { defineComponent, computed, type PropType } from "vue";
import { useLayout } from "../model/useLayout";
import type { TLayout } from "@/shared/types/ui/layout";
import BaseButton from "@/shared/ui/baseButton/BaseButton.vue";

export default defineComponent({
  components: {
    BaseButton,
  },
  props: {
    type: {
      type: String as PropType<TLayout>,
      required: true,
    },
  },

  setup(props) {
    const { selectedLayout } = useLayout(computed(() => props.type));

    return {
      selectedLayout,
    };
  },
});
</script>

<template>
  <component :is="selectedLayout">
    <slot />
  </component>
</template>
