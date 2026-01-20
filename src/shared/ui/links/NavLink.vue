<script lang="ts">
import { defineComponent, type StyleValue } from "vue";

export default defineComponent({
  props: {
    to: {
      type: Object,
      required: true,
    },
    styles: {
      type: Object,
      required: false,
      default: () => ({ background: "var(--blue-button-background-color" }),
    },
  },
});
</script>

<template>
  <div class="link-container" :style="styles">
    <router-link :to="to" class="nav-link">
      <slot />
    </router-link>
  </div>
</template>

<style scoped lang="sass">
.link-container
  color: var(--button-color)
  border-radius: 7px
  cursor: pointer
</style>
