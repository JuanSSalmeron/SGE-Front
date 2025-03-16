<script setup lang="ts">
import Button from "primevue/button"
import StudentList from "@/components/StudentList.vue"
</script>
<template>
  <div>
    <Button type="button" label="Submit" icon="pi pi-search"/>
    <StudentList />
  </div>
</template>
