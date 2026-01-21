<script lang="ts">
import { defineComponent } from "vue";
import BaseForm from "../baseForm/BaseForm.vue";

export default defineComponent({
  components: {
    BaseForm,
  },
  props: {
    header: {
      type: String,
    },
    data: {
      type: Array as () => Array<object> | null,
      default: null,
    },
  },
});
</script>
<template>
  <BaseForm :header name="horisontal-form" :data>
    <template #form-body>
      <slot />
    </template>
    <template #form-footer>
      <slot />
    </template>
  </BaseForm>
</template>
