<script lang="ts">
import { defineComponent, type PropType } from "vue";
import ItemGroup from "../itemGroup/ItemGroup.vue";
import Label from "../label/Label.vue";
import type { TInput } from "@/shared/types/ui/input";
import type { TMaybe, TPrimitive } from "@/shared/types/global";

export default defineComponent({
  components: {
    ItemGroup,
    Label,
  },

  props: {
    name: {
      type: String,
      required: true,
    },

    modelValue: {
      type: [String, Number, Boolean] as PropType<TMaybe<TPrimitive>>,
      default: null,
    },

    type: {
      type: String as PropType<TInput>,
      default: "text",
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    placeholder: {
      type: String,
      default: "",
    },
  },

  emits: ["update:modelValue"],

  methods: {
    onInput(event: Event) {
      const target = event.target as HTMLInputElement;
      this.$emit("update:modelValue", target.value);
    },
  },
});
</script>

<template>
  <input
    class="base-input"
    :id="name"
    :name="name"
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="onInput"
  />
</template>

<style lang="sass" scoped>
.base-input
  padding: 5px 10px
  font-size: 0.95rem
  color: var(--text-color)

  background: var(--input-background)
  border: 1px solid var(--input-border-color)
  outline: none

  border-radius: 7px
</style>
