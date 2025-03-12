<template>
  <form @submit="handleSubmit(onSubmit)">
    <FormInput name="email" label="Email" type="email" />
    <FormInput name="password" label="Contraseña" type="password" />
    <FormInput name="confirmPassword" label="Confirmar Contraseña" type="password" />
    <FormInput name="name" label="Nombre" type="text" />
    <FormInput name="phone" label="Teléfono" type="tel" />
    <FormInput name="address" label="Dirección" type="text" />
    <FormInput name="birthdate" label="Fecha de Nacimiento" type="date" />
    <button type="submit">Enviar</button>
  </form>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import { validateForm } from '@/utils/validationHelpers';
import FormInput from '@/components/FormInput.vue';

// Utilizar la función validateForm para obtener los campos y funciones de validación
const { handleSubmit, email, password, confirmPassword, name, phone, address, birthdate } = validateForm();

// Definir la función onSubmit que se ejecutará al enviar el formulario
const onSubmit = () => {
  // Aquí puedes manejar la lógica de envío del formulario
};

// Exportar el componente FormInput para su uso en el template

</script>

