<script lang="ts">
import { defineComponent } from "vue";
import { Bank } from "@/entities/bank/api/bank.api";
import type { TBank } from "@/entities/bank/model/bank.model";

export default defineComponent({
  data() {
    return {
      bank: {} as TBank,
    };
  },

  mounted: async function () {
    const id = Number(this.$route.params.id);
    if (!isNaN(id)) {
      this.bank = await Bank.get(id);
    }
  },
});
</script>

<template>
  <div>{{ bank }}</div>
</template>
