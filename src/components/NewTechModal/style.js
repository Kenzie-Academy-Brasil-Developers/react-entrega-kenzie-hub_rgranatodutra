import styled from "styled-components";
import { typography } from "../../styles/typography";

export const StyledNewTechModal = styled.div`
    background-color: var(--color-grey_4);
    width: 23.125rem;
    max-width: 98%;
    border-radius: 0.25rem;

    &>div:nth-child(1) {
        box-sizing: border-box;
        background-color: var(--color-grey_3);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 1.25rem;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        &>h2{
            ${typography.title3};
            color: var(--color-grey_1);
            margin: 0;
        }
        &>button {
            ${typography.nunito};
            color: var(--color-grey_2);
        }
    }
    &>form {
        box-sizing: border-box;
        width:100%;
        padding: 0.75rem 1.25rem;
        padding-bottom: 2rem;
        gap: 1.25rem;

        display: flex;
        flex-direction: column;
    }
`;