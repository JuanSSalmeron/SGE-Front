<script setup lang="ts">
import AppLogo from '@/components/global/AppLogo.vue';
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const date = ref('');
const showDropdown = ref(false);

const hoursReal = () => {
  const now = new Date()
  const formatDate = now.toLocaleDateString()
  const formatHours = now.toLocaleTimeString()

  date.value = `${formatDate} ${formatHours}`
}

onMounted(() => {
  hoursReal();
  setInterval(hoursReal, 1000);
});

const RoutesOnlyMenu = computed(() => {
  return useRouter().options.routes
    .filter((x) => x.meta?.MenuOnly === true)
    .map((route) => ({
      ...route,
      icon: route.meta?.icon || 'pi pi-circle'
    }));
});

const currentYear = new Date().getFullYear();

const toggleDropdown = (event: Event) => {
  event.stopPropagation();
  showDropdown.value = !showDropdown.value;
};

const closeDropdown = () => {
  showDropdown.value = false;
};

onMounted(() => {
  document.addEventListener('click', closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown);
});
</script>

<template>
  <div class="relative flex min-h-screen flex-col bg-[#e2e0e073]">
    <!-- Sidebar -->
    <div
      class="fixed border-r border-[#4f4f4f44] bg-white shadow-2xl text-black w-[250px] space-y-5 inset-y-0 left-0 transform transition duration-200 ease-in-out z-10">
      <AppLogo :route="false" />

      <nav class="mt-4">
        <RouterLink v-for="route in RoutesOnlyMenu" :key="route.path" :to="route.path"
          :class="{ 'bg-[#10b98170] text-[#186219]': $route.path === route.path }"
          class="mt-1 block px-4 py-3 hover:bg-[#10b981bb] hover:text-white transform duration-200 ease-in">
          <i :class="route.icon" class="mr-2"></i>
          {{ route.name }}
        </RouterLink>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col ml-[250px]">
      <!-- Header -->
      <div class="flex bg-white shadow-2xl shadow-[#00000015] px-2 py-4 relative z-10 items-center">
        <button class="ml-4 p-1 rounded-xs">
          <i class="pi pi-bars size-6 hover:text-[#10b981bb] transition ease-in duration-200"></i>
        </button>

        <div class="ml-auto mr-5 relative">
          <button @click="toggleDropdown"
            class="hover:bg-[#10b981bb] transition ease-in duration-250 px-2 py-1 rounded-full group">
            <i class="pi pi-user size-6 text-[#10b981bb] group-hover:text-white"></i>
          </button>

          <div v-if="showDropdown"
            class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-[#10b981bb]">
            <a href="#"
              class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-[#10b98170] hover:text-[#186219] transition ease-in-out duration-300 group">
              <i class="pi pi-user text-[#10b981bb] group-hover:text-[#186219] transition ease-in-out duration-300"></i>
              <span>Perfil</span>
            </a>
            <a href="#"
              class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-[#10b98170] hover:text-[#186219] transition ease-in-out duration-300 group">
              <i class="pi pi-cog text-[#10b981bb] group-hover:text-[#186219] transition ease-in-out duration-300"></i>
              <span>Configuraciones</span>
            </a>
            <a href="#"
              class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-[#10b98170] hover:text-[#186219] transition ease-in-out duration-300 group">
              <i
                class="pi pi-sign-out text-[#10b981bb] group-hover:text-[#186219] transition ease-in-out duration-300"></i>
              <span>Cerrar Sesión</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="flex-1">
        <slot></slot>
      </div>

      <!-- Footer -->
      <footer class="bg-white shadow-2xl shadow-[#00000015] border-t border-gray-200 z-10">
        <div class="flex justify-between items-center text-sm text-gray-600 px-6 py-4">
          <span>© {{ currentYear }} Sistema Gestor Escolar. Todos los derechos reservados.</span>
          <span>{{ date }}</span>
        </div>
      </footer>
    </div>
  </div>
</template>
