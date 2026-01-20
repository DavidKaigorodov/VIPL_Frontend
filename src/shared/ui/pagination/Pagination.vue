<script lang="ts">
import { defineComponent } from "vue";
import Link from "../links/Link.vue";
import ChevronRightIco from "../icons/ChevronRightIco.vue";
import ChevronLeftIco from "../icons/ChevronLeftIco.vue";

export default defineComponent({
  components: {
    Link,
    ChevronRightIco,
    ChevronLeftIco,
  },

  props: {
    total: {
      type: Number,
      required: true,
    },
    current: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
  },

  computed: {
    last(): number {
      return Math.ceil(this.total / this.perPage);
    },
  },

  methods: {
    href(page: number): string {
      const url = new URL(window.location.href);
      url.searchParams.set("page", String(page));
      return url.toString();
    },
  },
});
</script>

<template>
  <div v-if="last > 1" class="pagination-container">
    <Link
      v-if="current > 1"
      :href="href(current - 1)"
      class="pagination-arrow prev"
    >
      <ChevronLeftIco />
    </Link>

    <Link v-if="current > 1" :href="href(1)" class="pagination-item"> 1 </Link>

    <span v-if="current > 3" class="pagination-ellipsis">...</span>

    <Link
      v-if="current - 1 > 1"
      :href="href(current - 1)"
      class="pagination-item"
    >
      {{ current - 1 }}
    </Link>

    <span class="pagination-item active">{{ current }}</span>

    <Link
      v-if="current + 1 < last"
      :href="href(current + 1)"
      class="pagination-item"
    >
      {{ current + 1 }}
    </Link>

    <span v-if="current + 2 < last" class="pagination-ellipsis">...</span>

    <Link v-if="current < last" :href="href(last)" class="pagination-item">
      {{ last }}
    </Link>

    <Link
      v-if="current < last"
      :href="href(current + 1)"
      class="pagination-arrow next"
    >
      <ChevronRightIco />
    </Link>
  </div>
</template>

<style lang="sass" scoped>
.pagination-container
    display: flex
    align-items: center
    justify-content: center
    gap: 6px
    margin: 20px 0
    flex-wrap: wrap

    .pagination-item,
    .pagination-arrow
        display: flex
        align-items: center
        justify-content: center
        width: 36px
        height: 36px
        border-radius: 6px
        text-decoration: none
        color: #333
        font-weight: 500
        font-size: 14px
        transition: all 0.2s ease
        user-select: none
        background-color: transparent

    .pagination-item:hover,
    .pagination-arrow:hover
        background-color: var(--palette-color-4)
        color: white

    .pagination-item.active
        background-color: var(--palette-color-4)
        color: white
        font-weight: 600
        cursor: default

    .pagination-ellipsis
        padding: 0 6px
        color: #999
        font-size: 18px
        user-select: none
        display: flex
        align-items: center
</style>
