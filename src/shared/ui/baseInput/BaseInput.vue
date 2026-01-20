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

    label: {
      type: String,
      default: "",
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

    onEnter(event: KeyboardEvent) {
      const input = event.target as HTMLInputElement;
      const form = input.form;

      if (!form) return;

      const elements = Array.from(form.elements) as HTMLElement[];
      const index = elements.indexOf(input);

      const next = elements[index + 1] as HTMLElement | undefined;

      next?.focus();
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
    @keyup.enter.prevent="onEnter"
  />
</template>

<style lang="sass" scoped>
.base-input
  width: 100%
  padding: 10px 12px
  font-size: 14px
  line-height: 1.4
  color: #1f2937
  background-color: #ffffff
  border: 1px solid #d1d5db
  border-radius: 6px
  transition: border-color .15s ease, box-shadow .15s ease

  &:focus
    outline: none
    border-color: #3b82f6
    box-shadow: 0 0 0 2px rgba(59, 130, 246, .15)

  &:disabled
    background-color: #f3f4f6
    color: #9ca3af
    cursor: not-allowed

  &::placeholder
    color: #9ca3af
</style>
