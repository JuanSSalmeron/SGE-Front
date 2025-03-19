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
        <i class="pi pi-graduation-cap mt-3 text-[#10b981] hover:text-[#45947a]" style=" font-size: 30px;" />
      </div>
    </RouterLink>
  </div>
  <div v-else>
    <div class="flex justify-center mt-2">
      <i class="pi pi-graduation-cap mt-3 text-[#10b981] hover:text-[#10b981]" style="font-size: 30px;" />
    </div>
  </div>
</template>
