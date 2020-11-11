import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./estilos.css";
import imagenes from "./img/mapeadoImagenes";

class Contenido extends Component {
  render() {
    return(
      <>
      <h4>Contenido</h4>
      <div className="parrafos">
      <button type="button" class="btn btn-outline-success"><Link to="nosotros">Acerca De Nosotros</Link></button>
      <div class="dropdown-divider"></div>
        <div className="imagenesContenedor">
          {imagenes.map((item, i) => {
            return(
              <div className="formaimagenes">
                <img src={item.foto} className="albumImagenes"/>
              </div>
            );
          })}
        </div>
      </div>
      </>
    );
  }
}

export default Contenido;
