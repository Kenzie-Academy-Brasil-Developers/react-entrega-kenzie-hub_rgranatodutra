import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState();

    function registerAccount(formCamps) {
        delete formCamps.cpassword;
        api.post('users', formCamps)
            .then(() => {
                toast.success('Conta criada com sucesso!');
                navigate('/login');
            })
            .catch(() => {
                toast.error('Falha ao criar conta.')
            });
    };

    function login(formCamps) {
        api.post('sessions', formCamps)
            .then((resp) => {
                localStorage.setItem('@rgranatodutra/KenzieHub:userID', JSON.stringify(resp.data.user.id));
                localStorage.setItem('@rgranatodutra/KenzieHub:authToken', JSON.stringify(resp.data.token));
                toast.success('Login bem sucedido');
                setUser(resp.data.user);

            })
            .then(() => navigate('/app'))
            .catch(() => {
                toast.error('Falha ao logar.');
            });
    };

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('@rgranatodutra/KenzieHub:authToken'));

        if (token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            api.get('profile')
                .then((response) => {
                    setUser(response.data);
                    navigate('/app');
                })
                .catch(() => {
                    localStorage.removeItem('@rgranatodutra/KenzieHub:userID');
                    localStorage.removeItem('@rgranatodutra/KenzieHub:authToken');
                    navigate('/login');
                });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <UserContext.Provider value={{ login, registerAccount, user, navigate }}>
            {children}
        </UserContext.Provider>
    );
};