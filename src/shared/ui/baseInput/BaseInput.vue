<script lang="ts">
import type { TInput } from "@/shared/types/ui/input";
import { defineComponent, type PropType } from "vue";
import ItemGroup from "../itemGroup/ItemGroup.vue";
import Label from "../label/Label.vue";
import type { TMaybe, TPrimitive } from "@/shared/types/global";

export default defineComponent({
  components: {
    ItemGroup,
    Label,
  },
  props: {
    name: {
      type: String,
    },
    type: {
      type: String as PropType<TInput>,
      default: "text",
    },
    text: {
      type: String as PropType<TPrimitive>,
    },
    disabled: {
      type: Boolean,
    },
    value: {
      type: [String, Number, Boolean, Symbol, BigInt, null] as PropType<
        TMaybe<TPrimitive>
      >,
    },
  },

  emits: ["update:value"],

  methods: {
    onInput(e: Event) {
      const target = e.target as HTMLInputElement | null;
      this.$emit("update:value", target?.value ?? null);
    },
  },
});
</script>

<template>
  <ItemGroup>
    <Label :for="name" :name="name" :text="text" />
    <input
      :class="['input', name]"
      :name="name"
      :id="name"
      :type="type"
      :value="value"
      @input="onInput"
      :disabled
    />
  </ItemGroup>
</template>

<style lang="sass"></style>
