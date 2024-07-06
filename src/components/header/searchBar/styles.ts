import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    align-items: center;
`

export const Input = styled.input<{borderActive: boolean}>`
    width:  602px;
    height: 56px;
    background-color: transparent;
    padding:  12px;
    border: 2px solid;
    border-radius: 10px 0px 0px 10px;
    border-right: 0px;
    border-color: ${props => props.borderActive ? 'rgba(201, 140, 241, 1)' : 'rgba(123, 120, 229, 1)'};
    color: #fff;
    outline: none;

    ::placeholder {
        color: rgba(217, 217, 217, 1);
    };
`;

export const Button = styled.button<{borderActive: boolean}>`
    width:  64px;
    height: 56px;
    background-color: transparent;
    padding:  12px;
    border: 2px solid;
    border-left: 0px;
    border-radius: 0px 10px 10px 0px;
    border-color: ${props => props.borderActive ? 'rgba(201, 140, 241, 1)' : 'rgba(123, 120, 229, 1)'};
    color: #fff;
    outline: none;

    img {
        width: 32px;
        height: 32px;
    }
`;  