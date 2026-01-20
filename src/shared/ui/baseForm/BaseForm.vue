<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { TPrimitive, TSubmitFn } from "@/shared/types/global";
import { default as FormButton } from "@/shared/ui/buttons/FormButton.vue";

export default defineComponent({
  components: {
    FormButton,
  },

  props: {
    name: {
      type: String as PropType<TPrimitive>,
    },
    header: {
      type: String as PropType<TPrimitive>,
    },
    sbm: {
      type: String as PropType<TPrimitive>,
    },
    handleSubmit: {
      type: Function as PropType<TSubmitFn>,
    },
  },
});
</script>

<template>
  <div :class="['form-container', name]">
    <form @submit="handleSubmit" :class="['form', name]">
      <h3 v-if="header" class="form-header">
        {{ header }}
      </h3>

      <div class="form-errors"></div>

      <div class="form-content">
        <slot />
      </div>

      <div class="form-buttons">
        <slot name="buttons" />
        <FormButton v-if="sbm" type="submit">
          {{ sbm }}
        </FormButton>
      </div>

      <div class="form-backside">
        <slot name="info" />
      </div>
    </form>
  </div>
</template>

<style lang="sass" scoped>
.form-container
    width: 100%
    height: 100%
</style>
