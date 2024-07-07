import styled from "styled-components";

export const Title = styled.h2<{aling?: string}>`
    color: #7B78E5;
    font-size: 32px;
    text-align: ${props => props.aling ? props.aling : 'left'};
`;

export const GaleryContainer = styled.div`
    display: flex;
`;

export const FluidSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    flex-grow: 1;
    justify-content: start;
    align-items: start;
`;