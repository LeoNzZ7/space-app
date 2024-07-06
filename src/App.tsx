import { GlobalStyles } from "./components/globalStyles";
import { Header } from "./components/header";
import * as c from "./styles";

const App = () => {
  return(
    <c.fundoGradinte>
      <GlobalStyles />
      <Header />
    </c.fundoGradinte>
  )
}

export default App