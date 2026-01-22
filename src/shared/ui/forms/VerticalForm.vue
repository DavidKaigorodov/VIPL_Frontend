<script lang="ts">
import { defineComponent, type PropType } from "vue";
import BaseForm from "../baseForm/BaseForm.vue";
import type { TSubmitFn } from "@/shared/types/global";

export default defineComponent({
  components: { BaseForm },
  props: {
    header: {
      type: String,
      default: "",
    },
    data: Array as PropType<any[] | null>,
    onSubmit: {
      type: Function as PropType<TSubmitFn>,
    },
  },
});
</script>
<template>
  <BaseForm :onSubmit="onSubmit" :header="header" :data="data" name="vertical-form">
    <template #form-body>
      <slot name="form-body" />
    </template>

    <template #form-footer>
      <slot name="form-footer" />
    </template>
  </BaseForm>
</template>
<style lang="sass">
.vertical-form
    min-width: 500px
    max-width: 550px
    padding: 25px
    margin-top: 40px

    display: flex
    flex-direction: column
    gap: 10px

    border-radius: 8px
    box-shadow: 4px 4px 32px 16px #eee

    .form-header
        text-align: center
        padding-bottom: 20px
        color: var(--text-color)
        font-weight: bold
        font-size: 23px

    .form-footer
      display: flex
      justify-content: flex-end
      align-items: center
      gap: 10px

      .form-buttons
          display: flex
          justify-content: space-between
          align-items: center
          gap: 10px

          .button
            flex: 0
            &.ico
                width: 45px
                height: 30px
    .form-backside
        display: flex
        justify-content: start
        align-items: center
        gap: 10px
        color: var(--text-color)
        .reset
            font-size: 0.95rem
            &:hover
                border-bottom: 1px solid #83adf0
</style>
