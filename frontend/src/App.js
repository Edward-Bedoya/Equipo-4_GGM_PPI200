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
import Salud2 from './Sections/Salud2';
import Salud from './Sections/Salud';

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
          <Route path="/salud2">
            <Salud2 />
          </Route>
          <Route path="/salud">
            <Salud />
          </Route>
          
        </Container>
         
          
        </Switch>
    </Router>
    
  );
}

