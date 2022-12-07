import styled from "styled-components";
import { typography } from "../../styles/typography";

export const StyledPage = styled.main`
    background-color: var(--color-grey_5);
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 3rem 0.75rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;

    &>div {
        width: 22.5rem;
        max-width: 100%;
        display: flex;
        justify-content: space-between;
    }

    &>form>span {
        ${typography.headline};
        color: var(--color-grey_2);
        text-align: center;
    }

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