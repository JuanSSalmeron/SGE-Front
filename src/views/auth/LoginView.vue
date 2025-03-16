<script lang="ts" setup>
import AppLogo from '@/components/global/AppLogo.vue'
import { toTypedSchema } from '@vee-validate/yup';
import { Button } from 'primevue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    yup.object({
      email: yup.string().email('Porfavor ingresa un email valido').required('Porfavor ingresa un email'),
      password: yup.string()
        .required('Porfavor ingresa una contraseña')
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .matches(/^\S*$/, 'No puede contener espacios en blanco')
    })
  )
})

const [email, emailAttrs] = defineField('email', {
  validateOnModelUpdate: true
})

const [password, passwordAttrs] = defineField('password', {
  validateOnModelUpdate: true
})

const onSubmit = handleSubmit(async (values) => {
  if (Object.keys(errors.value).length === 0) {
    console.log(values);
  } else {
    console.error(errors.value)
  }
});

</script>

<template>
  <div class="font-sans">
    <div class="relative min-h-screen flex items-center justify-center bg-[#f8f8f8]">
      <div class="relative sm:max-w-sm w-full">
        <div class="rounded-xl px-6 py-4 shadow-2xl bg-white">
          <AppLogo :route="false" />
          <label class="block mt-2 text-md text-gray-800 text-center font-semibold uppercase">
            Inicio Sesión
          </label>

          <form class="mt-2" @submit.prevent="onSubmit">
            <!-- Inicio: Correo Electronico -->
            <label class="block mb-2 text-sm font-medium">Correo Electrónico</label>
            <div class="relative" v-bind="emailAttrs" :class="{ 'mb-4': !errors.email, 'mb-1': errors.email }">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i class="pi pi-envelope" v-bind="emailAttrs"
                  :class="{ 'text-gray-400': true, 'text-red-400': errors.email }" />
              </div>
              <input type="email" v-model="email" v-bind="emailAttrs"
                :class="{ 'border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5': true, 'border-red-500': errors.email }"
                placeholder="ejemplo@gmail.com" label="Correo Electrónico" />
            </div>
            <div v-show="errors.email" class="mb-2">
              <span v-if="errors.email" class="font-sans text-red-400 text-sm">
                {{ errors.email }}
              </span>
            </div>
            <!-- Fin: Correo Electronico -->

            <!-- Inicio: Contraseña -->
            <label class="block mb-2 text-sm font-medium">Contraseña</label>
            <div class="relative" :class="{ 'mb-4': !errors.password, 'mb-1': errors.password }">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i class="pi pi-lock" v-bind="passwordAttrs"
                  :class="{ 'text-gray-400': true, 'text-red-400': errors.password }" />
              </div>
              <input type="password" v-model="password" v-bind="passwordAttrs" :class="{
                'border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5': true,
                'border-red-500': errors.password
              }" placeholder="••••••••" required />
            </div>

            <div v-show="errors.password" class="mb-2">
              <span v-if="errors.password" class="font-sans text-red-400 text-sm">
                {{ errors.password }}
              </span>
            </div>
            <!-- Fin: Contraseña -->

            <div class="mt-5 flex">
              <label class="inline-flex items-center w-full cursor-pointer">
                <input type="checkbox" class="mt-1" name="remember" />
                <span class="ml-1 text-sm text-gray-600">Recuérdame</span>
              </label>
              <div class="w-full text-right">
                <a class="underline text-sm text-gray-600 hover:text-gray-900" href="#">
                  <RouterLink to="/password" class="underline text-sm text-gray-600 hover:text-gray-900">
                    ¿Olvidó su contraseña?
                  </RouterLink>
                </a>
              </div>
            </div>

            <div class="mt-4">
              <Button type="submit" class="w-full py-3 rounded-md shadow-md ">
                Iniciar Sesión
              </Button>
            </div>
            <div class="text-center w-full mt-3 mb-3">
              <label class="text-sm">¿No tienes cuenta?</label>
              <RouterLink to="/register" class="underline text-sm text-gray-600 hover:text-gray-900">
                Regístrate
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
