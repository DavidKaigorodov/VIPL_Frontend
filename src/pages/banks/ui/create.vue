<script lang="ts">
import { defineComponent } from "vue";
import { Bank } from "@/entities/bank/api/bank.api";
import ModelForm from "@/widgets/modelForm/ui/ModelForm.vue";

export default defineComponent({
  components: {
    ModelForm,
  },
  setup() {
    return { Bank };
  },
});
</script>

<template>
  <ModelForm header="Создать" :model="Bank" submitMode="create" />
</template>
