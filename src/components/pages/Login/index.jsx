import { StyledPage } from "./style";
import logo from '../../../logo.svg';
import { FormField } from "../../FormField";
import { Button, ButtonCSS } from "../../../styles/Button";
import { Form } from "../../../styles/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from "react-router-dom";
import { formSchema } from "./loginSchema";
import axios from "axios";
import { toast } from 'react-toastify';

export const LoginPage = () => {
    const navigate = useNavigate();

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const onSubmit = (data) => {
        const requisition = axios.post('https://kenziehub.herokuapp.com/sessions', data)
            .then((resp) => {
                localStorage.setItem('@rgranatodutra/KenzieHub:userID', JSON.stringify(resp.data.user.id));
                localStorage.setItem('@rgranatodutra/KenzieHub:authToken', JSON.stringify(resp.data.token));
                setTimeout(() => {
                    navigate('/app');
                }, 2000);
            });

        toast.promise(
            requisition,
            {
                pending: 'Validando dados...',
                sucess: 'Login bem sucedido!',
                error: 'Falha ao logar.'
            }
        );
    };

    return (
        <StyledPage>
            <img src={logo} alt="Kenzie Hub logo" />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h2> Login </h2>

                <FormField
                    name="login_email"
                    placeholder="Digite seu email"
                    label="Email"
                    inputType="email"
                    inputFunction={register('email')}
                    errors={errors.email?.message ? <span aria-label="erro">{errors.email.message}</span> : false}
                />

                <FormField
                    name="login_password"
                    placeholder="Digite sua senha"
                    label="Senha"
                    inputType="password"
                    inputFunction={register('password')}
                    errors={errors.password?.message ? <span aria-label="erro">{errors.password.message}</span> : false}
                />

                <Button
                    theme="default"
                    size="default"
                >
                    Entrar
                </Button>

                <div>
                    <span> Ainda não possui uma conta? </span>
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                        <ButtonCSS
                            theme="grey1"
                            size="default"
                        >
                            Cadastre-se
                        </ButtonCSS>
                    </Link>
                </div>

            </Form>
        </StyledPage>
    );
};