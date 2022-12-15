import * as yup from 'yup';

export const formSchema = yup.object().shape({
    title: yup.string().required("Digite o nome da tecnologia."),
    status: yup.string().required("Escolha um nível."),
});