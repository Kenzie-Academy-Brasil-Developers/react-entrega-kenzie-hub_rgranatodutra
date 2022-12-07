import * as yup from 'yup';

export const formSchema = yup.object().shape({
    email: yup.string().required("Preencha o campo de email"),
    password: yup.string().required("Preencha o campo de senha"),
});