import { createRouter, createWebHistory } from "vue-router";
import type { TLayout } from "@/shared/types/ui/layout";

import Banks from "@/pages/banks/ui/index.vue";
import BanksEdit from "@/pages/banks/ui/edit.vue";
import BanksCreate from "@/pages/banks/ui/create.vue";
import { default as DivisionIndex } from "@/pages/divisions/ui/Index.vue";

const routes = [
  {
    path: "/banks",
    component: Banks,
    meta: { layout: "auth" as TLayout },
  },
  {
    path: "/banks/:id/edit",
    component: BanksEdit,
    meta: { layout: "auth" as TLayout },
  },
  {
    path: "/banks/create",
    component: BanksCreate,
    meta: { layout: "auth" as TLayout },
  },

  {
    path: "/divisions",
    component: DivisionIndex,
    meta: { layout: "auth" as TLayout },
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
