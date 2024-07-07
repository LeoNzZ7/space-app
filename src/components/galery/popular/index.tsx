import { Title } from "../styles"
import { PopularContainer } from "./styles"

export const Popular = () => {
    return(
        <PopularContainer>
            <Title aling="center" >
                Populares
            </Title>
            <img src="/images/popular/Foto1.png" />
            <img src="/images/popular/Foto2.png" />
            <img src="/images/popular/Foto3.png" />
            <img src="/images/popular/Foto4.png" />
            <img src="/images/popular/Foto5.png" />
            <button>
                Ver mais
            </button>
        </PopularContainer>
    )
}