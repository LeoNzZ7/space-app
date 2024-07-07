import { Galery } from "./components/galery";
import { GlobalStyles } from "./components/globalStyles";
import { Header } from "./components/header";
import { SideBar } from "./components/sideBar";
import * as c from "./styles";

import images from "./photos.json";
import { useState } from "react";
import { Photos } from "./types/tags";

const App = () => {
  const [photos, setPhotos] = useState<Photos[] | [] >(images)

  console.log(photos)

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
            <Galery photos={photos} />
          </c.GalleryContent>
        </c.MainContainer>
      </c.AppContainer>
    </c.fundoGradinte>
  )
}

export default App