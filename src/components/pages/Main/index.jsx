import { Header } from "../../Header";
import { Navbar } from "../../Navbar";
import { StyledPage } from "./style";

export const MainPage = () => {
    return (
        <StyledPage>
            <Navbar />
            <Header
                user={{
                    name: "Renan Dutra",
                    module: "Terceiro Módulo (React.JS)"
                }}
            />
            <div>
                <h2> {"Que pena! Estamos em desenvolvimento :("} </h2>
                <span>
                    Nossa aplicação está em desenvolvimento, em breve traremos novidades
                </span>
            </div>
        </StyledPage>
    );
};