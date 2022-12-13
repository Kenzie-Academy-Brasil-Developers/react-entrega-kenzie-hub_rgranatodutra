import { ModalWrapper } from '../../styles/ModalWrapper';
import { StyledNewTechModal } from './style';
import { FormField } from '../FormField';
import { Button } from '../../styles/Button';
import { useForm } from 'react-hook-form';
import { api } from '../../services/api';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { toast } from 'react-toastify';

export const EditTechModal = ({ setStatus, techId }) => {

    const { updateUser } = useContext(UserContext);

    function onSubmit(data) {
        api.put(`/users/techs/${techId}`, data)
            .then(() => {
                updateUser();
                toast.success('Tecnologia atualizada com sucesso!');
                setStatus(false)
            })
            .catch(() => {
                toast.error('Falha ao atualizar tecnologia.')
            })
    };

    const {
        register,
        handleSubmit,
    } = useForm();


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