import { ModalWrapper } from '../../styles/ModalWrapper';
import { StyledNewTechModal } from './style';
import { FormField } from '../FormField';
import { Button } from '../../styles/Button';
import { useForm } from 'react-hook-form';
import { api } from '../../services/api';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { toast } from 'react-toastify';

export const NewTechModal = ({ setStatus }) => {

    const { updateUser } = useContext(UserContext);

    function onSubmit(data) {
        api.post('/users/techs', data)
            .then(() => {
                updateUser();
                toast.success('Tecnologia adicionada com sucesso!');
                setStatus(false)
            })
            .catch(() => {
                toast.error('Falha ao adicionar tecnologia.')
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