import { Galery } from "./components/galery";
import { GlobalStyles } from "./components/globalStyles";
import { Header } from "./components/header";
import { SideBar } from "./components/sideBar";
import * as c from "./styles";
import images from "./photos.json";
import { useState } from "react";
import { Photos } from "./types/tags";
import { ModalZoom } from "./components/modalZoom";

const App = () => {
  const [photos, setPhotos] = useState<Photos[] | [] >(images)
  const [selectedPhoto, setSelectedPhoto] = useState<Photos>()
  const [favorite, setFavorite] = useState(false)

  console.log(favorite)

  return(
    <c.fundoGradinte>
      <GlobalStyles />
      <c.AppContainer>
        <Header />
        <c.MainContainer>
          <SideBar />
          <c.GalleryContent>
            <c.Banner>
              <span>
                A galeria mais completa de fotos do espaço!
              </span>
            </c.Banner>
            <Galery 
            onFavoriteChange={() => setFavorite(!favorite)}
            favorite={favorite}
            onSelectedPhotos={photos => setSelectedPhoto(photos)}
            photos={photos} />
          </c.GalleryContent>
        </c.MainContainer>
      </c.AppContainer>
      <ModalZoom 
      favorite={favorite}
      onFavoriteChange={setFavorite}
      photo={selectedPhoto}/>
    </c.fundoGradinte>
  )
}

export default App