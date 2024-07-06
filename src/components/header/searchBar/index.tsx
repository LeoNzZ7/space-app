import { useState } from "react"
import { Input, Button, Form } from "./styles"

export const SearchBar = () => {
    const [borderHoverButton, setBorderHoverButton] = useState(false);

    return(
        <Form     
        onMouseOver={() => setBorderHoverButton(true)} 
        onMouseLeave={() => setBorderHoverButton(false)}
        >
            <Input type="search" 
            placeholder="O que você procura?" 
            borderActive={borderHoverButton} 
            />
            <Button
            borderActive={borderHoverButton} 
            type="submit">
                <img src="./images/search.png" />
            </Button>
        </Form>
    )
}