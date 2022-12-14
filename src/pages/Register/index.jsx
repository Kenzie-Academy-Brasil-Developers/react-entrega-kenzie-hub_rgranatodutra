import { StyledPage } from "./style";
import logo from '../../logo.svg';
import { FormField } from "../../components/FormField";
import { Button, ButtonCSS } from "../../styles/Button";
import { Form } from "../../styles/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from "./registerSchema";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const RegisterPage = () => {
    const { registerAccount } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const onSubmit = (data) => registerAccount(data);

    return (
        <StyledPage>
            <div>
                <img src={logo} alt="Kenzie Hub logo" />
                <Link to={-1} style={{ textDecoration: 'none' }}>
                    <ButtonCSS
                        theme="grey2"
                        size="small"
                    >
                        Voltar
                    </ButtonCSS>
                </Link>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
                <h2> Crie sua conta </h2>
                <span> Rápido e grátis, vamos nessa</span>

                <FormField
                    key="register_name"
                    name="register_name"
                    placeholder="Digite aqui seu nome"
                    label="Nome"
                    inputType="text"
                    inputFunction={register('name')}
                    errors={errors.name?.message ? <span aria-label="erro">{errors.name.message}</span> : false}
                />

                <FormField
                    key="register_email"
                    name="register_email"
                    placeholder="Digite aqui seu email"
                    label="Email"
                    inputType="email"
                    inputFunction={register('email')}
                    errors={errors.email?.message ? <span aria-label="erro">{errors.email.message}</span> : false}
                />

                <FormField
                    key="register_password"
                    name="register_password"
                    placeholder="Digite aqui sua senha"
                    label="Senha"
                    inputType="password"
                    inputFunction={register('password')}
                    errors={errors.password?.message ? <span aria-label="erro">{errors.password.message}</span> : false}
                />

                <FormField
                    key="register_cpassword"
                    name="register_cpassword"
                    placeholder="Digite novamente sua senha"
                    label="Confirmar Senha"
                    inputType="password"
                    inputFunction={register('cpassword')}
                    errors={errors.cpassword?.message ? <span aria-label="erro">{errors.cpassword.message}</span> : false}
                />

                <FormField
                    key="register_bio"
                    name="register_bio"
                    placeholder="Fale sobre você"
                    label="Bio"
                    inputType="text"
                    inputFunction={register('bio')}
                    errors={errors.bio?.message ? <span aria-label="erro">{errors.bio.message}</span> : false}
                />

                <FormField
                    key="register_contact"
                    name="register_contact"
                    placeholder="Opções de contato"
                    label="Contato"
                    inputType="text"
                    inputFunction={register('contact')}
                    errors={errors.contact?.message ? <span aria-label="erro">{errors.contact.message}</span> : false}
                />

                <FormField
                    key="register_module"
                    name="register_module"
                    label="Selecionar Módulo"
                    inputType="select"
                    options={
                        [
                            { value: '', text: 'Selecione seu módulo' },
                            { value: 1, text: 'Primeiro Módulo' },
                            { value: 2, text: 'Segundo Módulo' },
                            { value: 3, text: 'Terceiro Módulo' },
                            { value: 4, text: 'Quarto Módulo' },
                            { value: 5, text: 'Quinto Módulo' },
                            { value: 6, text: 'Sexto Módulo' },
                        ]
                    }
                    inputFunction={register('course_module')}
                    errors={errors.module?.message ? <span aria-label="erro">{errors.module.message}</span> : false}
                />

                <Button
                    theme="default"
                    size="default"
                >
                    Cadastrar
                </Button>

            </Form>
        </StyledPage>
    )
}