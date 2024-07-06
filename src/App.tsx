import { GlobalStyles } from "./components/globalStyles";
import { Header } from "./components/header";
import { SideBar } from "./components/sideBar";
import * as c from "./styles";

const App = () => {
  return(
    <c.fundoGradinte>
      <GlobalStyles />
      <Header />
      <c.AssideAndBanner>
        <SideBar />
        <c.Banner>
          <span>
            A galeria mais completa de fotos do espaço!
          </span>
        </c.Banner>
      </c.AssideAndBanner>
    </c.fundoGradinte>
  )
}

export default App