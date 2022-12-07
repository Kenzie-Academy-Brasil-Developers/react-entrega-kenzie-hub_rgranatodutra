import { StyledNavbar } from "./style";
import logo from '../../logo.svg'
import { Button } from "../../styles/Button";
import { logout } from "../../scripts/logout";

export const Navbar = () => {
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