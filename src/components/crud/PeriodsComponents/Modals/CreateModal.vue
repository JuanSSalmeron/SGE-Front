<script lang="ts" setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import DatePicker from 'primevue/datepicker';
import type { IPeriods } from '@/types/Periods';

const props = defineProps<{
  showModal: boolean;
}>();


const modalItem = ref<IPeriods>({
  id: 0,
  nombre: '',
  descripcion: '',
  fechaInicio: '',
  fechaFin: ''
});

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'create', item: IPeriods): void;
}>();

const handleCreate = () => {
  emit('create', modalItem.value);
};
</script>

<template>
  <Dialog
    v-model:visible="props.showModal"
    header="Crear Período"
    modal
    :style="{ width: '30rem' }"
    class="rounded-lg shadow-lg"
  >
    <div class="mb-4">
      <label class="block text-gray-600 text-lg font-medium">Nombre</label>
      <InputText
        v-model="modalItem.nombre"
        placeholder="Ingrese el nombre del período"
        fluid
        class="w-full"
      />
    </div>

    <div class="mb-4">
      <label class="block text-gray-600 text-lg font-medium">Descripción</label>
      <InputText
        v-model="modalItem.descripcion"
        placeholder="Ingrese una descripción"
        fluid
        class="w-full"
      />
    </div>

    <div class="mb-4">
      <label class="block text-gray-600 text-lg font-medium">Fecha de Inicio</label>
      <DatePicker
        v-model="modalItem.fechaInicio"
        :showOnFocus="true"
        showIcon
        fluid
        class="w-full"
        placeholder="Selecciona la fecha de inicio"
      />
    </div>

    <div class="mb-4">
      <label class="block text-gray-600 text-lg font-medium">Fecha de Fin</label>
      <DatePicker
        v-model="modalItem.fechaFin"
        :showOnFocus="true"
        showIcon
        fluid
        class="w-full"
        placeholder="Selecciona la fecha de fin"
      />
    </div>

    <template #footer>
      <Button
        label="Cancelar"
        severity="secondary"
        @click="$emit('close')"
      />
      <Button
        label="Crear"
        severity="success"
        @click="handleCreate"
      />
    </template>
  </Dialog>
</template>
