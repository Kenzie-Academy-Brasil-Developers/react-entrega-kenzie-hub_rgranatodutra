import { Header } from "../../components/Header"
import { Navbar } from "../../components/Navbar";
import { StyledPage } from "./style";
import { Button } from "../../styles/Button";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TechCard } from "../../components/TechCard";
import { NewTechModal } from "../../components/NewTechModal";

export const MainPage = () => {

    const { user } = useContext(UserContext);
    const [isModalOpen, setModalOpenStatus] = useState(false);
    const [currentModal, setCurrentModal] = useState(<></>);

    function openNewTechModal() {
        setCurrentModal(<NewTechModal setStatus={setModalOpenStatus} />);
        setModalOpenStatus(true)
    }

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
                <div>
                    <h2>
                        Tecnologias
                    </h2>
                    <Button theme="grey2" size="icon" onClick={openNewTechModal}> + </Button>
                </div>
                {
                    user.techs?.length > 0 &&
                    <ul>
                        {
                            user.techs?.map(tech => (
                                <TechCard
                                    key={tech.id}
                                    techId={tech.id}
                                    name={tech.title}
                                    level={tech.status}
                                    setModal={setCurrentModal}
                                    setStatus={setModalOpenStatus}
                                />
                            ))
                        }
                    </ul>
                }
            </div>
            {isModalOpen && currentModal}
        </StyledPage>
    );
};