import { Photos } from "../../../types/tags"
import { Figure } from "./styles"

interface Props {
    photo: Photos
}

export const Image = ({photo}: Props) => {
    return(
        <Figure>
            <img src={`${photo.path}`}  />
            <figcaption>
            </figcaption>
            <footer>
                <h4>{photo.titulo}</h4>
                <div>
                    <span>{photo.fonte}</span>
                    <div>
                        <img src="/icons/favorite_outline.png" />
                        <img src="/icons/open_in_full.png" />
                    </div>
                </div>
            </footer>
        </Figure>
    )
}