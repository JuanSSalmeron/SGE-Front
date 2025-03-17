<script setup lang="ts">
import AppLogo from '@/components/global/AppLogo.vue';
import SimpleLogo from '@/components/global/SimpleLogo.vue';
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const date = ref('');
const showDropdown = ref(false);
const isSidebarCollapsed = ref(false);
const currentYear = new Date().getFullYear();

const hoursReal = () => {
  const now = new Date()
  const formatDate = now.toLocaleDateString()
  const formatHours = now.toLocaleTimeString()
  date.value = `${formatDate} ${formatHours}`
}

const toggleDropdown = (event: Event) => {
  event.stopPropagation();
  showDropdown.value = !showDropdown.value;
};

const closeDropdown = () => {
  showDropdown.value = false;
};

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value;
};

const RoutesOnlyMenu = computed(() => {
  return useRouter().options.routes
    .filter((x) => x.meta?.MenuOnly === true)
    .map((route) => ({
      ...route,
      icon: route.meta?.icon || 'pi pi-circle'
    }));
});

onMounted(() => {
  hoursReal();
  setInterval(hoursReal, 1000);
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
      class="fixed border-r border-[#4f4f4f44] bg-white shadow-2xl text-black space-y-5 inset-y-0 left-0 transform transition-all duration-200 ease-in-out z-10"
      :class="[isSidebarCollapsed ? 'w-[60px]' : 'w-[250px]']">
      <SimpleLogo v-show="isSidebarCollapsed" :route="false" />
      <AppLogo v-show="!isSidebarCollapsed" :route="false" :class="isSidebarCollapsed ? 'w-8 h-8' : 'w-full'" />

      <nav class="mt-4" :class="[isSidebarCollapsed ? 'space-y-2' : '']">
        <RouterLink v-for="route in RoutesOnlyMenu" :key="route.path" :to="route.path"
          v-tooltip="isSidebarCollapsed ? { value: route.name, class: '' } : null"
          class="mt-1 block py-3 hover:bg-[#10b981bb] hover:text-white transform duration-200 ease-in" :class="[
            $route.path === route.path ? 'bg-[#10b98170] text-[#186219]' : '',
            isSidebarCollapsed ? 'px-4 text-center' : 'px-4'
          ]">
          <i :class="[route.icon, !isSidebarCollapsed ? 'mr-2' : '']"></i>
          <span v-if="!isSidebarCollapsed">{{ route.name }}</span>
        </RouterLink>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col transition-all duration-200"
      :class="[isSidebarCollapsed ? 'ml-[60px]' : 'ml-[250px]']">
      <!-- Header -->
      <div class="flex bg-white shadow-2xl shadow-[#00000015] px-2 py-4 relative z-10 items-center">
        <button @click="toggleSidebar" class="ml-4 p-1 rounded-xs">
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
