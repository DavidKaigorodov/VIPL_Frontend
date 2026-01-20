<script lang="ts">
import BaseForm from "@/shared/ui/baseForm/BaseForm.vue";
import { Input } from "@/shared/ui/baseInput";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    BaseForm,
    Input,
  },
  props: {
    data: {
      type: Array<object>,
      default: null,
    },
  },
});
</script>
<template>
  <BaseForm > </BaseForm>
</template>
