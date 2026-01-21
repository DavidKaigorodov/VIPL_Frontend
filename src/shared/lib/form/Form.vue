<script lang="ts">
import { defineComponent, computed } from "vue";
import VerticalForm from "@/shared/ui/forms/VerticalForm.vue";
import HorisontalForm from "@/shared/ui/forms/HorisontalForm.vue";

export default defineComponent({
  components: {
    VerticalForm,
    HorisontalForm,
  },

  props: {
    type: {
      type: String,
      default: "vertical",
    },
    header: String,
  },

  setup(props) {
    const formType = computed(() =>
      props.type === "horisontal" ? "HorisontalForm" : "VerticalForm"
    );

    return { formType };
  },
});
</script>

<template>
  <component :is="formType" v-bind="$attrs" :header="header">
    <template v-for="(_, name) in $slots" :key="name" #[name]="scope">
      <slot :name="name" v-bind="scope" />
    </template>
  </component>
</template>
