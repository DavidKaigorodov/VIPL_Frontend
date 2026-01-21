<script lang="ts">
import { defineComponent } from "vue";
import { Bank } from "@/entities/bank/api/bank.api";
import type { TBank } from "@/entities/bank/model/bank.model";
import ResourceForm from "@/widgets/resourceForm/ui/ResourceForm.vue";
import type { TResourceField } from "@/shared/types/global";

export default defineComponent({
  components: {
    ResourceForm,
  },
  data() {
    return {
      bank: {} as TBank,
      fields: [
        {
          name: "name",
          type: "text",
          label: "Наименование",
          placeholder: "Введите имя",
        },
        {
          name: "code",
          type: "text",
          label: "Код",
          placeholder: "Введите код",
        },
      ] as TResourceField[],
      banks: {
        name: "Сбербанк",
        code: "Sber",
      } as TBank,
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
  <ResourceForm header="bank" :fields="fields" :data="banks" />
</template>
