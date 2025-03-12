<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 p-4">
    <div class="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md text-center relative overflow-hidden">
      <div class="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-10 rounded-3xl">
      </div>
      <h2 class="text-3xl font-extrabold text-gray-900 drop-shadow-md">Bienvenido a SGE</h2>
      <p class="text-gray-500 mt-2">Inicia sesión para continuar</p>

      <form class="mt-6 space-y-4 relative z-10" @submit.prevent="handleLogin">
        <div>
          <input v-model="email" type="email" placeholder="Correo electrónico"
            class="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-400 transition shadow-sm">
        </div>
        <div>
          <input v-model="password" type="password" placeholder="Contraseña"
            class="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-400 transition shadow-sm">
        </div>

        <button type="submit"
          class="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold p-3 rounded-xl hover:opacity-90 transition-all shadow-lg transform hover:scale-105">
          Iniciar Sesión
        </button>
      </form>

      <p class="mt-6 text-gray-700">
        ¿No tienes cuenta, registrate?
        <a href="/register" class="text-purple-500 font-semibold hover:underline">
          Registrate </a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref<string>('');
const password = ref<string>('');

const handleLogin = (): void => {
  console.log('Iniciando sesión con:', email.value, password.value);
};
</script>
