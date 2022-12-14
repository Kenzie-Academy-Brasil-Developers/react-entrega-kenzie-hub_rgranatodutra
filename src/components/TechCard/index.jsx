import { StyledCard } from "./style";
import { FiEdit2, FiTrash2 } from "react-icons/fi"
import { Button } from "../../styles/Button";
import { useContext } from "react";
import { EditTechModal } from "../EditTechModal"
import { TechsContext } from "../../contexts/TechContext";

export const TechCard = ({ name, level, techId, setModal, setStatus }) => {

    const { removeTech } = useContext(TechsContext)

    function deleteTech() {
        removeTech(techId);
    };

    function openEditModal() {
        setModal(<EditTechModal setStatus={setStatus} techId={techId} />);
        setStatus(true);
    };

    return (
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
    );
};