<script setup lang="ts">

const props = defineProps<{
  route: boolean;
  redirect?: string;
}>();

</script>
<template>
  <div v-if="props.route">
    <RouterLink :to="props.redirect!">
      <div class="flex justify-center mt-2">
        <i class="pi pi-graduation-cap mt-3 text-[#10b981]" style="font-size: 30px;" />
        <p class="mt-1 ml-2 text-4xl text-center font-bold text-[#10b981]">SGE</p>
      </div>
      <div class="text-center">
        <span class="text-sm font-medium text-gray-700 text-center">Sistema Gestor Escolar</span>
      </div>
    </RouterLink>
  </div>
  <div v-else>
    <div class="flex justify-center mt-2">
      <i class="pi pi-graduation-cap mt-3 text-[#10b981]" style="font-size: 30px;" />
      <p class="mt-1 ml-2 text-4xl text-center font-bold text-[#10b981]">SGE</p>
    </div>
    <div class="text-center">
      <span class="text-sm font-medium text-gray-700 text-center">Sistema Gestor Escolar</span>
    </div>
  </div>
</template>
