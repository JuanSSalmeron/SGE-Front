<script setup lang="ts">
import { ref, watch } from 'vue'
import Sidebar from 'primevue/sidebar'
import Button from 'primevue/button'

const visible = ref(localStorage.getItem('sidebarVisible') === 'true')

watch(visible, (newValue) => {
  localStorage.setItem('sidebarVisible', newValue.toString())
})
</script>

<template>
  <div>
    <Button icon="pi pi-bars" class="p-button p-button-text p-3" @click="visible = !visible" />

    <Sidebar
      v-model:visible="visible"
      position="left"
      class="w-64"
      :modal="false"
      :dismissable="false"
    >
      <h2 class="text-xl font-bold mb-4">Menú</h2>
      <ul class="space-y-2">
        <li class="p-2 hover:bg-gray-200 cursor-pointer">🏠 Inicio</li>
        <li class="p-2 hover:bg-gray-200 cursor-pointer">📝 Notas</li>
        <li class="p-2 hover:bg-gray-200 cursor-pointer">⚙️ Configuración</li>
      </ul>
    </Sidebar>
  </div>
</template>
