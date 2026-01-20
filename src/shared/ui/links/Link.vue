<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    href: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <a :href="href" class="base-link">
    <slot />
  </a>
</template>

<style scoped lang="sass">
.base-link
  display: inline-flex
  align-items: center
  color: var(--palette-color-4)
  font-weight: 500
  text-decoration: none
  cursor: pointer
  transition: color .2s ease

  &:hover
    color: var(--palette-color-5)
</style>
