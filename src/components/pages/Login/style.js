import styled from "styled-components";
import { typography } from "../../../styles/typography";

export const StyledPage = styled.main`
    background-color: var(--color-grey_5);
    box-sizing: border-box;
    min-height: 100vh;
    width: 100%;
    height: 100%;
    padding: 3rem 0.75rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;

    &>form>div {
        display: flex;
        flex-direction: column;
        gap: 1.125rem;
        text-align: center;

        &>span {
            ${typography.smallB};
            color: var(--color-grey_2);
        }
    }
    
`