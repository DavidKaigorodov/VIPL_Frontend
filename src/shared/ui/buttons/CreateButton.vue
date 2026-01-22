<script lang="ts">
import { defineComponent } from "vue";
import NavLink from "../links/NavLink.vue";
import PlusIco from "../icons/PlusIco.vue";

export default defineComponent({
  components: { NavLink, PlusIco },
  props: {
    href: {
      type: String,
      required: true,
    },
  },
});
</script>
<template>
  <NavLink :to="href">
    <PlusIco />
  </NavLink>
</template>
