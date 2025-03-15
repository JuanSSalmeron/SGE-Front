<script setup lang="ts">
import { socialIcons } from './RoutesNav';
import { routes } from './RoutesNav';

const yearActually = new Date().getFullYear();


</script>

<template>
  <footer class="inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm pb-4">
      <div class="border-t border-gray-200 mb-10"></div>
      <nav class="flex justify-center">
        <div v-for="(route, index) in routes" :key="index" class="px-5 py-2">
          <RouterLink :to="route.link" class="text-base leading-6 text-gray-500 hover:text-[#10b981] transition">
            <i v-if="route.icon" :class="route.icon" class="mr-1"></i>
            {{ route.name }}
          </RouterLink>
        </div>
      </nav>

      <div class="flex justify-center mt-8 space-x-6">
        <a v-for="(icon, index) in socialIcons" :key="index" :href="icon.link"
          class="text-gray-400 hover:text-gray-700">
          <span class="sr-only">{{ icon.label }}</span>
          <i :class="icon.name" class="text-xl"></i>
        </a>
      </div>

      <p class="mt-5 text-base leading-6 text-center text-gray-400">
        &COPY; {{ yearActually }} Sistema Gestor Escolar <br />Todos los Derechos Reservados
      </p>
  </footer>
</template>
