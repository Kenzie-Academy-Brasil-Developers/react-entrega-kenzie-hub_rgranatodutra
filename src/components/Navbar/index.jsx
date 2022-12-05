import { StyledNavbar } from "./style";
import logo from '../../logo.svg'
import { Button } from "../../styles/Button";

export const Navbar = () => {
    return (
        <StyledNavbar>
            <div>
                <img src={logo} alt="KenzieHub logo" />
                <Button
                    size="small"
                    theme="grey2"
                >
                    Sair
                </Button>
            </div>
        </StyledNavbar>
    );
};