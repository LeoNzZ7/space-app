import { Photos } from "../../../types/tags"
import { Figure } from "./styles"

interface Props {
    photo: Photos;
    selectedZoom?: () => void;
    zoom?: boolean;
    favorite: boolean | false;
    onFavoriteChange: () => void;
}

export const Image = ({photo, selectedZoom, zoom, favorite, onFavoriteChange}: Props) => {
    return(
        <Figure onClick={selectedZoom} zoom={zoom} >
            {zoom &&
                <figcaption>
                    <img src={`${photo.path}`}  />
                    <footer>
                    <h4>{photo.titulo}</h4>
                    <div>
                        <span>{photo.fonte}</span>
                        <div>
                            <img onClick={onFavoriteChange} src={favorite ? '/icons/favorite.png' : '/icons/favorite_outline.png'} />
                        </div>
                    </div>
                    </footer>
                </figcaption>
            } {!zoom &&
                <figcaption>
                    <img src={`${photo.path}`}  />
                    <footer>
                    <h4>{photo.titulo}</h4>
                    <div>
                        <span>{photo.fonte}</span>
                        <div>
                            <img onClick={onFavoriteChange} src={favorite ? '/icons/favorite.png' : '/icons/favorite_outline.png'} />
                            <img src="/icons/open_in_full.png" />
                        </div>
                    </div>
                    </footer>
                </figcaption>
            }
        </Figure>
    )
}