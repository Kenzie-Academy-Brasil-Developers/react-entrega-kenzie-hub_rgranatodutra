import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StyledPage } from "../Main/style";
import { api } from "../../scripts/api"


export const AuthPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const userID = JSON.parse(localStorage.getItem('@rgranatodutra/KenzieHub:userID'));
        if (userID) {
            api.get(`users/${userID}`)
                .then((resp) => navigate('/app'))
                .catch(() => navigate('/login'));
        } else {
            navigate('/login');
        };

    }, [navigate]);

    return (
        <StyledPage>
        </StyledPage>
    );
};