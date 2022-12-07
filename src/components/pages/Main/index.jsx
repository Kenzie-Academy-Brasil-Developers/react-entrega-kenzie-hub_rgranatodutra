import { Header } from "../../Header";
import { Navbar } from "../../Navbar";
import { StyledPage } from "./style";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
    const navigate = useNavigate();
    const userID = JSON.parse(localStorage.getItem('@rgranatodutra/KenzieHub:userID'));

    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`https://kenziehub.herokuapp.com/users/${userID}`)
            .then((resp) => setUser(resp.data))
            .catch(() => navigate('/login'));
    }, [navigate, userID]);

    return (
        <StyledPage>
            <Navbar />
            <Header
                user={{
                    name: user.name,
                    module: user.course_module
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