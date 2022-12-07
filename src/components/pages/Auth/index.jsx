import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyledPage } from "../Main/style";

export const AuthPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const userID = JSON.parse(localStorage.getItem('@rgranatodutra/KenzieHub:userID'));
        console.log(userID)
        if (userID) {
            axios.get(`https://kenziehub.herokuapp.com/users/${userID}`)
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