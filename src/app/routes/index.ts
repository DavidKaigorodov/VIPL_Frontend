// import { createRouter, createWebHistory } from "vue-router";
import Banks from "@/pages/banks/ui/index.vue";
import BanksEdit from "@/pages/banks/ui/edit.vue";
import { createRouter, createWebHistory } from 'vue-router';
import type { TLayout } from "@/shared/types/ui/layout";

const routes = [
  {
    path: "/banks",
    // name: "banks.index",
    component: Banks,
    meta: { layout: "auth" as TLayout },
  },
  {
    path: "/banks/:id/edit",
    // name: "banks.edit",
    component: BanksEdit, //[ ]Заменить на компонент эдита
    meta: { layout: "auth" as TLayout },
  },
   {
    path: "/banks/create",
    // name: "banks.create",
    component: Banks, //[ ]Заменить на компонент эдита
    meta: { layout: "auth" as TLayout },
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});