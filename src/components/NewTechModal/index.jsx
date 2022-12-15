import { ModalWrapper } from '../../styles/ModalWrapper';
import { StyledNewTechModal } from './style';
import { FormField } from '../FormField';
import { Button } from '../../styles/Button';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { TechsContext } from '../../contexts/TechContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './newTechSchema';

export const NewTechModal = ({ setStatus }) => {

    const { addTech } = useContext(TechsContext);

    function onSubmit(data) {
        addTech(data);
        setStatus(false);
    };

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(formSchema)
    });

    return (
        <ModalWrapper>
            <StyledNewTechModal>
                <div>
                    <h2> Cadastrar Tecnologia </h2>
                    <Button
                        theme="transparent"
                        size="content"
                        onClick={() => setStatus(false)}
                    >
                        X
                    </Button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormField
                        key="register_tech-name"
                        name="register_tech-name"
                        placeholder="Digite o nome da tecnologia"
                        label="Nome"
                        inputType="text"
                        inputFunction={register('title')}
                        errors={errors.title?.message && <span aria-label="erro">{errors.title.message}</span>}
                    />
                    <FormField
                        key="register_tech-status"
                        name="register_tech-status"
                        label="Selecionar status"
                        inputType="select"
                        options={
                            [
                                { value: '', text: 'Selecione seu nível' },
                                { text: 'Iniciante' },
                                { text: 'Intermediário' },
                                { text: 'Avançado' },
                            ]
                        }
                        inputFunction={register('status')}
                        errors={errors.status?.message && <span aria-label="erro">{errors.status.message}</span>}
                    />
                    <Button
                        theme="default"
                        size="default"
                        type="submit"
                    >
                        Cadastrar Tecnologia
                    </Button>
                </form>
            </StyledNewTechModal>
        </ModalWrapper>
    );
};