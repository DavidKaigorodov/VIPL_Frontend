<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    to: {
      type: String,
      required: true,
    },
    styles: {
      type: Object,
      required: false,
      default: () => ({ backgroundColor: "var(--blue-button-background-color" }),
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
    border-radius: 8px
    cursor: pointer
    align-items: center
    justify-content: center
</style>
