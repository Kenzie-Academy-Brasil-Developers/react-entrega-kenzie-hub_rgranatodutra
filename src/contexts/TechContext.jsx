import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const TechsContext = createContext({});

export const TechsProvider = ({ children }) => {
    const [techs, setTechs] = useState([]);

    function addTech(newTech) {
        api.post('users/techs', newTech)
            .then((resp) => {
                setTechs([...techs, resp.data]);
                toast.success('Tecnologia adicionada com sucesso!');
            })
            .catch(() => {
                toast.error('Falha ao adicionar tecnologia.');
            });
    };

    function removeTech(techId) {
        let previous = [...techs];
        setTechs([...techs].filter(tech => tech.id !== techId));
        api.delete(`users/techs/${techId}`)
            .then(() => toast.success('Tecnologia deletada com sucesso!'))
            .catch(() => {
                setTechs(previous);
                toast.error('Falha ao deletar tecnologia!');
            });
    };

    function updateTech(techId, data) {
        api.put(`/users/techs/${techId}`, data)
            .then((resp) => {
                let newTechs = techs.filter(tech => tech.id !== techId);
                setTechs([...newTechs, resp.data]);
                toast.success('Tecnologia atualizada com sucesso!')
            })
            .catch(() => {
                toast.error('Falha ao atualizar tecnologia.');
            });
    };

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('@rgranatodutra/KenzieHub:authToken'));
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        if (token) {
            api.get('profile')
                .then((resp) => setTechs(resp.data.techs));
        };
    }, []);

    return (
        <TechsContext.Provider value={{ techs, setTechs, addTech, removeTech, updateTech }}>
            {children}
        </TechsContext.Provider>
    );
};