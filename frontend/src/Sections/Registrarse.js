import React, { Component } from 'react';
import './estilos.css';
import logo from "./img/logo.png"
class Registrarse extends Component {
  render() {
    return(
      <div className="padre">
        <form className="formulario">
        <div>
          
        <img src={logo} className="logoImg"/>
        </div>
        <div class="p-3 mb-2 bg-dark text-white">Registrate Ahora</div>
          <input type="text" placeholder="Nombre" className="infoInput" />
          <input type="text" placeholder="Apellidos" className="infoInput" />
          <input type="text" placeholder="Usuario" className="infoInput" />
          <input type="text" placeholder="Contraseña" className="infoInput" />
          <input type="text" placeholder="Verificar Contraseña" className="infoInput" />
          <input type="text" placeholder="Correo Electronico" className="infoInput" />
          <input type="text" placeholder=" Verificar Correo Electronico" className="infoInput" />
          <div className="elboton">
          <div class="d-flex">
          <div class="dropdown mr-1">
    <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
      Ciudad
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
    <input type="text" placeholder="Digite El Nombre De Su Ciudad" className="infoInput" />
    </div>
   </div>
  <div class="dropdown mr-1">
    <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
      Edad
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
    <input type="text" placeholder="Digite Su Edad" className="infoInput" />
    </div>
   </div>

   <div class="btn-group">
    <button type="button" class="btn btn-secondary">Sexo</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
      <span class="sr-only"></span>
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuReference">
      <a class="dropdown-item" href="#">Saltar</a>
      <a class="dropdown-item" href="#">Otro</a>
      <a class="dropdown-item" href="#">Mujer</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Hombre</a>
    </div>
    <div class="dropdown-divider">,</div>
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Numero De Celular
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Saltar</a>
    <input type="text" placeholder="Digitar Numero" className="infoInput" />
  </div>
</div>
    </div>
    </div>
          </div>
          <div class="dropdown-divider">,</div>
          <button type="button" class="btn btn-outline-dark">Entrar</button> 
          <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
</div>

          <p> O </p>
          <p> 
            
          <a href="#">Iniciar sin registrarte </a></p>    
        </form>
        
      </div>
    );
  }
}
export default Registrarse ;