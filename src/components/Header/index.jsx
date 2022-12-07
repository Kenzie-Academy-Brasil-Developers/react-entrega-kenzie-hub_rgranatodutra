import { useEffect, useState } from "react";
import { StyledHeader } from "./style";

export const Header = ({ user }) => {
    const [module, setModule] = useState('Carregando...');

    useEffect(() => {
        switch (user.module) {
            case '1':
                setModule('Primeiro Módulo ( HTML, CSS, JS || Básico )');
                break;
            case '2':
                setModule('Segundo Módulo ( HTML, CSS, JS || Intermediário+ )');
                break;
            case '3':
                setModule('Terceiro Módulo ( React.JS )');
                break;
            case '4':
                setModule('Quarto Módulo ( Node.JS, TypeScript, PostgreSQL )');
                break;
            case '5':
                setModule('Quinto Módulo ( Phyton, Django, MongoDB, AWS )');
                break;
            case '6':
                setModule('Sexto Módulo ( Trilha de empregabilidade )');
                break;
            default:
                setModule('Módulo indefinido');
        }
    }, [user]);

    return (
        <StyledHeader>
            <div>
                <h1> Olá, {user.name} </h1>
                <span> {module}  </span>
            </div>
        </StyledHeader>
    );
};