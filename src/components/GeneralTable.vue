<template>
  <div class="p-6">

    <div class="flex justify-end mb-4">
      <Button
        label="Nuevo"
        icon="pi pi-plus"
        class="bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded-md transition-colors"
        @click="handleCreate"
      />
    </div>


    <div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <!-- Encabezado con búsqueda global -->
      <div class="flex justify-end items-center p-4 border-b border-gray-200">
        <div class="relative w-full sm:w-64">
          <InputText
            v-model="globalFilter"
            placeholder="Buscar..."
            class="pl-12 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 placeholder-gray-400 text-sm"
          />
          <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
            <i class="pi pi-search text-base" />
          </span>
        </div>
      </div>

      <div class="overflow-x-auto">
        <DataTable
          :value="data"
          paginator
          :rows="5"
          dataKey="id"
          :loading="loading"
          responsiveLayout="scroll"
          class="w-full border-0"
        >

          <template #empty>
            <div class="text-center text-gray-500 py-4">No se encontraron registros.</div>
          </template>


          <template #loading >
            <div class="text-center text-gray-500 py-4">Cargando datos. Por favor espera...</div>
          </template>


          <Column
            v-for="column in columns"
            :key="column.field"
            :field="column.field as string"
            :header="column.header"
            :style="{ minWidth: '12rem' }"
          >
            <template #body="{ data }">
              {{ data[column.field] }}
            </template>
          </Column>

          <Column header="Acciones" :style="{ minWidth: '10rem' }">
            <template #body="{ data }">
              <div class="flex gap-2">
                <Button
                  icon="pi pi-pencil"
                  class="p-button-rounded p-button-text p-button-primary"
                  @click="handleEdit(data.id)"
                />
                <Button
                  icon="pi pi-trash"
                  class="p-button-rounded p-button-text p-button-danger"
                  @click="handleDelete(data.id)"
                />
              </div>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

// Props tipados
interface ColumnConfig<T> {
  field: keyof T;
  header: string;
}

const props = defineProps<{
  data: { id: number }[];
  columns: ColumnConfig<{ id: number } & any>[];
}>();

// Emits
const emit = defineEmits<{
  (e: 'edit', id: number): void;
  (e: 'delete', id: number): void;
  (e: 'create'): void;
}>();

const loading = ref(false);
const globalFilter = ref('');

// Actions
const handleEdit = (id: number) => {
  emit('edit', id);
};

const handleDelete = (id: number) => {
  if (confirm(`¿Estás seguro de que deseas eliminar el registro con ID ${id}?`)) {
    emit('delete', id);
  }
};

const handleCreate = () => {
  emit('create');
};

// Filtro global sin funcionalidad aun xd
const onGlobalFilter = () => {
  console.log('Filtro global:', globalFilter.value);
};
</script>
