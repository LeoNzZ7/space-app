import styled from "styled-components";

export const StyledListItem = styled.li<{active: boolean}>`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.active ? `rgba(123, 120, 229, 1)` : `rgba(217, 217, 217, 1)`};
    font-family: ${props => props.active ? `bold` : `regular`};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 22px;

    a {
        text-decoration: none;
    }
`