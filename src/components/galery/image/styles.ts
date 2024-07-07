import styled from "styled-components";

export const Figure = styled.figure`
    width: 440px;
    margin: 0;
    border-radius: 20px;
    background-color: #001634;
    color: #fff;
    font-size: 20px;

    img {
        width: 100%;
        height: auto;
        border-radius: inherit;
    }

    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px 20px;    
        
        div {
            display: flex;
            justify-content: space-between;
            
            div {
                display: flex;
                gap: 30px;

                img {
                width: 24px;
                height: 24px;
                margin-bottom: 20px;
            }
            }
        }
    }
`;