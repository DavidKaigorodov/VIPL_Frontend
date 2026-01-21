<script lang="ts">
import { defineComponent } from "vue";
import { default as BaseButton } from "../baseButton/BaseButton.vue";

export default defineComponent({
  components: {
    BaseButton,
  },
});
</script>

<template>
  <BaseButton name="button-form" type="submit">
    <slot />
  </BaseButton>
</template>

<style lang="sass">
.button-form
    background-color: var(--green-button-background-color)
    &:hover
        background-color: var(--green-button-background-color-hover)
    .button
      font-weight: 600    
</style>
