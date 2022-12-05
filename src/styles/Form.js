import styled from "styled-components";
import { typography } from "./typography";

export const Form = styled.form`
    box-sizing: border-box;
    padding: 2rem 1rem;
    width: 22.5rem;
    max-width: 100%;
    border-radius: 0.25rem;


    display: flex;
    flex-direction: column;
    gap: 1.125rem;

    background-color: var(--color-grey_4);

    &>h2 {
        align-self: center;
        text-align: center;
        ${typography.title3};
        color: var(--color-grey_1);
    }
`;