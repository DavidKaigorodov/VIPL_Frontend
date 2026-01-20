<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import Layout from "@/app/layouts/ui/Layout.vue";

export default defineComponent({
  components: { RouterView, Layout },
});
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Layout :type="route.meta.layout ?? 'guest'">
      <component :is="Component" />
    </Layout>
  </RouterView>
</template>
