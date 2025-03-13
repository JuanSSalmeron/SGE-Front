<template>
  <div class="max-w-5xl mx-auto p-8 bg-white text-gray-900 rounded-lg shadow-lg">
    <h1 class="text-4xl font-bold mb-6 text-center text-green-600">Sobre Nosotros</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

      <div>
        <p class="text-lg leading-relaxed">
          Somos un equipo apasionado por la tecnología y la innovación..
        </p>

        <h2 class="text-2xl font-semibold mt-6 text-green-500">Nuestra Misión</h2>
        <p class="mt-2 text-gray-700">
          Crear productos digitales de calidad, con tecnología de punta y un enfoque centrado en
          el usuario, para mejorar la vida de las personas y el rendimiento de las empresas.
        </p>

        <h2 class="text-2xl font-semibold mt-6 text-green-500">Nuestra Visión</h2>
        <p class="mt-2 text-gray-700">
          Ser una empresa líder en el sector tecnológico, reconocida por la calidad de nuestros
          desarrollos y la satisfacción de nuestros clientes.
        </p>
      </div>


      <div>
        <img
          src="/src/assets/images/equipo.webp"
          alt="Nuestro equipo"
          class="w-full rounded-lg shadow-md"
        />
      </div>
    </div>

    <!-- Nuestro Equipo -->
    <div class="mt-10">
      <h2 class="text-3xl font-semibold text-center text-green-600">Nuestro Equipo</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div
          v-for="(member, index) in team"
          :key="index"
          class="bg-gray-100 p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105"
        >
          <h3 class="text-xl font-bold text-green-600">{{ member.name }}</h3>
          <p class="text-gray-700">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: "Emma Rojas", role: "Desarrollador" },
        { name: "Saúl García", role: "Diseñador UX/UI" },
        { name: "Gabriel", role: "Desarrollador" },
        { name: "Salmeron Rivera", role: "Lider de Proyecto" },
        { name: "William Joel", role: "Diseñadoro UX/UI" }
      ]
    };
  }
};
</script>

<style scoped>

</style>
