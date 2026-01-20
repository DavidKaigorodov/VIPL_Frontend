<script lang="ts">
import { defineComponent } from "vue";
import NavLink from "../links/NavLink.vue";
import PenIco from "../icons/PenIco.vue";

export default defineComponent({
  components: { NavLink, PenIco },
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
    <PenIco />
  </NavLink>
</template>
