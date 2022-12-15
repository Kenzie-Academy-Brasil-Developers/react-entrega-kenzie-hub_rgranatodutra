import * as yup from 'yup';

export const formSchema = yup.object().shape({
    status: yup.string().required("Escolha um nível."),
});