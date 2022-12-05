import * as yup from 'yup';

export const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
        .string()
        .required("Senha obrigatória")
        .min(8, "Sua senha precisa ter pelo menos 8 caractéres")
        .matches(/(?=.*?[a-z])/i, 'Sua senha precisa ter pelo menos uma letra')
        .matches(/(?=.*?[0-9])/, 'Sua senha precisa ter pelo menos um número')
        .matches(/(?=.*[@$!%*#?&])/, 'Sua senha precisa ter pelo menos um caractere especial'),
    cpassword: yup
        .string()
        .required("Confirme sua senha")
        .oneOf([yup.ref('password')], 'A senha não bate!'),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required('Informe um meio de contato'),
    module: yup.string().required('Informe seu módulo')
});