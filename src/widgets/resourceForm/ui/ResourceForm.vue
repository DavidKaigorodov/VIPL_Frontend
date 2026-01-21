<script lang="ts">
import Form from "@/shared/lib/form/Form.vue";
import type { TResourceField } from "@/shared/types/global";
import type { TForm } from "@/shared/types/ui/form";
import { Input } from "@/shared/ui/baseInput";
import FormButton from "@/shared/ui/buttons/FormButton.vue";
import ItemGroup from "@/shared/ui/itemGroup/ItemGroup.vue";
import Label from "@/shared/ui/label/Label.vue";
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  components: {
    Form,
    FormButton,
    Input,
    Label,
    ItemGroup,
  },
  props: {
    header: {
      type: String,
    },
    fields: {
      type: Array as PropType<TResourceField[]>,
      default: null,
    },
    data: {
      type: Object as PropType<Record<string, any>>,
      required: true,
    },
    type: {
      type: String as PropType<TForm>,
      default: "vertical",
    },
  },
  methods:{
    handleSubmit(){
      return console.log(1)
    }
  }
});
</script>
<template>
  <Form :header :type="type" :handleSubmit="handleSubmit">
    <template #form-body>
      <ItemGroup v-for="field in fields">
        <Label :for="field.name" :name="field.name" :text="field.label" />
        <Input
          :id="field.name"
          :name="field.name"
          :type="field.type"
          :placeholder="field.placeholder"
          :disabled="field.disabled"
          v-model="data[field.name]"
        />
      </ItemGroup>
    </template>
    <template #form-footer>
      <FormButton>Сохранить</FormButton>
    </template>
  </Form>
</template>
