import styled from "styled-components";

export const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledDialog = styled.dialog`
    position: absolute;
    top: 294px;
    background-color: transparent;
    border: none;
    width: 100%;
    display: flex;
    justify-content: center;

    button {
        position: absolute;
        left: 950px;
        top: 40px;
        border: none;
        background-color: transparent;
        color: white;
        font-weight: bold;
        font-size: 22px;
        cursor: pointer;
    }
`;