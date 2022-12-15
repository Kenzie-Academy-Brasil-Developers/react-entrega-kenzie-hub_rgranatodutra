import styled from "styled-components";
import { typography } from "../../styles/typography";

export const StyledCard = styled.li`
    box-sizing: border-box;
    width: 100%;
    height: 3rem;
    border-radius: 0.25rem;
    padding: 0.75rem 1.375rem;
    background-color: var(--color-grey_5);
    color: var(--color-grey_1);
    ${typography.title3};
    transition: 200ms ease-in-out;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &>div {
        display: flex;
        align-items: center;
        &>span {
            ${typography.headline};
            color: var(--color-grey_2);
            margin-right: 1.5rem;
        }

        &>button:nth-child(2) {
            margin-right: 0.25rem;
        }

        &>button {
            opacity: 65%;
            transition: 200ms ease-in-out;

            :hover {
                opacity: 100%;
            }
        }
    }

    &:hover {
        background-color: var(--color-grey_3);
    }

    @media (max-width: 400px) {
        gap: 0.5rem;

        &>div>span{
            font-size: 0.8em;
            margin-right: 0.4rem;
        }
        &>div>button {
            transform: scale(1);
        }

        &>div>button:nth-child(2) {
            margin-right: 0;
        }
    }
    @media (max-width: 320px) {
        gap: 0.25rem;

        &>div>span{
            font-size: 0.65em;
            margin-right: 0.2rem;
        }
        &>div>button {
            transform: scale(0.8);
        }
    }
`;