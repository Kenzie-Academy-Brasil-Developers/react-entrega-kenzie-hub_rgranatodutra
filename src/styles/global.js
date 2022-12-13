import { createGlobalStyle, css } from "styled-components";

const themes = {
    dark: css`
        // Grey Scale Palette
        --color-grey_5: #121214;
        --color-grey_4: #212529;
        --color-grey_3: #343841;
        --color-grey_2: #868E86;
        --color-grey_1: #f8f9fa;
    `,
};

export const GlobalStyles = createGlobalStyle`s
    * {
        margin: 0;
        padding: 0;
        margin-inline: 0;
        padding-inline: 0;
        list-style: none;
        text-decoration: none;
    }

    :root {
        // Color Palette
        --color-primary:          #FF577F;
        --color-primary_focus:    #FF427F;
        --color-primary_negative: #59323F;

        // Grey Scale Palette
        ${props => themes[props.theme]}

        // Feedback Palette
        --color-sucess: #3FE864;
        --color-failed: #E83F5B;
    }

    body {
        font-family: 'Inter', sans-serif;
        padding: 0;
        margin: 0;
    }
`;