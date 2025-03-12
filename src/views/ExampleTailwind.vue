<script setup lang="ts">

import Form from '@/components/Form.vue';
const msg = 'Hello word!'
</script>
<template>
  <div>
    <h1 class="text-3xl font-bold underline text-center">
      {{ msg }}
    </h1>
    <Form />
  </div>
</template>
