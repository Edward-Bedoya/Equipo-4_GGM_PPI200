import React from 'react';
import Menu from "./Sections/Menu";
import Inicias from './Sections/Iniciarsesion';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contenido from './Sections/Contenido';
import Container from './Sections/Container';
import Productos from "./Sections/Productos";
import Ofertas from "./Sections/Ofertas";
import Pagos from './Sections/Pagos';
import Nosotros from './Sections/Nosotros';
import Noticias from './Sections/Noticias';
export default function App() {
  return (
    <Router>
      <Switch>
        <Container>
        <Route exact path="/">
            <Contenido />
          </Route>
          <Route path="/productos">
            <Productos />
          </Route>
          <Route path="/ofertas">
            <Ofertas />
          </Route>
          <Route path="/pagos">
            <Pagos />
          </Route>
           <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/noticias">
            <Noticias />
          </Route>
          
        </Container>
         
          
        </Switch>
    </Router>
    
  );
}

