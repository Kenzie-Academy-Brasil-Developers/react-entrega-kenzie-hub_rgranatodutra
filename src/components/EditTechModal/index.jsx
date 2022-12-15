import { ModalWrapper } from '../../styles/ModalWrapper';
import { StyledNewTechModal } from './style';
import { FormField } from '../FormField';
import { Button } from '../../styles/Button';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { TechsContext } from '../../contexts/TechContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './editTechSchema'

export const EditTechModal = ({ setStatus, techId }) => {

    const { updateTech } = useContext(TechsContext);

    function onSubmit(data) {
        updateTech(techId, data);
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
                    <h2> Atualizar Tecnologia </h2>
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
                        Atualizar Tecnologia
                    </Button>
                </form>
            </StyledNewTechModal>
        </ModalWrapper>
    );
};