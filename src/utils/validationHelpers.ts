import type { InferType } from 'yup';
import { validationSchema } from './validationSchema';
import { useForm, useField } from 'vee-validate';
//

type ValidationSchema = InferType<typeof validationSchema>;

export function validateForm() {
  const { handleSubmit, resetForm} = useForm<ValidationSchema>({
    validationSchema
});

const email = useField('email');
const password = useField('password');
const confirmPassword = useField('confirmPassword');
const name = useField('name');
const phone = useField('phone');
const address = useField('address');
const birthdate = useField('birthdate');

return { handleSubmit, resetForm, email, password, confirmPassword, name, phone, address, birthdate };
}
//
