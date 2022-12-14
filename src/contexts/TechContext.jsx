import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const TechsContext = createContext({});

export const TechsProvider = ({ children }) => {
    const [techs, setTechs] = useState([]);
    const token = JSON.parse(localStorage.getItem('@rgranatodutra/KenzieHub:authToken'));

    function addTech(newTech) {
        setTechs([...techs, newTech]);
        api.post('users/techs', newTech)
            .then(() => toast.success('Tecnologia adicionada com sucesso!'))
            .catch(() => {
                let previous = [...techs].reverse()
                previous.shift();
                setTechs(previous);
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
                toast.success('Falha ao deletar tecnologia!');
            });
    };

    function updateTech(techId, data) {
        let previous = [...techs];
        let updatedTechs = [...techs];
        let index = updatedTechs.findIndex(tech => tech.id === techId);
        updatedTechs[index].status = data.status;
        setTechs(updatedTechs);

        api.put(`/users/techs/${techId}`, data)
            .then(() => toast.success('Tecnologia atualizada com sucesso!'))
            .catch(() => {
                setTechs(previous);
                toast.error('Falha ao atualizar tecnologia.');
            });
    };

    useEffect(() => {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        if (token) {
            api.get('profile')
                .then((resp) => setTechs(resp.data.techs));
        };
    }, [token]);

    return (
        <TechsContext.Provider value={{ techs, setTechs, addTech, removeTech, updateTech }}>
            {children}
        </TechsContext.Provider>
    );
};