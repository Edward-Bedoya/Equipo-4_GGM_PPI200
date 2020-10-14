import React, { Component } from 'react';
import './estilos.css';
import logo from "./img/logo.png"
class Perfil extends Component {
  render() {
    return(
      <div className="padre">
             <div class="p-3 mb-2 bg-dark text-white">Perfil</div>
        <form className="formulario">
        <div>
            
        <img src={logo} alt="LogoImg" class="rounded-circle"></img>
        <div class="dropdown-divider">,</div>
        </div>
        <div class="p-3 mb-2 bg-dark text-white">DAVID CORDOBA</div>   
        <button type="button" class="btn btn-primary">Ajustes</button>
        <div class="dropdown-divider">,</div>
          <span class="border border-dark">Davidcorarb@gmail.com</span>
          <div class="dropdown-divider">,</div>
          <p>Recuerda que puedes hacer parte del cambio ama a tu mascota.</p>
          <div class="p-3 mb-2 bg-dark text-white">Opciones</div>
          <button type="button" class="btn btn-outline-danger">Borrar Cuenta</button>
          <div class="dropdown-divider">,</div>
          <button type="button" class="btn btn-dark">Historial De Compras</button>
          <div className="elboton">
          <div class="dropdown">
          <div class="dropdown-divider">,</div>
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Mas Opciones.
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Vincular Otra Cuenta</a>
    <a class="dropdown-item" href="#">Guardados</a>
  </div>
</div>
          
          </div>
          <p><a href="#">AlegresPatitas.com</a></p>
        </form>
      </div>
    );
  }
}
export default Perfil;