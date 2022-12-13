import styled, { css } from "styled-components";
import { typography } from "./typography";

const sizes = {
    default: css`
        ${typography.title2};
        padding: 0.625rem 1.375rem;
    `,
    small: css`
        ${typography.headlineB};
        padding: 0.5rem 1rem;
    `,
    icon: css`
        ${typography.headlineB};
        width: 2rem;
        height: 2rem;
        padding: 0;
    `,
    content: css`
        width: max-content;
        height: max-content;
        transform: scale(1.5);
        &:hover {
            transform: scale(1.6);
        }
    `
}

const themes = {
    default: css`
        background-color: var(--color-primary);
        color: #FFFFFF;
        :hover {
            background-color: var(--color-primary_focus);
        }
        :active {
            background-color: var(--color-primary_negative);
        }
    `,
    grey1: css`
        background-color: var(--color-grey_2);
        color: #FFFFFF;
        :hover {
            background-color: var(--color-grey_3);
        }
    `,
    grey2: css`
        background-color: var(--color-grey_3);
        color: #FFFFFF;
        :hover {
            background-color: var(--color-grey_2);
        }
    `,
    transparent: css`
        background-color: transparent;
    `
}

export const Button = styled.button`
    // Global button Settings
    box-sizing: border-box;
    border: none;
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
    // Size settings
    ${props => sizes[props.size]}
    
    // Theme settings
    ${props => themes[props.theme]}
    `;

export const ButtonCSS = styled.span`
    // Global button Settings
    box-sizing: border-box;
    border: none;
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
    // Size settings
    ${props => sizes[props.size]}
    
    // Theme settings
    ${props => themes[props.theme]}
`