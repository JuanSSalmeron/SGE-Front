<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { routes } from './RoutesNav';
</script>

<template>
  <header class="absolute inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
    <nav class="flex items-center justify-between p-6 px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <RouterLink to="#" class="flex items-center gap-2">
          <span class="text-2xl font-bold text-[#10b981]">SGE</span>
          <span class="text-sm font-medium text-gray-700 mt-1">Sistema Gestor Escolar</span>
        </RouterLink>
      </div>
      <div class="lg:flex lg:gap-x-12">
        <div v-for="(route, index) in routes" :key="index">
          <RouterLink :to="route.link"
            class="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-[#10b981] transition">
            <i :class="route.icon" class="text-lg"></i>
            {{ route.name }}
          </RouterLink>
        </div>
      </div>
      <div class="lg:flex lg:flex-1 lg:justify-end">
        <RouterLink to="/login" class="text-sm font-semibold text-[#10b981] hover:text-[#51b49c] transition">
          Iniciar sesión <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
    </nav>
  </header>
</template>
