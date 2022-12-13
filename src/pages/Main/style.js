import styled from "styled-components";
import { typography } from "../../styles/typography";

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
        padding: 2.25rem 0;
        gap: 1.5rem;

        &>div {
            display: flex;
            justify-content: space-between;
            align-items: center;

            &>h2 {
                ${typography.title2};
                color: var(--color-grey_1);
            }
        }

        &>ul {
            padding: 1.375rem;
            background-color: var(--color-grey_4);
            border-radius: 0.25rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        @media (max-width: 780px) {
            padding: 2.25rem 0.875rem;
        }
    }
    
`