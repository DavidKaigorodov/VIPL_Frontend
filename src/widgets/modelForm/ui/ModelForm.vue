<script lang="ts">
import { defineComponent, type PropType, computed } from "vue";
import type {
  IModelInstance,
  TModelClass,
  TResourceField,
} from "@/shared/types/global";
import ResourceForm from "@/widgets/resourceForm/ui/ResourceForm.vue";

export default defineComponent({
  components: { ResourceForm },

  props: {
    model: {
      type: Function as unknown as PropType<TModelClass>,
      default: null,
    },
    submitMode: String,
    header: String,
  },

  data() {
    return {
      data: null as IModelInstance | null,
      fields: [] as TResourceField[],
    };
  },

  async mounted() {
    const id = Number(this.$route.params.id);

    if (!isNaN(id) && this.model) {
      this.data = await this.model.get(id);
    }

    if (this.model) {
      this.fields = this.model.attributes.map((field) => ({
        ...field,
        value: this.data
          ? this.data[field.name as keyof typeof this.data]
          : null,
      }));
    }
  },

  methods: {
    async onSubmit() {
      const payload: Record<string, any> = {};

      this.fields.forEach((field) => {
        payload[field.name] = field.value;
      });

      if (this.submitMode === "edit") {
        if (this.data?.update) {
          return await this.data.update(payload);
        }
      } else if (this.submitMode === "create") {
        if (this.model?.store) {
          return await this.model.store(payload);
        }
      }
    },
  },
});
</script>

<template>
  <ResourceForm
    v-if="fields.length"
    :header="header"
    :fields="fields"
    :onSubmit="onSubmit"
  />
</template>
