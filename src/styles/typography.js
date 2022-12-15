import { css } from "styled-components";



export const typography = {
    title1: css`
        font-size: var(--fs_title-1);
        font-weight: 700;
        line-height: 1.75rem;
    `,
    title2: css`
        font-size: var(--fs_title-2);
        font-weight: 600;
        line-height: 1.625rem;
    `,
    title3: css`
        font-size: var(--fs_title-3);
        font-weight: 700;
        line-height: 1.5rem;
    `,
    bigline: css`
        font-size: var(--fs_title-3);
        font-weight: 400;
        line-height: 1.5rem;
    `
    ,
    headline: css`
        font-size: var(--fs_headline);
        font-weight: 400;
        line-height: 1.375rem;
    `,
    headlineB: css`
        font-size: var(--fs_headline);
        font-weight: 600;
        line-height: 1.375rem;
    `,
    headlineI: css`
        font-style:  italic;
        font-size: var(--fs_headline);
        font-weight: 400;
        line-height: 1.375rem;
    `,
    smallB: css`
        font-size: var(--fs_small);
        font-weight: 600;
        line-height: 1.25rem;
    `,
    nunito: css`
        font-family: 'Nunito', sans-serif;
    `,
};