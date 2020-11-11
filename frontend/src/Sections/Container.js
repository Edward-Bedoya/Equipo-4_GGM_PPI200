import React from "react"
import Menu from "./Menu"
import Piedepagina from "./Piedepagina";
const Container = (props) => (
<>
<Menu/>
{props.children}
<Piedepagina/>
</>

    )
    
    export default Container;