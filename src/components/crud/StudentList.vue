<template>
  <AppLayout>
    <div class="p-6">
      <GeneralTable :loading="loading" :title="'Estudiantes'" :data="studentsStore.studentsList" :columns="columns"
        @edit="openEditModal" @delete="handleDelete" @create="openCreateModal" />

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
import { onMounted, ref } from 'vue';
import GeneralTable from '@/components/GeneralTable.vue';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import AppLayout from '@/layout/AppLayout.vue';
import { useStudentStore } from '@/stores/StudentStore';
import type { IColumns } from '@/types/GenericTable';
import type { IStudent } from '@/types/Students';
const loading = ref<boolean>(false);

const columns: IColumns[] = [
  { field: 'nombreCompleto', header: 'Nombre Completo' },
  { field: 'matricula', header: 'Matricula' },
  { field: 'fechaIngreso', header: 'Fecha de Ingreso' },
  { field: 'estado', header: 'Estado' },
  { field: 'cursoEscolar', header: 'Curso Escolar' },
];

const studentsStore = useStudentStore();

const GetStudents = async () => {
  loading.value = true;
  try {
    const results = await studentsStore.GetStoreStudents();
    if (results?.success) {
      setTimeout(() => {
        loading.value = false;
      }, 1000);
    } else {
      loading.value = false;
    }
  } catch (error) {
    console.error('Error al obtener estudiantes:', error);
    loading.value = false;
  }
}

onMounted(async () => {
  await GetStudents()
})

const showCreateModal = ref(false);
const showEditModal = ref(false);
const newItem = ref({});
const editItem = ref({} as IStudent);
const currentEditId = ref(null);

const openCreateModal = () => {
  showCreateModal.value = true;
};

const handleCreate = () => {
  if (newItem.value.nombre) {
    dataEntity.value.push({ ...newItem.value });
    console.log(`Registro creado con ID: ${newItem.value.id}`);
  }
  showCreateModal.value = false;
};

const openEditModal = async (id: number) => {
  showEditModal.value = true;
  const response = await studentsStore.GetStoreStudent(id);
  console.log(response)
  if (response?.success === true) {
    editItem.value = studentsStore.student;
    console.log(editItem);
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
