<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { TTableColumn } from "@/shared/types/global";

export default defineComponent({
  props: {
    row: { type: Object as PropType<Record<string, any>>, required: true },
    columns: { type: Array as PropType<TTableColumn[]>, required: true },
  },
});
</script>

<template>
  <td v-for="col in columns" :key="col.key" class="table-cell">
    {{ row[col.key] }}
  </td>
  <td class="table-cell">
    <slot name="cell" />
  </td>
</template>

<style scoped lang="sass">
.table-cell
  padding: 12px 16px
  vertical-align: middle
  color: var(--text-color)
  font-size: 0.875rem
  line-height: 1.4
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
  border-bottom: var(--table-cell-border)
</style>
