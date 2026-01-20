<script lang="ts">
import { defineComponent } from "vue";
import Label from "../../label/Label.vue";

export default defineComponent({
  components: {
    Label,
  },

  props: {
    name: String,
    label: String,
  },
});
</script>

<template>
  <div class="form-group-container">
    <Label name="group" :labelText="label" />
    <div :class="['form-group', name]">
      <slot />
    </div>
  </div>
</template>
