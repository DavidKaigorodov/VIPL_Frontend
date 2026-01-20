<script lang="ts">
import { defineComponent, ref, computed, onMounted, type PropType } from "vue";
import { Table } from "@/shared/ui/table";
import TableCell from "../../../shared/ui/table/TableCell.vue";
import { DeleteButton } from "../../../shared/ui/buttons";
import type { TModelClass } from "@/shared/types/global";

export default defineComponent({
  components: {
    Table,
    TableCell,
    DeleteButton,
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

  setup(props) {
    const rows = ref<any[]>([]);

    const columns = computed(() =>
      props.model
        ? Object.entries(props.model.fillable).map(([key, field]) => ({
            key,
            label: field.label,
          }))
        : []
    );

    const getRowActions = (row: any) => ({
      edit: props.hasEdit ? props.hasEdit : typeof row.update === "function",
      destroy: props.hasDelete
        ? props.hasDelete
        : typeof row.destroy === "function",
      show: props.hasShow
        ? props.hasShow
        : typeof props.model?.show === "function",
      create: props.hasCreate
        ? props.hasCreate
        : typeof props.model?.store === "function",
    });

    const hasActions = computed(() =>
      rows.value.some((row) => Object.values(getRowActions(row)).some(Boolean))
    );

    const load = async () => {
      if (!props.model) {
        rows.value = [];
        return;
      }

      const response = await props.model.getAny();
      rows.value = response.data.map((obj: any) => {
        try {
          return new props.model(...Object.values(obj));
        } catch {
          return obj;
        }
      });
    };

    onMounted(load);

    return {
      rows,
      columns,
      getRowActions,
      hasActions,
    };
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

    <template #tbody>
      <tr v-if="rows.length === 0">
        <td class="no-data">Данныe отсутсвуют</td>
      </tr>

      <tr v-for="row in rows" :key="row.id">
        <TableCell :row="row" :columns="columns">
          <template #cell>
            <div class="actions-wrapper">
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
