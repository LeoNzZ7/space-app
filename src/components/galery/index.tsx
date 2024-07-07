import { Photos } from "../../types/tags";
import { Image } from "./image";
import { Popular } from "./popular";
import { FluidSection, GaleryContainer, Title } from "./styles";
import { Tags } from "./tags";

interface Props {
    photos: Photos[]
    onSelectedPhotos: (photos: Photos) => void;
    favorite: boolean | false;
    onFavoriteChange: (favorite: boolean) => void;
}

export const Galery = ({ photos, onSelectedPhotos, favorite, onFavoriteChange }: Props) => {
    return(
       <>
            <Tags />
            <GaleryContainer>
                <div>
                <Title>Navegue pela galeria</Title>
                <FluidSection>
                    {photos.map(photo => 
                        <Image 
                        key={photo.id}
                        photo={photo}
                        favorite={favorite}
                        onFavoriteChange={() => onFavoriteChange(!favorite)}
                        selectedZoom={() => onSelectedPhotos(photo)}
                        />
                    )}
                </FluidSection>
                </div>
                <Popular />
            </GaleryContainer>
        </>
    );
};