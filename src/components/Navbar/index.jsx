import { StyledNavbar } from "./style";
import logo from '../../logo.svg'
import { Button } from "../../styles/Button";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const Navbar = () => {

    const { logout } = useContext(UserContext);

    return (
        <StyledNavbar>
            <div>
                <img src={logo} alt="KenzieHub logo" />
                <Button
                    size="small"
                    theme="grey2"
                    onClick={logout}
                >
                    Sair
                </Button>
            </div>
        </StyledNavbar>
    );
};