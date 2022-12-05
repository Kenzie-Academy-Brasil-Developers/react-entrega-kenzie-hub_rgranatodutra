import styled from "styled-components";
import { typography } from "../../styles/typography";

export const StyledFieldset = styled.fieldset`
    border: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 20.625rem;
    margin: 0;

    margin-inline: 0;
    padding-inline: 0;
    padding-block: 0;

    &>label {
        ${typography.headline};
        color: var(--color-grey_1);
        margin-bottom: 0.5rem;
    }

    &>input, &>div.select {
        box-sizing: border-box;
        width: 100%;
        padding: 0.875rem 1rem;
        border: none;
        border-radius: 0.25rem;

        background-color: var(--color-grey_3);
        color: var(--color-grey_2);

        ::placeholder {
            color: var(--color-grey_2);
        }

        &>select {
            background-color: transparent;
            border: none;
            color: var(--color-grey_2);
            box-sizing: border-box;
            width: 100%;

            :focus {
                outline: none;
            }
        }
    }
    
    &:focus-within {
        &>input,
        &>select {
            color: var(--color-grey_1);
            outline: 1px solid var(--color-grey_1);
            ::placeholder {
                color: var(--color-grey_1);
            }
        }
    }

    &>span[aria-label="erro"]{
        ${typography.headline};
        color: var(--color-failed);
    }
`;