import styled from "styled-components";
import { typography } from "../../../styles/typography";

export const StyledPage = styled.main`
    background-color: var(--color-grey_5);
    box-sizing: border-box;
    min-height: 100vh;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    &>div {
        box-sizing: border-box;
        width: 100%;
        max-width: 46.875rem;
        display: flex;
        flex-direction: column;
        padding: 2.25rem 0.875rem 0 0.875rem;
        gap: 1.5rem;

        &>h2 {
            ${typography.title1};
            color: var(--color-grey_1);
        }

        &>span {
            ${typography.bigline};
            color: var(--color-grey_1);
        }
    }
    
`