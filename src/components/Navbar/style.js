import styled from "styled-components";

export const StyledNavbar = styled.nav`
    box-sizing: border-box;
    width: 100%;
    height: 4.5rem;

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
    }
`;