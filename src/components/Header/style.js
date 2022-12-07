import styled from "styled-components";
import { typography } from "../../styles/typography";

export const StyledHeader = styled.header`
    box-sizing: border-box;
    width: 100%;
    height: 7.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 0.875rem;

    border-bottom: 1px solid var(--color-grey_3);

    &>div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 46.875rem;

        &>h1{
            ${typography.title1};
            color: var(--color-grey_1);
        }

        &>span {
            ${typography.headline};
            color: var(--color-grey_2);
        }
    }
`;