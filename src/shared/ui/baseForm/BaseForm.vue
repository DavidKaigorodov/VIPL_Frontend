<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { TPrimitive, TSubmitFn } from "@/shared/types/global";

export default defineComponent({
  props: {
    name: {
      type: String as PropType<TPrimitive>,
    },
    header: {
      type: String as PropType<TPrimitive>,
    },
    data: {
      type: Array as () => Array<object> | null,
      default: null,
    },
    onSubmit: {
      type: Function as PropType<TSubmitFn>,
    },
  },
});
</script>

<template>
  <div class="form-container">
    <form @submit.prevent="onSubmit" :class="['form', name]">
      <h3 class="form-header" v-if="header !== ''">
        {{ header }}
      </h3>

      <!-- <div class="form-errors"></div> -->

      <div v-if="'form-body' in $slots" class="form-body-container">
        <slot name="form-body" />
      </div>

      <div v-if="'form-footer' in $slots" class="form-footer">
        <slot name="form-footer" />
      </div>
    </form>
  </div>
</template>

<style lang="sass" scoped>
.form-container
    width: 100%
    height: 100%
    display: flex
    justify-content: center
    align-items: start
</style>
