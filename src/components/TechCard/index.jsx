import { StyledCard } from "./style";
import { FiEdit2, FiTrash2 } from "react-icons/fi"
import { Button } from "../../styles/Button";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { EditTechModal } from "../EditTechModal"

export const TechCard = ({ name, level, techId, setModal, setStatus }) => {

    const { updateUser } = useContext(UserContext)
    const [deleted, setDeletion] = useState(false)

    function deleteTech() {
        setDeletion(true)
        api.delete(`users/techs/${techId}`)
            .then(() => {
                updateUser();
                toast.success('Tecnologia deletada com sucesso!');
            });
    };

    function openEditModal() {
        setModal(<EditTechModal setStatus={setStatus} techId={techId} />);
        setStatus(true);

    }

    return (
        <>
            {
                !deleted &&
                (
                    <StyledCard>
                        <h3>
                            {name}
                        </h3>
                        <div>
                            <span>
                                {level}
                            </span>
                            <Button
                                size="content"
                                theme="transparent"
                                onClick={deleteTech}
                            >
                                <FiTrash2
                                    color="white"
                                />
                            </Button>
                            <Button
                                size="content"
                                theme="transparent"
                                onClick={openEditModal}
                            >
                                <FiEdit2
                                    color="white"
                                />
                            </Button>
                        </div>
                    </StyledCard>
                )
            }
        </>
    );
};