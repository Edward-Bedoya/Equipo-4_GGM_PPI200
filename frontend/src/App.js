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
export default function App() {
  return (
    <Router>
      <Switch>
        <Container>
        <Route path="/">
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
        </Container>
         
          
        </Switch>
    </Router>
    
  );
}

