import { ReactNode } from "react"
import { StyledListItem } from "./styles"

export const NavegationItem = (props: {children: ReactNode, activeIcon: string, inativeIcon: string, active: boolean}) => {
    return(
        <StyledListItem active={props.active} > 
            <img src={props.active ? props.activeIcon : props.inativeIcon} alt="" /> 
            {props.children}
        </StyledListItem>
    );
}