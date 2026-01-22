<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { Table } from "@/shared/ui/table";
import TableCell from "../../../shared/ui/table/TableCell.vue";
import { DeleteButton } from "../../../shared/ui/buttons";
import EditButton from "@/shared/ui/buttons/EditButton.vue";
import type { TModelClass } from "@/shared/types/global";
import CreateButton from "@/shared/ui/buttons/CreateButton.vue";

export default defineComponent({
  components: {
    Table,
    TableCell,
    DeleteButton,
    EditButton,
    CreateButton,
  },

  props: {
    model: {
      type: Function as unknown as PropType<TModelClass>,
      default: null,
    },
    header: { type: String, default: "" },
    hasEdit: { type: Boolean },
    hasDelete: { type: Boolean },
    hasShow: { type: Boolean },
    hasCreate: { type: Boolean },
  },

  data() {
    return {
      rows: [] as any[],
    };
  },

  computed: {
    columns(): { key: string; label: string }[] {
      if (!this.model) return [];
      return this.model.attributes.map((field: any) => ({
        key: field.name,
        label: field.label,
      }));
    },

    hasActions(): boolean {
      return this.rows.some((row) =>
        Object.values(this.getRowActions(row)).some(Boolean),
      );
    },
  },

  methods: {
    getRowActions(row: any) {
      return {
        edit: this.hasEdit ? this.hasEdit : typeof row.update === "function",
        destroy: this.hasDelete
          ? this.hasDelete
          : typeof row.destroy === "function",
        show: this.hasShow
          ? this.hasShow
          : typeof this.model?.show === "function",
      };
    },

    async load() {
      if (!this.model) {
        this.rows = [];
        return;
      }

      const response = await this.model.getAny();
      this.rows = response.data;
    },
  },

  mounted() {
    this.load();
  },
});
</script>

<template>
  <Table :header="header">
    <template #thead>
      <tr>
        <th v-if="columns.length" v-for="col in columns" :key="col.key">
          {{ col.label }}
        </th>
        <th v-if="hasActions"></th>

        <th v-if="columns.length === 0"></th>
      </tr>
    </template>

    <template #toolbar>
      <CreateButton :href="model.config.url + '/create'" />
    </template>

    <template #tbody>
      <tr v-if="rows.length === 0">
        <td class="no-data">Данныe отсутсвуют</td>
      </tr>

      <tr v-for="row in rows" :key="row.id">
        <TableCell :row="row" :columns="columns">
          <template #cell>
            <div class="actions-wrapper">
              <EditButton
                v-if="getRowActions(row).edit"
                :href="model.config.url + '/' + row.id + '/edit'"
              />
              <DeleteButton
                v-if="getRowActions(row).destroy"
                @click="row.destroy?.()"
              />
            </div>
          </template>
        </TableCell>
      </tr>
    </template>
  </Table>
</template>

<style scoped lang="sass">
.actions-wrapper
  display: flex
  gap: 0.5rem

.no-data
  text-align: center
  color: var(--text-color)
  padding: 1rem
  font-style: italic
</style>
