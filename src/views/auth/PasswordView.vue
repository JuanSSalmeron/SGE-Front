<script lang="ts" setup>
import AppLogo from '@/components/global/AppLogo.vue';
import { Button } from 'primevue';
</script>

<template>
  <div class="font-sans">
    <div class="relative min-h-screen flex items-center justify-center bg-[#f8f8f8]">
      <div class="relative sm:max-w-sm w-full">
        <div class="rounded-xl px-6 py-4 shadow-2xl bg-white mt-3">
          <AppLogo :route="false" />
          <label class="block mt-2 text-md text-gray-800 text-center font-semibold uppercase">
            Recuperar Contraseña
          </label>
          <form class="mt-2" @submit.prevent="">
            <label class="block mb-2 text-sm font-medium">Correo Electrónico</label>
            <div class="relative mb-4">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i class="pi pi-envelope text-gray-400" />
              </div>
              <input type="email"
                class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="ejemplo@gmail.com" required />
            </div>
            <div class="mt-4">
              <Button type="submit" class="w-full py-3 rounded-md shadow-md">
                Enviar enlace de recuperación
              </Button>
            </div>
            <div class="text-center w-full mt-3 mb-3">
              <label class="text-sm">¿Recordaste tu contraseña?</label>
              <RouterLink to="/login" class="underline text-sm text-gray-600 hover:text-gray-900">
                Inicia Sesión
              </RouterLink>
            </div>
          </form>
        </div>
        <div class="text-center py-5">
          <p class="text-xs">Copyright &copy; Sistema Gestor Escolar<br />
            Todos los derechos Reservados</p>
        </div>
      </div>
    </div>
  </div>
</template>
