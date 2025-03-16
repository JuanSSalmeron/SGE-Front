<template>
  <div>
    <h2>Estudiantes</h2>
    <GeneralTable :data="dataEntity" :columns="columns" @edit="openEditModal" @delete="handleDelete" @create="openCreateModal" />

    <!-- Modal para Crear -->
    <Dialog v-model:visible="showCreateModal" header="Crear Registro" :modal="true">
      <div v-for="column in columns" :key="column.field" class="p-field">
        <label :for="column.field">{{ column.header }}</label>
        <InputText
          :id="column.field"
          v-model="newItem[column.field]"
          class="p-inputtext"
          style="width: 100%"
        />
      </div>
      <template #footer>
        <Button label="Cancelar" icon="pi pi-times" class="p-button-text" @click="showCreateModal = false" />
        <Button label="Crear" icon="pi pi-check" @click="handleCreate" />
      </template>
    </Dialog>

    <!-- Modal para Editar -->
    <Dialog v-model:visible="showEditModal" header="Editar Registro" :modal="true">
      <div v-for="column in columns" :key="column.field" class="p-field">
        <label :for="column.field">{{ column.header }}</label>
        <InputText
          :id="column.field"
          v-model="editItem[column.field]"
          class="p-inputtext"
          style="width: 100%"
        />
      </div>
      <template #footer>
        <Button label="Cancelar" icon="pi pi-times" class="p-button-text" @click="showEditModal = false" />
        <Button label="Guardar" icon="pi pi-check" @click="handleEdit" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import GeneralTable from './GeneralTable.vue';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

// Datos
const dataEntity = ref([
  { id: 1, nombre: 'Emiliano', matricula: '22393278', fechaIngreso: '2025-01-15', estado: 'activo' },
  { id: 2, nombre: 'Aldair', matricula: '22393277', fechaIngreso: '2025-01-15', estado: 'activo' },
  { id: 3, nombre: 'Julian', matricula: '22393278', fechaIngreso: '2025-01-15', estado: 'baja' },
]);

const columns = [
  { field: 'nombre', header: 'Nombre' },
  { field: 'matricula', header: 'Matricula' },
  { field: 'fechaIngreso', header: 'FechaIngreso' },
  { field: 'estado', header: 'Estado' },
];

// Estado para modales
const showCreateModal = ref(false);
const showEditModal = ref(false);
const newItem = ref({});
const editItem = ref({});
const currentEditId = ref(null);

// Methods Actions
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

<style scoped>
.p-field {
  margin-bottom: 1rem;
}
</style>
