import { GlobalStyles } from "./components/globalStyles";
import { Header } from "./components/header";
import { SideBar } from "./components/sideBar";
import * as c from "./styles";

const App = () => {
  return(
    <c.fundoGradinte>
      <GlobalStyles />
      <Header />
      <SideBar />
    </c.fundoGradinte>
  )
}

export default App