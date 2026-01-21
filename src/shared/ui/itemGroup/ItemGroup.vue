<script lang="ts"></script>
<template>
  <div class="item-group">
    <slot />
  </div>
</template>
<style lang="sass">
.item-group
  display: flex
  flex-direction: column
  .label
    padding-left: 0px
    color: var(--label-color)
    font-weight: 500
    padding-top: 10px
    padding-bottom: 3px
    &.inline
        flex-direction: row
        align-items: center
        label
            padding: 5px 0
            flex: 1
</style>
