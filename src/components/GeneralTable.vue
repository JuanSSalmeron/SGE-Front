<template>
  <div>
    <Button
      icon="pi pi-plus"
      class="p-button-success"
      @click="handleCreate"
    />

    <DataTable :value="data" responsiveLayout="scroll" class="custom-datatable">
      <Column
        v-for="column in columns"
        :key="column.field"
        :field="column.field"
        :header="column.header"
      />

      <Column header="Acciones">
        <template #body="slotProps">
          <Button
            icon="pi pi-pencil"
            @click="handleEdit(slotProps.data.id)"
          />
          <Button
            icon="pi pi-trash"
            class="p-button-danger"
            @click="handleDelete(slotProps.data.id)"
          />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';

// Props
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array,
    required: true,
  },
});

// Emits
const emit = defineEmits(['edit', 'delete', 'create']);

// Actions
const handleEdit = (id) => {
  emit('edit', id);
};

const handleDelete = (id) => {
  if (confirm(`¿Estás seguro de que deseas eliminar el registro con ID ${id}?`)) {
    emit('delete', id);
  }
};

const handleCreate = () => {
  emit('create');
};
</script>

<style scoped>
.custom-datatable {
  color: black;
  background: white;
}

.custom-datatable .p-datatable-header,
.custom-datatable .p-datatable-thead,
.custom-datatable .p-datatable-tbody {
  color: black;
  background: white;
}

.custom-datatable .p-datatable-thead th {
  color: black;
  background: #f4f4f4;
}

.custom-datatable .p-datatable-tbody td {
  color: black;
}
</style>
