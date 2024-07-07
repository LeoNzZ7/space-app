import styled from "styled-components";

export const TagsContainer = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

    p {
        width: 269px;
        font-size: 24px;
        line-height: 28.8px;
        color: #D9D9D9;
        }
`;

export const ItemTagsContainer = styled.div`
    flex-grow: 1;
    display: flex;
    gap: 20px;
    align-items: center;
`;

export const ItemTags = styled.button`
    height: 49px;
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    padding: 12px;
    transition: background-color 0.3s ease;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`