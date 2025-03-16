<template>
  <div>
    <input :id="name" v-model="value" :type="type" />
    <span v-if="error">{{ errorMessage }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { useField } from 'vee-validate';

export default defineComponent({
  name: 'FormInput',
  props: {
    name: { type: String, required: true },
    label: { type: String, required: true },
    type: { type: String as PropType<'text' | 'email' | 'password' | 'tel' | 'date'>, required: true }
  },
  setup(props) {
    const { value, errorMessage } = useField(props.name);
    const error: any = errorMessage; // Para manejar el mensaje de error

    return { value, errorMessage, error };
  }
});
</script>
