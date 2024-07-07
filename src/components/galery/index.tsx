import { Photos } from "../../types/tags";
import { Image } from "./image";
import { Popular } from "./popular";
import { FluidSection, GaleryContainer, Title } from "./styles";
import { Tags } from "./tags";

interface Props {
    photos: Photos[]
}

export const Galery = ({ photos }: Props) => {
    return(
       <>
            <Tags />
            <GaleryContainer>
                <div>
                <Title>Navegue pela galeria</Title>
                <FluidSection>
                    {photos.map(photo => 
                        <Image key={photo.id} photo={photo} />
                    )}
                </FluidSection>
                </div>
                <Popular />
            </GaleryContainer>
        </>
    );
};