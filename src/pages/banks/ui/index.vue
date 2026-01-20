<script lang="ts">
import { defineComponent } from "vue";
import { ModuleTable } from "@/widgets/moduleTable";
import { Bank } from "@/entities/bank/api/bank.api";

export default defineComponent({
  components: { ModuleTable },
  setup() {
    return { Bank };
  },
});
</script>

<template>
  <ModuleTable header="Банки" :model="Bank" />
</template>
