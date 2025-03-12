import * as yup from "yup";


export const validationSchema = yup.object().shape({
    email: yup.string().email('Porfavor ingresa un email valido').required('Porfavor ingresa un email'),
    password: yup.string()
      .required('Porfavor ingresa una contraseña')
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .matches(/[a-zA-Z]/, 'La contraseña debe tener al menos una letra')
      .matches(/[0-9]/, 'La contraseña debe tener al menos un número'),
    confirmPassword: yup.string().required(),
    name: yup.string().required('Nombre es requerido'),
    phone: yup.string()
      .matches(/^[0-9]+$/, 'El número de teléfono solo debe contener dígitos')
      .min(10, 'El número de teléfono debe tener al menos 10 dígitos')
      .required('Teléfono es requerido'),
    address: yup.string().required('Dirección es requerida'),
    birthdate: yup.date()
      .max(new Date(), 'La fecha de nacimiento no puede ser una fecha futura')
      .required('Fecha de nacimiento es requerida')
  });

