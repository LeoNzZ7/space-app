import styled from "styled-components";

export const fundoGradinte = styled.div`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
`;

export const MainContainer = styled.div`
    display: flex;
    gap: 24px;
    padding: 0px 20px;
    opacity: 0.8;
`;

export const Banner = styled.div`
    background-image: url("/images/banner.png");
    background-position: center;
    background-size: cover;
    height: 328px;
    width: 100%;
    border-radius: 20px;
    display: flex;
    align-items: center;

    span {
        width: 301px;
        height: 144px;
        color: #FFFFFF;
        font-size: 40px;
        line-height : 48px;
        margin-left: 70px;
    }
`;

export const AppContainer = styled.div`
    width: 1440px;
    margin: 0 auto;
    max-width: 100%;
    display: flex;
    flex-direction: column;
`;

export const GalleryContent = styled.div`
    display: flex;
    flex-direction: column; 
    flex-grow: 1;
`