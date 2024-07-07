import { NavegationItem } from "./navegationItem";
import * as c from "./styles"

export const SideBar = () => {
    return(
        <aside>
            <nav>
                <c.StyledList>
                   <NavegationItem active={true} activeIcon="/icons/home-ativo.png" inativeIcon="/icons/home-inativo.png" >
                        Início
                   </NavegationItem>
                   <NavegationItem active={false} activeIcon="/icons/mais-vistas-ativo.png" inativeIcon="/icons/mais-vistas-inativo.png" >
                        Mais Vistos
                   </NavegationItem>
                   <NavegationItem active={false} activeIcon="/icons/mais-curtidas-ativo.png" inativeIcon="/icons/mais-curtidas-inativo.png" >
                        Mais Curtidas
                   </NavegationItem>
                   <NavegationItem active={false} activeIcon="/icons/novas-ativo.png" inativeIcon="/icons/novas-inativo.png" >
                        Novas
                   </NavegationItem>
                   <NavegationItem active={false} activeIcon="/icons/surpreenda-me-ativo.png" inativeIcon="/icons/surpreenda-me-inativo.png" >
                        Surpreenda-me
                   </NavegationItem>
                </c.StyledList>    
            </nav> 
        </aside>
    );
};