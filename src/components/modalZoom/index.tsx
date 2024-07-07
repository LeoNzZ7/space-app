import { FormEvent, useState } from "react";
import { Photos } from "../../types/tags"
import { Image } from "../galery/image"
import { Overlay, StyledDialog } from "./styles"

interface Props {
    photo?: Photos
    favorite: boolean | false;
    onFavoriteChange: (favorite: boolean) => void;
}

export const ModalZoom = ({ photo, favorite, onFavoriteChange }: Props) => {
    const [zoom, setZoom] = useState(true)

    const preventReload = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        return setZoom(false)
    }

    return(
        <>
            {photo &&
                <>
                    <Overlay />
                    <StyledDialog open={!!photo} >
                        <Image favorite={favorite} onFavoriteChange={() => onFavoriteChange(!favorite)} zoom={zoom} photo={photo} />
                        <form onSubmit={preventReload} >
                            <button>X</button>
                        </form>
                    </StyledDialog>
                </>
            }
        </>
    )
}