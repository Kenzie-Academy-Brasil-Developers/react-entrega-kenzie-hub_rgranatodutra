import { StyledPage } from "./style";
import logo from '../../logo.svg';
import { FormField } from "../../components/FormField";
import { Button, ButtonCSS } from "../../styles/Button";
import { Form } from "../../styles/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from "react-router-dom";
import { formSchema } from "./loginSchema";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const LoginPage = () => {
    const { login } = useContext(UserContext);

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const onSubmit = (data) => login(data);

    return (
        <StyledPage>
            <img src={logo} alt="Kenzie Hub logo" />
            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
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