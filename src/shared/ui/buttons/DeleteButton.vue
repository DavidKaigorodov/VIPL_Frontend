<script lang="ts">
import { defineComponent } from "vue";
import TrashIco from "../icons/TrashIco.vue";
import BaseButton from "../baseButton/BaseButton.vue";

export default defineComponent({
  components: { BaseButton, TrashIco },
  props: {
    params: Object,
    onClick: Function,
  },
  methods: {
    destroy() {
      const confirmed = window.confirm("Вы уверены, что хотите удалить?");
      if (confirmed && this.onClick) {
        this.onClick(this.params);
      }
    },
  },
});
</script>

<template>
  <BaseButton
    @click="destroy"
    :styles="{ background: 'var(--red-button-background-color)' }"
  >
    <TrashIco />
  </BaseButton>
</template>
