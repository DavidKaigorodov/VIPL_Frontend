<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    header: {
      type: String,
      default: "",
    },
    headers: {
      type: Array as () => string[] | null,
      default: null,
    },
    data: {
      type: Array as () => string[][] | null,
      default: null,
    },
  },
});
</script>

<template>
  <div class="table-container">
    <div class="header" v-if="'header' in $slots || header !== ''">
      <template v-if="'header' in $slots">
        <slot name="caption" />
      </template>

      <template v-else class="table-header">
        {{ header }}
      </template>
    </div>

    <div class="toolbar" v-if="'toolbar' in $slots">
      <slot name="toolbar"></slot>
    </div>

    <div class="table-border-wrapper">
      <table class="table">
        <thead v-if="'thead' in $slots || Array.isArray(headers)">
          <template v-if="'thead' in $slots">
            <slot name="thead" />
          </template>

          <template v-else-if="Array.isArray(headers)">
            <tr>
              <th v-for="(header, index) in headers" :key="index">
                {{ header }}
              </th>
            </tr>
          </template>
        </thead>

        <tbody v-if="'tbody' in $slots || Array.isArray(data)">
          <template v-if="'tbody' in $slots">
            <slot name="tbody" />
          </template>

          <template v-else-if="Array.isArray(data)">
            <tr v-for="(row, rowIndex) in data" :key="rowIndex">
              <td v-for="(value, colIndex) in row" :key="colIndex">
                {{ value }}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>

    <slot v-if="'pagination' in $slots" name="pagination" />
  </div>
</template>

<style lang="sass">
.table-container
  width: 100%
  padding: 1.5rem
  background-color: var(--table-background)
  display: flex
  flex-direction: column
  gap: 1rem

.header
  font-size: 1.25rem
  font-weight: 700
  color: var(--text-color)
  line-height: 1.2
  margin-bottom: 0.5rem

.table-border-wrapper
  border: var(--table-cell-border)
  border-radius: 8px
  overflow: hidden
  background-color: var(--table-background)

.table
  width: 100%
  border-collapse: separate
  border-spacing: 0
  min-width: 600px
  font-size: 0.875rem
  color: var(--text-color)

  thead
    background-color: var(--table-header-background)

    th
      padding: 12px 16px
      font-weight: 600
      font-size: 0.85rem
      color: var(--text-color-light)
      text-transform: uppercase
      letter-spacing: 0.05em
      border-bottom: var(--table-cell-border)
      text-align: left
      position: sticky
      top: 0
      z-index: 2

  tbody
    tr
      transition: background-color 0.2s ease
      cursor: default
      border-bottom: var(--table-cell-border)

      &:nth-child(even)
        background-color: var(--table-row-background-even)

      &:nth-child(odd)
        background-color: var(--table-row-background-odd)

      &:hover
        background-color: var(--table-row-background-hover)

      td
        padding: 12px 16px
        vertical-align: middle
        color: var(--text-color)
        font-size: 0.875rem
        line-height: 1.4
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis

        &:first-child
          border-left: var(--table-cell-border)

        &:last-child
          border-right: var(--table-cell-border)

.table-footer
  margin-top: 1rem
  display: flex
  justify-content: flex-end
  align-items: center
  font-size: 0.85rem
  color: var(--text-color-light)
</style>
