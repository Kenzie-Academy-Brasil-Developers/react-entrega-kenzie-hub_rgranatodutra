import * as yup from 'yup';

export const formSchema = yup.object().shape({
    email: yup.string().required("Preencha o campo de email").email("Email inválido"),
    password: yup
        .string()
        .required("Preencha o campo de senha")
        .min(8, "A senha tem no mínimo 8 caracteres")
        .matches(/(?=.*?[a-z])/i, 'A senha contém pelo menos uma letra')
        .matches(/(?=.*?[0-9])/, 'A senha contém pelo menos um número')
        .matches(/(?=.*[@$!%*#?&])/, 'A senha contém pelo menos um caractere especial'),
});