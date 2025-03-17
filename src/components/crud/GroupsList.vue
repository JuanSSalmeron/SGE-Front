<template>
  <AppLayout>
    <div class="p-6 bg-gray-100">
      <GeneralTable :title="'Grupos'" :data="dataEntity" :columns="columns" @edit="openEditModal" @delete="handleDelete"
        @create="openCreateModal" />

      <!-- Modal para Crear -->
      <Dialog v-model:visible="showCreateModal" header="Crear Registro" :modal="true" class="rounded-lg shadow-lg">
        <div v-for="column in columns" :key="column.field" class="mb-4">
          <label :for="column.field" class="block text-gray-600 font-medium">{{ column.header }}</label>
          <InputText :id="column.field" v-model="newItem[column.field]"
            class="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300" />
        </div>
        <template #footer>
          <Button label="Cancelar" class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            @click="showCreateModal = false" />
          <Button label="Crear" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            @click="handleCreate" />
        </template>
      </Dialog>

      <!-- Modal para Editar -->
      <Dialog v-model:visible="showEditModal" header="Editar Registro" :modal="true" class="rounded-lg shadow-lg">
        <div v-for="column in columns" :key="column.field" class="mb-4">
          <label :for="column.field" class="block text-gray-600 font-medium">{{ column.header }}</label>
          <InputText :id="column.field" v-model="editItem[column.field]"
            class="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300" />
        </div>
        <template #footer>
          <Button label="Cancelar" class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            @click="showEditModal = false" />
          <Button label="Guardar" class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            @click="handleEdit" />
        </template>
      </Dialog>
    </div>
  </AppLayout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import GeneralTable from '@/components/GeneralTable.vue';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import AppLayout from '@/layout/AppLayout.vue';

const dataEntity = ref([
  { id: 1, nombre: 'IDYGS81', descripcion: '22393278' },
  { id: 2, nombre: 'IDYGS82', descripcion: '22393277' },
  { id: 3, nombre: 'IDYGS83', descripcion: '22393278' },
  { id: 3, nombre: 'IDYGS83', descripcion: '22393278' },
  { id: 3, nombre: 'IDYGS83', descripcion: '22393278' },
  { id: 3, nombre: 'IDYGS83', descripcion: '22393278' },
  { id: 3, nombre: 'IDYGS83', descripcion: '22393278' },
  { id: 3, nombre: 'IDYGS83', descripcion: '22393278' },
  { id: 3, nombre: 'IDYGS83', descripcion: '22393278' },
  { id: 3, nombre: 'IDYGS83', descripcion: '22393278' },
  { id: 3, nombre: 'IDYGS83', descripcion: '22393278' },
  { id: 3, nombre: 'IDYGS83', descripcion: '22393278' },
  { id: 3, nombre: 'IDYGS83', descripcion: '22393278' },
  { id: 3, nombre: 'IDYGS83', descripcion: '22393278' },
  { id: 3, nombre: 'IDYGS83', descripcion: '22393278' },
  { id: 3, nombre: 'IDYGS83', descripcion: '22393278' },
  { id: 3, nombre: 'IDYGS83', descripcion: '22393278' },
]);

const columns = [
  { field: 'nombre', header: 'Nombre' },
  { field: 'descripcion', header: 'Descripción' },

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
