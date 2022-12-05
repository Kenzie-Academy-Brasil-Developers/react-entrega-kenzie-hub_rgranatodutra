import { StyledHeader } from "./style";

export const Header = ({ user }) => {
    return (
        <StyledHeader>
            <div>
                <h1> Olá, {user.name} </h1>
                <span> {user.module}  </span>
            </div>
        </StyledHeader>
    );
};