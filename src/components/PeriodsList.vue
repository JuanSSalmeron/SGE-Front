<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h2 class="text-2xl font-bold text-gray-700 mb-4">Periodos</h2>
    <GeneralTable :data="dataEntity" :columns="columns" @edit="openEditModal" @delete="handleDelete" @create="openCreateModal" />

    <!-- Modal para Crear -->
    <Dialog v-model:visible="showCreateModal" header="Crear Registro" :modal="true" class="rounded-lg shadow-lg">
      <div v-for="column in columns" :key="column.field" class="mb-4">
        <label :for="column.field" class="block text-gray-600 font-medium">{{ column.header }}</label>
        <InputText
          :id="column.field"
          v-model="newItem[column.field]"
          class="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
        />
      </div>
      <template #footer>
        <Button label="Cancelar" class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" @click="showCreateModal = false" />
        <Button label="Crear" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" @click="handleCreate" />
      </template>
    </Dialog>

    <!-- Modal para Editar -->
    <Dialog v-model:visible="showEditModal" header="Editar Registro" :modal="true" class="rounded-lg shadow-lg">
      <div v-for="column in columns" :key="column.field" class="mb-4">
        <label :for="column.field" class="block text-gray-600 font-medium">{{ column.header }}</label>
        <InputText
          :id="column.field"
          v-model="editItem[column.field]"
          class="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
        />
      </div>
      <template #footer>
        <Button label="Cancelar" class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" @click="showEditModal = false" />
        <Button label="Guardar" class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600" @click="handleEdit" />
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import GeneralTable from './GeneralTable.vue';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const dataEntity = ref([
  { id: 1, nombre: 'Emiliano', descripcion: '22393278', fechaInicio: '2025-01-15', fechaFin: '2025-01-15', estatusPeriodo: 'activo' },
  { id: 2, nombre: 'Aldair', descripcion: '22393277', fechaInicio: '2025-01-15', fechaFin: '2025-01-15', estatusPeriodo: 'activo' },
  { id: 3, nombre: 'Julian', descripcion: '22393278', fechaInicio: '2025-01-15', fechaFin: '2025-01-15', estatusPeriodo: 'baja' },
]);

const columns = [
  { field: 'nombre', header: 'Nombre' },
  { field: 'descripcion', header: 'Descipción' },
  { field: 'fechaInicio', header: 'Fecha de Inicio' },
  { field: 'fechaFin', header: 'Fecha de Fin' },
  { field: 'estatusPeriodo', header: 'Estado de Periodo' },
];

const showCreateModal = ref(false);
const showEditModal = ref(false);
const newItem = ref({});
const editItem = ref({});
const currentEditId = ref(null);

const openCreateModal = () => {
  newItem.value = { id: dataEntity.value.length + 1 };
  columns.forEach(col => {
    newItem.value[col.field] = '';
  });
  showCreateModal.value = true;
};

const handleCreate = () => {
  if (newItem.value.nombre) {
    dataEntity.value.push({ ...newItem.value });
    console.log(`Registro creado con ID: ${newItem.value.id}`);
  }
  showCreateModal.value = false;
};

const openEditModal = (id) => {
  const item = dataEntity.value.find(item => item.id === id);
  if (item) {
    editItem.value = { ...item };
    currentEditId.value = id;
    showEditModal.value = true;
  }
};

const handleEdit = () => {
  const index = dataEntity.value.findIndex(item => item.id === currentEditId.value);
  if (index !== -1) {
    dataEntity.value[index] = { ...editItem.value };
    console.log(`Registro editado con ID: ${currentEditId.value}`);
  }
  showEditModal.value = false;
};

const handleDelete = (id) => {
  dataEntity.value = dataEntity.value.filter(item => item.id !== id);
  console.log(`Registro eliminado con ID: ${id}`);
};
</script>