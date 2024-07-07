import { ItemTags, ItemTagsContainer, TagsContainer } from "./styles";
import tags from "./tags.json"

export const Tags = () => {
    return(
        <TagsContainer>
            <p>Busque por Tags:</p>
            <ItemTagsContainer>
                {tags.map(tag => <ItemTags key={tag.id}>{tag.titulo}</ItemTags>)}
            </ItemTagsContainer>
        </TagsContainer>
    );
};